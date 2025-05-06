import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { EMAIL, PHONES } from '@/shared/constants/main-info'
import { UiContainer } from '@/shared/ui/UiContainer'
import { CodeXml, Globe, Watch, Mail, Phone } from 'lucide-react'
import { MetaInfoItem } from '../MetaInfoItem'
import Link from 'next/link'

const itemCls = 'justify-center'

interface Props extends TClassName {}

const Top: FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'bg-secondary-background-accent lg-mid:py-5 lg-mid:h-auto h-0 overflow-hidden',
				className
			)}
		>
			<UiContainer
				tag='ul'
				className='text-primary-text-accent gap-3 grid lg-mid:grid-cols-5 md-low:grid-cols-3'
			>
				<MetaInfoItem
					className={itemCls}
					Tag='li'
					icon={<CodeXml size={18} color='var(--color-primary-text-accent)' />}
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
					<Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
				</MetaInfoItem>
				<MetaInfoItem
					className={itemCls}
					Tag='li'
					icon={<Phone size={18} color='var(--color-primary-text-accent)' />}
				>
					<Link href={`tel:${PHONES[0].data}`}>{PHONES[0].formatted}</Link>
					<Link href={`tel:${PHONES[1].data}`}>{PHONES[1].formatted}</Link>
				</MetaInfoItem>
			</UiContainer>
		</div>
	)
}

export { Top }
