# InputNumberSelect Module

Числовой input с drag-to-change функциональностью и различными типами прогрессий.

## Установка

```bash
npm install @flowscape-ui/design-system-kit
```

## Импорт

```typescript
// Модульный импорт (рекомендуется)
import { InputNumberSelect } from '@flowscape-ui/design-system-kit/input-number-select'
import type {
	InputNumberSelectProps,
	Progression,
} from '@flowscape-ui/design-system-kit/input-number-select'

// Или из главного модуля
import { InputNumberSelect } from '@flowscape-ui/design-system-kit'
```

## Использование

```typescript
import { useState } from 'react'
import { InputNumberSelect } from '@flowscape-ui/design-system-kit/input-number-select'

function App() {
  const [value, setValue] = useState(50)

  return (
    <InputNumberSelect
      value={value}
      onChange={setValue}
      min={0}
      max={100}
      step={1}
      icon="%"
      progression="linear"
    />
  )
}
```

## Props

| Prop             | Type                                | Default        | Description                     |
| ---------------- | ----------------------------------- | -------------- | ------------------------------- |
| `value`          | `number \| string`                  | **Required**   | Текущее значение                |
| `onChange`       | `(value: number \| string) => void` | -              | Callback при изменении          |
| `min`            | `number`                            | -              | Минимальное значение            |
| `max`            | `number`                            | -              | Максимальное значение           |
| `step`           | `number`                            | `0`            | Шаг изменения                   |
| `precision`      | `number`                            | `0`            | Точность (знаков после запятой) |
| `icon`           | `React.JSX.Element \| string`       | -              | Иконка или символ               |
| `orientation`    | `'horizontal' \| 'vertical'`        | `'horizontal'` | Ориентация                      |
| `progression`    | `Progression`                       | `'linear'`     | Тип прогрессии                  |
| `className`      | `string`                            | -              | CSS класс                       |
| `classNameInput` | `string`                            | -              | CSS класс для input             |

## Типы прогрессий

- **linear**: Линейное изменение (value + delta)
- **arithmetic**: Арифметическое (value + delta \* 2)
- **geometric**: Геометрическое (с коэффициентом 1.05)
- **paraboloid**: Параболическое (value + delta _ |delta| _ 0.1)
- **exponential**: Экспоненциальное (value _ (1 + delta _ 0.01))

## Примеры

### Процентный input

```typescript
<InputNumberSelect
  value={opacity}
  onChange={setOpacity}
  min={0}
  max={100}
  step={1}
  icon="%"
/>
```

### Вертикальный input

```typescript
<InputNumberSelect
  value={height}
  onChange={setHeight}
  min={0}
  max={1000}
  step={10}
  orientation="vertical"
  icon="H"
/>
```

### С кастомной иконкой

```typescript
import { Ruler } from 'lucide-react'

<InputNumberSelect
  value={width}
  onChange={setWidth}
  icon={<Ruler size={16} />}
/>
```

## Размер модуля

- **ESM**: 3.02 KB
- **CJS**: 3.31 KB
