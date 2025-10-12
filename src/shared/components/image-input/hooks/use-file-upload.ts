import { useRef, useState } from 'react'
import type { UseFileUploadReturn } from '../types'
import { readFileAsDataURL } from '../utils/file-reader'

/**
 * Хук для управления загрузкой файлов
 * Обрабатывает выбор файла, чтение и preview
 *
 * @param onImageChange - Callback при изменении файла
 * @param initialImageUrl - Начальный URL изображения
 * @param initialFileName - Начальное имя файла
 * @returns Объект с состоянием и методами для работы с файлами
 */
export const useFileUpload = (
	onImageChange?: (file: File | null) => void,
	initialImageUrl?: string,
	initialFileName?: string
): UseFileUploadReturn => {
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [previewUrl, setPreviewUrl] = useState<string | undefined>(
		initialImageUrl
	)
	const [fileName, setFileName] = useState<string | undefined>(initialFileName)

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			try {
				const dataUrl = await readFileAsDataURL(file)
				setPreviewUrl(dataUrl)
				setFileName(file.name)
				onImageChange?.(file)
			} catch (error) {
				console.error('Error reading file:', error)
				onImageChange?.(null)
			}
		}
	}

	const handleClick = () => {
		fileInputRef.current?.click()
	}

	const clearFile = () => {
		setPreviewUrl(undefined)
		setFileName(undefined)
		if (fileInputRef.current) {
			fileInputRef.current.value = ''
		}
	}

	return {
		previewUrl,
		fileName,
		fileInputRef,
		handleFileChange,
		handleClick,
		clearFile,
	}
}
