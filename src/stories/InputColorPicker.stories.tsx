import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputColorPicker } from '../input-color-picker'

const meta = {
	title: 'Components/InputColorPicker',
	component: InputColorPicker,
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
			control: 'text',
			description: 'Current color value (solid color or gradient)',
		},
		onChange: {
			description: 'Callback when color changes',
		},
		onOpacityChange: {
			description: 'Callback when opacity changes',
		},
		className: {
			control: 'text',
			description: 'Custom classes for the container',
		},
		classNameGradientInput: {
			control: 'text',
			description: 'Custom classes for gradient input)',
		},
		showOpacity: {
			control: 'boolean',
			description: 'Show opacity control',
		},
		showGradient: {
			control: 'boolean',
			description: 'Show gradient controls in picker',
		},
		pickerSize: {
			control: 'number',
			description: 'Size of the color picker popup',
		},
		title: {
			control: 'text',
			description: 'Title shown in picker header',
		},
	},
} satisfies Meta<typeof InputColorPicker>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example of InputColorPicker component.
 * Use Controls to change parameters.
 * Switch background in toolbar to change theme (light/dark).
 */
export const Default: Story = {
	args: {
		value: 'rgba(175, 51, 242, 1)',
		showOpacity: true,
		showGradient: false,
		pickerSize: 250,
	},
	render: () => {
		const [color, setColor] = useState('rgba(175, 51, 242, 1)')
		return (
			<div className="space-y-4">
				<InputColorPicker value={color} onChange={setColor} />
				<p className="text-center text-sm text-gray-600 dark:text-gray-300">
					Current color: {color}
				</p>
			</div>
		)
	},
}

/**
 * ## Background Color
 * Component for controlling element background color with opacity.
 */
export const BackgroundColor: Story = {
	args: {
		value: 'rgba(59, 130, 246, 1)',
	},
	render: () => {
		const [bgColor, setBgColor] = useState('rgba(59, 130, 246, 1)')
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<InputColorPicker
					value={bgColor}
					onChange={setBgColor}
					title="Background Color"
					showOpacity={true}
				/>
				<div
					className="w-64 h-32 rounded-lg flex items-center justify-center text-white font-semibold"
					style={{ background: bgColor }}
				>
					Background Preview
				</div>
			</div>
		)
	},
}

/**
 * ## Text Color
 * Component for controlling text color.
 */
export const TextColor: Story = {
	args: {
		value: 'rgba(239, 68, 68, 1)',
	},
	render: () => {
		const [textColor, setTextColor] = useState('rgba(239, 68, 68, 1)')
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<InputColorPicker
					value={textColor}
					onChange={setTextColor}
					title="Text Color"
					showOpacity={true}
				/>
				<div className="max-w-md p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
					<h3 className="text-2xl font-bold mb-2" style={{ color: textColor }}>
						Colored Heading
					</h3>
					<p className="text-base" style={{ color: textColor }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
		)
	},
}

/**
 * ## Gradient Background
 * Component with gradient support for creating beautiful backgrounds.
 */
export const GradientBackground: Story = {
	args: {
		value:
			'linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)',
	},
	render: () => {
		const [gradient, setGradient] = useState(
			'linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)'
		)
		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<InputColorPicker
					value={gradient}
					onChange={setGradient}
					title="Gradient Background"
					showOpacity={true}
					showGradient={true}
				/>
				<div
					className="w-80 h-48 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl"
					style={{ background: gradient }}
				>
					Gradient Preview
				</div>
				<p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
					Click "Linear" to copy gradient CSS. Use opacity control to adjust
					transparency.
				</p>
			</div>
		)
	},
}

/**
 * ## Multiple Colors
 * Managing multiple colors for a design system.
 */
