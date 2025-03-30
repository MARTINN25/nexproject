import './globals.css'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import Sidebar from '@/components/Sidebar'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
	title: 'NEXN.AI',
	description: 'NEXN.AI - Home',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={inter.className}>
			<body className='bg-black text-white'>
				<AuthProvider>
					<Sidebar />
					<main>{children}</main>
				</AuthProvider>
			</body>
		</html>
	)
}
