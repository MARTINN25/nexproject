'use client' // Если используете Next.js 13 + App Router + хуки
import React, { useState } from 'react'
import { StaggeredBlock } from '@/components/StaggeredBlock'
import { TypewriterText } from './TypewriterText'

// Интерфейс для массива плашек
interface PillData {
	title: string
	detail: string
}

// Массив плашек
const pills: PillData[] = [
	{
		title: 'Secure',
		detail:
			'Your transactions and data are protected with enterprise-grade encryption and real-time threat detection.',
	},
	{
		title: 'AI-Powered',
		detail:
			'Nexn AI uses advanced machine learning to understand wallets, spot trends, and give you instant answers.',
	},
	{
		title: 'Real-Time',
		detail:
			'Get live updates on transactions, wallet activity, and market movements — all without delay.',
	},
	{
		title: 'Advanced Analytics',
		detail:
			'Dive deep into wallet behavior, token flows, and on-chain trends with powerful data visualizations.',
	},
	{
		title: 'Seamless Integration',
		detail:
			'Easily connect to major blockchain networks and tools — no setup headaches, just results.',
	},
	{
		title: 'Multi-Chain Support',
		detail:
			'Analyze across Ethereum, BNB Chain, and more — all in one place, fully unified.',
	},
]

// Интерфейс для пропсов компонента (можно расширить при необходимости)
interface HoverPillsProps {
	visible: boolean // Если вы хотите управлять видимостью анимации
	children?: React.ReactNode // Если хотите использовать <HoverPills>child</HoverPills>
}

// Основной экспортируемый компонент
export default function HoverPills({ visible }: HoverPillsProps) {
	// Храним индекс плашки, на которую навели курсор
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div>
			{/* Список плашек */}
			<div className='flex flex-wrap gap-2'>
				{pills.map((pill, i) => (
					<StaggeredBlock key={i} visible={visible} delay={i * 0.2}>
						<div
							onMouseEnter={() => setHoveredIndex(i)}
							onMouseLeave={() => setHoveredIndex(null)}
							className='
                px-3 py-1 bg-[#121212] text-[#999999] text-[12px]
                rounded cursor-pointer
                transition-transform duration-300
                hover:scale-105 hover:bg-[#444444] hover:text-white
              '
						>
							{pill.title}
						</div>
					</StaggeredBlock>
				))}
			</div>

			{/* Блок для текста (показываем, если hoveredIndex !== null) */}
			<div className='mt-16 max-w-[305px] text-[#A2A2A2] text-[15px]'>
				{hoveredIndex !== null && (
					<TypewriterText
						text={pills[hoveredIndex].detail}
						speed={20}
						shouldType={true}
					/>
				)}
			</div>
		</div>
	)
}
