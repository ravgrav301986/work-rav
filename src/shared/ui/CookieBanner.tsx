'use client'
import { FC, useState, useEffect } from 'react'
import Link from 'next/link'

export const CookieBanner: FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const consent = localStorage.getItem('rav_cookie_consent')
		if (!consent) {
			const timer = setTimeout(() => setIsVisible(true), 1200)
			return () => clearTimeout(timer)
		}
	}, [])

	const handleAccept = () => {
		localStorage.setItem('rav_cookie_consent', 'accepted')
		setIsVisible(false)
	}

	if (!isVisible) return null

	return (
		<div className='fixed bottom-4 left-4 right-4 md-mid:right-auto md-mid:max-w-md z-50 bg-slate-900/95 border border-sky-400/30 rounded-xl p-4 shadow-[0_10px_30px_rgba(2,6,23,0.75)] backdrop-blur-md text-slate-200'>
			<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
				<div className='text-xs sm:text-[13px] leading-relaxed text-slate-300'>
					Мы используем файлы <span className='text-white font-medium'>cookie</span> для
					корректной работы сайта и аналитики. Продолжая пользоваться сайтом, вы
					соглашаетесь с{' '}
					<Link
						href='/privacy-policy'
						className='text-sky-400 hover:text-cyan-300 underline underline-offset-2 transition-colors'
					>
						политикой конфиденциальности
					</Link>
					.
				</div>
				<button
					type='button'
					onClick={handleAccept}
					className='shrink-0 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 hover:brightness-110 transition-all cursor-pointer'
				>
					Принять
				</button>
			</div>
		</div>
	)
}
