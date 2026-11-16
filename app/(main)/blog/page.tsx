import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { UiButton } from '@/shared/ui/UiButton'
import { BLOG_POSTS } from './constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Блог об ИИ, робототехнике и разработке ПО | RAV:Coder',
	description:
		'Экспертные статьи инженеров RAV:Coder: разработка ПО на C++ и Python, программирование роботов, компьютерное зрение, нейросети и автоматизация бизнеса.',
}

const BlogScreen: FC = () => {
	return (
		<UiContainer>
			<div className='md-mid:py-10 py-7 md-mid:px-7 px-5 rounded-lg bg-primary-background'>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
					Блог
				</UiDecorationTitle>
				<ul className='grid lg-big:grid-cols-4 md-mid:grid-cols-2 xs-big:gap-5 gap-y-2.5 mt-5'>
					{BLOG_POSTS.map(post => (
						<li
							key={post.id}
							className='flex flex-col justify-between p-5 rounded-lg bg-secondary-background/40 border border-white/5'
						>
							<div>
								<div className='flex items-center justify-between gap-2 mb-4'>
									<Image
										src={post.icon}
										alt={post.plainTitle}
										width={36}
										height={36}
									/>
									<span className='text-xs opacity-60'>{post.readTime}</span>
								</div>
								<UiTypography
									tag='h2'
									font='Montserrat-SB'
									className='text-lg leading-snug mb-3'
								>
									{post.title}
								</UiTypography>
								<UiTypography
									font='Montserrat-R'
									className='text-sm opacity-80 leading-relaxed mb-6'
								>
									{post.description}
								</UiTypography>
							</div>
							<Link href={`/blog/${post.slug}`} className='w-full'>
								<UiButton theme='fill' className='w-full uppercase text-center'>
									<UiTypography font='Montserrat-SB'>Подробнее</UiTypography>
								</UiButton>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</UiContainer>
	)
}

export default BlogScreen
