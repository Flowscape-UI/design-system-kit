import type { Meta, StoryObj } from '@storybook/react'
import { CircleAlertIcon } from 'lucide-react'
import React, { useState } from 'react'
import { InputNumberSelect } from '../input-number-select'
import {
	AngleInput,
	BlurInput,
	BorderRadiusInput,
	BorderRadiusMultiInput,
	FontSizeInput,
	HeightInput,
	LetterSpacingInput,
	LineHeightInput,
	OpacityInput,
	ScaleInput,
	SpacingInput,
	WidthInput,
	ZIndexInput,
} from '../inputs'

const meta = {
	title: 'Components/Inputs',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta

export default meta

// OpacityInput Stories
export const Opacity: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(50)
		const [inputDarkValue, setInputDarkValue] = useState(50)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Opacity Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<OpacityInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Прозрачность: {inputLightValue}%
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<OpacityInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Прозрачность: {inputDarkValue}%
						</p>
					</div>
				</div>
			</div>
		)
	},
}

export const OpacityVertical: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(75)
		const [inputDarkValue, setInputDarkValue] = useState(75)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Вертикальный Opacity</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<OpacityInput
								value={inputLightValue}
								onChange={val => setInputLightValue(val)}
								orientation="vertical"
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Значение: {inputLightValue}%
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<OpacityInput
								value={inputDarkValue}
								onChange={val => setInputDarkValue(val)}
								orientation="vertical"
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Значение: {inputDarkValue}%
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// AngleInput Stories
export const Angle: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(45)
		const [inputDarkValue, setInputDarkValue] = useState(45)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Angle Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<AngleInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Угол: {inputLightValue}°
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<AngleInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Угол: {inputDarkValue}°
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// BorderRadiusInput Stories
export const BorderRadius: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(8)
		const [inputDarkValue, setInputDarkValue] = useState(8)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Border Radius Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<BorderRadiusInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Радиус: {inputLightValue}px
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<BorderRadiusInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								unit="rem"
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Радиус: {inputDarkValue}rem
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// BorderRadiusMultiInput Stories
export const BorderRadiusMulti: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState<
			[number, number, number, number]
		>([8, 16, 8, 16])
		const [inputDarkValue, setInputDarkValue] = useState<
			[number, number, number, number]
		>([8, 16, 8, 16])
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">
					Border Radius Multi Input
				</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<BorderRadiusMultiInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Углы: {inputLightValue.join(', ')}px
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<BorderRadiusMultiInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Углы: {inputDarkValue.join(', ')}px
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// WidthInput Stories
export const Width: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(200)
		const [inputDarkValue, setInputDarkValue] = useState(200)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Width Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<WidthInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Ширина: {inputLightValue}px
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<WidthInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								unit="%"
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Ширина: {inputDarkValue}%
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// HeightInput Stories
export const Height: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(150)
		const [inputDarkValue, setInputDarkValue] = useState(150)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Height Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<HeightInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Высота: {inputLightValue}px
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<HeightInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Высота: {inputDarkValue}px
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// SpacingInput Stories
export const Spacing: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(16)
		const [inputDarkValue, setInputDarkValue] = useState(16)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Spacing Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<SpacingInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Отступ: {inputLightValue}px
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<SpacingInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								unit="rem"
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Отступ: {inputDarkValue}rem
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// FontSizeInput Stories
export const FontSize: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(16)
		const [inputDarkValue, setInputDarkValue] = useState(16)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Font Size Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<FontSizeInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Размер шрифта: {inputLightValue}px
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<FontSizeInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								unit="rem"
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Размер шрифта: {inputDarkValue}rem
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// LineHeightInput Stories
export const LineHeight: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(1.5)
		const [inputDarkValue, setInputDarkValue] = useState(1.5)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Line Height Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<LineHeightInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Межстрочный интервал: {inputLightValue}
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<LineHeightInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Межстрочный интервал: {inputDarkValue}
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// LetterSpacingInput Stories
export const LetterSpacing: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(0)
		const [inputDarkValue, setInputDarkValue] = useState(0)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Letter Spacing Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<LetterSpacingInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Межбуквенный интервал: {inputLightValue}px
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<LetterSpacingInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								unit="em"
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Межбуквенный интервал: {inputDarkValue}em
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// ZIndexInput Stories
export const ZIndex: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(10)
		const [inputDarkValue, setInputDarkValue] = useState(10)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Z-Index Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<ZIndexInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Z-Index: {inputLightValue}
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<ZIndexInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Z-Index: {inputDarkValue}
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// ScaleInput Stories
export const Scale: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(1)
		const [inputDarkValue, setInputDarkValue] = useState(1)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Scale Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<ScaleInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Масштаб: {inputLightValue}
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<ScaleInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Масштаб: {inputDarkValue}
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// BlurInput Stories
export const Blur: StoryObj = {
	render: () => {
		const [inputLightValue, setInputLightValue] = useState(5)
		const [inputDarkValue, setInputDarkValue] = useState(5)
		return (
			<div>
				<h3 className="text-lg font-semibold mb-2">Blur Input</h3>
				<div className="space-x-4 flex">
					<div>
						<div className="flex gap-4">
							<BlurInput
								value={inputLightValue}
								onChange={setInputLightValue}
								theme="light"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Размытие: {inputLightValue}px
						</p>
					</div>
					<div>
						<div className="flex gap-4">
							<BlurInput
								value={inputDarkValue}
								onChange={setInputDarkValue}
								theme="dark"
							/>
						</div>
						<p className="mt-2 text-sm text-gray-600">
							Размытие: {inputDarkValue}px
						</p>
					</div>
				</div>
			</div>
		)
	},
}

