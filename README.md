<div align="center">

# 🎨 @flowscape-ui/design-system-kit

[![npm version](https://img.shields.io/npm/v/@flowscape-ui/design-system-kit.svg?style=flat-square)](https://www.npmjs.com/package/@flowscape-ui/design-system-kit)
[![license](https://img.shields.io/npm/l/@flowscape-ui/design-system-kit.svg?style=flat-square)](https://github.com/flowscape-ui/design-system-kit/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Professional React UI components for color management and design systems**

[📚 Documentation](https://flowscape-ui.github.io/design-system-kit) • [🎨 Storybook](https://flowscape-ui.github.io/design-system-kit) • [🐛 Report Bug](https://github.com/flowscape-ui/design-system-kit/issues) • [☕ Support](https://buymeacoffee.com/flowscape)

</div>

---

## ✨ Features

- 🎨 **Multiple Color Formats** — RGB, HSL, HSV, CMYK, HEX with alpha channel support
- 🌈 **Gradient Support** — Create and edit linear and radial gradients
- 🎯 **Eye Dropper** — Pick colors directly from the screen
- 🔢 **Universal Input Component** — Drag-to-change numeric input for all design properties
- 🎨 **HEX Input Components** — Specialized inputs with drag-to-change and alpha channel
- 🎛️ **5 Progression Types** — Linear, arithmetic, geometric, paraboloid, exponential
- 🌓 **Dark/Light Mode** — Automatic theme detection with manual override
- 📦 **Modular Architecture** — Import only what you need (tree-shakeable)
- ⚡ **Lightweight** — From 1KB to 62KB per component
- 🔧 **TypeScript** — Full type definitions and IntelliSense support
- 🎪 **Advanced Controls** — Fine-tune colors with precision sliders

## 📦 Installation

```bash
npm install @flowscape-ui/design-system-kit
```

**Peer Dependencies:**

```bash
npm install react react-dom framer-motion lucide-react react-icons
```

## 🚀 Quick Start

### Option 1: Import from main module (convenient)

```tsx
import {
	ColorPicker,
	InputNumberSelect,
	InputColorPicker,
	InputHex,
	InputHexWithPreview,
} from '@flowscape-ui/design-system-kit'
```

### Option 2: Modular imports (recommended for production)

```tsx
// Tree-shakeable - only loads what you need
import { ColorPicker } from '@flowscape-ui/design-system-kit/color-picker'
import { InputNumberSelect } from '@flowscape-ui/design-system-kit/input-number-select'
import { InputColorPicker } from '@flowscape-ui/design-system-kit/input-color-picker'
import { InputHex } from '@flowscape-ui/design-system-kit/input-hex'
import { InputHexWithPreview } from '@flowscape-ui/design-system-kit/input-hex-with-preview'
```

## 📚 Components Overview

| Component               | Size   | Description                                                                   |
| ----------------------- | ------ | ----------------------------------------------------------------------------- |
| **ColorPicker**         | 134 KB | Full-featured color picker with gradients, eye dropper, and all color formats |
| **InputColorPicker**    | 142 KB | Compact color input with popup picker                                         |
| **InputNumberSelect**   | 12 KB  | Universal drag-to-change numeric input                                        |
| **InputHexWithPreview** | 7.5 KB | HEX input with color preview and alpha support                                |
| **InputHex**            | 6.7 KB | Lightweight HEX input with alpha support                                      |
| **Input**               | 847 B  | Base input component                                                          |

---

## 🎨 ColorPicker

Full-featured color picker supporting all color formats, gradients, and advanced controls.

```tsx
import { useState } from 'react'
import { ColorPicker } from '@flowscape-ui/design-system-kit/color-picker'

function App() {
	const [color, setColor] = useState('rgba(175, 51, 242, 1)')
	return <ColorPicker value={color} onChange={setColor} />
}
```

**Key Features:**

- ✅ RGB, HSL, HSV, CMYK, HEX formats
- ✅ Linear and radial gradients
- ✅ Eye dropper tool
- ✅ Color presets
- ✅ Advanced sliders
- ✅ Dark/light themes

---

## 🔢 InputNumberSelect

Universal drag-to-change numeric input for all design properties.

```tsx
import { InputNumberSelect } from '@flowscape-ui/design-system-kit/input-number-select'
import { RotateCw } from 'lucide-react'

// Opacity (0-100%)
<InputNumberSelect value={75} onChange={setOpacity} min={0} max={100} icon="%" />

// Angle with custom icon
<InputNumberSelect
  value={45}
  onChange={setAngle}
  min={0}
  max={360}
  unit="deg"
  showUnit
  icon={<RotateCw size={16} />}
/>
```

**Key Features:**

- ✅ Drag-to-change with mouse/keyboard
- ✅ 5 progression types (linear, arithmetic, geometric, paraboloid, exponential)
- ✅ Custom icons (string or React components)
- ✅ Unit display (px, %, rem, em, deg, etc.)
- ✅ Horizontal/vertical orientation
- ✅ Keyboard navigation (Arrow keys, Page Up/Down, Home/End)

---

## 🎨 InputColorPicker

Compact color input with popup picker and gradient support.

```tsx
import { InputColorPicker } from '@flowscape-ui/design-system-kit/input-color-picker'

// Solid color
<InputColorPicker
  title="Background Color"
  value="rgba(255, 255, 255, 1)"
  onChange={setColor}
  showOpacity={true}
/>

// Gradient support
<InputColorPicker
  title="Gradient Background"
  value="linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)"
  onChange={setGradient}
  showOpacity={true}
  showGradient={true}
/>
```

**Key Features:**

- ✅ Solid colors and gradients support
- ✅ HEX input with alpha channel (8 symbols)
- ✅ Opacity control with drag slider
- ✅ Click gradient text to copy CSS
- ✅ Integrated ColorPicker popup
- ✅ Background visibility toggle
- ✅ Customizable gradient input width
- ✅ Dark/light theme support

**Props:**

```tsx
interface InputColorPickerProps {
  value?: string                        // Color or gradient value
  onChange?: (color: string) => void    // Change callback
  onOpacityChange?: (opacity: number) => void
  title?: string                        // Picker header title
  className?: string                    // Container classes
  classNameGradientInput?: string       // Gradient input classes (override min-w-[187px])
  showOpacity?: boolean                 // Show opacity control (default: true)
  showGradient?: boolean                // Show gradient in picker (default: false)
  pickerSize?: number                   // Picker popup size (default: 250)
  onShowPicker?: (shown: boolean) => void
  onHideBackground?: (hidden: boolean) => void
  onDeleteBackground?: () => void
}
```

---

## 🔤 InputHex

Lightweight HEX color input with drag-to-change and alpha channel support.

```tsx
import { InputHex } from '@flowscape-ui/design-system-kit/input-hex'

// Basic usage (6 symbols)
<InputHex hexColor="#FF5733" handleChange={setColor} />

// With alpha channel (8 symbols)
<InputHex hexColor="#FF5733DD" handleChange={setColor} showAlpha />
```

**Key Features:**

- ✅ Drag `#` icon to change color
- ✅ Alpha channel support (`showAlpha` prop)
- ✅ Real-time HEX validation
- ✅ Uppercase formatting
- ✅ Customizable callbacks (click, drag start/end)
- ✅ Dark/light theme support

---

## 🎨 InputHexWithPreview

HEX input with visual color preview and alpha channel support.

```tsx
import { InputHexWithPreview } from '@flowscape-ui/design-system-kit/input-hex-with-preview'

// Basic usage
<InputHexWithPreview hexColor="#3498DB" handleChange={setColor} />

// With alpha channel
<InputHexWithPreview hexColor="#3498DBDD" handleChange={setColor} showAlpha />
```

**Key Features:**

- ✅ Everything from InputHex + visual preview
- ✅ Color preview square with alpha support
- ✅ Drag to change color, alpha preserved
- ✅ Customizable preview styles
- ✅ Compact size for forms

---

## 📋 API Reference

### InputHex / InputHexWithPreview Props

```tsx
interface InputHexProps {
	// Required
	hexColor: string // HEX color value
	handleChange: (hexColor: string) => void // Change callback

	// Alpha channel
	showAlpha?: boolean // Enable 8-symbol input (RRGGBBAA)

	// Styling
	className?: string // Container classes
	classNameInput?: string // Input field classes
	classNameIcon?: string // Icon classes
	classNamePreview?: string // Preview classes (InputHexWithPreview only)

	// Behavior
	disabled?: boolean // Disable component
	isDisabledMouseEvent?: boolean // Disable drag functionality

	// Callbacks
	onIconClick?: (hexColor: string) => void
	onIconPointerDown?: (hexColor: string) => void
	onIconPointerUp?: (hexColor: string) => void
}
```

**Alpha Channel Behavior:**

- When `showAlpha={true}`, input accepts 8 symbols (RRGGBBAA)
- Drag changes only first 6 symbols (base color), alpha is preserved
- Alpha affects preview transparency automatically
- Format: `#RRGGBBAA` where AA is alpha (00=transparent, FF=opaque)

### Usage Examples

```tsx
import { InputHex, InputHexWithPreview } from '@flowscape-ui/design-system-kit'

// Basic usage (6 symbols)
<InputHex hexColor="#FF5733" handleChange={setColor} />

// With alpha channel (8 symbols)
<InputHex hexColor="#FF5733DD" handleChange={setColor} showAlpha />

// With preview
<InputHexWithPreview hexColor="#2ECC71" handleChange={setColor} />

// With preview and alpha
<InputHexWithPreview hexColor="#2ECC71DD" handleChange={setColor} showAlpha />

// Custom callbacks
<InputHex
  hexColor={color}
  handleChange={setColor}
  onIconClick={(hex) => console.log('Clicked:', hex)}
  onIconPointerDown={(hex) => console.log('Drag start:', hex)}
  onIconPointerUp={(hex) => console.log('Drag end:', hex)}
/>

// Disabled drag (keyboard only)
<InputHex hexColor={color} handleChange={setColor} isDisabledMouseEvent />

// Custom styles
<InputHexWithPreview
  hexColor={color}
  handleChange={setColor}
  className="w-full"
  classNameInput="font-mono"
  classNamePreview="rounded-full"
/>
```

---

### InputNumberSelect Props

```tsx
interface InputNumberSelectProps {
	// Required
	value: number
	onChange?: (value: number) => void

	// Range
	min?: number // Default: 0
	max?: number // Default: 100
	step?: number // Default: 1
	precision?: number // Decimal places, default: 0

	// Progression type
	progression?:
		| 'linear'
		| 'arithmetic'
		| 'geometric'
		| 'paraboloid'
		| 'exponential'

	// Visual
	orientation?: 'horizontal' | 'vertical' // Default: 'horizontal'
	icon?: React.ReactNode | string // Custom icon or text
	unit?: 'px' | '%' | 'rem' | 'em' | 'deg' | 'none'
	showUnit?: boolean // Show unit after value

	// Styling
	className?: string
	classNameInput?: string
	classNameIcon?: string

	// Behavior
	disabled?: boolean
	isDisabledMouseEvent?: boolean
}
```

**Progression Types:**

- `linear` — Linear change (default)
- `arithmetic` — Arithmetic progression (×2)
- `geometric` — Geometric progression (×1.05)
- `paraboloid` — Parabolic acceleration
- `exponential` — Exponential change

---

## 🎨 ColorPicker Advanced Configuration

### Hide Components

```tsx
<ColorPicker
	value={color}
	onChange={setColor}
	hideOpacity={false} // Hide opacity slider
	hidePresets={false} // Hide preset colors
	hideEyeDrop={false} // Hide eye dropper
	hideAdvancedSliders={false} // Hide advanced sliders
	hideGradientControls={false} // Hide all gradient controls
/>
```

### Custom Presets & Styling

```tsx
const presets = ['#ff0000', '#00ff00', '#0000ff']

<ColorPicker
  value={color}
  onChange={setColor}
  presets={presets}
  width={350}
  height={350}
  className="my-picker"
/>
```

---

## 🔧 Advanced: useColorPicker Hook

For custom implementations, use the `useColorPicker` hook:

```tsx
import { useColorPicker } from '@flowscape-ui/design-system-kit'

const { setR, setG, setB, valueToHex, rgbaArr } = useColorPicker(
	color,
	setColor
)
```

---

### ColorPicker Key Props

| Prop                   | Type                      | Default  | Description                           |
| ---------------------- | ------------------------- | -------- | ------------------------------------- |
| `value`                | `string`                  | Required | Color value (RGB, HEX, HSL, gradient) |
| `onChange`             | `(value: string) => void` | Required | Change callback                       |
| `width` / `height`     | `number`                  | `294`    | Picker dimensions                     |
| `hideOpacity`          | `boolean`                 | `false`  | Hide opacity slider                   |
| `hidePresets`          | `boolean`                 | `false`  | Hide preset colors                    |
| `hideEyeDrop`          | `boolean`                 | `false`  | Hide eye dropper                      |
| `hideGradientControls` | `boolean`                 | `false`  | Hide gradient controls                |
| `presets`              | `string[]`                | `[]`     | Custom preset colors                  |
| `className`            | `string`                  | -        | CSS class name                        |

**Supported Color Formats:**

- RGB/RGBA: `rgb(255, 0, 0)`, `rgba(255, 0, 0, 0.5)`
- HEX: `#FF0000`, `#FF0000FF` (with alpha)
- HSL/HSLA: `hsl(0, 100%, 50%)`, `hsla(0, 100%, 50%, 0.5)`
- HSV: `hsv(0, 100%, 100%)`
- CMYK: `cmyk(0, 100%, 100%, 0)`
- Gradients: `linear-gradient(90deg, #ff0000 0%, #0000ff 100%)`

---

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Run tests
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- **📦 npm Package**: https://www.npmjs.com/package/@flowscape-ui/design-system-kit
- **📚 Documentation**: [GitHub Repository](https://github.com/flowscape-ui/design-system-kit)
- **🎨 Storybook**: https://flowscape-ui.github.io/design-system-kit
- **🐛 Report Issues**: https://github.com/flowscape-ui/design-system-kit/issues
- **☕ Support the Project**: [Buy Me a Coffee](https://buymeacoffee.com/flowscape)
