import tc from 'tinycolor2'
import { InputHex } from '../../input-hex/input-hex'
import { InputNumberSelect } from '../../input-number-select'
import { usePicker } from '../context'
import { cmykToRgb, rgb2cmyk } from '../utils/converters'
import { round } from '../utils/formatters'

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
		<div className="inline-flex gap-1">
			<InputNumberSelect
				icon="R"
				max={255}
				min={0}
				step={1}
				precision={0}
				value={hc?.r}
				onChange={createHandler('r')}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="G"
				max={255}
				min={0}
				step={1}
				precision={0}
				value={hc?.g}
				onChange={createHandler('g')}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="B"
				max={255}
				min={0}
				step={1}
				precision={0}
				value={hc?.b}
				onChange={createHandler('b')}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
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
		<div className="inline-flex gap-1">
			<InputNumberSelect
				icon="H"
				max={360}
				min={0}
				step={1}
				precision={0}
				value={round(hc?.h)}
				onChange={newVal => handleH(Number(newVal) || 0)}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="S"
				max={100}
				min={0}
				step={1}
				precision={0}
				value={round(s * 100)}
				onChange={newVal => handleSl({ s: (Number(newVal) || 0) / 100, l: l })}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="L"
				max={100}
				min={0}
				step={1}
				precision={0}
				value={round(l * 100)}
				onChange={newVal => handleSl({ s: s, l: (Number(newVal) || 0) / 100 })}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
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
		<div className="inline-flex gap-1">
			<InputNumberSelect
				icon="H"
				max={360}
				min={0}
				step={1}
				precision={0}
				value={round(hc?.h)}
				onChange={newVal => handleH(Number(newVal) || 0)}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="S"
				max={100}
				min={0}
				step={1}
				precision={0}
				value={round(hc?.s * 100)}
				onChange={newVal =>
					handleSV({ s: (Number(newVal) || 0) / 100, v: hc?.v })
				}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="V"
				max={100}
				min={0}
				step={1}
				precision={0}
				value={round(hc?.v * 100)}
				onChange={newVal =>
					handleSV({ s: hc?.s, v: (Number(newVal) || 0) / 100 })
				}
				className="flex-basis-1/3 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
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
		<div className="inline-flex gap-1">
			<InputNumberSelect
				icon="C"
				max={100}
				min={0}
				step={1}
				precision={0}
				value={round(c * 100)}
				onChange={createHandler('c')}
				className="flex-basis-1/4 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="M"
				max={100}
				min={0}
				step={1}
				precision={0}
				value={round(m * 100)}
				onChange={createHandler('m')}
				className="flex-basis-1/4 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="Y"
				max={100}
				min={0}
				step={1}
				precision={0}
				value={round(y * 100)}
				onChange={createHandler('y')}
				className="flex-basis-1/4 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
			/>
			<InputNumberSelect
				icon="K"
				max={100}
				min={0}
				step={1}
				precision={0}
				value={round(k * 100)}
				onChange={createHandler('k')}
				className="flex-basis-1/4 text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
				classNameInput="text-xs px-0 text-[#D4D4D4]"
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
		hideOpacity: _hideOpacity,
		showHexAlpha: _showHexAlpha,
		handleChange,
		defaultStyles: _defaultStyles,
		pickerIdSuffix,
	} = usePicker()

	return (
		<div
			className={`${_defaultStyles} ${_hideOpacity ? 'opacity-50' : ''}`}
			id={`rbgcp-inputs-wrap${pickerIdSuffix}`}
		>
			<div className="flex gap-1 my-4">
				<InputHex
					hexColor={tinyColor.toHexString()}
					handleChange={handleChange}
					className="text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
					classNameInput="text-center text-xs px-0 text-[#D4D4D4] outline-none"
				/>
				<InputNumberSelect
					icon="A"
					max={100}
					min={0}
					step={1}
					value={Math.round(hc?.a * 100)}
					onChange={(newVal: string | number) =>
						handleChange(
							`rgba(${hc?.r}, ${hc?.g}, ${hc?.b}, ${
								(Number(newVal) || 0) / 100
							})`
						)
					}
					className="text-[#888] h-7 bg-[#1A1A1A] border border-[#333333] text-xs dark:bg-[#1A1A1A]"
					classNameInput="text-xs px-0 text-[#D4D4D4] outline-none"
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
			{inputType === 'rgb' && <RGBInputs hc={hc} handleChange={handleChange} />}
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
