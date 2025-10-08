import { usePicker } from '../context'
import { type LocalesProps } from '../types'
import Controls from './Controls'
import Inputs from './Inputs'
import Presets from './Presets'
import ColorSpectrum from './color-spectrum'
import GradientBar from './gradient-bar'
import Hue from './hue'
import Opacity from './opacity'

const Picker = ({
	locales,
	presets,
	hideHue,
	hideInputs,
	hidePresets,
	hideOpacity,
	hideEyeDrop,
	hideControls,
	hideInputType,
	hideColorGuide,
	hidePickerSquare,
	hideGradientType,
	hideGradientStop,
	hideGradientAngle,
	hideColorTypeBtns,
	hideAdvancedSliders,
	hideGradientControls,
}: PickerProps) => {
	const { isGradient, pickerIdSuffix } = usePicker()

	return (
		<div
			style={{ userSelect: 'none' }}
			id={`rbgcp-color-picker${pickerIdSuffix}`}
		>
			{!hidePickerSquare && <ColorSpectrum />}
			{!hideControls && (
				<Controls
					locales={locales}
					hideEyeDrop={hideEyeDrop}
					hideInputType={hideInputType}
					hideColorGuide={hideColorGuide}
					hideGradientType={hideGradientType}
					hideGradientStop={hideGradientStop}
					hideColorTypeBtns={hideColorTypeBtns}
					hideGradientAngle={hideGradientAngle}
					hideAdvancedSliders={hideAdvancedSliders}
					hideGradientControls={hideGradientControls}
				/>
			)}
			{isGradient && <GradientBar />}
			{!hideHue && <Hue />}
			{!hideOpacity && <Opacity />}
			{!hideInputs && <Inputs />}
			{!hidePresets && <Presets presets={presets} />}
		</div>
	)
}

export default Picker

type PickerProps = {
	hideControls?: boolean
	hideInputs?: boolean
	hidePresets?: boolean
	hideOpacity?: boolean
	hideHue?: boolean
	presets?: string[]
	hideEyeDrop?: boolean
	hideAdvancedSliders?: boolean
	hideColorGuide?: boolean
	hideInputType?: boolean
	hideColorTypeBtns?: boolean
	hideGradientType?: boolean
	hideGradientAngle?: boolean
	hideGradientStop?: boolean
	hideGradientControls?: boolean
	locales?: LocalesProps
	hidePickerSquare?: boolean
}
