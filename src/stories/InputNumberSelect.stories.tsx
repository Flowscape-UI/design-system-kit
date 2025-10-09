import type { Meta, StoryObj } from '@storybook/react'
import {
	AlignVerticalSpaceAround,
	ArrowLeftRight,
	ArrowUpDown,
	Blend,
	Droplets,
	Layers,
	Link,
	Maximize2,
	RotateCw,
	Space,
	SquareRoundCorner,
	Type,
	Unlink,
} from 'lucide-react'
import React, { useState } from 'react'
import { InputNumberSelect } from '../input-number-select'

const meta = {
	title: 'Components/InputNumberSelect',
	component: InputNumberSelect,
	parameters: {
		layout: 'centered',
		docs: {
			toc: {
				title: 'Table of Contents',
			},
		},
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#1a1a1a' },
			],
		},
	},
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: 'number',
			description: 'Current value',
		},
		min: {
			control: 'number',
			description: 'Minimum value',
		},
		max: {
			control: 'number',
			description: 'Maximum value',
		},
		step: {
			control: 'number',
			description: 'Step increment',
		},
		precision: {
			control: 'number',
			description: 'Number of decimal places',
		},
		progression: {
			control: 'select',
			options: [
				'linear',
				'arithmetic',
				'geometric',
				'paraboloid',
				'exponential',
			],
			description: 'Progression type when dragging',
		},
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'Component orientation',
		},
		unit: {
			control: 'select',
			options: ['px', '%', 'rem', 'em', 'deg', 'none'],
			description: 'Unit of measurement',
		},
		showUnit: {
			control: 'boolean',
			description: 'Show unit of measurement',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable component',
		},
		isDisabledMouseEvent: {
			control: 'boolean',
			description: 'Disable mouse dragging',
		},
	},
} satisfies Meta<typeof InputNumberSelect>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic component example. Use Controls to change parameters.
 * Switch background in toolbar to change theme (light/dark).
 */
export const Default: Story = {
	args: {
		value: 50,
	},
}

/**
 * ## Opacity
 * Component for controlling element opacity (0-100%).
 */
export const Opacity: Story = {
	args: {
		value: 75,
	},
	render: () => {
		const [opacity, setOpacity] = useState(75)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex items-center gap-4">
					<InputNumberSelect
						value={opacity}
						onChange={setOpacity}
						min={0}
						max={100}
						step={1}
						precision={0}
						icon={<Blend size={16} />}
					/>
				</div>
				<div
					className="w-32 h-32 bg-blue-500 rounded-lg"
					style={{ opacity: opacity / 100 }}
				/>
			</div>
		)
	},
}

/**
 * ## Angle
 * Component for controlling rotation angle (0-360°).
 */
export const Angle: Story = {
	args: {
		value: 45,
	},
	render: () => {
		const [angle, setAngle] = useState(45)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex items-center gap-4">
					<InputNumberSelect
						value={angle}
						onChange={setAngle}
						min={0}
						max={360}
						step={1}
						unit="deg"
						showUnit={true}
						precision={0}
						icon={<RotateCw size={16} />}
					/>
				</div>
				<div
					className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
					style={{ transform: `rotate(${angle}deg)` }}
				>
					{angle}°
				</div>
			</div>
		)
	},
}

/**
 * ## Border Radius
 * Component for controlling element border radius.
 */
export const BorderRadius: Story = {
	args: {
		value: 16,
	},
	render: () => {
		const [radius, setRadius] = useState(16)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex items-center gap-4">
					<InputNumberSelect
						value={radius}
						onChange={setRadius}
						min={0}
						max={100}
						step={1}
						precision={0}
						unit="px"
						showUnit={true}
						icon={<SquareRoundCorner size={16} />}
					/>
				</div>
				<div
					className="w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500"
					style={{ borderRadius: `${radius}px` }}
				/>
			</div>
		)
	},
}

/**
 * ## Border Radius Multi
 * Control radius of each corner separately with linking option.
 */
