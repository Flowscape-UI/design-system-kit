import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputUploadImage } from '../input-upload-image'

const meta = {
	title: 'Components/InputUploadImage',
	component: InputUploadImage,
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
} satisfies Meta<typeof InputUploadImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		title: 'Upload Image',
	},
}

export const Interactive: Story = {
	args: {
		title: 'Image Upload',
	},
	render: () => {
		const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
		const [fileName, setFileName] = useState<string | undefined>(undefined)
		const [isHidden, setIsHidden] = useState(false)

		const handleImageChange = (file: File | null) => {
			if (file) {
				const reader = new FileReader()
				reader.onloadend = () => {
					setImageUrl(reader.result as string)
					setFileName(file.name)
				}
				reader.readAsDataURL(file)
			}
		}

		const handleDelete = () => {
			setImageUrl(undefined)
			setFileName(undefined)
			setIsHidden(false)
		}

		const handleHide = (hidden: boolean) => {
			setIsHidden(hidden)
		}

		return (
			<div className="space-y-4 flex flex-col items-center gap-4">
				<InputUploadImage
					imageUrl={imageUrl}
					fileName={fileName}
					onImageChange={handleImageChange}
					onDeleteImage={handleDelete}
					onHideImage={handleHide}
					title="Choose an image"
				/>

				{imageUrl && (
					<div className="w-80 h-48 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center">
						{isHidden ? (
							<span className="text-gray-500 dark:text-gray-400 font-medium">
								Image Hidden
							</span>
						) : (
							<img
								src={imageUrl}
								alt="Preview"
								className="w-full h-full object-cover"
							/>
						)}
					</div>
				)}

				{fileName && (
					<div className="text-center">
						<p className="text-sm font-medium text-gray-900 dark:text-gray-200">
							Selected file:
						</p>
						<p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
							{fileName}
						</p>
					</div>
				)}
			</div>
		)
	},
}

export const WithCustomTitle: Story = {
	args: {
		title: 'product-image.png',
		imageUrl:
			'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
		fileName: 'product-image.png',
	},
}
