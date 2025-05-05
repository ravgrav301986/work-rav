import { create } from 'zustand'

export type TModalSlug = { slug: string }

interface TUseModalsStore {
	modalsState: Record<
		string,
		{
			mountedState?: boolean
			visibleState?: boolean
			unmountDelay?: number
			unmountStateTimerId?: ReturnType<typeof setTimeout>
		}
	>
	showModal: (params: TModalSlug) => void
	hideModal: (params: TModalSlug) => void
	toggleModal: (params: TModalSlug) => void
	changeUnmountDelay: (params: { unmountDelay?: number } & TModalSlug) => void
}

export const useModalsStore = create<TUseModalsStore>()((set, get) => ({
	modalsState: {},
	hideModal: ({ slug }) => {
		set(state => ({
			modalsState: {
				...state.modalsState,
				[slug]: { ...state.modalsState[slug], visibleState: false },
			},
		}))
		const unmountStateTimerId = setTimeout(() => {
			set(state => ({
				modalsState: {
					...state.modalsState,
					[slug]: { ...state.modalsState[slug], mountedState: false },
				},
			}))
			set(state => ({
				modalsState: {
					...state.modalsState,
					[slug]: {
						...state.modalsState[slug],
						unmountStateTimerId: undefined,
					},
				},
			}))
		}, get().modalsState[slug].unmountDelay || 0)
		set(state => ({
			modalsState: {
				...state.modalsState,
				[slug]: { ...state.modalsState[slug], unmountStateTimerId },
			},
		}))
	},
	showModal: ({ slug }) => {
		const unmountStateTimerId = get().modalsState[slug]?.unmountStateTimerId
		if (unmountStateTimerId !== undefined) {
			clearTimeout(unmountStateTimerId)
			set(state => ({
				modalsState: {
					...state.modalsState,
					[slug]: {
						...state.modalsState[slug],
						unmountStateTimerId: undefined,
					},
				},
			}))
		}
		setTimeout(() => {
			set(state => ({
				modalsState: {
					...state.modalsState,
					[slug]: { ...state.modalsState[slug], visibleState: true },
				},
			}))
		}, 0)
		set(state => ({
			modalsState: {
				...state.modalsState,
				[slug]: { ...state.modalsState[slug], mountedState: true },
			},
		}))
	},
	toggleModal: ({ slug }) => {
		const state = get().modalsState[slug]?.visibleState

		if (state) {
			get().hideModal({ slug })
		} else {
			get().showModal({ slug })
		}
	},
	changeUnmountDelay: ({ unmountDelay, slug }) => {
		set(state => ({
			modalsState: {
				...state.modalsState,
				[slug]: { ...state.modalsState[slug], unmountDelay },
			},
		}))
	},
}))

const modalsStatesSelector = (state: TUseModalsStore) => state.modalsState
const showModalSelector = (state: TUseModalsStore) => state.showModal
const hideModalSelector = (state: TUseModalsStore) => state.hideModal
const toggleModalSelector = (state: TUseModalsStore) => state.toggleModal
const changeUnmountDelaySelector = (state: TUseModalsStore) =>
	state.changeUnmountDelay

export {
	type TUseModalsStore,
	modalsStatesSelector,
	showModalSelector,
	hideModalSelector,
	toggleModalSelector,
	changeUnmountDelaySelector,
}
