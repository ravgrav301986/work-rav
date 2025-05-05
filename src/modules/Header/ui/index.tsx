'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiLogo } from '@/shared/ui/UiLogo'
import { MainNavigation } from '@/segments/MainNavigation'
import { Actions } from './Actions'
import { useScreen } from '@/shared/hooks'
import { LG_MID } from '@/shared/constants/breakpoints'
import { MetaInfoItem } from './MetaInfoItem'
import { Globe, CodeXml, Watch, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const itemCls = 'justify-center'

interface Props extends TClassName {}

const Header: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<header
			className={cn(
				'sticky left-0 top-0 bg-primary-background z-10 shadow-[2px_0_5px_0_rgba(0,0,0,0.10)]',
				className
			)}
		>
			<div className='bg-secondary-background-accent py-5'>
				<UiContainer
					tag='ul'
					className='text-primary-text-accent gap-3 grid lg-mid:grid-cols-5 md-low:grid-cols-3'
				>
					<MetaInfoItem
						className={itemCls}
						Tag='li'
						icon={
							<CodeXml size={18} color='var(--color-primary-text-accent)' />
						}
					>
						Создание и разработка IT проектов
					</MetaInfoItem>
					<MetaInfoItem
						className={itemCls}
						Tag='li'
						icon={<Globe size={18} color='var(--color-primary-text-accent)' />}
					>
						Работа на удаленке
					</MetaInfoItem>
					<MetaInfoItem
						className={itemCls}
						Tag='li'
						icon={<Watch size={18} color='var(--color-primary-text-accent)' />}
					>
						10:00-20:00
					</MetaInfoItem>
					<MetaInfoItem
						className={itemCls}
						Tag='li'
						icon={<Mail size={18} color='var(--color-primary-text-accent)' />}
					>
						info@Ravcoder.ru
					</MetaInfoItem>
					<MetaInfoItem
						className={itemCls}
						Tag='li'
						icon={<Phone size={18} color='var(--color-primary-text-accent)' />}
					>
						<Link href='tel:9263970975'>7 926 397 09-75</Link>
						<Link href='tel:9162914962'>8 916 291 49-62</Link>
					</MetaInfoItem>
				</UiContainer>
			</div>
			<UiContainer className=''>
				<div className='flex items-center justify-between xs-big:py-6 py-2.5'>
					<UiLogo />
					{screenWidth >= LG_MID ? <MainNavigation /> : null}
					<Actions />
				</div>
			</UiContainer>
		</header>
	)
}

export { Header }
