'use client'
import { useState } from 'react'
import { AudioLines } from 'lucide-react'

import ThemeToggle from '@/components/ThemeToggle'

export default function ChatPage() {
	const [hasInteracted, setHasInteracted] = useState(false)
	const [inputValue, setInputValue] = useState('')

	return (
		<div className='min-h-screen bg-black text-white flex flex-col items-center justify-start transition-all duration-500'>
			{/* Кнопка GET в правом верхнем углу */}
			<div className='absolute top-6 right-6 z-50'>
				<button className='bg-[#1E1E1E] text-white font-extralight text-[11px] px-8 py-1 rounded-md hover:bg-[#2a2a2a] transition cursor-pointer'>
					GET
				</button>
			</div>

			{/* Logo and Title */}
			<div
				className={`transition-all duration-500 flex flex-col items-center text-center ${
					hasInteracted ? 'translate-y-60 opacity-100' : 'translate-y-0'
				}`}
			>
				<div className='mt-36 text-center opacity-39'>
					<img
						src='/icons/logo.svg'
						alt='logo'
						className='mx-auto w-8 h-8 mb-6'
					/>
					<p className='text-[18px] font-extralight'>
						Ask me and I will help you!
					</p>
				</div>
			</div>

			{/* Input */}
			<div
				className={`w-full px-4 fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 bottom-0 ${
					hasInteracted ? 'mb-6' : 'mb-80'
				}`}
			>
				<div className='w-full max-w-4xl mx-auto flex flex-col items-center justify-center'>
					<div className='flex w-[650px] border border-[#121212] focus-within:border-[#373737] bg-[#121212] rounded-md p-1 transition-colors duration-300'>
						<input
							type='text'
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							onFocus={() => setHasInteracted(true)}
							placeholder='Write a question...'
							className='w-full bg-transparent border-none outline-none text-[12px] px-2 py-1 roboto-mono'
						/>
						{/* Кнопка с иконкой */}
						<button
							onClick={() => {
								// сюда вставь функцию отправки запроса
								console.log('Send message:', inputValue)
							}}
							className='ml-2 p-2 hover:opacity-100 opacity-70 transition cursor-pointer'
						>
							{/* Можно использовать lucide-react или heroicons */}
							<AudioLines className='w-5 h-5 text-white' />
						</button>
					</div>

					{/* Suggestions */}
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
						{[
							{
								title: 'Transaction Details?',
								desc: 'Can you show the full transaction history for a specific wallet?',
							},
							{
								title: 'Wallet Balance?',
								desc: 'What is the current balance of this wallet?',
							},
							{
								title: 'Final Destination?',
								desc: 'Where was the last transaction from this wallet sent?',
							},
							{
								title: 'Analyze Recent Transactions',
								desc: 'Get a detailed report for the last 24 hours.',
							},
						].map((item, index) => (
							<button
								key={index}
								onClick={() => setInputValue(item.title)}
								onFocus={() => setHasInteracted(true)}
								className='roboto-mono text-left bg-[#0C0C0C] p-3 rounded-md hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer'
							>
								<p className='text-white font-bold text-[9px]'>{item.title}</p>
								<p className='text-[#A2A2A2] text-[8px] mt-1'>{item.desc}</p>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Bottom Metrics (Hidden when input is focused) */}
			<div
				className={`w-full max-w-5xl mt-auto mb-8 transition-all duration-500 ${
					hasInteracted
						? 'opacity-0 pointer-events-none h-0 overflow-hidden'
						: 'opacity-100'
				}`}
			>
				{/* Текст справа сверху */}
				<div className='flex justify-end mb-4'>
					<p className='text-[12px] text-white opacity-60'>
						→ Our current pre-seed stage metrics
					</p>
				</div>

				{/* Сетка метрик */}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5'>
					{[
						{ title: 'EARLY USER', desc: 'testing the MVP', stat: '50+' },
						{ title: 'BLOCKCHAIN NETWORKS', desc: 'integrated', stat: '3' },
						{ title: 'TEST TRANSACTIONS', desc: 'processed', stat: '300+' },
						{ title: 'UPTIME', desc: 'for the platform', stat: '99.9%' },
						{
							title: 'ACTIVE BETA TESTERS',
							desc: 'providing feedback',
							stat: '10+',
						},
					].map((item, i) => (
						<div
							key={i}
							className='relative w-[180px] h-[180px] bg-[#0C0C0C] p-4 rounded-md hover:shadow-lg transition duration-300 flex flex-col'
						>
							{/* Верхний текст */}
							<p className='text-[11px]'>
								<span className='text-[#F0F0F0]'>{item.title}</span>{' '}
								<span className='text-[#A2A2A2]'>{item.desc}</span>
							</p>

							{/* Центрирующий блок для цифры */}
							<div className='flex-1 flex items-center justify-center'>
								<p className='text-[16px] text-[#F5EAE4]'>{item.stat}</p>
							</div>

							{/* Иконка */}
							<div className='absolute bottom-2 right-2 bg-black p-1 rounded'>
								<svg
									className='w-4 h-4 text-white opacity-50 hover:opacity-100'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M7 17l9-9m0 0h-6m6 0v6'
									/>
								</svg>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Кнопка смены темы в правом нижнем углу */}
			<div className='absolute bottom-4 right-4 z-50'>
				<ThemeToggle />
			</div>
		</div>
	)
}
