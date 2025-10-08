export interface InputColorPickerProps {
	title?: string
	value?: string
	className?: string
	showOpacity?: boolean
	showGradient?: boolean
	pickerSize?: number
	onChange?: (color: string) => void
	onShowPicker?: (hidden: boolean) => void
	onHideBackground?: (hidden: boolean) => void
	onOpacityChange?: (opacity: number) => void
	onDeleteBackground?: () => void
}

export interface ParsedColor {
	hex: string
	opacity: number
}

export interface RGB {
	r: number
	g: number
	b: number
}

export interface Position {
	top: number
	left: number
}

export interface DragStart {
	x: number
	y: number
	top: number
	left: number
}
