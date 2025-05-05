export const formatPrice = (num: number): string => {
	let numStr = num.toString()

	return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
