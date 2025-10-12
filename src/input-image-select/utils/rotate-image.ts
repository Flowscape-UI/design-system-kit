/**
 * Rotates an image on canvas and returns the rotated image as a data URL.
 *
 * @param imageUrl - The source image URL (can be data URL or regular URL)
 * @param rotation - Rotation angle in degrees (0, 90, 180, 270, etc.)
 * @param quality - JPEG quality (0-1), default 0.95
 * @returns Promise that resolves to the rotated image data URL
 */
export const rotateImageOnCanvas = async (
	imageUrl: string,
	rotation: number,
	quality: number = 0.95
): Promise<string> => {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.crossOrigin = 'anonymous'

		img.onload = () => {
			try {
				const canvas = document.createElement('canvas')
				const ctx = canvas.getContext('2d')

				if (!ctx) {
					reject(new Error('Failed to get canvas context'))
					return
				}

				// Normalize rotation to 0-360 range
				const normalizedRotation = ((rotation % 360) + 360) % 360

				// Calculate canvas dimensions based on rotation
				const radians = (normalizedRotation * Math.PI) / 180
				const cos = Math.abs(Math.cos(radians))
				const sin = Math.abs(Math.sin(radians))

				const newWidth = img.width * cos + img.height * sin
				const newHeight = img.width * sin + img.height * cos

				canvas.width = newWidth
				canvas.height = newHeight

				// Move to center of canvas
				ctx.translate(newWidth / 2, newHeight / 2)

				// Rotate
				ctx.rotate(radians)

				// Draw image centered
				ctx.drawImage(img, -img.width / 2, -img.height / 2)

				// Convert to data URL
				const dataUrl = canvas.toDataURL('image/jpeg', quality)
				resolve(dataUrl)
			} catch (error) {
				reject(error)
			}
		}

		img.onerror = () => {
			reject(new Error('Failed to load image'))
		}

		img.src = imageUrl
	})
}

/**
 * Rotates an image by 90-degree increments only (optimized for common use case).
 * This version maintains the exact dimensions for 90/270 rotations.
 *
 * @param imageUrl - The source image URL
 * @param rotation - Rotation angle (should be 0, 90, 180, or 270)
 * @param quality - JPEG quality (0-1), default 0.95
 * @returns Promise that resolves to the rotated image data URL
 */
export const rotateImage90Degrees = async (
	imageUrl: string,
	rotation: number,
	quality: number = 0.95
): Promise<string> => {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.crossOrigin = 'anonymous'

		img.onload = () => {
			try {
				const canvas = document.createElement('canvas')
				const ctx = canvas.getContext('2d')

				if (!ctx) {
					reject(new Error('Failed to get canvas context'))
					return
				}

				// Normalize rotation to 0, 90, 180, or 270
				const normalizedRotation = ((rotation % 360) + 360) % 360
				const steps = Math.round(normalizedRotation / 90) % 4

				// Set canvas dimensions based on rotation
				if (steps === 1 || steps === 3) {
					// 90 or 270 degrees - swap width and height
					canvas.width = img.height
					canvas.height = img.width
				} else {
					// 0 or 180 degrees - keep original dimensions
					canvas.width = img.width
					canvas.height = img.height
				}

				// Move to center and rotate
				ctx.translate(canvas.width / 2, canvas.height / 2)
				ctx.rotate((steps * Math.PI) / 2)

				// Draw image centered
				ctx.drawImage(img, -img.width / 2, -img.height / 2)

				// Convert to data URL
				const dataUrl = canvas.toDataURL('image/jpeg', quality)
				resolve(dataUrl)
			} catch (error) {
				reject(error)
			}
		}

		img.onerror = () => {
			reject(new Error('Failed to load image'))
		}

		img.src = imageUrl
	})
}
