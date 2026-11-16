'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiContainer } from '@/shared/ui/UiContainer'
import { cn } from '@/shared/lib/cn'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { Content } from './Content'

interface Props extends TClassName {}

const HomeWorkProcess: FC<Props> = ({ className }) => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.15 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<UiContainer
			tag='section'
			className={cn('', className)}
		>
			<div
				ref={sectionRef}
				className={cn(
					'md-mid:py-10 py-7 md-mid:px-7 px-5 rounded-lg bg-primary-background transition-all duration-700 ease-out',
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				)}
			>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
					Процесс работы (Workflow)
				</UiDecorationTitle>
				<UiTypography
					font='Montserrat-R'
					className={cn(
						'mt-5 mb-9 text-[15px] transition-all duration-700 delay-150 ease-out',
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
					)}
				>
					Мы создаём программное обеспечение на современном инженерном стеке:{' '}
					<span className='font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-pulse'>
						C++, Python, TypeScript и Next.js
					</span>
					.
					<br className='md-mid:block hidden' /> Для робототехники и умных систем мы
					проектируем надёжные алгоритмы управления и компьютерного зрения, а для
					веб-платформ и бизнеса — быструю архитектуру, удобные интерфейсы и
					интеграцию нейросетей.
				</UiTypography>
				<div
					className={cn(
						'transition-all duration-700 delay-300 ease-out',
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
					)}
				>
					<Content />
				</div>
			</div>
		</UiContainer>
	)
}

export { HomeWorkProcess }

