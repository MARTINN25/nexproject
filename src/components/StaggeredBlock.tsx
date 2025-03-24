// StaggeredBlock.tsx
'use client'
import React from 'react'

interface StaggeredBlockProps {
	visible: boolean
	children: React.ReactNode
	delay?: number // задержка в секундах, например
}

export function StaggeredBlock({
	visible,
	children,
	delay = 0,
}: StaggeredBlockProps) {
	return (
		<div
			style={{ transitionDelay: `${delay}s` }}
			className={`
        transition-all duration-300 transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
		>
			{children}
		</div>
	)
}
