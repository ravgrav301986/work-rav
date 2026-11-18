'use client'
import { FC, useState, useEffect, useRef } from 'react'

interface Props {
	className?: string
}

export const FloatingRobot: FC<Props> = ({ className = '' }) => {
	const [mounted, setMounted] = useState(false)
	const [pos, setPos] = useState({ x: 55, y: 45 })
	const [facingRight, setFacingRight] = useState(false)
	const [isFlying, setIsFlying] = useState(true)
	const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })
	const birdRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Автономный полёт строго внутри правой безопасной зоны баннера
	useEffect(() => {
		if (!mounted) return

		const flyInsideZone = () => {
			const nextX = Math.floor(22 + Math.random() * 58)
			const nextY = Math.floor(20 + Math.random() * 58)

			setPos(prev => {
				setFacingRight(nextX > prev.x)
				return { x: nextX, y: nextY }
			})
			setIsFlying(true)

			setTimeout(() => {
				setIsFlying(false)
			}, 2400)
		}

		const t = setTimeout(flyInsideZone, 600)
		const interval = setInterval(flyInsideZone, 4200)

		return () => {
			clearTimeout(t)
			clearInterval(interval)
		}
	}, [mounted])

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!mounted || !birdRef.current) return
			const rect = birdRef.current.getBoundingClientRect()
			const dx = e.clientX - (rect.left + rect.width / 2)
			const dy = e.clientY - (rect.top + rect.height / 2)
			setEyeOffset({
				x: Math.max(-2, Math.min(2, dx * 0.008)),
				y: Math.max(-2, Math.min(2, dy * 0.008)),
			})
		}

		window.addEventListener('mousemove', handleMouseMove, { passive: true })
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [mounted])

	return (
		<div className={`relative overflow-hidden select-none pointer-events-none ${className}`}>
			<style>{`
				@keyframes zoneBirdFly {
					0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
					50% { transform: translateY(-7px) rotate(1.5deg); }
				}
				@keyframes zoneBirdHover {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-5px); }
				}
				@keyframes zoneWingFast {
					0%, 100% { transform: rotate(-8deg) scaleY(1); }
					50% { transform: rotate(32deg) scaleY(0.75); }
				}
				@keyframes zoneWingSlow {
					0%, 100% { transform: rotate(-4deg) scaleY(1); }
					50% { transform: rotate(22deg) scaleY(0.82); }
				}
				@keyframes zoneCyanPulse {
					0%, 100% { opacity: 1; }
					50% { opacity: 0.55; }
				}
			`}</style>

			<div
				ref={birdRef}
				style={{
					left: `${pos.x}%`,
					top: `${pos.y}%`,
					transition:
						'left 2.4s cubic-bezier(0.45, 0.05, 0.55, 0.95), top 2.4s cubic-bezier(0.45, 0.05, 0.55, 0.95)',
				}}
				className='absolute -translate-x-1/2 -translate-y-1/2'
			>
				<div
					style={{
						animation: isFlying
							? 'zoneBirdFly 0.48s ease-in-out infinite'
							: 'zoneBirdHover 2.4s ease-in-out infinite',
					}}
					className='drop-shadow-[0_8px_16px_rgba(56,189,248,0.32)]'
				>
					<div
						style={{
							transform: facingRight ? 'scaleX(-1)' : 'scaleX(1)',
							transition: 'transform 0.35s ease',
						}}
					>
					<svg
	width='115'
	height='95'
	viewBox='0 0 320 260'
	fill='none'
	className='w-[80px] md-mid:w-[115px] h-auto'
>
	<defs>
		<linearGradient id='zShell1' x1='110' y1='55' x2='220' y2='190' gradientUnits='userSpaceOnUse'>
			<stop offset='0%' stopColor='#FFFFFF' />
			<stop offset='55%' stopColor='#F1F5F9' />
			<stop offset='100%' stopColor='#64748B' />
		</linearGradient>
		<linearGradient id='zFeather1' x1='165' y1='105' x2='305' y2='12' gradientUnits='userSpaceOnUse'>
			<stop offset='0%' stopColor='#CBD5E1' stopOpacity='0.95' />
			<stop offset='55%' stopColor='#F8FAFC' stopOpacity='0.88' />
			<stop offset='100%' stopColor='#BAE6FD' stopOpacity='0.5' />
		</linearGradient>
		<linearGradient id='zTail1' x1='215' y1='170' x2='285' y2='248' gradientUnits='userSpaceOnUse'>
			<stop offset='0%' stopColor='#0369A1' />
			<stop offset='55%' stopColor='#0EA5E9' />
			<stop offset='100%' stopColor='#BAE6FD' />
		</linearGradient>
		<linearGradient id='zBeak1' x1='4' y1='113' x2='117' y2='83' gradientUnits='userSpaceOnUse'>
			<stop offset='0%' stopColor='#020617' />
			<stop offset='60%' stopColor='#1E293B' />
			<stop offset='100%' stopColor='#E2E8F0' />
		</linearGradient>
	</defs>

	{/* Хвост с техническими полосками и пунктиром */}
	<g style={{ animation: 'zoneCyanPulse 2.2s ease-in-out infinite' }}>
		<path d='M212 168 L286 244 L274 249 L204 176 Z' fill='url(#zTail1)' stroke='#0F172A' strokeWidth='1.1' />
		<path d='M218 162 L294 234 L284 241 L210 171 Z' fill='#38BDF8' fillOpacity='0.75' stroke='#0284C7' strokeWidth='0.9' />
		<line x1='222' y1='174' x2='276' y2='232' stroke='#E0F2FE' strokeWidth='1' strokeDasharray='4 3' />
		<path d='M202 152 C222 164, 242 184, 256 204 C240 196, 220 178, 200 162 Z' fill='url(#zShell1)' stroke='#334155' strokeWidth='1.3' />
	</g>

	{/* Открытая механика шеи и груди с проводами */}
	<path d='M124 106 C122 134, 136 164, 166 172 C180 162, 184 134, 174 108 Z' fill='#0F172A' stroke='#334155' strokeWidth='1.6' />
	<rect x='132' y='118' width='11' height='22' rx='2.5' fill='#94A3B8' stroke='#1E293B' strokeWidth='0.8' />
	<rect x='146' y='124' width='14' height='18' rx='2.5' fill='#D97706' stroke='#78350F' strokeWidth='0.8' />
	<path d='M130 114 Q146 126 164 138' stroke='#38BDF8' strokeWidth='2' fill='none' />
	<path d='M132 142 Q148 150 164 160' stroke='#FACC15' strokeWidth='1.4' fill='none' />

	{/* Белый панцирь с полосками стыков бронепластин и заклёпками */}
	<path d='M140 104 C156 90, 190 98, 214 132 C224 146, 222 168, 202 180 C178 194, 148 188, 136 168 C152 164, 162 146, 158 122 Z' fill='url(#zShell1)' stroke='#334155' strokeWidth='1.7' />
	<path d='M160 116 Q186 120 212 140' stroke='#475569' strokeWidth='1.3' fill='none' />
	<path d='M156 144 Q184 148 216 162' stroke='#475569' strokeWidth='1.3' fill='none' />
	<path d='M146 168 Q174 174 202 178' stroke='#475569' strokeWidth='1.2' fill='none' />
	<path d='M162 124 Q186 128 206 144' stroke='#00E5FF' strokeWidth='2' strokeLinecap='round' fill='none' />
	<circle cx='164' cy='111' r='1.6' fill='#475569' />
	<circle cx='198' cy='128' r='1.6' fill='#475569' />
	<circle cx='160' cy='152' r='1.6' fill='#475569' />
	<circle cx='196' cy='171' r='1.6' fill='#475569' />

	{/* Клюв: тонкий -> обычный -> голубой шарик -> острый чёрный кончик */}
	<g>
		<path d='M115 84 L92 90 L92.8 93.2 L116 88 Z' fill='#334155' stroke='#0F172A' strokeWidth='0.7' />
		<path d='M93 88.5 L26 106 L27.2 110.5 L94 94.5 Z' fill='url(#zBeak1)' stroke='#0F172A' strokeWidth='0.8' />
		<path d='M93 88.5 L48 100.2 L93.5 91.2 Z' fill='#F8FAFC' opacity='0.92' />
		<g style={{ animation: 'zoneCyanPulse 1.4s ease-in-out infinite' }}>
			<circle cx='25.5' cy='108.3' r='6.2' fill='#00E5FF' fillOpacity='0.4' />
			<circle cx='25.5' cy='108.3' r='3.5' fill='#00E5FF' stroke='#0284C7' strokeWidth='0.7' />
			<circle cx='24.5' cy='107.4' r='1.2' fill='#FFFFFF' />
		</g>
		<path d='M23.5 107 L1.5 114.2 L24.2 110.2 Z' fill='#020617' />
	</g>

	{/* Голова со швами бронепластин и заклёпками */}
	<path d='M108 82 C108 58, 130 46, 154 54 C172 60, 180 78, 174 96 C164 108, 142 114, 124 104 C116 98, 110 90, 108 82 Z' fill='url(#zShell1)' stroke='#334155' strokeWidth='1.7' />
	<path d='M126 50 L134 65 M152 54 L146 68 M112 74 L126 76 M152 84 L172 90' stroke='#475569' strokeWidth='1.3' />
	<circle cx='146' cy='57' r='1.5' fill='#475569' />
	<circle cx='165' cy='80' r='1.5' fill='#475569' />

	<circle cx='138' cy='76' r='13' fill='#CBD5E1' stroke='#334155' strokeWidth='1.8' />
	<circle cx='138' cy='76' r='10' fill='#0F172A' />
	<g style={{ transform: `translate(${facingRight ? -eyeOffset.x : eyeOffset.x}px, ${eyeOffset.y}px)`, transition: 'transform 0.1s ease-out' }}>
		<circle cx='138' cy='76' r='3.8' fill='#0284C7' />
		<circle cx='138' cy='76' r='2' fill='#38BDF8' />
		<circle cx='136.2' cy='74.2' r='1.5' fill='#FFFFFF' />
	</g>

	{/* Крыло с чёткими полосками перьев и неоновой линией */}
	<g style={{ transformOrigin: '176px 108px', animation: isFlying ? 'zoneWingFast 0.19s ease-in-out infinite' : 'zoneWingSlow 0.55s ease-in-out infinite' }}>
		<path d='M176 108 C206 58, 258 18, 306 8 C310 26, 290 58, 260 82 C280 76, 292 82, 286 90 C268 102, 242 110, 218 114 C236 114, 244 120, 238 128 C218 134, 194 132, 176 120 Z' fill='url(#zFeather1)' stroke='#475569' strokeWidth='1.4' />
		<path d='M194 96 L296 20' stroke='#475569' strokeWidth='1.2' />
		<path d='M200 104 L284 52' stroke='#475569' strokeWidth='1.2' />
		<path d='M198 112 L274 84' stroke='#475569' strokeWidth='1.2' />
		<path d='M192 120 L248 114' stroke='#475569' strokeWidth='1.2' />
		<path d='M190 92 C218 56, 258 26, 298 14' stroke='#00E5FF' strokeWidth='1.8' strokeLinecap='round' fill='none' />
		<circle cx='178' cy='108' r='15' fill='#E2E8F0' stroke='#334155' strokeWidth='1.8' />
		<circle cx='178' cy='108' r='10.5' fill='#0F172A' />
		<circle cx='178' cy='108' r='7.2' stroke='#38BDF8' strokeWidth='2.4' fill='none' style={{ animation: 'zoneCyanPulse 1.4s infinite' }} />
		<circle cx='178' cy='108' r='3.5' fill='#00E5FF' />
	</g>
</svg>

					</div>
				</div>
			</div>
		</div>
	)
}
