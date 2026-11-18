import { FC } from 'react'
import Image from 'next/image'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { NEWS_POSTS } from './constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Новости и события IT-студии | RAV:Coder',
	description:
		'Следите за последними новостями, обновлениями и проектами инженерной IT-студии RAV:Coder: робототехника на C++ и Python, нейросети и веб-разработка.',
}

const NewsScreen: FC = () => {
	return (
		<UiContainer>
			<div className='md-mid:py-10 py-7 md-mid:px-7 px-5 rounded-lg bg-primary-background'>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
					Новости
				</UiDecorationTitle>
				<ul className='grid lg-big:grid-cols-4 md-mid:grid-cols-2 xs-big:gap-5 gap-y-4 mt-6'>
					{NEWS_POSTS.map(post => (
						<li
							key={post.id}
							className='group flex flex-col justify-between p-4 rounded-lg bg-secondary-background/40 border border-white/5 hover:border-sky-400/30 transition-colors'
						>
							<div>
								{post.image ? (
									<div className='relative w-full h-44 mb-4 rounded-md overflow-hidden bg-white'>
										<Image
											src={post.image}
											alt='Новость IT-студии RAV:Coder'
											fill
											className='object-contain p-2 group-hover:scale-105 transition-transform duration-300'
										/>
									</div>
								) : null}

								<UiTypography
									tag='h2'
									font='Montserrat-SB'
									className='text-lg leading-snug mb-3'
								>
									{post.title}
								</UiTypography>
								<UiTypography
									font='Montserrat-R'
									className='text-sm opacity-80 leading-relaxed'
								>
									{post.description}
								</UiTypography>
							</div>
						</li>
					))}
				</ul>
			</div>
		</UiContainer>
	)
}

export default NewsScreen