export const BorderRadiusMulti: Story = {
	args: {
		value: 0,
	},
	render: () => {
		const [borderRadius, setBorderRadius] = useState<
			[number, number, number, number]
		>([16, 16, 16, 16])
		const [isLinked, setIsLinked] = useState(true)

		const handleChange = (index: number) => (newValue: number) => {
			if (isNaN(newValue)) return

			if (isLinked) {
				setBorderRadius([newValue, newValue, newValue, newValue])
			} else {
				const newValues: [number, number, number, number] = [...borderRadius]
				newValues[index] = newValue
				setBorderRadius(newValues)
			}
		}

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="inline-flex flex-col gap-2">
					<div className="flex items-center justify-between gap-2">
						<div className="grid grid-cols-2 gap-2 flex-1">
							<InputNumberSelect
								value={borderRadius[0]}
								onChange={handleChange(0)}
								min={0}
								max={100}
								step={1}
								showUnit={true}
								unit="px"
								precision={0}
								icon={<SquareRoundCorner size={16} className="-rotate-90" />}
								className="w-full"
							/>
							<InputNumberSelect
								value={borderRadius[1]}
								onChange={handleChange(1)}
								min={0}
								max={100}
								step={1}
								showUnit={true}
								unit="px"
								precision={0}
								icon={<SquareRoundCorner size={16} />}
								className="w-full"
							/>
							<InputNumberSelect
								value={borderRadius[2]}
								onChange={handleChange(2)}
								min={0}
								max={100}
								step={1}
								showUnit={true}
								unit="px"
								precision={0}
								icon={<SquareRoundCorner size={16} className="rotate-180" />}
								className="w-full"
							/>
							<InputNumberSelect
								value={borderRadius[3]}
								onChange={handleChange(3)}
								min={0}
								max={100}
								step={1}
								showUnit={true}
								unit="px"
								precision={0}
								icon={<SquareRoundCorner size={16} className="rotate-90" />}
								className="w-full"
							/>
						</div>

						<button
							onClick={() => setIsLinked(!isLinked)}
							className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
							title={isLinked ? 'Unlink corners' : 'Link corners'}
						>
							{isLinked ? <Link size={16} /> : <Unlink size={16} />}
						</button>
					</div>
				</div>

				<div
					className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600"
					style={{
						borderTopLeftRadius: `${borderRadius[0]}px`,
						borderTopRightRadius: `${borderRadius[1]}px`,
						borderBottomLeftRadius: `${borderRadius[2]}px`,
						borderBottomRightRadius: `${borderRadius[3]}px`,
					}}
				/>
			</div>
		)
	},
}

/**
 * ## Width & Height
 * Components for controlling element dimensions.
 */
export const WidthHeight: Story = {
	args: {
		value: 200,
	},
	render: () => {
		const [width, setWidth] = useState(200)
		const [height, setHeight] = useState(150)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex gap-4">
					<div className="flex items-center gap-2">
						<InputNumberSelect
							value={width}
							onChange={setWidth}
							min={100}
							max={400}
							step={10}
							precision={0}
							unit="px"
							showUnit={true}
							icon={<ArrowLeftRight size={16} />}
						/>
						<span className="text-sm text-gray-600 dark:text-gray-300">
							Width
						</span>
					</div>
					<div className="flex items-center gap-2">
						<InputNumberSelect
							value={height}
							onChange={setHeight}
							min={100}
							max={400}
							step={10}
							precision={0}
							unit="px"
							showUnit={true}
							icon={<ArrowUpDown size={16} />}
						/>
						<span className="text-sm text-gray-600 dark:text-gray-300">
							Height
						</span>
					</div>
				</div>
				<div
					className="bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
					style={{ width: `${width}px`, height: `${height}px` }}
				>
					{width}×{height}
				</div>
			</div>
		)
	},
}

/**
 * ## Font Size
 * Components for controlling font size in different units (px, em).
 */
export const FontSize: Story = {
	args: {
		value: 16,
	},
	render: () => {
		const [fontSizePx, setFontSizePx] = useState(16)
		const [fontSizeEm, setFontSizeEm] = useState(1.5)
		return (
			<div className="space-y-6 flex flex-col items-center gap-4">
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<InputNumberSelect
							value={fontSizePx}
							onChange={setFontSizePx}
							min={8}
							max={27}
							step={1}
							precision={0}
							unit="px"
							showUnit={true}
							icon={<Type size={16} />}
						/>
					</div>
					<p
						className="text-center text-gray-600 dark:text-gray-300"
						style={{ fontSize: `${fontSizePx}px` }}
					>
						Text size {fontSizePx}px
					</p>
				</div>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<InputNumberSelect
							value={fontSizeEm}
							onChange={setFontSizeEm}
							min={0.5}
							max={2}
							step={0.1}
							precision={1}
							unit="em"
							showUnit={true}
							icon={<Type size={16} />}
						/>
					</div>
					<p
						className="text-center text-gray-600 dark:text-gray-300"
						style={{ fontSize: `${fontSizeEm}em` }}
					>
						Text size {fontSizeEm}em
					</p>
				</div>
			</div>
		)
	},
}

