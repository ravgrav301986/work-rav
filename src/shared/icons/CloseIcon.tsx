import { FC } from 'react'
import { TIcon } from '../types/shared'

interface Props extends TIcon {}

const CloseIcon: FC<Props> = ({ color, ...props }) => {
	return (
		<svg
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			color={color || '#336AEA'}
			{...props}
		>
			<rect
				x='1.98975'
				y='0.0449219'
				width='22.5141'
				height='2.81427'
				rx='1.40713'
				transform='rotate(45 1.98975 0.0449219)'
				fill='currentColor'
			/>
			<rect
				y='15.9651'
				width='22.5141'
				height='2.81427'
				rx='1.40713'
				transform='rotate(-45 0 15.9651)'
				fill='currentColor'
			/>
		</svg>
	)
}

export { CloseIcon }
