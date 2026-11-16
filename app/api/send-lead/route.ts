import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const { name, email } = await request.json()

		const response = await fetch('https://web3forms.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				access_key: 'ВСТАВЬТЕ_СЮДА_ВАШ_КЛЮЧ_ИЗ_ПИСЬМА',
				subject: 'Новая заявка с сайта RAV:Coder',
				from_name: 'Сайт ravcoder.ru',
				Имя: name,
				Email: email,
			}),
		})

		const result = await response.json()

		if (result.success) {
			return NextResponse.json({ success: true })
		}

		return NextResponse.json({ success: false }, { status: 400 })
	} catch {
		return NextResponse.json({ success: false }, { status: 500 })
	}
}
