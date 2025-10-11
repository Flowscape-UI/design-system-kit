import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import tc from 'tinycolor2'
import { InputHex } from '../input-hex'

const meta = {
	title: 'Components/InputHex',
	component: InputHex,
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
		disabled: {
			control: 'boolean',
			description: 'Disable component',
		},
		isDisabledMouseEvent: {
			control: 'boolean',
			description: 'Disable mouse dragging',
		},
		showAlpha: {
			control: 'boolean',
			description: 'Show and allow alpha channel input (8 symbols)',
		},
	},
} satisfies Meta<typeof InputHex>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example of InputHex component.
 * Use Controls to change parameters.
 * Switch background in toolbar to change theme (light/dark).
 */
export const Default: Story = {
	args: {
		hexColor: '#AF33F2',
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color, setColor] = useState('#AF33F2')

		return (
			<div className="space-y-4">
				<InputHex hexColor={color} handleChange={setColor} />
				<p className="text-center text-sm text-gray-600 dark:text-gray-300">
					Current color: {color.toUpperCase()}
				</p>
			</div>
		)
	},
}

/**
 * ## With alpha
 * Component with alpha channel support.
 */
export const WithAlpha: Story = {
	args: {
		hexColor: '#AF33F2DD',
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color, setColor] = useState('#AF33F2DD')

		const handleChange = (newColor: string) => {
			setColor(newColor)
		}

		const currentAlpha = tc(color).getAlpha()

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<div className="flex flex-col gap-3 items-center">
					<InputHex hexColor={color} handleChange={handleChange} showAlpha />
					<div className="space-y-1 flex gap-4">
						<label className="text-xs text-gray-600 dark:text-gray-300">
							Alpha:
						</label>
						<p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
							{Math.round(currentAlpha * 100)}% ({color})
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
							backgroundColor: tc(color).toRgbString(),
						}}
					/>
				</div>
				<p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
					Enter last 2 hex-symbols for alpha-channel (e.g., 80 = 50%
					transparency). Preview shows real transparency on chessboard
					background.
				</p>
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
		handleChange: (newColor: string) => {},
	},
	render: () => {
		const [color] = useState('#AF33F2')

		return (
			<div className="space-y-4">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						InputHex (disabled)
					</p>
					<InputHex hexColor={color} handleChange={() => {}} disabled={true} />
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
					<InputHex
						hexColor={color1}
						handleChange={setColor1}
						isDisabledMouseEvent={false}
					/>
					<p className="text-xs text-gray-500 dark:text-gray-400">
						Can drag # icon and enter value
					</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						Without dragging
					</p>
					<InputHex
						hexColor={color2}
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
