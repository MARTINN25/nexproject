'use client' // Если Next.js 13 + App Router + хуки

import React, { useState, useEffect } from 'react'

export interface TypewriterTextProps {
	text: string
	speed?: number // Интервал печати (мс)
	className?: string // Доп. классы Tailwind
	shouldType?: boolean // true -> печатает, false -> стирает
}

export function TypewriterText({
	text,
	speed = 80,
	className = '',
	shouldType = false,
}: TypewriterTextProps) {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | null = null

		if (shouldType) {
			// Печатаем (движемся вперёд)
			interval = setInterval(() => {
				setIndex(prev => {
					if (prev < text.length) {
						return prev + 1
					} else {
						clearInterval(interval!)
						return prev
					}
				})
			}, speed)
		} else {
			// Стираем (движемся назад)
			interval = setInterval(() => {
				setIndex(prev => {
					if (prev > 0) {
						return prev - 1
					} else {
						clearInterval(interval!)
						return 0
					}
				})
			}, speed)
		}

		return () => {
			if (interval) clearInterval(interval)
		}
	}, [shouldType, text, speed])

	const displayText = text.slice(0, index)

	return (
		<div className={className}>
			{displayText}
			{shouldType && (
				<span className='inline-block w-1 h-5 bg-gray-300 ml-1 animate-pulse' />
			)}
		</div>
	)
}
