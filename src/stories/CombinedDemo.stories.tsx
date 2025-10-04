import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

// Import all components
import { ColorPicker } from '../components/index'
import { InputNumberSelect } from '../components/input/input-number-select'
import { InputColorPicker } from '../components/input/input-color-picker'

const meta: Meta = {
  title: 'Demos/Combined Components',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof meta>

// All Components Together
export const AllComponents: Story = {
  render: () => {
    const [color, setColor] = useState('rgba(175, 51, 242, 1)')
    const [opacity, setOpacity] = useState(100)
    const [hue, setHue] = useState(280)

    return (
      <div className="p-5 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-2">Color Picker Library - Complete Demo</h2>
        <p className="text-gray-600 mb-8">This demo showcases all components working together to create a comprehensive color selection experience.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Main Color Picker */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Main Color Picker</h3>
            <ColorPicker
              value={color}
              onChange={setColor}
              width={300}
              height={300}
            />
            <div className="mt-5 p-4 bg-white rounded-lg">
              <p className="font-medium">Selected Color: {color}</p>
              <div 
                className="w-36 h-20 rounded-lg border-2 border-gray-300 mt-2"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>

          {/* Right Column - Controls */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Advanced Controls</h3>
            
            {/* Opacity Control */}
            <div className="mb-5">
              <h4 className="font-medium mb-2">Opacity Control</h4>
              <InputNumberSelect
                value={opacity}
                onChange={setOpacity}
                step={1}
                precision={0}
                orientation="horizontal"
                progression="linear"
                icon="👁️"
              />
              <p className="font-medium mt-2">Opacity: {opacity}%</p>
            </div>

            {/* Hue Control */}
            <div className="mb-5">
              <h4 className="font-medium mb-2">Hue Control</h4>
              <InputNumberSelect
                value={hue}
                onChange={setHue}
                step={1}
                precision={0}
                orientation="horizontal"
                progression="linear"
                icon="🌈"
              />
              <p className="font-medium mt-2">Hue: {hue}°</p>
            </div>
          </div>
        </div>

        {/* Input Color Picker Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Input Color Picker</h3>
          <InputColorPicker
            value={color}
            onChange={setColor}
            showOpacity={true}
            showGradient={true}
            pickerSize={250}
          />
        </div>

        {/* Color Formats Comparison */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Color Formats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-medium mb-2">HEX</h4>
              <p className="font-mono text-sm">{color}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-medium mb-2">RGB</h4>
              <p className="font-mono text-sm">{color}</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-medium mb-2">HSL</h4>
              <p className="font-mono text-sm">{color}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
