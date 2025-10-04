import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

// Import the ColorPicker component
import { ColorPicker } from "../components/index";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "color",
      description: "The current color value",
    },
    onChange: {
      action: "changed",
      description: "Callback when color changes",
    },
    width: {
      control: "number",
      description: "Width of the color picker",
    },
    height: {
      control: "number",
      description: "Height of the color picker",
    },
    hideControls: {
      control: "boolean",
      description: "Hide control buttons",
    },
    hideInputs: {
      control: "boolean",
      description: "Hide input fields",
    },
    hideOpacity: {
      control: "boolean",
      description: "Hide opacity control",
    },
    hidePresets: {
      control: "boolean",
      description: "Hide preset colors",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Color Picker
export const Basic: Story = {
  args: {
    value: "rgba(175, 51, 242, 1)",
    width: 300,
    height: 300,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value);
    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}
        >
          Basic Color Picker
        </h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p style={{ fontWeight: "500" }}>Selected Color: {color}</p>
          <div
            style={{
              width: "96px",
              height: "48px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "8px",
              backgroundColor: color,
            }}
          />
        </div>
      </div>
    );
  },
};

// Compact Size
export const Compact: Story = {
  args: {
    value: "#ff6b6b",
    width: 200,
    height: 200,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value);
    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}
        >
          Compact Size
        </h3>
        <ColorPicker {...args} value={color} onChange={setColor} />

        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p style={{ fontWeight: "500" }}>Selected Color: {color}</p>
          <div
            style={{
              width: "96px",
              height: "48px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "8px",
              backgroundColor: color,
            }}
          />
        </div>
      </div>
    );
  },
};

// Minimal Version
export const Minimal: Story = {
  args: {
    value: "#2ecc71",
    width: 250,
    height: 250,
    hideControls: true,
    hideInputs: true,
    hidePresets: true,
    hideEyeDrop: true,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value);
    return (
      <div className="p-5 bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Minimal Version</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div className="mt-5 p-3 bg-white rounded-lg">
          <p className="font-medium">Selected Color: {color}</p>
          <div
            className="w-24 h-12 rounded border border-gray-300 mt-2"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    );
  },
};
