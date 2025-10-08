import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputColorPicker } from '../input-color-picker'

const meta: Meta<typeof InputColorPicker> = {
	title: 'Components/InputColorPicker',
	component: InputColorPicker,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		value: {
			control: 'color',
			description: 'The current color value',
		},
		onChange: {
			action: 'changed',
			description: 'Callback when color changes',
		},
		showOpacity: {
			control: 'boolean',
			description: 'Show opacity control',
		},
		showGradient: {
			control: 'boolean',
			description: 'Show gradient controls',
		},
		pickerSize: {
			control: 'number',
			description: 'Size of the color picker',
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Input Color Picker
export const Basic: Story = {
	args: {
		value: 'rgba(175, 51, 242, 1)',
		showOpacity: true,
		showGradient: false,
		pickerSize: 250,
	},
	render: args => {
		const [color, setColor] = useState(args.value)
		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">Basic Input Color Picker</h3>
				<InputColorPicker {...args} value={color} onChange={setColor} />
				<div className="mt-5 p-3 bg-white rounded-lg">
					<p className="font-medium">Selected Color: {color}</p>
					<div
						className="w-24 h-12 rounded border border-gray-300 mt-2"
						style={{ backgroundColor: color }}
					/>
				</div>
			</div>
		)
	},
}

// With Gradient Support
export const WithGradient: Story = {
	args: {
		value: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
		showOpacity: true,
		showGradient: true,
		pickerSize: 250,
	},
	render: args => {
		const [color, setColor] = useState(args.value)
		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">With Gradient Support</h3>
				<InputColorPicker {...args} value={color} onChange={setColor} />
				<div className="mt-5 p-3 bg-white rounded-lg">
					<p className="font-medium">Selected Color/Gradient:</p>
					<p className="font-mono text-xs break-all mt-1">{color}</p>
					<div
						className="w-48 h-12 rounded border border-gray-300 mt-2"
						style={{ background: color }}
					/>
				</div>
			</div>
		)
	},
}

// Interactive Demo
export const InteractiveDemo: Story = {
	render: () => {
		const [color, setColor] = useState('#3498db')
		const [showOpacity, setShowOpacity] = useState(true)
		const [showGradient, setShowGradient] = useState(false)
		const [pickerSize, setPickerSize] = useState(250)

		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">Interactive Demo</h3>

				<div className="mb-5 flex gap-5 items-center">
					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							checked={showOpacity}
							onChange={e => setShowOpacity(e.target.checked)}
						/>
						Show Opacity
					</label>

					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							checked={showGradient}
							onChange={e => setShowGradient(e.target.checked)}
						/>
						Show Gradient
					</label>

					<label className="flex items-center gap-2">
						Picker Size:
						<input
							type="range"
							min="150"
							max="350"
							value={pickerSize}
							onChange={e => setPickerSize(Number(e.target.value))}
						/>
						{pickerSize}px
					</label>
				</div>

				<InputColorPicker
					value={color}
					onChange={setColor}
					showOpacity={showOpacity}
					showGradient={showGradient}
					pickerSize={pickerSize}
				/>

				<div className="mt-5 p-3 bg-white rounded-lg">
					<p className="font-medium">Selected Color:</p>
					<p className="font-mono text-xs break-all mt-1">{color}</p>
					<div
						className="w-48 h-12 rounded border border-gray-300 mt-2"
						style={{ background: color }}
					/>
				</div>
			</div>
		)
	},
}
