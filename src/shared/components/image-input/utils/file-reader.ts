/**
 * Утилиты для работы с файлами
 */

/**
 * Читает файл и возвращает его как Data URL
 * @param file - Файл для чтения
 * @returns Promise с Data URL строкой
 */
export const readFileAsDataURL = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.onloadend = () => {
			if (typeof reader.result === 'string') {
				resolve(reader.result)
			} else {
				reject(new Error('Failed to read file as string'))
			}
		}

		reader.onerror = () => {
			reject(new Error('Error reading file'))
		}

		reader.readAsDataURL(file)
	})
}

/**
 * Проверяет, является ли файл изображением
 * @param file - Файл для проверки
 * @returns true если файл - изображение
 */
export const isImageFile = (file: File): boolean => {
	return file.type.startsWith('image/')
}

/**
 * Получает расширение файла
 * @param fileName - Имя файла
 * @returns Расширение файла (например, 'jpg', 'png')
 */
export const getFileExtension = (fileName: string): string => {
	const parts = fileName.split('.')
	return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : ''
}
