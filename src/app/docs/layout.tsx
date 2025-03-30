// app/(docs)/layout.tsx
import React from 'react'
import DocsSidebar from '@/components/docs/DocsSidebar'
import AnchorNav from '@/components/docs/AnchorNav'

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex min-h-screen bg-black text-white'>
			{/* Левое меню навигации по разделам документации */}
			<aside className='w-60 p-6 border-r border-gray-800'>
				<DocsSidebar />
			</aside>

			{/* Основной контент документации */}
			<main className='flex-1 p-6 overflow-auto'>{children}</main>

			{/* Правое меню якорной навигации (подразделы текущего раздела) */}
			<aside className='w-60 p-6 border-l border-gray-800'>
				<AnchorNav />
			</aside>
		</div>
	)
}
