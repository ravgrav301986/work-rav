import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiContainer } from '@/shared/ui/UiContainer'
import { cn } from '@/shared/lib/cn'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { EMAIL, PHONES } from '@/shared/constants/main-info'
import { Item } from './Item'
import { HOME_CONTACTS_ANCHOR } from '@/shared/constants/routes'

const copyTextCls = 'xs-big:w-[200px] flex-1 text-center text-[15px]'

interface Props extends TClassName {}

const HomContacts: FC<Props> = ({ className }) => {
	return (
		<UiContainer
			tag='section'
			className={cn('', className)}
			id={HOME_CONTACTS_ANCHOR}
		>
			<div className='md-mid:py-10 py-7 md-mid:px-7 px-5 rounded-lg bg-primary-background'>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
					Контакты
				</UiDecorationTitle>
				<UiTypography font='Montserrat-R' className='mt-5 mb-7 text-[15px]'>
					Мы работаем на удаленке. Можем обсудить с вами вашу идею по следующим
					контактам:
				</UiTypography>
				<ul className='flex flex-col gap-y-7'>
					<Item
						title='Номер телефона'
						copyItems={[
							{
								content: (
									<UiTypography font='Montserrat-M' className={copyTextCls}>
										{PHONES[0].formatted}
									</UiTypography>
								),
								value: PHONES[0].data,
							},
							{
								content: (
									<UiTypography font='Montserrat-M' className={copyTextCls}>
										{PHONES[1].formatted}
									</UiTypography>
								),
								value: PHONES[1].data,
							},
						]}
					/>
					<Item
						title='Почта'
						copyItems={[
							{
								content: (
									<UiTypography font='Montserrat-M' className={copyTextCls}>
										{EMAIL}
									</UiTypography>
								),
								value: EMAIL,
							},
						]}
					/>
				</ul>
			</div>
		</UiContainer>
	)
}

export { HomContacts }
