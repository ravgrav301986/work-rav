import { useEffect } from 'react'
import { useBodyClassName } from '.'
import {
	TModalSlug,
	changeUnmountDelaySelector,
	modalsStatesSelector,
	useModalsStore,
} from '../store/useModalsStore'

interface Props extends TModalSlug {
	unmountDelay?: number
}

export const useModalsBase = ({ slug, unmountDelay }: Props) => {
	const setUnmountDelay = useModalsStore(changeUnmountDelaySelector)
	const bodyAction = useBodyClassName()
	const mountedState = useModalsStore(modalsStatesSelector)[slug]?.mountedState

	useEffect(() => {
		if (unmountDelay) {
			setUnmountDelay({ slug, unmountDelay })
		}
	}, [])

	useEffect(() => {
		if (mountedState) bodyAction({ type: 'add', className: 'hide-scrollbar' })
		else bodyAction({ type: 'remove', className: 'hide-scrollbar' })
	}, [mountedState])
}
