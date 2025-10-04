import React, { useState, useEffect, useRef } from 'react'
import { round } from '../utils/formatters'
import { rgb2cmyk, cmykToRgb, getHexAlpha } from '../utils/converters'
import { usePicker } from '../context'
import tc from 'tinycolor2'

import { InputNumberSelect } from './input/input-number-select';

const HexInput = ({
  opacity,
  tinyColor,
  showHexAlpha,
  handleChange,
}: {
  tinyColor: any
  opacity: number
  showHexAlpha: boolean
  handleChange: (arg0: string) => void
}) => {
  const [disable, setDisable] = useState('')
  const hex = tinyColor.toHex()
  const [newHex, setNewHex] = useState(hex)
  const dragStartValue = useRef(0)
  const dragStartX = useRef(0)

  useEffect(() => {
    if (disable !== 'hex') {
      setNewHex(hex)
    }
  }, [tinyColor, disable, hex])

  const hexFocus = () => {
    setDisable('hex')
  }

  const hexBlur = () => {
    setDisable('')
  }

  const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setNewHex(val)
    if (tc(val).isValid()) {
      const { r, g, b } = tc(val).toRgb()
      const newColor = `rgba(${r}, ${g}, ${b}, ${opacity})`
      handleChange(newColor)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    dragStartValue.current = parseInt(tinyColor.toHex(), 16)
    dragStartX.current = e.clientX
    setDisable('hex')
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseUp = () => {
    setDisable('')
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    const movementX = e.clientX - dragStartX.current
    const step = 55000
    let newColorInt = Math.round(dragStartValue.current + movementX * step)
    newColorInt = Math.max(0, Math.min(0xffffff, newColorInt))

    const newColorHex = newColorInt.toString(16).padStart(6, '0')
    setNewHex(newColorHex)

    const { r, g, b } = tc(newColorHex).toRgb()
    handleChange(`rgba(${r}, ${g}, ${b}, ${opacity})`)
  }

  const displayValue = showHexAlpha ? `${newHex}${getHexAlpha(opacity)}` : newHex

  const wrapperStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '6px',
    border: '1px solid #333',
    backgroundColor: '#1a1a1a',
    height: 28,
    width: '108px',
  }

  const handleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 28,
    cursor: 'ew-resize',
    color: '#888',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    userSelect: 'none',
    fontSize: '16px',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'left',
    paddingLeft: 8,
    border: 'none',
    borderRadius: 0,
    height: '100%',
    backgroundColor: 'transparent',
    color: '#D4D4D4',
    outline: 'none',
    fontSize: '14px',
  }

  return (
    <div style={wrapperStyle}>
      <div onMouseDown={handleMouseDown} style={handleStyle}>
        #
      </div>
      <input
        onBlur={hexBlur}
        onFocus={hexFocus}
        onChange={handleHexInput}
        value={displayValue?.toUpperCase()}
        style={inputStyle}
      />
    </div>
  )
}

const RGBInputs = ({
  hc,
  handleChange,
}: {
  hc: any
  handleChange: (arg0: string) => void
}) => {
  const handleRgb = ({ r, g, b }: { r: number; g: number; b: number }) => {
    handleChange(`rgba(${r}, ${g}, ${b}, ${hc?.a})`)
  }

  const createHandler =
    (channel: 'r' | 'g' | 'b') => (newValue: string | number) => {
      const numValue = Number(newValue) || 0
      const newColor = { r: hc?.r, g: hc?.g, b: hc?.b }
      newColor[channel] = numValue
      handleRgb(newColor as { r: number; g: number; b: number })
    }

  return (
    <div className='inline-flex gap-1'>
      <InputNumberSelect
        icon="R"
        max={255}
        min={0}
        step={1}
        precision={0}
        value={hc?.r}
        onChange={createHandler('r')}
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="G"
        max={255}
        min={0}
        step={1}
        precision={0}
        value={hc?.g}
        onChange={createHandler('g')}
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="B"
        max={255}
        min={0}
        step={1}
        precision={0}
        value={hc?.b}
        onChange={createHandler('b')}
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
    </div>
  )
}

const HSLInputs = ({
  hc,
  setHc,
  tinyColor,
  handleChange,
}: {
  hc: any
  tinyColor: any
  setHc: (arg0: any) => void
  handleChange: (arg0: string) => void
}) => {
  const { s, l } = tinyColor.toHsl()

  const handleH = (h: number) => {
    const { r, g, b } = tc({ h: h, s: s, l: l }).toRgb()
    handleChange(`rgba(${r}, ${g}, ${b}, ${hc?.a})`)
    setHc({ ...hc, h })
  }

  const handleSl = (value: { s: number; l: number }) => {
    const { r, g, b } = tc({ h: hc?.h, ...value }).toRgb()
    handleChange(`rgba(${r}, ${g}, ${b}, ${hc?.a})`)
  }

  return (
    <div className='inline-flex gap-1'>
      <InputNumberSelect
        icon="H"
        max={360}
        min={0}
        step={1}
        precision={0}
        value={round(hc?.h)}
        onChange={(newVal) => handleH(Number(newVal) || 0)}
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="S"
        max={100}
        min={0}
        step={1}
        precision={0}
        value={round(s * 100)}
        onChange={(newVal) =>
          handleSl({ s: (Number(newVal) || 0) / 100, l: l })
        }
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="L"
        max={100}
        min={0}
        step={1}
        precision={0}
        value={round(l * 100)}
        onChange={(newVal) =>
          handleSl({ s: s, l: (Number(newVal) || 0) / 100 })
        }
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
    </div>
  )
}

