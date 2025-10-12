import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { InputImageSelect, type ImageFilters } from '../input-image-select'
import { rotateImage90Degrees } from '../input-image-select/utils'

const computeRotationScale = (
	containerWidth: number,
	containerHeight: number,
	imageWidth: number,
	imageHeight: number,
	rotation: number
) => {
	if (!containerWidth || !containerHeight || !imageWidth || !imageHeight) {
		return 1
	}

	const baseScale = Math.max(
		containerWidth / imageWidth,
		containerHeight / imageHeight
	)
	const scaledWidth = imageWidth * baseScale
	const scaledHeight = imageHeight * baseScale
	const radians = (rotation * Math.PI) / 180
	const cos = Math.abs(Math.cos(radians))
	const sin = Math.abs(Math.sin(radians))
	const rotatedWidth = scaledWidth * cos + scaledHeight * sin
	const rotatedHeight = scaledWidth * sin + scaledHeight * cos
	const adjustScale = Math.max(
		1,
		containerWidth / rotatedWidth,
		containerHeight / rotatedHeight
	)
	const scale = baseScale * adjustScale
	return Number.isFinite(scale) ? scale : 1
}

const meta = {
	title: 'Components/InputImageSelect',
	component: InputImageSelect,
	parameters: {
		layout: 'centered',
		docs: {
			toc: {
				title: 'Table of Contents',
			},
		},
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#1a1a1a' },
			],
		},
	},
	tags: ['autodocs'],
	argTypes: {
		imageUrl: {
			control: 'text',
			description: 'Current image URL',
		},
		onImageChange: {
			description: 'Callback when image changes',
		},
		onHideImage: {
			description: 'Callback when image visibility toggles',
		},
		onDeleteImage: {
			description: 'Callback when image is deleted',
		},
		className: {
			control: 'text',
			description: 'Custom classes for the container',
		},
		title: {
			control: 'text',
			description: 'Title shown in picker header',
		},
	},
} satisfies Meta<typeof InputImageSelect>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic example of InputImageSelect component.
 * Use Controls to change parameters.
 * Switch background in toolbar to change theme (light/dark).
 */
export const Default: Story = {
	args: {
		title: 'Image',
	},
	render: () => {
		const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)

		const handleImageChange = (file: File | null) => {
			if (file) {
				const reader = new FileReader()
				reader.onloadend = () => {
					setImageUrl(reader.result as string)
				}
				reader.readAsDataURL(file)
			}
		}

		return (
			<div className="space-y-4">
				<InputImageSelect
					imageUrl={imageUrl}
					onImageChange={handleImageChange}
				/>
				<p className="text-center text-sm text-gray-600 dark:text-gray-300">
					{imageUrl ? 'Image selected' : 'No image selected'}
				</p>
			</div>
		)
	},
}

/**
 * ## Background Image
 * Component for controlling element background image.
 */
export const BackgroundImage: Story = {
	args: {
		title: 'Background Image',
	},
	render: () => {
		const [imageUrl, setImageUrl] = useState<string | undefined>(
			'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
		)

		const handleImageChange = (file: File | null) => {
			if (file) {
				const reader = new FileReader()
				reader.onloadend = () => {
					setImageUrl(reader.result as string)
				}
				reader.readAsDataURL(file)
			}
		}

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<InputImageSelect
					imageUrl={imageUrl}
					onImageChange={handleImageChange}
					title="Background Image"
				/>
				<div
					className="w-80 h-48 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-bold text-2xl"
					style={{
						backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
						backgroundColor: imageUrl ? 'transparent' : '#e5e7eb',
					}}
				>
					{!imageUrl && 'No Background'}
				</div>
			</div>
		)
	},
}

/**
 * ## With Actions
 * Demonstrating all available actions: hide and delete.
 */
