import { FC } from 'react'
import { TChildren } from '@/shared/types/shared'
import { MainLayout } from '@/app/layouts/Main'

interface Props extends TChildren {}

const Layout: FC<Props> = ({ children }) => {
	return <MainLayout>{children}</MainLayout>
}

export default Layout
