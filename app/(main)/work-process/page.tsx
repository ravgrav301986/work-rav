import { FC } from 'react'
import { HomeWorkProcess } from '@/widgets/HomeWorkProcess'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Процесс работы | Rav.Coder',
	description: 'Узнайте, как мы работаем над проектами, от первоначальной идеи до финальной реализации и поддержки.',
}

const HomeWorkProcessScreen: FC = () => {
	return <HomeWorkProcess />
}

export default HomeWorkProcessScreen 