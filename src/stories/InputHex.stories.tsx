import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
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
				<p className="text-sm text-gray-600 dark:text-gray-300">
					Current color: {color.toUpperCase()}
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
