'use client'

import { useEffect, useState } from 'react'
import AiAnalysisSection from '@/components/AiAnalysisSection'
import BlockchainCapabilities from '@/components/BlockchainCapabilities'
import ChatWaveBlock from '@/components/ChatWaveBlock'
import Footer from '@/components/Footer'
import { TypewriterText } from '@/components/TypewriterText'
import HoverPills from '@/components/HoverPills'

// Пример массива «плашек»
const pills = [
	'Secure',
	'AI-Powered',
	'Real-Time',
	'Advanced Analytics',
	'Seamless Integration',
	'Multi-Chain Support',
]

export default function HomeMain() {
	// Отслеживаем, прокрутил ли пользователь страницу
	const [scrolled, setScrolled] = useState(false)

	// Храним видимость каждого блока (по умолчанию false = скрыт)
	const [blocksVisible, setBlocksVisible] = useState<boolean[]>(
		Array(pills.length).fill(false)
	)

	useEffect(() => {
		const handleScroll = () => {
			// Как только прокрутка > 50px, переключаем состояние
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// При изменении `scrolled` — запускаем «постепенное» появление/исчезновение
	useEffect(() => {
		// Копия массива, чтобы не мутировать стейт напрямую
		const newVisibility = Array(pills.length).fill(false)

		if (scrolled) {
			// Если прокрутка вниз (scrolled = true),
			// по очереди выставляем true
			pills.forEach((_, i) => {
				setTimeout(() => {
					setBlocksVisible(prev => {
						const arr = [...prev]
						arr[i] = true
						return arr
					})
				}, i * 200) // задержка 200ms между блоками
			})
		} else {
			// Если прокрутка вверх (scrolled = false),
			// по очереди выставляем false (стираем)
			pills.forEach((_, i) => {
				setTimeout(() => {
					setBlocksVisible(prev => {
						const arr = [...prev]
						arr[i] = false
						return arr
					})
				}, i * 200)
			})
		}
	}, [scrolled])

	return (
		<div className='bg-black text-white '>
			{/* HERO-СЕКЦИЯ (первый экран) */}
			<section
				className={`
    flex items-center justify-center
    transition-all duration-700
    ${scrolled ? 'pt-8' : 'pt-0'}
  `}
				style={{ height: scrolled ? '50vh' : '100vh' }}
			>
				{/* ЛОГОТИП */}
				<img
					src='/icons/logo.svg'
					alt='NEX.AI Logo'
					className={`
      w-[30px] h-[30px] transition-transform duration-700
      ${scrolled ? 'scale-95' : 'scale-100'}
    `}
				/>

				{/* НАЗВАНИЕ ПРОЕКТА */}
				<h1
					className={`
      ml-4 text-[40px] font-light transition-all duration-700
      ${scrolled ? '' : ''}
    `}
				>
					NEXN.AI
				</h1>
			</section>
			{/* ОСТАЛЬНЫЕ БЛОКИ — появляются при прокрутке (opacity-0 -> opacity-100) */}
			<section
				className={`
         max-w-3xl mx-auto transition-opacity duration-[1000ms]
          ${scrolled ? 'opacity-100' : 'opacity-0'}
        `}
			>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch'>
					{/* Левая колонка */}
					<div className='flex flex-col justify-between'>
						{/* Верхняя часть: заголовок и «пилюли» */}
						<div>
							<TypewriterText
								text='Step into the future of blockchain and AI innovation with'
								speed={30}
								className='text-[17px] font-light'
								shouldType={scrolled}
							/>

							{/* Пилюли */}
							<div className='flex flex-wrap gap-2 mt-4 text-[14px]'>
								<HoverPills visible={scrolled} />
							</div>
						</div>

						{/* Нижняя часть: кнопка GET */}
						<div>
							<a
								href='/auth/registration'
								className='px-9 py-2 bg-[#1E1E1E] cursor-pointer text-[#F2F2F2] text-[12px] rounded hover:bg-[#333333] transition-colors'
							>
								Join Waitlist
							</a>
						</div>
					</div>

					{/* Правая колонка: анимация или другой контент */}
					<div className='flex items-center justify-center bg-white rounded w-[411px] h-[384px]'>
						<video
							src='/animation/HomeBlock.mp4'
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
				</div>
			</section>
			{/* Блок «Partners» (или «Supports») */}
			<section className='pt-24 py-8 max-w-5xl mx-auto'>
				{/* Заголовок */}
				<h3 className='text-[12px] text-[#F0F0F0] mb-6 flex items-center'>
					Supporters ←
				</h3>

				{/* Ряд квадратов */}
				<div className='flex flex-wrap gap-10'>
					{/* Первый квадрат с зелёной иконкой A (пример) */}
					<div className='w-[130px] h-[130px] border border-[#111111] flex items-center justify-center rounded'>
						<img src='/icons/eth.svg' alt='Supporter A' className='w-6 h-6' />
					</div>

					{/* Остальные квадраты (плейсхолдеры) */}
					<div className='w-[130px] h-[130px] border border-[#111111]  flex items-center justify-center rounded'>
						<img src='/icons/eth.svg' alt='Supporter A' className='w-6 h-6' />
					</div>
					<div className='w-[130px] h-[130px]4 border border-[#111111]  flex items-center justify-center rounded'>
						<img src='/icons/eth.svg' alt='Supporter A' className='w-6 h-6' />
					</div>
					<div className='w-[130px] h-[130px] border border-[#111111]  flex items-center justify-center rounded'>
						<img src='/icons/eth.svg' alt='Supporter A' className='w-6 h-6' />
					</div>
					<div className='w-[130px] h-[130px] border border-[#111111]  flex items-center justify-center rounded'>
						<img src='/icons/eth.svg' alt='Supporter A' className='w-6 h-6' />
					</div>
					<div className='w-[130px] h-[130px] border border-[#111111]  flex items-center justify-center rounded'>
						<img src='/icons/eth.svg' alt='Supporter A' className='w-6 h-6' />
					</div>
				</div>
			</section>

			{/* AI-powered blockchain analytics for smarter decisions */}
			<section className='py-12'>
				<div className='max-w-7xl mx-auto px-8'>
					{/* Заголовок */}
					<h2 className='text-[13px] text-[#F0F0F0] w-[350px] mb-4'>
						AI-powered blockchain analytics for smarter decisions
					</h2>

					{/* Тёмная «полоса» с описанием */}
					<div className='bg-[#0C0C0C] inline-block rounded-md px-2 py-2 mb-6'>
						<p className='text-[#979797] text-[12px]'>
							Discover how NEXN.AI uses AI to analyze blockchain transactions
							and improve workflows.
						</p>
					</div>

					{/* Блок для видео */}
					<div className='bg-[#1E1E1E] rounded-md h-[718px] flex items-center justify-center mb-4'>
						<p className='text-gray-500'>Video placeholder</p>
					</div>

					<div className='flex justify-end items-center'>
						<div className='flex items-center gap-2'>
							<span className='text-[10px] text-white'>
								see additional features of neXN.ai
							</span>
							<div className='bg-[#2A2A2A] w-10 h-10 flex items-center justify-center rounded'>
								{/* Иконка стрелки (пример с Heroicons) */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 text-white transform rotate-[-85deg]'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									{/* Стрелка, исходно указывающая вверх-вправо (Heroicons) */}
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M7 17l9-9m0 0h-6m6 0v6'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='max-w-7xl mx-auto px-8 h-[46em]'>
				<AiAnalysisSection />
			</section>

			<section className='max-w-7xl mx-auto px-8 h-210'>
				<BlockchainCapabilities />
			</section>

			<section className='py-8'>
				<ChatWaveBlock />
			</section>
			<Footer />
		</div>
	)
}
