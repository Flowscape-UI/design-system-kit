# @flowscape-ui/design-system-kit

[![npm version](https://img.shields.io/npm/v/@flowscape-ui/design-system-kit.svg)](https://www.npmjs.com/package/@flowscape-ui/design-system-kit)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@flowscape-ui/design-system-kit)](https://bundlephobia.com/package/@flowscape-ui/design-system-kit)
[![license](https://img.shields.io/npm/l/@flowscape-ui/design-system-kit.svg)](https://github.com/flowscape-ui/design-system-kit/blob/main/LICENSE)
[![Buy Me a Coffee](https://img.shields.io/badge/Donate-Buy%20Me%20a%20Coffee-FFDD00?logo=buymeacoffee&logoColor=000)](https://buymeacoffee.com/flowscape)

A comprehensive React design system kit with color picker, specialized input components, and other essential UI elements. Built with TypeScript, modular architecture, and optimized for modern web applications.

## ✨ Features

- 🎨 **Multiple Color Formats**: Support for RGB, HSL, HSV, CMYK, and HEX
- 🌈 **Gradient Support**: Create and edit linear and radial gradients
- 🎯 **Eye Dropper**: Pick colors directly from the screen
- 🔢 **Universal Input Component**: Drag-to-change numeric input for all design properties
- 🎛️ **Multiple Progression Types**: Linear, arithmetic, geometric, paraboloid, exponential
- 🌓 **Dark/Light Mode**: Automatic theme detection with manual override
- 📦 **Modular Architecture**: Import only what you need for optimal bundle size
- ⚡ **Tree-shakeable**: Reduce bundle size by up to 94%
- 🎨 **Highly Customizable**: Hide/show components and customize styling
- 🔧 **TypeScript Support**: Full type definitions included
- 🎪 **Advanced Controls**: Fine-tune colors and values with precision sliders

## 📦 Installation

```bash
npm install @flowscape-ui/design-system-kit
```

## 🚀 Quick Start

### Option 1: Import from main module (convenient)

```tsx
import {
	ColorPicker,
	InputNumberSelect,
	InputColorPicker,
} from '@flowscape-ui/design-system-kit'
```

### Option 2: Modular imports (recommended for production)

```tsx
// Tree-shakeable - only loads what you need
import { ColorPicker } from '@flowscape-ui/design-system-kit/color-picker'
import { InputNumberSelect } from '@flowscape-ui/design-system-kit/input-number-select'
import { InputColorPicker } from '@flowscape-ui/design-system-kit/input-color-picker'
```

## 📚 Components

### ColorPicker (59 KB)

```tsx
import { useState } from 'react'
import { ColorPicker } from '@flowscape-ui/design-system-kit/color-picker'

function App() {
	const [color, setColor] = useState('rgba(175, 51, 242, 1)')

	return <ColorPicker value={color} onChange={setColor} />
}
```

### InputNumberSelect (3 KB)

Universal drag-to-change numeric input component for all design properties. Supports custom icons, units, precision, and multiple progression types.

```tsx
import { useState } from 'react'
import { InputNumberSelect } from '@flowscape-ui/design-system-kit/input-number-select'
import { RotateCw } from 'lucide-react'

function App() {
	const [opacity, setOpacity] = useState(75)
	const [angle, setAngle] = useState(45)

	return (
		<>
			{/* Opacity control */}
			<InputNumberSelect
				value={opacity}
				onChange={setOpacity}
				min={0}
				max={100}
				step={1}
				icon="%"
			/>

			{/* Angle control with custom icon */}
			<InputNumberSelect
				value={angle}
				onChange={setAngle}
				min={0}
				max={360}
				step={1}
				unit="deg"
				showUnit={true}
				icon={<RotateCw size={16} />}
			/>
		</>
	)
}
```

**Key Features:**

- 🎯 Drag-to-change with mouse/keyboard support
- 🎨 Custom icons (string or React components)
- 📊 5 progression types (linear, arithmetic, geometric, paraboloid, exponential)
- 🌓 Automatic dark/light theme support via Tailwind CSS
- 📝 Unit display (px, %, rem, em, deg, etc.)
- 🔄 Horizontal/vertical orientation
- ⌨️ Keyboard navigation (Arrow keys, Page Up/Down, Home/End)

### InputColorPicker (62 KB)

```tsx
import { useState } from 'react'
import { InputColorPicker } from '@flowscape-ui/design-system-kit/input-color-picker'

function App() {
	const [color, setColor] = useState('rgba(255, 255, 255, 1)')

	return (
		<InputColorPicker
			title="Background Color"
			value={color}
			onChange={setColor}
		/>
	)
}
```

### InputNumberSelect - Usage Examples

One universal component for all design properties. Configure it through props:

```tsx
import { InputNumberSelect } from '@flowscape-ui/design-system-kit/input-number-select'
import { RotateCw, SquareRoundCorner, Type, Blend } from 'lucide-react'

// Opacity (0-100%)
<InputNumberSelect
	value={75}
	onChange={setOpacity}
	min={0}
	max={100}
	step={1}
	icon={<Blend size={16} />}
/>

// Angle (0-360°)
<InputNumberSelect
	value={45}
	onChange={setAngle}
	min={0}
	max={360}
	step={1}
	unit="deg"
	showUnit={true}
	icon={<RotateCw size={16} />}
/>

// Border Radius with units
<InputNumberSelect
	value={8}
	onChange={setRadius}
	min={0}
	max={100}
	step={1}
	unit="px"
	showUnit={true}
	icon={<SquareRoundCorner size={16} />}
/>

// Font Size
<InputNumberSelect
	value={16}
	onChange={setFontSize}
	min={8}
	max={72}
	step={1}
	unit="px"
	showUnit={true}
	icon={<Type size={16} />}
/>

// Line Height (unitless)
<InputNumberSelect
	value={1.5}
	onChange={setLineHeight}
	min={0.8}
	max={3}
	step={0.1}
	precision={1}
	unit="none"
	showUnit={false}
/>

// Vertical orientation
<InputNumberSelect
	value={50}
	onChange={setValue}
	min={0}
	max={100}
	step={1}
	orientation="vertical"
	icon="%"
/>
```

### InputNumberSelect Props

```tsx
interface InputNumberSelectProps {
	// Value control
	value: number
	onChange?: (value: number) => void

	// Range configuration
	min?: number // Default: 0
	max?: number // Default: 100
	step?: number // Default: 1
	precision?: number // Decimal places, default: 0

	// Progression type for dragging
	progression?: 'linear' | 'arithmetic' | 'geometric' | 'paraboloid' | 'exponential'

	// Visual configuration
	orientation?: 'horizontal' | 'vertical' // Default: 'horizontal'
	icon?: React.ReactNode | string // Custom icon or text

	// Unit display
	unit?: 'px' | '%' | 'rem' | 'em' | 'deg' | 'none'
	showUnit?: boolean // Show unit after value

	// Styling
	className?: string // Container classes
	classNameInput?: string // Input field classes
	classNameIcon?: string // Icon container classes

	// State
	disabled?: boolean // Disable component
	isDisabledMouseEvent?: boolean // Disable drag functionality

	// HTML input props
	...HTMLInputElement // All standard input props
}
```

### Progression Types

- **linear** - Linear change (default)
- **arithmetic** - Arithmetic progression (×2)
- **geometric** - Geometric progression (×1.05)
- **paraboloid** - Parabolic acceleration
- **exponential** - Exponential change

## Basic Usage

### Simple Color Picker

```tsx
import { ColorPicker } from '@flowscape-ui/design-system-kit'
;<ColorPicker value="#ff0000" onChange={color => console.log(color)} />
```

### With Custom Dimensions

```tsx
<ColorPicker
	value="rgba(255, 0, 0, 0.5)"
	onChange={setColor}
	width={350}
	height={350}
/>
```

### Gradient Support

```tsx
<ColorPicker
	value="linear-gradient(90deg, #ff0000 0%, #0000ff 100%)"
	onChange={setGradient}
/>
```

## Advanced Configuration

### Hide Specific Components

```tsx
<ColorPicker
	value={color}
	onChange={setColor}
	hideControls={false} // Hide control buttons
	hideInputs={false} // Hide input fields
	hideOpacity={false} // Hide opacity slider
	hidePresets={false} // Hide preset colors
	hideHue={false} // Hide hue slider
	hideEyeDrop={false} // Hide eye dropper
	hideAdvancedSliders={false} // Hide advanced sliders
	hideColorGuide={false} // Hide color guide
	hideInputType={false} // Hide input type dropdown
	hideColorTypeBtns={false} // Hide solid/gradient buttons
	hideGradientType={false} // Hide gradient type controls
	hideGradientAngle={false} // Hide gradient angle controls
	hideGradientStop={false} // Hide gradient stop controls
	hideGradientControls={false} // Hide all gradient controls
	hidePickerSquare={false} // Hide main color square
/>
```

### Custom Presets

```tsx
const customPresets = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  'rgba(255, 255, 0, 1)',
  'linear-gradient(45deg, #ff0000, #0000ff)'
]

<ColorPicker
  value={color}
  onChange={setColor}
  presets={customPresets}
/>
```

### Theme Configuration

```tsx
<ColorPicker
	value={color}
	onChange={setColor}
	disableDarkMode={false} // Disable dark mode
	disableLightMode={false} // Disable light mode
	showHexAlpha={true} // Show alpha in hex values
/>
```

### Custom Styling

```tsx
const customStyles = {
  body: {
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    padding: '16px'
  },
  rbgcpInput: {
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    border: '1px solid #444'
  }
}

<ColorPicker
  value={color}
  onChange={setColor}
  style={customStyles}
  className="my-color-picker"
/>
```

### Configuration Options

```tsx
const config = {
  barSize: 18,                    // Size of slider bars
  crossSize: 18,                  // Size of color picker crosshair
  defaultColor: 'rgba(175, 51, 242, 1)',
  defaultGradient: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
}

<ColorPicker
  value={color}
  onChange={setColor}
  config={config}
/>
```

## Using the Hook

For more control, you can use the `useColorPicker` hook directly:

```tsx
import { useColorPicker } from '@flowscape-ui/design-system-kit'

function CustomColorPicker() {
	const [color, setColor] = useState('rgba(175, 51, 242, 1)')

	const {
		setR,
		setG,
		setB,
		setA,
		setHue,
		setSaturation,
		setLightness,
		valueToHex,
		valueToHSL,
		valueToHSV,
		valueToCmyk,
		isGradient,
		gradientType,
		degrees,
		rgbaArr,
		hslArr,
		previousColors,
	} = useColorPicker(color, setColor)

	return (
		<div>
			<input
				type="range"
				min="0"
				max="255"
				onChange={e => setR(Number(e.target.value))}
			/>
			<p>Current color: {valueToHex()}</p>
			<p>Previous colors: {previousColors.length}</p>
		</div>
	)
}
```

## Props API

### ColorPicker Props

| Prop                   | Type                      | Default                   | Description                                      |
| ---------------------- | ------------------------- | ------------------------- | ------------------------------------------------ |
| `value`                | `string`                  | `'rgba(175, 51, 242, 1)'` | Current color value (RGB, HEX, HSL, or gradient) |
| `onChange`             | `(value: string) => void` | **Required**              | Callback when color changes                      |
| `width`                | `number`                  | `294`                     | Width of the color picker                        |
| `height`               | `number`                  | `294`                     | Height of the color picker                       |
| `hideControls`         | `boolean`                 | `false`                   | Hide control buttons                             |
| `hideInputs`           | `boolean`                 | `false`                   | Hide input fields                                |
| `hideOpacity`          | `boolean`                 | `false`                   | Hide opacity slider                              |
| `hidePresets`          | `boolean`                 | `false`                   | Hide preset colors                               |
| `hideHue`              | `boolean`                 | `false`                   | Hide hue slider                                  |
| `hideEyeDrop`          | `boolean`                 | `false`                   | Hide eye dropper                                 |
| `hideAdvancedSliders`  | `boolean`                 | `false`                   | Hide advanced sliders                            |
| `hideColorGuide`       | `boolean`                 | `false`                   | Hide color guide                                 |
| `hideInputType`        | `boolean`                 | `false`                   | Hide input type dropdown                         |
| `hideColorTypeBtns`    | `boolean`                 | `false`                   | Hide solid/gradient buttons                      |
| `hideGradientType`     | `boolean`                 | `false`                   | Hide gradient type controls                      |
| `hideGradientAngle`    | `boolean`                 | `false`                   | Hide gradient angle controls                     |
| `hideGradientStop`     | `boolean`                 | `false`                   | Hide gradient stop controls                      |
| `hideGradientControls` | `boolean`                 | `false`                   | Hide all gradient controls                       |
| `hidePickerSquare`     | `boolean`                 | `false`                   | Hide main color square                           |
| `presets`              | `string[]`                | `[]`                      | Custom preset colors                             |
| `disableDarkMode`      | `boolean`                 | `false`                   | Disable dark mode                                |
| `disableLightMode`     | `boolean`                 | `false`                   | Disable light mode                               |
| `showHexAlpha`         | `boolean`                 | `false`                   | Show alpha in hex values                         |
| `style`                | `Styles`                  | `{}`                      | Custom styles object                             |
| `className`            | `string`                  | `undefined`               | CSS class name                                   |
| `config`               | `PassedConfig`            | `{}`                      | Configuration options                            |
| `locales`              | `LocalesProps`            | `defaultLocales`          | Localization strings                             |
| `idSuffix`             | `string`                  | `undefined`               | Suffix for element IDs                           |

### Configuration Object

```tsx
interface PassedConfig {
	barSize?: number // Size of slider bars (default: 18)
	crossSize?: number // Size of color picker crosshair (default: 18)
	defaultColor?: string // Default color value
	defaultGradient?: string // Default gradient value
}
```

### Styles Object

```tsx
interface Styles {
	body?: React.CSSProperties
	rbgcpControlBtn?: React.CSSProperties
	rbgcpControlIcon?: React.CSSProperties
	rbgcpInput?: React.CSSProperties
	rbgcpHandle?: React.CSSProperties
	// ... and many more style properties
}
```

## Color Format Support

The color picker supports multiple color formats:

- **RGB**: `rgb(255, 0, 0)` or `rgba(255, 0, 0, 0.5)`
- **HEX**: `#ff0000` or `#ff0000ff`
- **HSL**: `hsl(0, 100%, 50%)` or `hsla(0, 100%, 50%, 0.5)`
- **HSV**: `hsv(0, 100%, 100%)`
- **CMYK**: `cmyk(0, 100%, 100%, 0)`
- **Gradients**: `linear-gradient(90deg, #ff0000 0%, #0000ff 100%)`

## Gradient Support

The color picker includes comprehensive gradient support:

```tsx
// Linear gradient
<ColorPicker
  value="linear-gradient(45deg, #ff0000 0%, #0000ff 50%, #00ff00 100%)"
  onChange={setGradient}
/>

// Radial gradient
<ColorPicker
  value="radial-gradient(circle, #ff0000 0%, #0000ff 100%)"
  onChange={setGradient}
/>
```

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

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes.

### v1.1.0 (Latest)

**🎉 Major Update: Specialized Input Components**

- ✨ **13 new specialized input components** for design properties
- 🎛️ **5 progression types**: linear, arithmetic, geometric, paraboloid, exponential
- 🔄 **Drag-to-change** functionality for all numeric inputs
- 🎨 **Theme support**: light, dark, auto
- 📐 **Vertical and horizontal** orientation
- 🔧 **Modular architecture** for InputColorPicker (hooks, utils, types)
- 🐛 **Bug fixes**: NaN% in gradients, opacity validation
- 📚 **Enhanced documentation** and Storybook examples

**Key Features:**

- Universal InputNumberSelect component for all design properties
- Drag-to-change functionality with 5 progression types
- Custom icons support (string or React components)
- Automatic dark/light theme via Tailwind CSS
- Horizontal and vertical orientation
- Full keyboard navigation support

### v1.0.0

- Initial release as `@flowscape-ui/design-system-kit`
- Full color picker functionality
- Gradient support (linear and radial)
- Multiple color format support (RGB, HSL, HSV, CMYK, HEX)
- Dark/light mode with automatic detection
- Eye dropper functionality
- Advanced controls and sliders
- Full TypeScript support with type definitions
- Optimized bundle size (43KB minified)
