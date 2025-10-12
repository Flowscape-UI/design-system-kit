import { cn } from '../../utils/cn'

export const Divider = ({ className }: { className?: string }) => {
	return <div className={cn('w-px h-4 mx-1', className)} />
}
