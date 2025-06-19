import { FC } from 'react'
import { HomeAbout } from '@/widgets/HomeAbout'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'О компании | Rav.Coder',
	description: 'Узнайте больше о нашей компании, нашей миссии, ценностях и команде профессионалов, стоящей за нашими проектами.',
}

const HomeAboutScreen: FC = () => {
	return <HomeAbout />
}

export default HomeAboutScreen 