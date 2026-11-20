import { FC } from 'react'
import { HomContacts } from '@/widgets/HomContacts'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Контакты — Обсудить проект и заказать разработку | RAV:Coder',
	description:
		'Свяжитесь с инженерами RAV:Coder в Telegram или по почте ravcoder@yandex.ru. Онлайн-разбор задачи по всей России и выезд специалиста в офис или на объект в Москве.',
}

const HomContactsScreen: FC = () => {
	return <HomContacts />
}

export default HomContactsScreen