/**
 * ## Line Height
 * Component for controlling line height (unitless value).
 */
export const LineHeight: Story = {
	args: {
		value: 1.5,
	},
	render: () => {
		const [lineHeight, setLineHeight] = useState(1.5)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex items-center gap-4">
					<InputNumberSelect
						value={lineHeight}
						onChange={setLineHeight}
						min={0.8}
						max={3}
						step={0.1}
						precision={1}
						unit="none"
						showUnit={false}
						icon={<AlignVerticalSpaceAround size={16} />}
					/>
				</div>
				<div className="max-w-md p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
					<p
						style={{ lineHeight }}
						className="text-gray-600 dark:text-gray-300"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco.
					</p>
				</div>
			</div>
		)
	},
}

/**
 * ## Spacing
 * Components for controlling spacing in different units (px, rem).
 */
export const Spacing: Story = {
	args: {
		value: 16,
	},
	render: () => {
		const [spacingPx, setSpacingPx] = useState(16)
		const [spacingRem, setSpacingRem] = useState(1)
		return (
			<div className="space-y-6">
				<div className="space-y-2 flex flex-col items-center gap-4">
					<div className="flex items-center gap-2">
						<InputNumberSelect
							value={spacingPx}
							onChange={setSpacingPx}
							min={0}
							max={100}
							step={4}
							precision={0}
							unit="px"
							showUnit={true}
							icon={<Space size={16} />}
						/>
					</div>
					<div className="flex gap-2">
						<div
							className="bg-blue-500 rounded text-gray-600 dark:text-gray-300"
							style={{ padding: `${spacingPx}px` }}
						>
							<div className="bg-white dark:bg-gray-800 p-2 rounded text-sm">
								Padding: {spacingPx}px
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-2 flex flex-col items-center gap-4">
					<div className="flex items-center gap-2">
						<InputNumberSelect
							value={spacingRem}
							onChange={setSpacingRem}
							min={0}
							max={5}
							step={0.25}
							precision={2}
							unit="rem"
							showUnit={true}
							icon={<Space size={16} />}
						/>
					</div>
					<div className="flex gap-2">
						<div
							className="bg-purple-500 rounded text-gray-600 dark:text-gray-300"
							style={{ padding: `${spacingRem}rem` }}
						>
							<div className="bg-white dark:bg-gray-800 p-2 rounded text-sm">
								Padding: {spacingRem}rem
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
}

/**
 * ## Blur
 * Component for controlling blur effect.
 */
export const Blur: Story = {
	args: {
		value: 5,
	},
	render: () => {
		const [blur, setBlur] = useState(5)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex items-center gap-4">
					<InputNumberSelect
						value={blur}
						onChange={setBlur}
						min={0}
						max={50}
						step={1}
						precision={0}
						unit="px"
						showUnit={true}
						icon={<Droplets size={16} />}
					/>
				</div>
				<div className="relative w-48 h-48 overflow-hidden rounded-lg">
					<div
						className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500"
						style={{ filter: `blur(${blur}px)` }}
					/>
				</div>
			</div>
		)
	},
}

/**
 * ## Z-Index
 * Component for controlling element z-index.
 */
export const ZIndex: Story = {
	args: {
		value: 1,
	},
	render: () => {
		const [zIndex1, setZIndex1] = useState(1)
		const [zIndex2, setZIndex2] = useState(2)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex gap-4">
					<div className="flex items-center gap-2">
						<InputNumberSelect
							value={zIndex1}
							onChange={setZIndex1}
							min={0}
							max={10}
							step={1}
							precision={0}
							unit="none"
							showUnit={false}
							icon={<Layers size={16} />}
						/>
						<span className="text-sm text-gray-600 dark:text-gray-300">
							Red
						</span>
					</div>
					<div className="flex items-center gap-2">
						<InputNumberSelect
							value={zIndex2}
							onChange={setZIndex2}
							min={0}
							max={10}
							step={1}
							precision={0}
							unit="none"
							showUnit={false}
							icon={<Layers size={16} />}
						/>
						<span className="text-sm text-gray-600 dark:text-gray-300">
							Blue
						</span>
					</div>
				</div>
				<div className="relative w-64 h-32">
					<div
						className="absolute top-0 left-0 w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold"
						style={{ zIndex: zIndex1 }}
					>
						zIndex: {zIndex1}
					</div>
					<div
						className="absolute top-8 left-16 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
						style={{ zIndex: zIndex2 }}
					>
						zIndex: {zIndex2}
					</div>
				</div>
			</div>
		)
	},
}

