import { FC } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiTypography } from '@/shared/ui/UiTypography'
import { UiButton } from '@/shared/ui/UiButton'
import { BLOG_POSTS } from '../constants'

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params
	const post = BLOG_POSTS.find(item => item.slug === slug)

	if (!post) {
		return { title: 'Статья не найдена | RAV:Coder' }
	}

	return {
		title: `${post.plainTitle} | Блог RAV:Coder`,
		description: post.plainDescription,
	}
}

const BlogPostPage: FC<Props> = async ({ params }) => {
	const { slug } = await params
	const post = BLOG_POSTS.find(item => item.slug === slug)

	if (!post) {
		notFound()
	}

	return (
		<UiContainer>
			<article className='md-mid:py-10 py-7 md-mid:px-10 px-5 rounded-lg bg-primary-background max-w-4xl mx-auto'>
				<div className='mb-6'>
					<Link
						href='/blog'
						className='text-sm opacity-75 hover:opacity-100 transition-opacity'
					>
						← Назад ко всем статьям
					</Link>
				</div>

				<div className='flex items-center gap-4 text-sm opacity-70 mb-4'>
					<span>{post.date}</span>
					<span>•</span>
					<span>{post.readTime}</span>
				</div>

				<UiTypography
					tag='h1'
					font='Montserrat-B'
					className='md-mid:text-3xl text-2xl leading-tight mb-6'
				>
					{post.title}
				</UiTypography>

				{post.image && (
					<div className='relative w-full md-mid:h-[380px] h-[220px] rounded-xl overflow-hidden mb-8 border border-sky-400/20'>
						<Image
							src={post.image}
							alt={post.plainTitle}
							fill
							priority
							className='object-cover'
						/>
					</div>
				)}

				<UiTypography
					font='Montserrat-M'
					className='text-lg opacity-90 mb-8 leading-relaxed'
				>
					{post.description}
				</UiTypography>

				<div className='flex flex-col gap-y-8'>
					{post.content.map((block, index) => (
						<section key={index} className='flex flex-col gap-y-3'>
							<UiTypography
								tag='h2'
								font='Montserrat-SB'
								className='md-mid:text-2xl text-xl'
							>
								{block.subtitle}
							</UiTypography>
							<UiTypography
								font='Montserrat-R'
								className='leading-relaxed opacity-90'
							>
								{block.text}
							</UiTypography>
							{block.bullets && (
								<ul className='list-disc pl-6 flex flex-col gap-y-2 mt-1 opacity-90'>
									{block.bullets.map((bullet, idx) => (
										<li key={idx}>{bullet}</li>
									))}
								</ul>
							)}
						</section>
					))}
				</div>

				<div className='mt-10 pt-8 border-t border-white/10 flex flex-col md-mid:flex-row md-mid:items-center justify-between gap-4'>
					<div>
						<UiTypography font='Montserrat-SB' className='text-lg'>
							Нужна разработка ПО, робототехники или внедрение ИИ?
						</UiTypography>
						<UiTypography font='Montserrat-R' className='text-sm opacity-80 mt-1'>
							Обсудите ваш проект напрямую с инженерами RAV:Coder
						</UiTypography>
					</div>
					<UiButton theme='fill' className='uppercase w-max'>
						<UiTypography font='Montserrat-SB'>
							<a
								href='https://t.me'
								target='_blank'
								rel='noopener noreferrer'
							>
								Обсудить задачу
							</a>
						</UiTypography>
					</UiButton>
				</div>
			</article>
		</UiContainer>
	)
}

export default BlogPostPage
