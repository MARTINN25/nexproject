import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
		if (savedTheme) {
			setTheme(savedTheme)
			document.documentElement.classList.toggle('dark', savedTheme === 'dark')
		}
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
	}

	return (
		<div
			className='absolute bottom-4 right-4 z-50 cursor-pointer'
			onClick={toggleTheme}
		>
			<div className='flex flex-col items-center space-y-2 rounded-md p-2'>
				<Sun
					className={`w-4 h-4 ${
						theme === 'light' ? 'text-white' : 'text-gray-500'
					}`}
				/>
				<Moon
					className={`w-4 h-4 ${
						theme === 'dark' ? 'text-white' : 'text-gray-500'
					}`}
				/>
			</div>
		</div>
	)
}
