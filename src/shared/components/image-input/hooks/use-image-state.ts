import { useEffect, useState } from 'react'
import type { UseImageStateReturn } from '../types'

/**
 * Хук для управления состоянием изображения
 * Синхронизирует внутреннее состояние с внешними пропсами
 *
 * @param initialImageUrl - Начальный URL изображения
 * @param initialOpacity - Начальная прозрачность (0-100)
 * @param initialRotation - Начальный угол поворота (0-360)
 * @returns Объект с состоянием и методами управления
 */
export const useImageState = (
	initialImageUrl?: string,
	initialOpacity: number = 100,
	initialRotation: number = 0
): UseImageStateReturn => {
	const [imageUrl, setImageUrl] = useState<string | undefined>(initialImageUrl)
	const [isHidden, setIsHidden] = useState(false)
	const [opacity, setOpacity] = useState(initialOpacity)
	const [rotation, setRotation] = useState(initialRotation)

	// Синхронизация с внешними пропсами
	useEffect(() => {
		setImageUrl(initialImageUrl)
	}, [initialImageUrl])

	useEffect(() => {
		setOpacity(initialOpacity)
	}, [initialOpacity])

	useEffect(() => {
		setRotation(initialRotation)
	}, [initialRotation])

	const toggleHidden = () => {
		setIsHidden(prev => !prev)
	}

	return {
		imageUrl,
		isHidden,
		opacity,
		rotation,
		setImageUrl,
		setIsHidden,
		setOpacity,
		setRotation,
		toggleHidden,
	}
}