// InputNumberSelect Stories
export const InputNumberSelectBasic: StoryObj = {
	render: () => {
		const [value, setValue] = useState(50)
		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">
					Input Number Select - Basic
				</h3>
				<InputNumberSelect
					value={value}
					onChange={v => setValue(typeof v === 'string' ? 0 : v)}
					step={1}
					precision={0}
					orientation="horizontal"
					progression="linear"
				/>
				<div className="mt-5 p-3 bg-white rounded-lg">
					<p className="font-medium">Текущее значение: {value}</p>
				</div>
			</div>
		)
	},
}

export const InputNumberSelectWithIcon: StoryObj = {
	render: () => {
		const [value, setValue] = useState(75)
		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">
					Input Number Select - С иконкой
				</h3>
				<InputNumberSelect
					className="w-full"
					value={value}
					onChange={v => setValue(typeof v === 'string' ? 0 : v)}
					step={5}
					precision={0}
					orientation="horizontal"
					progression="linear"
					icon={<CircleAlertIcon size={20} />}
				/>
				<div className="mt-5 p-3 bg-white rounded-lg">
					<p className="font-medium">Текущее значение: {value}</p>
				</div>
			</div>
		)
	},
}

export const InputNumberSelectProgression: StoryObj = {
	render: () => {
		const [linearValue, setLinearValue] = useState(50)
		const [exponentialValue, setExponentialValue] = useState(1)
		const [logarithmicValue, setLogarithmicValue] = useState(10)

		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">
					Input Number Select - Типы прогрессии
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					<div className="p-4 bg-white rounded-lg">
						<h4 className="font-medium mb-2">Linear</h4>
						<InputNumberSelect
							value={linearValue}
							onChange={v => setLinearValue(typeof v === 'string' ? 0 : v)}
							step={1}
							precision={0}
							orientation="horizontal"
							progression="linear"
						/>
						<p className="font-medium mt-2">Значение: {linearValue}</p>
					</div>

					<div className="p-4 bg-white rounded-lg">
						<h4 className="font-medium mb-2">Exponential</h4>
						<InputNumberSelect
							value={exponentialValue}
							onChange={v => setExponentialValue(typeof v === 'string' ? 0 : v)}
							step={0.1}
							precision={2}
							orientation="horizontal"
							progression="exponential"
						/>
						<p className="font-medium mt-2">Значение: {exponentialValue}</p>
					</div>

					<div className="p-4 bg-white rounded-lg">
						<h4 className="font-medium mb-2">Logarithmic</h4>
						<InputNumberSelect
							value={logarithmicValue}
							onChange={v => setLogarithmicValue(typeof v === 'string' ? 0 : v)}
							step={1}
							precision={1}
							orientation="horizontal"
							progression="logarithmic"
						/>
						<p className="font-medium mt-2">Значение: {logarithmicValue}</p>
					</div>
				</div>
			</div>
		)
	},
}
