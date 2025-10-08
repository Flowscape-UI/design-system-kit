export type Unit = 'px' | '%' | 'rem' | 'em' | 'deg' | 'pt' | 'none'

export type Orientation = 'horizontal' | 'vertical'

export type Progression =
	| 'linear'
	| 'arithmetic'
	| 'geometric'
	| 'paraboloid'
	| 'exponential'

export interface CommonInputProps
	extends Omit<
		React.ComponentProps<'input'>,
		| 'defaultValue'
		| 'onChange'
		| 'value'
		| 'type'
		| 'min'
		| 'max'
		| 'step'
		| 'className'
	> {
	value: number
	onChange?: (value: number) => void
	min?: number
	max?: number
	step?: number
	precision?: number
	progression?: Progression
	orientation?: Orientation
	icon?: React.JSX.Element | string
	className?: string
	classNameInput?: string
	classNameIcon?: string
	theme?: 'light' | 'dark' | 'auto'
}

export interface BaseInputProps extends CommonInputProps {
	unit?: Unit
	showUnit?: boolean
}

export type BaseInputPropsWithoutUnit = CommonInputProps
