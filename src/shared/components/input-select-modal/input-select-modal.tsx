import { X } from 'lucide-react'
import { useDraggable } from '../../hooks/use-draggable'
import { cn } from '../../utils/cn'

const THEME_CLASSES = {
	light: {
		modal: 'bg-white border-1 border-gray-300',
		title: 'text-gray-900',
		closeButton: 'text-gray-400 hover:text-gray-600',
	},
	dark: {
		modal: 'dark:bg-[#1e2939] dark:border-gray-600',
		title: 'dark:text-gray-200',
		closeButton: 'dark:text-gray-500 dark:hover:text-gray-200',
	},
} as const

interface InputSelectModalProps {
	title: string
	onClose: () => void
	children: React.ReactNode
	inputRef: React.RefObject<HTMLDivElement | null>
	className?: string
	classNameHeader?: string
	classNameTitle?: string
	classNameCloseButton?: string
	classNameContent?: string
}

export function InputSelectModal({
	title,
	onClose,
	children,
	inputRef,
	className,
	classNameHeader,
	classNameTitle,
	classNameCloseButton,
	classNameContent,
}: InputSelectModalProps) {
	const { position, handleDragStart } = useDraggable()

	return (
		<div
			ref={inputRef}
			className={cn(
				'fixed z-50 overflow-hidden rounded-md',
				THEME_CLASSES.light.modal,
				THEME_CLASSES.dark.modal,
				className
			)}
			style={{
				top: `${position.top}px`,
				left: `${position.left}px`,
				transform: 'translate(-50%, -50%)',
			}}
		>
			<header
				className={cn(
					'flex items-center justify-between mb-2 py-1 cursor-move pl-3 pr-1',
					classNameHeader
				)}
				onMouseDown={e => handleDragStart(e, inputRef.current)}
			>
				<span
					className={cn(
						'font-mono text-xs select-none',
						THEME_CLASSES.light.title,
						THEME_CLASSES.dark.title,
						classNameTitle
					)}
				>
					{title}
				</span>
				<button
					className={cn(
						THEME_CLASSES.light.closeButton,
						THEME_CLASSES.dark.closeButton,
						classNameCloseButton
					)}
					onClick={() => onClose()}
				>
					<X size={22} />
				</button>
			</header>

			<div className={cn('px-3 pb-3', classNameContent)}>{children}</div>
		</div>
	)
}
