'use client'
import { FC, ReactNode } from 'react'
import { TChildrenGen, TClassName } from '@/shared/types/shared'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/shared/lib/cn'

type TUiActiveLinkChildren = (params: { isActive: boolean }) => ReactNode

interface TUiActiveLinkProps
	extends TClassName,
		LinkProps,
		TChildrenGen<TUiActiveLinkChildren | ReactNode> {
	activeClassName?: string
}

const UiActiveLink: FC<TUiActiveLinkProps> = ({
	href,
	activeClassName,
	className,
	children,
	...linkProps
}) => {
	const path = usePathname()

	return (
		<Link
			href={href}
			{...linkProps}
			className={cn(className, { [activeClassName || '']: path === href })}
		>
			{typeof children === 'function'
				? children({ isActive: path === href })
				: children}
		</Link>
	)
}

export { UiActiveLink, type TUiActiveLinkChildren, type TUiActiveLinkProps }
