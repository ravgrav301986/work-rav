import { FC } from 'react'
import { TChildren } from '@/shared/types/shared'
import { Header } from '@/modules/Header'
import { BurgerMenu } from '@/modules/BurgerMenu'
import { Footer } from '@/modules/Footer'

interface Props extends TChildren {}

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			
			<BurgerMenu />
			{children}
			<Footer className='mt-[var(--modules-gap)]' />
		</>
	)
}

export { MainLayout }
