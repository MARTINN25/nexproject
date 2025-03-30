import React from 'react'

export default function RegistrationPage() {
	return (
		<div className='min-h-screen bg-black text-white flex flex-col items-center'>
			{/* Шапка */}
			<header className='mt-20'>
				<h1 className='text-[40px] font-light'>NEXN.AI</h1>
			</header>
			{/* Основной контент (левая форма + правый блок) */}
			<div className='flex flex-col w-full max-w-5xl mt-[5em] items-end justify-center'>
				<div className='flex flex-col md:flex-row w-full  gap-20 '>
					{/* Левая колонка */}
					<div className='flex flex-col'>
						<h2 className='text-[14px] mb-4'>Create an account record</h2>
						<div className='flex flex-col items-center justify-center'>
							{/* Поле ввода Email */}
							<div className='mb-4 '>
								<input
									id='email'
									type='email'
									placeholder='Email Address*'
									className='w-[283px] py-2 px-3 bg-[#0C0C0C] focus:ring-2 focus:ring-[#1B1B1B] outline-none font-extralight text-[13px]'
								/>
							</div>

							{/* Кнопка Continue */}
							<button className='w-[283px] bg-[#121212] hover:bg-[#1B1B1B] transition-colors rounded p-3 text-sm font-medium mb-4 flex items-center justify-center cursor-pointer'>
								Continue
							</button>

							{/* Ссылка «Already have an account? Log in» */}
							<p className='text-[12px] font-normal text-[#F0F0F0] mb-8'>
								Already have an account?{' '}
								<a
									href='/auth/login'
									className='text-[#2489E7] hover:underline'
								>
									Log in
								</a>
							</p>

							<p className='text-[#717171] text-[14px] mb-4'>OR</p>

							{/* Кнопки «Sign in with ...» */}
							<div className='flex flex-col space-y-2'>
								<button className='w-[263px] border border-[#111111] rounded p-3 hover:border-gray-800 text-left text-[12px] text-[#B1B1B1] flex items-center gap-2 cursor-pointer'>
									<img
										src='/icons/google.svg'
										alt='Google'
										className='w-5 h-5'
									/>{' '}
									{/* Иконка Google? */}
									Sign in with Google
								</button>
								<button className='w-[263px] border border-[#111111] rounded p-3 hover:border-gray-800 text-left text-[12px] text-[#B1B1B1] flex items-center gap-2 cursor-pointer'>
									<img
										src='/icons/microsoft.svg'
										alt='Google'
										className='w-5 h-5'
									/>{' '}
									{/* Иконка Microsoft? */}
									Continue with Microsoft Account
								</button>
								<button className='w-[263px] border border-[#111111] rounded p-3 hover:border-gray-800 text-left text-[12px] text-[#B1B1B1] flex items-center gap-2 cursor-pointer'>
									<img
										src='/icons/apple.svg'
										alt='Google'
										className='w-5 h-5'
									/>{' '}
									{/* Иконка Apple */}
									Continue with Apple
								</button>
								<button className='w-[263px] border border-[#111111] rounded p-3 hover:border-gray-800 text-left text-[12px] text-[#B1B1B1] flex items-center gap-2 cursor-pointer'>
									<img
										src='/icons/phone.svg'
										alt='Google'
										className='w-5 h-5'
									/>{' '}
									{/* Иконка Phone? */}
									Sign in with Phone Number
								</button>
							</div>
						</div>
					</div>

					{/* Правая колонка: градиентная рамка */}
					<div className='w-full md:w-1/1flex flex-col items-end justify-center'>
						{/* Градиентный блок */}
						<div className='relative w-full h-[455px]'>
							<div className='absolute inset-0 rounded-xl p-[9px] my-radial-gradient-block-reg'>
								<div className='bg-black  w-[641px] h-[434px] rounded-md flex justify-center'>
									<video
										src='/animation/LoginReg.mp4'
										autoPlay
										loop
										muted
										playsInline
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Иконки под блоком (по центру) */}
				<div className='flex gap-4 mt-14 items-end '>
					{/* GitHub */}
					<a
						href='https://github.com/YourUsername'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='/icons/github.svg'
							alt='GitHub'
							className='w-6 h-6 hover:opacity-80 transition-opacity'
						/>
					</a>

					{/* LinkedIn */}
					<a
						href='https://www.linkedin.com/in/YourProfile/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='/icons/linkedin.svg'
							alt='LinkedIn'
							className='w-6 h-6 hover:opacity-80 transition-opacity'
						/>
					</a>

					{/* X (бывший Twitter) */}
					<a
						href='https://x.com/YourProfile'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='/icons/twitter.svg'
							alt='X'
							className='w-6 h-6 hover:opacity-80 transition-opacity'
						/>
					</a>

					{/* Discord */}
					<a
						href='https://discord.gg/YourInvite'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='/icons/discord.svg'
							alt='Discord'
							className='w-6 h-6 hover:opacity-80 transition-opacity'
						/>
					</a>
				</div>
			</div>
		</div>
	)
}
