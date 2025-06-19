import { FC } from 'react'
import { HomContacts } from '@/widgets/HomContacts'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Контакты | Rav.Coder',
	description: 'Свяжитесь с нами для обсуждения вашего проекта. Мы всегда готовы ответить на ваши вопросы.',
}

const HomContactsScreen: FC = () => {
	return <HomContacts />
}

export default HomContactsScreen 