const HSVInputs = ({
  hc,
  setHc,
  handleChange,
}: {
  hc: any
  setHc: (arg0: any) => void
  handleChange: (arg0: string) => void
}) => {
  const handleH = (h: number) => {
    const { r, g, b } = tc({ h: h, s: hc?.s, v: hc?.v }).toRgb()
    handleChange(`rgba(${r}, ${g}, ${b}, ${hc?.a})`)
    setHc({ ...hc, h })
  }

  const handleSV = (value: { s: number; v: number }) => {
    const { r, g, b } = tc({ h: hc?.h, ...value }).toRgb()
    handleChange(`rgba(${r}, ${g}, ${b}, ${hc?.a})`)
  }

  return (
    <div className='inline-flex gap-1'>
      <InputNumberSelect
        icon="H"
        max={360}
        min={0}
        step={1}
        precision={0}
        value={round(hc?.h)}
        onChange={(newVal) => handleH(Number(newVal) || 0)}
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="S"
        max={100}
        min={0}
        step={1}
        precision={0}
        value={round(hc?.s * 100)}
        onChange={(newVal) =>
          handleSV({ s: (Number(newVal) || 0) / 100, v: hc?.v })
        }
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="V"
        max={100}
        min={0}
        step={1}
        precision={0}
        value={round(hc?.v * 100)}
        onChange={(newVal) =>
          handleSV({ s: hc?.s, v: (Number(newVal) || 0) / 100 })
        }
        className='flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
    </div>
  )
}

const CMKYInputs = ({
  hc,
  handleChange,
}: {
  hc: any
  handleChange: (arg0: string) => void
}) => {
  const { c, m, y, k } = rgb2cmyk(hc?.r, hc?.g, hc?.b)

  const handleCmyk = (value: any) => {
    const { r, g, b } = cmykToRgb(value)
    handleChange(`rgba(${r}, ${g}, ${b}, ${hc?.a})`)
  }

  const createHandler =
    (channel: 'c' | 'm' | 'y' | 'k') => (newValue: string | number) => {
      const numValue = (Number(newValue) || 0) / 100
      const newColor = { c, m, y, k }
      newColor[channel] = numValue
      handleCmyk(newColor)
    }

  return (
    <div className='inline-flex gap-1'>
      <InputNumberSelect
        icon="C"
        max={100}
        min={0}
        step={1}
        precision={0}
        value={round(c * 100)}
        onChange={createHandler('c')}
        className='flex-basis-1/4 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="M"
        max={100}
        min={0}
        step={1}
        precision={0}
        value={round(m * 100)}
        onChange={createHandler('m')}
        className='flex-basis-1/4 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="Y"
        max={100}
        min={0}
        step={1}
        precision={0}
        value={round(y * 100)}
        onChange={createHandler('y')}
        className='flex-basis-1/4 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
      <InputNumberSelect
        icon="K"
        max={100}
        min={0}
        step={1}
        precision={0}
        value={round(k * 100)}
        onChange={createHandler('k')}
        className='flex-basis-1/4 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
        classNameInput='text-xs px-0 text-[#D4D4D4]'
      />
    </div>
  )
}

const Inputs = () => {
  const {
    hc,
    setHc,
    inputType,
    tinyColor,
    hideOpacity,
    showHexAlpha,
    handleChange,
    defaultStyles,
    pickerIdSuffix,
  } = usePicker()

  return (
    <div
      className='flex flex-col gap-1 mt-3'
      id={`rbgcp-inputs-wrap${pickerIdSuffix}`}
    >
      <div className='flex gap-1'>
        <HexInput
          opacity={hc?.a}
          tinyColor={tinyColor}
          showHexAlpha={showHexAlpha}
          handleChange={handleChange}
        />
        <InputNumberSelect
          icon="A"
          max={100}
          min={0}
          step={1}
          precision={0}
          value={Math.round(hc?.a * 100)}
          onChange={(newVal: string | number) =>
            handleChange(
              `rgba(${hc?.r}, ${hc?.g}, ${hc?.b}, ${(Number(newVal) || 0) / 100
              })`
            )
          }
          className='text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]'
          classNameInput='text-xs px-0 text-[#D4D4D4] outline-none'
        />
      </div>

      {inputType === 'hsl' && (
        <HSLInputs
          hc={hc}
          setHc={setHc}
          tinyColor={tinyColor}
          handleChange={handleChange}
        />
      )}
      {inputType === 'rgb' && (
        <RGBInputs hc={hc} handleChange={handleChange} />
      )}
      {inputType === 'hsv' && (
        <HSVInputs hc={hc} setHc={setHc} handleChange={handleChange} />
      )}
      {inputType === 'cmyk' && (
        <CMKYInputs hc={hc} handleChange={handleChange} />
      )}
    </div>
  )
}

export default Inputs
