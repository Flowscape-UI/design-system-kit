import type { Meta, StoryObj } from '@storybook/react'
import { Palette } from 'lucide-react'
import React, { useState } from 'react'
import tc from 'tinycolor2'
import { InputHexWithPreview } from '../input-hex-with-preview'

const meta = {
	title: 'Components/InputHexWithPreview',
	component: InputHexWithPreview,
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
		hexColor: {
			control: 'color',
			description: 'HEX color string (e.g., "#AF33F2")',
		},
		opacity: {
			control: { type: 'range', min: 0, max: 1, step: 0.01 },
			description: 'Opacity value (0-1)',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable component',
		},
		isDisabledMouseEvent: {
			control: 'boolean',
			description: 'Disable mouse dragging',
		},
		classNamePreview: {
			control: 'text',
			description: 'Custom classes for color preview',
		},
	},
} satisfies Meta<typeof InputHexWithPreview>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example of InputHexWithPreview component.
 * Use Controls to change parameters.
 * Switch background in toolbar to change theme (light/dark).
 */
export const Default: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color, setColor] = useState('#AF33F2')

		return (
			<div className="space-y-4">
				<InputHexWithPreview hexColor={color} handleChange={setColor} />
				<p className="text-sm text-gray-600 dark:text-gray-300">
					Current color: {color.toUpperCase()}
				</p>
			</div>
		)
	},
}

/**
 * ## Color palette
 * Interactive palette with multiple colors.
 */
export const ColorPalette: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [colors, setColors] = useState([
			'#FF6B6B',
			'#4ECDC4',
			'#45B7D1',
			'#FFA07A',
			'#98D8C8',
			'#F7DC6F',
		])

		const handleColorChange = (index: number) => (newColor: string) => {
			const newColors = [...colors]
			newColors[index] = newColor
			setColors(newColors)
		}

		return (
			<div className="space-y-4">
				<div className="grid grid-cols-2 gap-3">
					{colors.map((color, index) => (
						<InputHexWithPreview
							key={index}
							hexColor={color}
							opacity={1}
							handleChange={handleColorChange(index)}
						/>
					))}
				</div>
				<div className="flex gap-2 flex-wrap">
					{colors.map((color, index) => (
						<div
							key={index}
							className="w-12 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600"
							style={{ backgroundColor: color }}
						/>
					))}
				</div>
			</div>
		)
	},
}

/**
 * ## Gradient
 * Creating a gradient from two colors.
 */
export const GradientCreator: Story = {
	args: {
		hexColor: '#FF6B6B',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color1, setColor1] = useState('#FF6B6B')
		const [color2, setColor2] = useState('#4ECDC4')

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex gap-3 items-center">
					<div className="space-y-2">
						<p className="text-xs text-gray-600 dark:text-gray-300 text-center">
							Start
						</p>
						<InputHexWithPreview
							hexColor={color1}
							opacity={1}
							handleChange={setColor1}
						/>
					</div>
					<div className="space-y-2">
						<p className="text-xs text-gray-600 dark:text-gray-300 text-center">
							End
						</p>
						<InputHexWithPreview
							hexColor={color2}
							opacity={1}
							handleChange={setColor2}
						/>
					</div>
				</div>
				<div
					className="w-64 h-32 rounded-lg"
					style={{
						background: `linear-gradient(to right, ${color1}, ${color2})`,
					}}
				/>
			</div>
		)
	},
}

/**
 * ## With opacity
 * Component with alpha channel support.
 */
export const WithOpacity: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color, setColor] = useState('#AF33F2')
		const [opacity, setOpacity] = useState(0.75)

		const handleChange = (newColor: string) => {
			setColor(newColor)
		}

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex flex-col gap-3 items-center">
					<InputHexWithPreview
						hexColor={color}
						opacity={opacity}
						handleChange={handleChange}
					/>
					<div className="space-y-1 flex gap-4">
						<label className="text-xs text-gray-600 dark:text-gray-300">
							Opacity
						</label>
						<input
							type="range"
							min="0"
							max="1"
							step="0.01"
							value={opacity}
							onChange={e => setOpacity(parseFloat(e.target.value))}
							className="w-32"
						/>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							{Math.round(opacity * 100)}%
						</p>
					</div>
				</div>
				<div className="relative w-48 h-48 rounded-lg overflow-hidden">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px',
						}}
					/>
					<div
						className="absolute inset-0 rounded-lg"
						style={{
							backgroundColor: tc(color).setAlpha(opacity).toRgbString(),
						}}
					/>
				</div>
			</div>
		)
	},
}

/**
 * ## Color scheme
 * Creating a color scheme with primary and complementary colors.
 */
