import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

// Import the ColorPicker component
import { ColorPicker } from "../components/index";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker/Test",
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
    hideHue: {
      control: "boolean",
      description: "Hide hue slider",
    },
    hideEyeDrop: {
      control: "boolean",
      description: "Hide eye dropper tool",
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
        <h3>Basic Color Picker</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
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
        <h3>Compact Color Picker</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    );
  },
};

// Large Size
export const Large: Story = {
  args: {
    value: "#4ecdc4",
    width: 400,
    height: 400,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value);
    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3>Large Color Picker</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    );
  },
};

// Without Controls
export const WithoutControls: Story = {
  args: {
    value: "#3498db",
    width: 300,
    height: 300,
    hideControls: true,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value);
    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3>Without Control Buttons</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    );
  },
};

// Without Inputs
export const WithoutInputs: Story = {
  args: {
    value: "#e74c3c",
    width: 300,
    height: 300,
    hideInputs: true,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value);
    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3>Without Input Fields</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    );
  },
};

// Without Opacity
export const WithoutOpacity: Story = {
  args: {
    value: "#f39c12",
    width: 300,
    height: 300,
    hideOpacity: true,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value);
    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3>Without Opacity Control</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    );
  },
};

// Without Presets
export const WithoutPresets: Story = {
  args: {
    value: "#9b59b6",
    width: 300,
    height: 300,
    hidePresets: true,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value);
    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3>Without Preset Colors</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
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
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3>Minimal Color Picker</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    );
  },
};

// Different Color Formats
export const ColorFormats: Story = {
  render: () => {
    const [hexColor, setHexColor] = useState("#ff6b6b");
    const [rgbColor, setRgbColor] = useState("rgb(255, 107, 107)");
    const [hslColor, setHslColor] = useState("hsl(0, 100%, 70%)");

    return (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h3>Different Color Formats</h3>

        <div style={{ marginBottom: "30px" }}>
          <h4>HEX Format</h4>
          <ColorPicker
            value={hexColor}
            onChange={setHexColor}
            width={250}
            height={250}
          />
          <p>
            <strong>HEX:</strong> {hexColor}
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h4>RGB Format</h4>
          <ColorPicker
            value={rgbColor}
            onChange={setRgbColor}
            width={250}
            height={250}
          />
          <p>
            <strong>RGB:</strong> {rgbColor}
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h4>HSL Format</h4>
          <ColorPicker
            value={hslColor}
            onChange={setHslColor}
            width={250}
            height={250}
          />
          <p>
            <strong>HSL:</strong> {hslColor}
          </p>
        </div>
      </div>
    );
  },
};
