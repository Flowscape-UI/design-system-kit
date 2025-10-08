# ColorPicker Module

Полнофункциональный color picker с поддержкой градиентов, множества форматов цветов и eye dropper.

## Установка

```bash
npm install @flowscape-ui/design-system-kit
```

## Импорт

```typescript
// Модульный импорт (рекомендуется)
import {
	ColorPicker,
	useColorPicker,
} from '@flowscape-ui/design-system-kit/color-picker'
import type { ColorPickerProps } from '@flowscape-ui/design-system-kit/color-picker'

// Или из главного модуля
import { ColorPicker } from '@flowscape-ui/design-system-kit'
```

## Использование

```typescript
import { useState } from 'react'
import { ColorPicker } from '@flowscape-ui/design-system-kit/color-picker'

function App() {
	const [color, setColor] = useState('rgba(175, 51, 242, 1)')

	return (
		<ColorPicker value={color} onChange={setColor} width={300} height={300} />
	)
}
```

## Props

| Prop              | Type                      | Default                   | Description              |
| ----------------- | ------------------------- | ------------------------- | ------------------------ |
| `value`           | `string`                  | `'rgba(175, 51, 242, 1)'` | Текущий цвет             |
| `onChange`        | `(value: string) => void` | **Required**              | Callback при изменении   |
| `width`           | `number`                  | `294`                     | Ширина picker            |
| `height`          | `number`                  | `294`                     | Высота picker            |
| `hideControls`    | `boolean`                 | `false`                   | Скрыть кнопки управления |
| `hideInputs`      | `boolean`                 | `false`                   | Скрыть поля ввода        |
| `hideOpacity`     | `boolean`                 | `false`                   | Скрыть слайдер opacity   |
| `hidePresets`     | `boolean`                 | `false`                   | Скрыть пресеты           |
| `hideHue`         | `boolean`                 | `false`                   | Скрыть слайдер hue       |
| `hideEyeDrop`     | `boolean`                 | `false`                   | Скрыть eye dropper       |
| `presets`         | `string[]`                | `[]`                      | Кастомные пресеты        |
| `disableDarkMode` | `boolean`                 | `false`                   | Отключить темную тему    |
| `showHexAlpha`    | `boolean`                 | `false`                   | Показать alpha в HEX     |

## Хук useColorPicker

```typescript
import { useColorPicker } from '@flowscape-ui/design-system-kit/color-picker'

function CustomPicker() {
	const [color, setColor] = useState('rgba(175, 51, 242, 1)')

	const {
		setR,
		setG,
		setB,
		setA,
		valueToHex,
		valueToHSL,
		isGradient,
		gradientType,
	} = useColorPicker(color, setColor)

	return (
		<div>
			<p>Current: {valueToHex()}</p>
			{/* ... */}
		</div>
	)
}
```

## Поддерживаемые форматы

- **RGB**: `rgb(255, 0, 0)` или `rgba(255, 0, 0, 0.5)`
- **HEX**: `#ff0000` или `#ff0000ff`
- **HSL**: `hsl(0, 100%, 50%)`
- **HSV**: `hsv(0, 100%, 100%)`
- **CMYK**: `cmyk(0, 100%, 100%, 0)`
- **Gradients**: `linear-gradient(90deg, #ff0000 0%, #0000ff 100%)`

## Размер модуля

- **ESM**: 59.06 KB
- **CJS**: 60.98 KB
