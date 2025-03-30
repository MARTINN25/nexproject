// components/docs/AnchorNav.tsx
'use client'

import { usePathname } from 'next/navigation'

type Anchor = { id: string; title: string }

// Предопределенные якоря для каждого раздела (в дальнейшем можно генерировать автоматически)
const anchorsBySection: Record<string, Anchor[]> = {
	'/docs/overview': [
		{ id: 'intro', title: 'Introduction' },
		{ id: 'features', title: 'Key Features' },
		{ id: 'getting-started', title: 'Getting Started' },
	],
	'/docs/users': [
		{ id: 'setup', title: 'Setup for Users' },
		{ id: 'guide', title: 'User Guide' },
		{ id: 'faq', title: 'FAQ' },
	],
	'/docs/developers': [
		{ id: 'api', title: 'API Overview' },
		{ id: 'sdk', title: 'SDK Integration' },
		{ id: 'examples', title: 'Code Examples' },
	],
}

export default function AnchorNav() {
	const pathname = usePathname()
	// определяем базовый путь раздела (например, '/docs/overview' без якоря)
	const sectionPath = pathname ? pathname.split('#')[0] : ''
	const anchors: Anchor[] = anchorsBySection[sectionPath] || []

	return (
		<nav>
			<h4 className='text-gray-400 uppercase text-sm mb-3'>On this page</h4>
			<ul className='space-y-2 text-sm'>
				{anchors.map(anchor => (
					<li key={anchor.id}>
						<a href={`#${anchor.id}`} className='hover:text-blue-300'>
							{anchor.title}
						</a>
					</li>
				))}
				{anchors.length === 0 && <li className='text-gray-500'>No sections</li>}
			</ul>
		</nav>
	)
}
