// components/docs/DocsSidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sections = [
	{ title: 'Nex.ai Overview', href: '/docs/overview' },
	{ title: 'For Users', href: '/docs/users' },
	{ title: 'For Developers', href: '/docs/developers' },
]

export default function DocsSidebar() {
	const pathname = usePathname() // получаем текущий путь для выделения активного раздела

	return (
		<nav>
			<ul className='space-y-4'>
				{sections.map(section => {
					const isActive = pathname?.startsWith(section.href)
					return (
						<li key={section.href}>
							<Link
								href={section.href}
								className={`block hover:underline ${
									isActive ? 'text-blue-400 font-semibold' : 'text-gray-300'
								}`}
							>
								{section.title}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
