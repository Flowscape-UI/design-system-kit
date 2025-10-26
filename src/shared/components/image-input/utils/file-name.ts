/**
 * Утилиты для работы с именами файлов
 */

/**
 * Определяет, какое имя файла отображать
 * @param currentFileName - Текущее имя файла (из состояния)
 * @param initialFileName - Начальное имя файла (из пропсов)
 * @param imageUrl - URL изображения
 * @param fallbackTitle - Fallback текст, если нет файла
 * @returns Строка для отображения
 */
export const getFileNameDisplay = (
	currentFileName?: string,
	initialFileName?: string,
	imageUrl?: string,
	fallbackTitle: string = 'Upload image'
): string => {
	if (currentFileName) {
		return currentFileName
	}
	if (imageUrl && initialFileName) {
		return initialFileName
	}
	return fallbackTitle
}

/**
 * Обрезает длинное имя файла для отображения
 * @param fileName - Имя файла
 * @param maxLength - Максимальная длина
 * @returns Обрезанное имя файла
 */
export const truncateFileName = (
	fileName: string,
	maxLength: number = 30
): string => {
	if (fileName.length <= maxLength) {
		return fileName
	}

	const extension = fileName.split('.').pop() || ''
	const nameWithoutExt = fileName.slice(0, fileName.lastIndexOf('.'))
	const truncatedName = nameWithoutExt.slice(
		0,
		maxLength - extension.length - 4
	)

	return `${truncatedName}...${extension}`
}
