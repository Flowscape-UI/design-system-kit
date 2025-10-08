# InputColorPicker Module

Компактный input с интегрированным color picker в draggable modal.

## Установка

```bash
npm install @flowscape-ui/design-system-kit
```

## Импорт

```typescript
// Модульный импорт (рекомендуется)
import { InputColorPicker } from '@flowscape-ui/design-system-kit/input-color-picker'
import type { InputColorPickerProps } from '@flowscape-ui/design-system-kit/input-color-picker'

// Или из главного модуля
import { InputColorPicker } from '@flowscape-ui/design-system-kit'
```

## Использование

```typescript
import { useState } from 'react'
import { InputColorPicker } from '@flowscape-ui/design-system-kit/input-color-picker'

function App() {
  const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 1)')

  return (
    <InputColorPicker
      title="Background Color"
      value={bgColor}
      onChange={setBgColor}
      onOpacityChange={(opacity) => console.log(opacity)}
    />
  )
}
```

## Props

| Prop                 | Type                        | Default                 | Description                    |
| -------------------- | --------------------------- | ----------------------- | ------------------------------ |
| `value`              | `string`                    | `'rgba(255,255,255,1)'` | Текущий цвет                   |
| `onChange`           | `(color: string) => void`   | -                       | Callback при изменении цвета   |
| `title`              | `string`                    | `'Background Color'`    | Заголовок modal                |
| `className`          | `string`                    | -                       | CSS класс                      |
| `onShowPicker`       | `(hidden: boolean) => void` | -                       | Callback при открытии/закрытии |
| `onHideBackground`   | `(hidden: boolean) => void` | -                       | Callback при скрытии фона      |
| `onOpacityChange`    | `(opacity: number) => void` | -                       | Callback при изменении opacity |
| `onDeleteBackground` | `() => void`                | -                       | Callback при удалении фона     |

## Особенности

### Компактный интерфейс

- Preview цвета с checkerboard паттерном
- HEX input с автоформатированием
- Opacity slider с процентами
- Кнопки видимости и удаления

### Draggable Modal

- Перемещаемое окно с ColorPicker
- Центрируется при открытии
- Закрывается по кнопке X

### Поддержка градиентов

- Автоматическое определение градиентов
- Отображение типа (Linear/Radial/Gradient)
- Переключение между solid и gradient

## Примеры

### Базовое использование

```typescript
<InputColorPicker
  value={color}
  onChange={setColor}
/>
```

### С callbacks

```typescript
<InputColorPicker
  title="Text Color"
  value={textColor}
  onChange={setTextColor}
  onOpacityChange={(opacity) => {
    console.log('Opacity:', opacity)
  }}
  onHideBackground={(hidden) => {
    console.log('Background hidden:', hidden)
  }}
  onDeleteBackground={() => {
    setTextColor('transparent')
  }}
/>
```

### С кастомным стилем

```typescript
<InputColorPicker
  value={color}
  onChange={setColor}
  className="my-custom-input"
/>
```

## Размер модуля

- **ESM**: 61.62 KB (включает ColorPicker + InputNumberSelect)
- **CJS**: 63.68 KB

## Зависимости

- `@flowscape-ui/design-system-kit/color-picker`
- `@flowscape-ui/design-system-kit/input-number-select`
- `lucide-react` (иконки)
