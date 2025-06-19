import { FC } from 'react'
import { HomeServices } from '@/widgets/HomeServices'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Услуги | Rav.Coder',
	description: 'Ознакомьтесь с полным спектром наших услуг, включая веб-разработку, UI/UX дизайн, техническую поддержку и SEO-продвижение.',
}

const HomeServicesScreen: FC = () => {
	return <HomeServices />
}

export default HomeServicesScreen 