export const ColorScheme: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [primaryColor, setPrimaryColor] = useState('#AF33F2')
		const hexColor = tc(primaryColor)

		// Generate complementary colors
		const complementary = hexColor.complement().toHexString()
		const analogous = hexColor.analogous(3)
		const triad = hexColor.triad()

		return (
			<div className="space-y-6">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Primary color
					</p>
					<InputHexWithPreview
						hexColor={primaryColor}
						opacity={1}
						handleChange={setPrimaryColor}
					/>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Complementary
					</p>
					<div className="flex gap-2 items-center">
						<div
							className="w-7 h-7 rounded-md border-2 border-gray-300 dark:border-gray-600"
							style={{ backgroundColor: complementary }}
						/>
						<span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
							{complementary.toUpperCase()}
						</span>
					</div>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Analogous
					</p>
					<div className="flex gap-2">
						{analogous.map((color, index) => (
							<div key={index} className="flex flex-col items-center gap-1">
								<div
									className="w-12 h-12 rounded-md border-2 border-gray-300 dark:border-gray-600"
									style={{ backgroundColor: color.toHexString() }}
								/>
								<span className="text-xs text-gray-600 dark:text-gray-400 font-mono">
									{color.toHexString().toUpperCase()}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Triad
					</p>
					<div className="flex gap-2">
						{triad.map((color, index) => (
							<div key={index} className="flex flex-col items-center gap-1">
								<div
									className="w-12 h-12 rounded-md border-2 border-gray-300 dark:border-gray-600"
									style={{ backgroundColor: color.toHexString() }}
								/>
								<span className="text-xs text-gray-600 dark:text-gray-400 font-mono">
									{color.toHexString().toUpperCase()}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	},
}

/**
 * ## Tints and shades
 * Generating tints and shades of a color.
 */
export const TintsAndShades: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color, setColor] = useState('#AF33F2')
		const hexColor = tc(color)

		// Generate tints (lighter)
		const tints = Array.from({ length: 5 }, (_, i) => {
			const amount = (i + 1) * 15
			return hexColor.clone().lighten(amount)
		})

		// Generate shades (darker)
		const shades = Array.from({ length: 5 }, (_, i) => {
			const amount = (i + 1) * 15
			return hexColor.clone().darken(amount)
		})

		return (
			<div className="space-y-6">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Base color
					</p>
					<InputHexWithPreview
						hexColor={color}
						opacity={1}
						handleChange={setColor}
					/>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Tints (lighter)
					</p>
					<div className="flex gap-1">
						{tints.map((tint, index) => (
							<div
								key={index}
								className="w-12 h-12 rounded border border-gray-300 dark:border-gray-600"
								style={{ backgroundColor: tint.toHexString() }}
								title={tint.toHexString()}
							/>
						))}
					</div>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Shades (darker)
					</p>
					<div className="flex gap-1">
						{shades.map((shade, index) => (
							<div
								key={index}
								className="w-12 h-12 rounded border border-gray-300 dark:border-gray-600"
								style={{ backgroundColor: shade.toHexString() }}
								title={shade.toHexString()}
							/>
						))}
					</div>
				</div>
			</div>
		)
	},
}

/**
 * ## Random colors
 * Random color generator.
 */
export const RandomColors: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [colors, setColors] = useState<string[]>([
			'#AF33F2',
			'#FF6B6B',
			'#4ECDC4',
		])

		const generateRandomColor = () => {
			return tc.random().toHexString()
		}

		const handleGenerate = () => {
			setColors([
				generateRandomColor(),
				generateRandomColor(),
				generateRandomColor(),
			])
		}

		const handleColorChange = (index: number) => (newColor: string) => {
			const newColors = [...colors]
			newColors[index] = newColor
			setColors(newColors)
		}

		return (
			<div className="space-y-4">
				<div className="flex gap-3">
					{colors.map((color, index) => (
						<InputHexWithPreview
							key={index}
							hexColor={color}
							opacity={1}
							handleChange={handleColorChange(index)}
						/>
					))}
				</div>
				<button
					onClick={handleGenerate}
					className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2"
				>
					<Palette size={16} />
					Generate new colors
				</button>
			</div>
		)
	},
}

/**
 * ## Disabled state
 * Component in disabled state.
 */
export const DisabledState: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color] = useState('#AF33F2')

		return (
			<div className="space-y-4">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						InputHexWithPreview (disabled)
					</p>
					<InputHexWithPreview
						hexColor={color}
						opacity={1}
						handleChange={() => {}}
						disabled={true}
					/>
				</div>
			</div>
		)
	},
}

/**
 * ## Mouse event control
 * Demonstration of `isDisabledMouseEvent` property.
 * When enabled, dragging is disabled, only keyboard input remains.
 */
export const MouseEventControl: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color1, setColor1] = useState('#AF33F2')
		const [color2, setColor2] = useState('#AF33F2')

		return (
			<div className="space-y-6">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						With dragging (default)
					</p>
					<InputHexWithPreview
						hexColor={color1}
						opacity={1}
						handleChange={setColor1}
						isDisabledMouseEvent={false}
					/>
					<p className="text-xs text-gray-500 dark:text-gray-400">
						Can drag color preview and enter value
					</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Without dragging
					</p>
					<InputHexWithPreview
						hexColor={color2}
						opacity={1}
						handleChange={setColor2}
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

/**
 * ## Custom styles
 * Examples with custom preview styles.
 */
export const CustomStyles: Story = {
	args: {
		hexColor: '#AF33F2',
		opacity: 1,
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color1, setColor1] = useState('#AF33F2')
		const [color2, setColor2] = useState('#FF6B6B')
		const [color3, setColor3] = useState('#4ECDC4')

		return (
			<div className="space-y-4">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Large preview
					</p>
					<InputHexWithPreview
						hexColor={color1}
						opacity={1}
						handleChange={setColor1}
						classNamePreview="w-10 h-10"
					/>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Rounded preview
					</p>
					<InputHexWithPreview
						hexColor={color2}
						opacity={1}
						handleChange={setColor2}
						classNamePreview="rounded-full"
					/>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Without border
					</p>
					<InputHexWithPreview
						hexColor={color3}
						opacity={1}
						handleChange={setColor3}
						classNamePreview="border-0"
					/>
				</div>
			</div>
		)
	},
}
