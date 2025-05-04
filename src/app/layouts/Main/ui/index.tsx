import { FC } from 'react'
import { TChildren } from '@/shared/types/shared'

interface Props extends TChildren {}

const MainLayout: FC<Props> = ({ children }) => {
	return <>{children}</>
}

export { MainLayout }