/**
 * ## Scale
 * Component for controlling element scale.
 */
export const Scale: Story = {
	args: {
		value: 1,
	},
	render: () => {
		const [scale, setScale] = useState(1)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex items-center gap-4">
					<InputNumberSelect
						value={scale}
						onChange={setScale}
						min={1}
						max={2}
						step={0.1}
						precision={1}
						unit="none"
						showUnit={false}
						icon={<Maximize2 size={16} />}
					/>
				</div>
				<div className="flex items-center justify-center h-48">
					<div
						className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold"
						style={{ transform: `scale(${scale})` }}
					>
						Scale: x{scale}
					</div>
				</div>
			</div>
		)
	},
}

/**
 * ## Vertical Orientation
 * Component with vertical orientation for controlling Y-axis values.
 */
export const VerticalOrientation: Story = {
	args: {
		value: 50,
	},
	render: () => {
		const [value, setValue] = useState(50)
		return (
			<div className="flex items-center gap-8">
				<InputNumberSelect
					value={value}
					onChange={setValue}
					min={0}
					max={100}
					step={1}
					precision={0}
					orientation="vertical"
					icon="%"
				/>
				<div className="space-y-2">
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Value: {value}%
					</p>
					<p className="text-xs text-gray-500 dark:text-gray-400">
						Drag vertically
					</p>
				</div>
			</div>
		)
	},
}

/**
 * ## Progression Types
 * Demonstration of different progression types when dragging.
 */
export const ProgressionTypes: Story = {
	args: {
		value: 50,
	},
	render: () => {
		const [linear, setLinear] = useState(50)
		const [arithmetic, setArithmetic] = useState(50)
		const [geometric, setGeometric] = useState(50)
		const [paraboloid, setParaboloid] = useState(50)
		const [exponential, setExponential] = useState(50)

		return (
			<div className="space-y-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Linear
						</p>
						<InputNumberSelect
							value={linear}
							onChange={setLinear}
							min={0}
							max={100}
							step={1}
							precision={0}
							progression="linear"
						/>
					</div>
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Arithmetic
						</p>
						<InputNumberSelect
							value={arithmetic}
							onChange={setArithmetic}
							min={0}
							max={100}
							step={1}
							precision={0}
							progression="arithmetic"
						/>
					</div>
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Geometric
						</p>
						<InputNumberSelect
							value={geometric}
							onChange={setGeometric}
							min={0}
							max={100}
							step={1}
							precision={0}
							progression="geometric"
						/>
					</div>
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Paraboloid
						</p>
						<InputNumberSelect
							value={paraboloid}
							onChange={setParaboloid}
							min={0}
							max={100}
							step={1}
							precision={0}
							progression="paraboloid"
						/>
					</div>
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Exponential
						</p>
						<InputNumberSelect
							value={exponential}
							onChange={setExponential}
							min={0}
							max={100}
							step={1}
							precision={0}
							progression="exponential"
						/>
					</div>
				</div>
				<p className="text-xs text-gray-500 dark:text-gray-400">
					Drag the wheel to feel the difference in progression
				</p>
			</div>
		)
	},
}

/**
 * ## Disabled State
 * Component in disabled state.
 */
export const DisabledState: Story = {
	args: {
		value: 50,
		min: 0,
		max: 100,
		step: 1,
		precision: 0,
		disabled: true,
	},
}

/**
 * ## Mouse Event Control
 * Demonstration of `isDisabledMouseEvent` property.
 * When enabled, wheel dragging is disabled, only keyboard input remains.
 */
export const MouseEventControl: Story = {
	args: {
		value: 50,
	},
	render: () => {
		const [valueEnabled, setValueEnabled] = useState(50)
		const [valueDisabled, setValueDisabled] = useState(50)

		return (
			<div className="space-y-6 flex flex-col items-center gap-4">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						With dragging (default)
					</p>
					<InputNumberSelect
						value={valueEnabled}
						onChange={setValueEnabled}
						min={0}
						max={100}
						step={1}
						precision={0}
						isDisabledMouseEvent={false}
					/>
					<p className="text-xs text-gray-500 dark:text-gray-400">
						You can drag the wheel and enter value
					</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Without dragging
					</p>
					<InputNumberSelect
						value={valueDisabled}
						onChange={setValueDisabled}
						min={0}
						max={100}
						step={1}
						precision={0}
						isDisabledMouseEvent={true}
					/>
					<p className="text-xs text-gray-500 dark:text-gray-400">
						Keyboard input only, dragging disabled
					</p>
				</div>
			</div>
		)
	},
}