export const MultipleColors: Story = {
	args: {
		value: 'rgba(59, 130, 246, 1)',
	},
	render: () => {
		const [primary, setPrimary] = useState('rgba(59, 130, 246, 1)')
		const [secondary, setSecondary] = useState('rgba(139, 92, 246, 1)')
		const [accent, setAccent] = useState('rgba(236, 72, 153, 1)')

		return (
			<div className="space-y-6">
				<div className="grid grid-cols-1 gap-4">
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Primary Color
						</p>
						<InputColorPicker
							value={primary}
							onChange={setPrimary}
							title="Primary"
						/>
					</div>
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Secondary Color
						</p>
						<InputColorPicker
							value={secondary}
							onChange={setSecondary}
							title="Secondary"
						/>
					</div>
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
							Accent Color
						</p>
						<InputColorPicker
							value={accent}
							onChange={setAccent}
							title="Accent"
						/>
					</div>
				</div>

				<div className="flex gap-3 justify-center">
					<div
						className="w-20 h-20 rounded-lg shadow-md"
						style={{ background: primary }}
					/>
					<div
						className="w-20 h-20 rounded-lg shadow-md"
						style={{ background: secondary }}
					/>
					<div
						className="w-20 h-20 rounded-lg shadow-md"
						style={{ background: accent }}
					/>
				</div>
			</div>
		)
	},
}

/**
 * ## Card Design
 * Using color picker to design a card component.
 */
export const CardDesign: Story = {
	args: {
		value: 'rgba(255, 255, 255, 1)',
	},
	render: () => {
		const [cardBg, setCardBg] = useState('rgba(255, 255, 255, 1)')
		const [headerBg, setHeaderBg] = useState(
			'linear-gradient(135deg, rgba(99, 102, 241, 1) 0%, rgba(139, 92, 246, 1) 100%)'
		)
		const [textColor, setTextColor] = useState('rgba(31, 41, 55, 1)')

		return (
			<div className="space-y-6 w-80">
				<div className="grid grid-cols-1 gap-3">
					<div className="space-y-2">
						<p className="text-xs font-medium text-gray-700 dark:text-gray-300">
							Card Background
						</p>
						<InputColorPicker
							value={cardBg}
							onChange={setCardBg}
							title="Card BG"
							showOpacity={true}
						/>
					</div>
					<div className="space-y-2">
						<p className="text-xs font-medium text-gray-700 dark:text-gray-300">
							Header Background
						</p>
						<InputColorPicker
							value={headerBg}
							onChange={setHeaderBg}
							title="Header BG"
							showOpacity={true}
							showGradient={true}
						/>
					</div>
					<div className="space-y-2">
						<p className="text-xs font-medium text-gray-700 dark:text-gray-300">
							Text Color
						</p>
						<InputColorPicker
							value={textColor}
							onChange={setTextColor}
							title="Text"
							showOpacity={true}
						/>
					</div>
				</div>

				<div
					className="rounded-xl shadow-xl overflow-hidden"
					style={{ background: cardBg }}
				>
					<div
						className="h-32 flex items-center justify-center text-white font-bold text-xl"
						style={{ background: headerBg }}
					>
						Card Header
					</div>
					<div className="p-6">
						<h3
							className="text-lg font-semibold mb-2"
							style={{ color: textColor }}
						>
							Card Title
						</h3>
						<p className="text-sm" style={{ color: textColor }}>
							This is a preview of your card design. Adjust colors above to see
							changes in real-time.
						</p>
					</div>
				</div>
			</div>
		)
	},
}

/**
 * ## Opacity Control
 * Demonstrating opacity control for overlays and backgrounds.
 */
export const OpacityControl: Story = {
	args: {
		value: 'rgba(0, 0, 0, 0.5)',
	},
	render: () => {
		const [overlayColor, setOverlayColor] = useState('rgba(0, 0, 0, 0.5)')

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<InputColorPicker
					value={overlayColor}
					onChange={setOverlayColor}
					title="Overlay Color"
					showOpacity={true}
				/>
				<div className="relative w-80 h-48 rounded-lg overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
						alt="Background"
						className="absolute inset-0 w-full h-full object-cover"
					/>
					<div
						className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
						style={{ background: overlayColor }}
					>
						Overlay Text
					</div>
				</div>
				<p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
					Adjust opacity to control overlay transparency
				</p>
			</div>
		)
	},
}
