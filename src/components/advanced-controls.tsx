import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Styles, Config } from '../shared/types'
import { getHandleValue } from '../utils/utils'
import { usePicker } from '../context'
import {
  usePaintSat,
  usePaintLight,
  usePaintBright,
} from '../hooks/usePaintHue'
import tinycolor from 'tinycolor2'

const AdvBar = ({
  value,
  reffy,
  label,
  config,
  callback,
  squareWidth,
  openAdvanced,
  defaultStyles,
  pickerIdSuffix,
}: {
  reffy: React.RefObject<HTMLCanvasElement>
  value: number
  label: string
  config: Config
  squareWidth: number
  openAdvanced: boolean
  defaultStyles: Styles
  pickerIdSuffix: string
  callback: (arg0: number) => void
}) => {
  const { barSize } = config
  const [dragging, setDragging] = useState<boolean>(false)
  const barRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null!)
  const boundingBox = useRef<DOMRect | null>(null)
  const rafPending = useRef(false)
  const lastEvent = useRef<MouseEvent | null>(null)

  useEffect(() => {
    if (!dragging && handleRef.current) {
      const x = value * squareWidth
      const handleLeft = Math.max(0, Math.min(x - 9, squareWidth - 18))
      handleRef.current.style.transform = `translateX(${handleLeft}px)`
    }
  }, [value, dragging, squareWidth])

  const updateOnFrame = useCallback(() => {
    if (!lastEvent.current || !boundingBox.current || !handleRef.current) {
      rafPending.current = false
      return
    }

    let x = lastEvent.current.clientX - boundingBox.current.left
    x = Math.max(0, Math.min(x, boundingBox.current.width))
    const newValue = (x / boundingBox.current.width) * 100
    callback(newValue)

    const handleLeft = Math.max(0, Math.min(x - 9, squareWidth - 18))
    handleRef.current.style.transform = `translateX(${handleLeft}px)`

    rafPending.current = false
  }, [callback, squareWidth])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dragging) {
        lastEvent.current = e
        if (!rafPending.current) {
          rafPending.current = true
          window.requestAnimationFrame(() => {
            updateOnFrame()
          })
        }
      }
    }

    const onMouseUp = () => {
      setDragging(false)
      boundingBox.current = null
    }

    if (dragging) {
      document.body.style.cursor = 'ew-resize'
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [dragging, updateOnFrame])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (barRef.current) {
      boundingBox.current = barRef.current.getBoundingClientRect()
      setDragging(true)
      lastEvent.current = e.nativeEvent
      window.requestAnimationFrame(() => {
        updateOnFrame()
      })
    }
  }

  return (
    <div
      style={{ width: '100%', padding: '3px 0px 3px 0px' }}
      onMouseDown={handleMouseDown}
      ref={barRef}
    >
      <div
        style={{ cursor: 'ew-resize', position: 'relative' }}
        id={`rbgcp-advanced-bar-${label}-wrapper${pickerIdSuffix}`}
      >
        <div
          ref={handleRef}
          style={{
            ...defaultStyles.rbgcpHandle,
            position: 'absolute',
            top: -2,
            cursor: 'ew-resize',
          }}
          id={`rbgcp-advanced-bar-${label}-handle${pickerIdSuffix}`}
          role="button"
          tabIndex={0}
        />
        <div
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 12,
            fontWeight: 500,
            lineHeight: 1,
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            pointerEvents: 'none',
            textShadow: '1px 1px 1px rgba(0,0,0,.6)',
          }}
          id={`rbgcp-advanced-bar-${label}-label${pickerIdSuffix}`}
        >
          {label}
        </div>
        <canvas
          ref={reffy}
          height="14px"
          width={`${squareWidth}px`}
          style={{ position: 'relative', borderRadius: 14, verticalAlign: 'top' }}
          id={`rbgcp-advanced-bar-${label}-canvas${pickerIdSuffix}`}
        />
      </div>
    </div>
  )
}

const AdvancedControls = ({ openAdvanced }: { openAdvanced: boolean }) => {
  const { config, tinyColor, handleChange, squareWidth, hc, defaultStyles, pickerIdSuffix } = usePicker()
  const { s, l } = tinyColor.toHsl()

  const satRef = useRef<HTMLCanvasElement>(null!)
  const lightRef = useRef<HTMLCanvasElement>(null!)
  const brightRef = useRef<HTMLCanvasElement>(null!)
  usePaintSat(satRef, hc?.h, l * 100, squareWidth)
  usePaintLight(lightRef, hc?.h, s * 100, squareWidth)
  usePaintBright(brightRef, hc?.h, s * 100, squareWidth)

  const satDesat = (value: number) => {
    const { r, g, b } = tinycolor({ h: hc?.h, s: value / 100, l }).toRgb()
    handleChange(`rgba(${r},${g},${b},${hc?.a})`)
  }

  const setLight = (value: number) => {
    const { r, g, b } = tinycolor({ h: hc?.h, s, l: value / 100 }).toRgb()
    handleChange(`rgba(${r},${g},${b},${hc?.a})`)
  }

  const setBright = (value: number) => {
    const { r, g, b } = tinycolor({
      h: hc?.h,
      s: hc?.s * 100,
      v: value,
    }).toRgb()
    handleChange(`rgba(${r},${g},${b},${hc?.a})`)
  }

  return (
    <div
      style={{
        width: '100%',
        height: openAdvanced ? 98 : 0,
        transition: 'all 120ms linear',
      }}
      id={`rbgcp-advanced-controls-wrapper${pickerIdSuffix}`}
    >
      <div
        style={{
          paddingTop: 11,
          display: openAdvanced ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: openAdvanced ? 98 : 0,
          overflow: 'hidden',
          transition: 'height 100ms linear',
        }}
        id={`rbgcp-advanced-controls-inner${pickerIdSuffix}`}
      >
        <AdvBar
          value={s}
          reffy={satRef}
          config={config}
          label="Saturation"
          callback={satDesat}
          squareWidth={squareWidth}
          openAdvanced={openAdvanced}
          defaultStyles={defaultStyles}
          pickerIdSuffix={pickerIdSuffix}
        />
        <AdvBar
          value={l}
          config={config}
          reffy={lightRef}
          label="Lightness"
          callback={setLight}
          squareWidth={squareWidth}
          openAdvanced={openAdvanced}
          defaultStyles={defaultStyles}
          pickerIdSuffix={pickerIdSuffix}
        />
        <AdvBar
          value={hc?.v}
          config={config}
          reffy={brightRef}
          label="Brightness"
          callback={setBright}
          squareWidth={squareWidth}
          openAdvanced={openAdvanced}
          defaultStyles={defaultStyles}
          pickerIdSuffix={pickerIdSuffix}
        />
      </div>
    </div>
  )
}

export default AdvancedControls
