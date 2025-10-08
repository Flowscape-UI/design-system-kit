import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { InputNumberSelect } from '../input-number-select'

const meta: Meta<typeof InputNumberSelect> = {
	title: 'Components/InputNumberSelect',
	component: InputNumberSelect,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		value: {
			control: 'number',
			description: 'The current numeric value',
		},
		onChange: {
			action: 'changed',
			description: 'Callback when value changes',
		},
		step: {
			control: 'number',
			description: 'Step size for increment/decrement',
		},
		precision: {
			control: 'number',
			description: 'Number of decimal places',
		},
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'Orientation of the controls',
		},
		progression: {
			control: 'select',
			options: ['linear', 'exponential', 'logarithmic'],
			description: 'Type of progression for value changes',
		},
		icon: {
			control: 'text',
			description: 'Icon or emoji to display',
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Input Number Select
export const Basic: Story = {
	args: {
		value: 50,
		step: 1,
		precision: 0,
		orientation: 'horizontal',
		progression: 'linear',
	},
	render: args => {
		const [value, setValue] = useState(args.value)
		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">
					Basic Input Number Select
				</h3>
				<InputNumberSelect {...args} value={value} onChange={setValue} />
				<div className="mt-5 p-3 bg-white rounded-lg">
					<p className="font-medium">Current Value: {value}</p>
				</div>
			</div>
		)
	},
}

// With Icon
export const WithIcon: Story = {
	args: {
		value: 75,
		step: 5,
		precision: 0,
		orientation: 'horizontal',
		progression: 'linear',
		icon: '🎨',
	},
	render: args => {
		const [value, setValue] = useState(args.value)
		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">With Icon</h3>
				<InputNumberSelect {...args} value={value} onChange={setValue} />
				<div className="mt-5 p-3 bg-white rounded-lg">
					<p className="font-medium">Current Value: {value}</p>
				</div>
			</div>
		)
	},
}

// Progression Types Comparison
export const ProgressionComparison: Story = {
	render: () => {
		const [linearValue, setLinearValue] = useState(50)
		const [exponentialValue, setExponentialValue] = useState(1)
		const [logarithmicValue, setLogarithmicValue] = useState(10)

		return (
			<div className="p-5 bg-gray-100">
				<h3 className="text-lg font-semibold mb-4">
					Progression Types Comparison
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					<div className="p-4 bg-white rounded-lg">
						<h4 className="font-medium mb-2">Linear</h4>
						<InputNumberSelect
							value={linearValue}
							onChange={setLinearValue}
							step={1}
							precision={0}
							orientation="horizontal"
							progression="linear"
						/>
						<p className="font-medium mt-2">Value: {linearValue}</p>
					</div>

					<div className="p-4 bg-white rounded-lg">
						<h4 className="font-medium mb-2">Exponential</h4>
						<InputNumberSelect
							value={exponentialValue}
							onChange={setExponentialValue}
							step={0.1}
							precision={2}
							orientation="horizontal"
							progression="exponential"
						/>
						<p className="font-medium mt-2">Value: {exponentialValue}</p>
					</div>

					<div className="p-4 bg-white rounded-lg">
						<h4 className="font-medium mb-2">Logarithmic</h4>
						<InputNumberSelect
							value={logarithmicValue}
							onChange={setLogarithmicValue}
							step={1}
							precision={1}
							orientation="horizontal"
							progression="logarithmic"
						/>
						<p className="font-medium mt-2">Value: {logarithmicValue}</p>
					</div>
				</div>
			</div>
		)
	},
}
