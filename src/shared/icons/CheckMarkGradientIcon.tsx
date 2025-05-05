import { FC } from 'react'
import { TIcon } from '../types/shared'

interface Props extends Omit<TIcon, 'color'> {}

const CheckMarkGradientIcon: FC<Props> = ({ ...props }) => {
	return (
		<svg
			width='17'
			height='13'
			viewBox='0 0 17 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16.542 0.42102C17.1379 0.99651 17.1545 1.94611 16.579 2.54202L6.80685 12.6608L0.419593 6.02879C-0.15508 5.4321 -0.137228 4.48252 0.459465 3.90785C1.05616 3.33317 2.00574 3.35103 2.58041 3.94772L6.80982 8.33919L14.421 0.457985C14.9965 -0.13792 15.9461 -0.15447 16.542 0.42102Z'
				fill='url(#paint0_linear_507_9)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_507_9'
					x1='4.64667'
					y1='4.17231'
					x2='16.0121'
					y2='4.57572'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#336AEA' />
					<stop offset='0.5' stopColor='#33B7A1' />
					<stop offset='1' stopColor='#339EEA' />
				</linearGradient>
			</defs>
		</svg>
	)
}

export { CheckMarkGradientIcon }