export const WithActions: Story = {
	args: {
		title: 'Image with Actions',
	},
	render: () => {
		const [imageUrl, setImageUrl] = useState<string | undefined>(
			'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
		)
		const [isHidden, setIsHidden] = useState(false)
		const [rotation, setRotation] = useState(0)
		const [rotatedImageUrl, setRotatedImageUrl] = useState<string | undefined>(
			imageUrl
		)
		const [isRotating, setIsRotating] = useState(false)
		const [opacityValue, setOpacityValue] = useState(100)

		const handleImageChange = (file: File | null) => {
			if (file) {
				const reader = new FileReader()
				reader.onloadend = () => {
					const url = reader.result as string
					setImageUrl(url)
					setRotatedImageUrl(url)
					setRotation(0)
				}
				reader.readAsDataURL(file)
			}
		}

		const handleDelete = () => {
			setImageUrl(undefined)
			setRotatedImageUrl(undefined)
			setRotation(0)
		}

		const handleHide = (hidden: boolean) => {
			setIsHidden(hidden)
		}

		useEffect(() => {
			if (!imageUrl) {
				setRotatedImageUrl(undefined)
				return
			}

			if (rotation === 0) {
				setRotatedImageUrl(imageUrl)
				return
			}

			const applyRotation = async () => {
				setIsRotating(true)
				try {
					const rotated = await rotateImage90Degrees(imageUrl, rotation)
					setRotatedImageUrl(rotated)
				} catch (error) {
					console.error('Failed to rotate image:', error)
					setRotatedImageUrl(imageUrl)
				} finally {
					setIsRotating(false)
				}
			}

			applyRotation()
		}, [imageUrl, rotation])

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<InputImageSelect
					imageUrl={imageUrl}
					opacity={opacityValue}
					onOpacityChange={setOpacityValue}
					onImageChange={handleImageChange}
					onDeleteImage={handleDelete}
					onHideImage={handleHide}
					rotation={rotation}
					onRotationChange={setRotation}
					title="Image with Actions"
				/>
				<div className="w-80 h-48 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center">
					{isRotating ? (
						<span className="text-sm text-gray-500 dark:text-gray-300">
							Rotating...
						</span>
					) : rotatedImageUrl && !isHidden ? (
						<img
							src={rotatedImageUrl}
							alt="Canvas preview"
							className="w-full h-full object-cover"
							style={{
								opacity: opacityValue / 100,
							}}
						/>
					) : (
						<span className="text-white font-bold text-2xl">
							{!imageUrl ? 'No Image' : 'Hidden'}
						</span>
					)}
				</div>
				<p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
					Use eye icon to hide/show image, trash icon to delete it
				</p>
			</div>
		)
	},
}

/**
 * ## With Image Filters
 * Demonstrating image filters: exposure, contrast, saturation, temperature, tint, highlights, and shadows.
 * Filters are applied in real-time and can be used to adjust the image appearance.
 */
export const WithImageFilters: Story = {
	args: {
		title: 'Image with Filters',
	},
	render: () => {
		const [imageUrl, setImageUrl] = useState<string | undefined>(
			'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
		)
		const [filters, setFilters] = useState<ImageFilters>({
			exposure: 0,
			contrast: 0,
			saturation: 0,
			temperature: 0,
			tint: 0,
			highlights: 0,
			shadows: 0,
		})

		const handleImageChange = (file: File | null) => {
			if (file) {
				const reader = new FileReader()
				reader.onloadend = () => {
					setImageUrl(reader.result as string)
				}
				reader.readAsDataURL(file)
			}
		}

		const handleFiltersChange = (newFilters: ImageFilters) => {
			setFilters(newFilters)
		}

		const getFilterStyle = () => {
			const brightness = 1 + filters.exposure / 100
			const contrast = 1 + filters.contrast / 100
			const saturate = 1 + filters.saturation / 100
			const hueRotate = filters.temperature * 1.8

			return {
				filter: `brightness(${brightness}) contrast(${contrast}) saturate(${saturate}) hue-rotate(${hueRotate}deg)`,
			}
		}

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<InputImageSelect
					imageUrl={imageUrl}
					onImageChange={handleImageChange}
					filters={filters}
					onFiltersChange={handleFiltersChange}
					title="Image with Filters"
				/>
				<div
					className="w-80 h-48 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-bold text-2xl"
					style={{
						backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
						backgroundColor: imageUrl ? 'transparent' : '#e5e7eb',
						...getFilterStyle(),
					}}
				>
					{!imageUrl && 'No Image'}
				</div>
				<p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
					Click on the image to open the modal and adjust filters using sliders
				</p>
			</div>
		)
	},
}
