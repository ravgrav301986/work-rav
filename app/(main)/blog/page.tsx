import { FC } from 'react'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { HomeServiceItem } from '@/entities/HomeServiceItem'
import { BLOG_POSTS } from './constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Блог | Rav.Coder',
	description: 'Читайте наши последние статьи и публикации в блоге о веб-разработке, дизайне и технологиях.',
}

const BlogScreen: FC = () => {
	return (
		<UiContainer>
			<div className='md-mid:py-10 py-7 md-mid:px-7 px-5 rounded-lg bg-primary-background'>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
					Блог
				</UiDecorationTitle>
				<ul className='grid lg-big:grid-cols-4 md-mid:grid-cols-2 xs-big:gap-5 gap-y-2.5 mt-5'>
					{BLOG_POSTS.map(data => (
						<HomeServiceItem key={data.id} {...data} Tag='li' />
					))}
				</ul>
			</div>
		</UiContainer>
	)
}

export default BlogScreen 