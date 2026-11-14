import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { EMAIL } from '@/shared/constants/main-info'
import { UiContainer } from '@/shared/ui/UiContainer'
import { CodeXml, Globe, Watch, Mail } from 'lucide-react'
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
				className='text-primary-text-accent gap-3 grid lg-mid:grid-cols-4 md-low:grid-cols-2'
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
					Работаем на удаленке
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
			</UiContainer>
		</div>
	)
}

export { Top }
