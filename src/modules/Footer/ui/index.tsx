import { FC } from 'react'
import Link from 'next/link'
import { TClassName } from '@/shared/types/shared'
import { UiContainer } from '@/shared/ui/UiContainer'
import { cn } from '@/shared/lib/cn'
import { UiLogo } from '@/shared/ui/UiLogo'
import { MainNavigation } from '@/segments/MainNavigation'
import { Info } from './Info'
import { UiTypography } from '@/shared/ui/UiTypography'

interface Props extends TClassName {}

const Footer: FC<Props> = ({ className }) => {
	return (
		<footer className='relative bg-third-background'>
			<style>{`
				@keyframes fullSquadPatrol {
					0% {
						left: 2%;
						transform: translateX(0) scaleX(-1);
					}
					46% {
						left: 98%;
						transform: translateX(-100%) scaleX(-1);
					}
					50% {
						left: 98%;
						transform: translateX(-100%) scaleX(1);
					}
					96% {
						left: 2%;
						transform: translateX(0) scaleX(1);
					}
					100% {
						left: 2%;
						transform: translateX(0) scaleX(-1);
					}
				}
				@keyframes logoKeepReadable {
					0%, 49% { transform: scaleX(-1); }
					50%, 99% { transform: scaleX(1); }
					100% { transform: scaleX(-1); }
				}
				@keyframes dogBodyBob {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-2px); }
				}
				@keyframes dogLegA {
					0%, 100% { transform: rotate(-16deg); }
					50% { transform: rotate(16deg); }
				}
				@keyframes dogLegB {
					0%, 100% { transform: rotate(16deg); }
					50% { transform: rotate(-16deg); }
				}
				@keyframes dogTailWag {
					0%, 100% { transform: rotate(-8deg); }
					50% { transform: rotate(14deg); }
				}
				@keyframes walleHeadTilt {
					0%, 100% { transform: rotate(-3deg) translateY(0px); }
					50% { transform: rotate(4deg) translateY(-1.5px); }
				}
				@keyframes roverSuspensionBob {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-1.5px); }
				}
				@keyframes roverWheelSpin {
					from { transform: rotate(0deg); }
					to { transform: rotate(-360deg); }
				}
				@keyframes hummingbirdFloat {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-4px) rotate(-2deg); }
				}
				@keyframes wingFlapFront {
					0%, 100% { transform: rotate(0deg) scaleY(1); }
					50% { transform: rotate(26deg) scaleY(0.65); }
				}
				@keyframes wingFlapBack {
					0%, 100% { transform: rotate(0deg) scaleY(1); }
					50% { transform: rotate(18deg) scaleY(0.75); }
				}
			`}</style>

			<UiContainer
				tag='div'
				className={cn('relative border-t border-sky-400/30 pt-5 pb-12', className)}
			>
				{/* Полный отряд роботов RAV:Coder: робопёс + гусеничный бот + ровер + колибри */}
				<div
					style={{ animation: 'fullSquadPatrol 65s linear infinite' }}
					className='pointer-events-none select-none z-10 absolute -top-[88px] flex items-end gap-3 md-mid:gap-6 scale-[0.65] xs-big:scale-75 md-mid:scale-100 origin-bottom drop-shadow-[0_8px_16px_rgba(56,189,248,0.28)]'
				>
					{/* 1. Белый робопёс */}
					<div style={{ animation: 'dogBodyBob 1.1s ease-in-out infinite' }}>
						<svg width='78' height='60' viewBox='0 0 168 128' fill='none'>
							<defs>
								<linearGradient id='dogCeramic' x1='40' y1='15' x2='130' y2='110' gradientUnits='userSpaceOnUse'>
									<stop offset='0%' stopColor='#FFFFFF' />
									<stop offset='60%' stopColor='#F1F5F9' />
									<stop offset='100%' stopColor='#CBD5E1' />
								</linearGradient>
								<linearGradient id='dogCyan' x1='0' y1='0' x2='1' y2='1'>
									<stop offset='0%' stopColor='#0284C7' />
									<stop offset='100%' stopColor='#00E5FF' />
								</linearGradient>
							</defs>

							{/* Дальние лапы */}
							<g style={{ transformOrigin: '64px 66px', animation: 'dogLegB 1.1s ease-in-out infinite' }}>
								<path d='M64 66 L54 92 L48 118' stroke='#1E293B' strokeWidth='8' strokeLinecap='round' strokeLinejoin='round' />
								<rect x='40' y='115' width='14' height='6' rx='3' fill='#0F172A' />
							</g>
							<g style={{ transformOrigin: '122px 66px', animation: 'dogLegA 1.1s ease-in-out infinite' }}>
								<path d='M122 66 L132 92 L126 118' stroke='#1E293B' strokeWidth='8' strokeLinecap='round' strokeLinejoin='round' />
								<rect x='118' y='115' width='14' height='6' rx='3' fill='#0F172A' />
							</g>

							{/* Светящийся хвост */}
							<g style={{ transformOrigin: '134px 52px', animation: 'dogTailWag 0.9s ease-in-out infinite' }}>
								<path d='M134 52 L156 34 L148 30 L130 48 Z' fill='url(#dogCeramic)' stroke='#334155' strokeWidth='1.8' strokeLinejoin='round' />
								<line x1='152' y1='33' x2='136' y2='47' stroke='#00E5FF' strokeWidth='2.5' strokeLinecap='round' />
							</g>

							{/* Корпус и голова */}
							<path d='M52 54 C52 44, 60 40, 72 40 L124 40 C134 40, 138 45, 138 54 L132 70 L58 70 Z' fill='url(#dogCeramic)' stroke='#334155' strokeWidth='2' strokeLinejoin='round' />
							<rect x='56' y='56' width='10' height='4' rx='2' fill='url(#dogCyan)' />
							<line x1='80' y1='45' x2='116' y2='45' stroke='url(#dogCyan)' strokeWidth='2.5' strokeLinecap='round' />
							<path d='M52 48 L44 28 L58 26 L66 46 Z' fill='#334155' />
							<rect x='18' y='12' width='52' height='26' rx='13' fill='url(#dogCeramic)' stroke='#334155' strokeWidth='2' />
							<path d='M19 24 C19 16, 26 13, 36 13 L48 13 L44 25 L19 25 Z' fill='#0F172A' />
							<path d='M23 19 L34 19' stroke='#00E5FF' strokeWidth='2.2' strokeLinecap='round' />
							<circle cx='56' cy='25' r='8' fill='#0F172A' stroke='#38BDF8' strokeWidth='2' />
							<circle cx='56' cy='25' r='4' fill='#00E5FF' />

							{/* Ближние лапы */}
							<g style={{ transformOrigin: '68px 66px', animation: 'dogLegA 1.1s ease-in-out infinite' }}>
								<path d='M68 66 L58 92 L52 118' stroke='url(#dogCeramic)' strokeWidth='9.5' strokeLinecap='round' strokeLinejoin='round' />
								<path d='M68 66 L58 92 L52 118' stroke='#334155' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
								<circle cx='68' cy='66' r='6' fill='url(#dogCyan)' stroke='#0F172A' strokeWidth='1.4' />
								<rect x='43' y='115' width='16' height='7' rx='3.5' fill='#1E293B' />
							</g>
							<g style={{ transformOrigin: '126px 66px', animation: 'dogLegB 1.1s ease-in-out infinite' }}>
								<path d='M126 66 L136 92 L130 118' stroke='url(#dogCeramic)' strokeWidth='9.5' strokeLinecap='round' strokeLinejoin='round' />
								<path d='M126 66 L136 92 L130 118' stroke='#334155' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
								<circle cx='126' cy='66' r='6' fill='url(#dogCyan)' stroke='#0F172A' strokeWidth='1.4' />
								<rect x='121' y='115' width='16' height='7' rx='3.5' fill='#1E293B' />
							</g>
						</svg>
					</div>

					{/* 2. Гусеничный робот с большими голубыми глазами (в стиле ВАЛЛ-И) */}
					<div style={{ animation: 'roverSuspensionBob 1.3s ease-in-out infinite' }}>
						<svg width='68' height='62' viewBox='0 0 136 124' fill='none'>
							{/* Голова-бинокль с большими светящимися линзами */}
							<g style={{ transformOrigin: '68px 44px', animation: 'walleHeadTilt 2.4s ease-in-out infinite' }}>
								{/* Шея */}
								<rect x='62' y='34' width='12' height='14' rx='3' fill='#334155' stroke='#0F172A' strokeWidth='1.5' />
								{/* Левый и правый оптические блоки */}
								<rect x='26' y='10' width='38' height='26' rx='12' transform='rotate(-6 26 10)' fill='#F8FAFC' stroke='#334155' strokeWidth='2' />
								<rect x='70' y='7' width='38' height='26' rx='12' transform='rotate(6 70 7)' fill='#F8FAFC' stroke='#334155' strokeWidth='2' />
								{/* Тёмные линзы и неоновые голубые зрачки */}
								<circle cx='44' cy='23' r='9' fill='#0F172A' stroke='#38BDF8' strokeWidth='1.8' />
								<circle cx='42' cy='22' r='4.5' fill='#00E5FF' />
								<circle cx='40' cy='20' r='1.8' fill='#FFFFFF' />
								<circle cx='88' cy='22' r='9' fill='#0F172A' stroke='#38BDF8' strokeWidth='1.8' />
								<circle cx='86' cy='21' r='4.5' fill='#00E5FF' />
								<circle cx='84' cy='19' r='1.8' fill='#FFFFFF' />
							</g>

							{/* Белый квадратный корпус со значком >> RAV */}
							<rect x='42' y='46' width='52' height='42' rx='8' fill='#F8FAFC' stroke='#334155' strokeWidth='2' />
							{/* Светящийся голубой бейдж со стрелками >> */}
							<rect x='50' y='56' width='14' height='14' rx='3' fill='#38BDF8' />
							<path d='M54 60 L57 63 L54 66 M58 60 L61 63 L58 66' stroke='#FFFFFF' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
							<line x1='46' y1='78' x2='46' y2='84' stroke='#00E5FF' strokeWidth='2.5' strokeLinecap='round' />

							{/* Треугольная гусеница (смотрит влево) */}
							<path
								d='M36 90 C36 82, 46 72, 56 72 L96 72 C104 72, 110 80, 110 92 L110 106 C110 112, 104 116, 96 116 L46 116 C39 116, 36 110, 36 104 Z'
								fill='#334155'
								stroke='#0F172A'
								strokeWidth='2.5'
							/>
							{/* Три внутренних опорных катка внутри гусеницы */}
							<circle cx='50' cy='102' r='9' fill='#1E293B' stroke='#38BDF8' strokeWidth='2' />
							<circle cx='78' cy='86' r='8' fill='#1E293B' stroke='#38BDF8' strokeWidth='2' />
							<circle cx='96' cy='102' r='9' fill='#1E293B' stroke='#38BDF8' strokeWidth='2' />
						</svg>
					</div>
					{/* 3. Ровер RAV:CODER с парящей над ним робо-колибри */}
					<div className='flex flex-col items-center'>
						{/* Механическая колибри */}
						<div
							style={{ animation: 'hummingbirdFloat 1.5s ease-in-out infinite' }}
							className='-mb-3 z-20'
						>
							<svg width='96' height='50' viewBox='0 0 208 108' fill='none'>
								<defs>
									<linearGradient id='birdBodyWhite' x1='60' y1='20' x2='140' y2='80' gradientUnits='userSpaceOnUse'>
										<stop offset='0%' stopColor='#FFFFFF' />
										<stop offset='60%' stopColor='#E2E8F0' />
										<stop offset='100%' stopColor='#94A3B8' />
									</linearGradient>
									<linearGradient id='wingGlass' x1='100' y1='10' x2='195' y2='45' gradientUnits='userSpaceOnUse'>
										<stop offset='0%' stopColor='#E0F2FE' stopOpacity='0.95' />
										<stop offset='50%' stopColor='#7DD3FC' stopOpacity='0.75' />
										<stop offset='100%' stopColor='#38BDF8' stopOpacity='0.45' />
									</linearGradient>
									<linearGradient id='neonCyan' x1='0' y1='0' x2='1' y2='1'>
										<stop offset='0%' stopColor='#0284C7' />
										<stop offset='100%' stopColor='#00E5FF' />
									</linearGradient>
								</defs>

								<g style={{ transformOrigin: '108px 46px', animation: 'wingFlapBack 0.32s ease-in-out infinite 0.12s' }}>
									<path
										d='M108 46 C125 22, 152 10, 172 14 C162 28, 140 40, 114 48 Z'
										fill='url(#wingGlass)'
										stroke='#38BDF8'
										strokeWidth='1.4'
									/>
								</g>

								<path
									d='M124 62 L176 92 L162 72 L134 56 Z'
									fill='url(#neonCyan)'
									stroke='#0F172A'
									strokeWidth='1.6'
									strokeLinejoin='round'
								/>
								<line x1='132' y1='61' x2='170' y2='86' stroke='#E0F2FE' strokeWidth='1.5' strokeLinecap='round' />

								<path
									d='M82 44 C94 36, 116 42, 132 58 C122 68, 98 68, 84 56 Z'
									fill='url(#birdBodyWhite)'
									stroke='#334155'
									strokeWidth='2'
									strokeLinejoin='round'
								/>
								<path d='M92 58 Q108 66 122 60' stroke='#0284C7' strokeWidth='3' strokeLinecap='round' fill='none' />
								<circle cx='104' cy='52' r='4.5' fill='#1E293B' stroke='#00E5FF' strokeWidth='1.5' />

								<circle cx='78' cy='42' r='13' fill='url(#birdBodyWhite)' stroke='#334155' strokeWidth='2' />
								<circle cx='74' cy='40' r='5.5' fill='#0F172A' stroke='#38BDF8' strokeWidth='1.5' />
								<circle cx='73' cy='39' r='2' fill='#00E5FF' />
								<path d='M66 41 L14 55 L66 46 Z' fill='#0F172A' />
								<path d='M26 51.8 L14 55 L27 52.8 Z' fill='#00E5FF' />

								<g style={{ transformOrigin: '104px 48px', animation: 'wingFlapFront 0.32s ease-in-out infinite' }}>
									<path
										d='M104 48 C132 22, 174 6, 198 12 C188 30, 152 46, 112 52 Z'
										fill='url(#wingGlass)'
										stroke='#0284C7'
										strokeWidth='1.8'
										strokeLinejoin='round'
									/>
									<line x1='110' y1='46' x2='190' y2='14' stroke='#FFFFFF' strokeWidth='1.6' strokeLinecap='round' />
									<line x1='114' y1='48' x2='182' y2='22' stroke='#38BDF8' strokeWidth='1.2' />
									<line x1='116' y1='50' x2='170' y2='30' stroke='#38BDF8' strokeWidth='1.2' />
									<circle cx='104' cy='48' r='5' fill='#1E293B' stroke='#00E5FF' strokeWidth='1.6' />
								</g>
							</svg>
						</div>

						{/* 6-колёсный ровер RAV:CODER */}
						<div style={{ animation: 'roverSuspensionBob 1.1s ease-in-out infinite' }}>
							<svg width='106' height='60' viewBox='0 0 224 128' fill='none'>
								<defs>
									<linearGradient id='roverShell' x1='40' y1='20' x2='180' y2='100' gradientUnits='userSpaceOnUse'>
										<stop offset='0%' stopColor='#FFFFFF' />
										<stop offset='60%' stopColor='#F1F5F9' />
										<stop offset='100%' stopColor='#CBD5E1' />
									</linearGradient>
								</defs>

								<line x1='86' y1='10' x2='86' y2='44' stroke='#334155' strokeWidth='3.2' strokeLinecap='round' />
								<rect x='82.5' y='4' width='7' height='12' rx='2.5' fill='#00E5FF' stroke='#0284C7' strokeWidth='1.2' />
								<rect x='58' y='34' width='26' height='10' rx='3.5' fill='#0284C7' stroke='#0F172A' strokeWidth='1.8' />

								<rect
									x='102'
									y='30'
									width='96'
									height='62'
									rx='12'
									fill='url(#roverShell)'
									stroke='#334155'
									strokeWidth='2.2'
								/>
								<line x1='106' y1='42' x2='194' y2='42' stroke='#CBD5E1' strokeWidth='1.8' />
								<path d='M108 82 L192 82' stroke='#00E5FF' strokeWidth='3.5' strokeLinecap='round' />

								{/* Фирменный бейдж и логотип RAV:CODER (всегда читается слева направо) */}
								<g
									style={{
										transformOrigin: '150px 58px',
										animation: 'logoKeepReadable 65s linear infinite',
									}}
								>
									<rect x='118' y='48' width='20' height='20' rx='4' fill='#0284C7' />
									<path
										d='M123 53 L128 58 L123 63 M129 53 L134 58 L129 63'
										stroke='#FFFFFF'
										strokeWidth='2.2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<text x='143' y='59' fill='#0F172A' fontSize='13' fontWeight='800' fontFamily='sans-serif'>
										RAV
									</text>
									<text x='143' y='68' fill='#334155' fontSize='8' fontWeight='700' fontFamily='sans-serif'>
										:CODER
									</text>
								</g>

								<path
									d='M24 56 C24 46, 32 42, 42 42 L102 42 L102 92 L28 92 C25 92, 24 89, 24 84 Z'
									fill='url(#roverShell)'
									stroke='#334155'
									strokeWidth='2.2'
									strokeLinejoin='round'
								/>

								<rect x='28' y='52' width='52' height='24' rx='8' fill='#0F172A' stroke='#38BDF8' strokeWidth='1.8' />
								<path d='M36 63 Q41 67 46 63' stroke='#00E5FF' strokeWidth='3.4' strokeLinecap='round' fill='none' />
								<path d='M58 63 Q63 67 68 63' stroke='#00E5FF' strokeWidth='3.4' strokeLinecap='round' fill='none' />
								<line x1='88' y1='48' x2='88' y2='82' stroke='#00E5FF' strokeWidth='3' strokeLinecap='round' />

								<rect x='30' y='88' width='162' height='11' rx='5' fill='#1E293B' />
								<circle cx='44' cy='84' r='3' fill='#334155' />
								<circle cx='56' cy='84' r='3' fill='#334155' />

								{/* 3 колеса с чётким расстоянием между шинами */}
								<g>
									<circle cx='44' cy='106' r='18' fill='#0F172A' stroke='#334155' strokeWidth='3' />
									<circle cx='44' cy='106' r='11.5' fill='#1E293B' stroke='#00E5FF' strokeWidth='2.6' />
									<circle cx='44' cy='106' r='5' fill='#CBD5E1' />
									<g style={{ transformOrigin: '44px 106px', animation: 'roverWheelSpin 2.6s linear infinite' }}>
										<line x1='34.5' y1='106' x2='53.5' y2='106' stroke='#38BDF8' strokeWidth='1.8' />
										<line x1='44' y1='96.5' x2='44' y2='115.5' stroke='#38BDF8' strokeWidth='1.8' />
									</g>
								</g>

								<g>
									<circle cx='116' cy='106' r='18' fill='#0F172A' stroke='#334155' strokeWidth='3' />
									<circle cx='116' cy='106' r='11.5' fill='#1E293B' stroke='#00E5FF' strokeWidth='2.6' />
									<circle cx='116' cy='106' r='5' fill='#CBD5E1' />
									<g style={{ transformOrigin: '116px 106px', animation: 'roverWheelSpin 2.6s linear infinite' }}>
										<line x1='106.5' y1='106' x2='125.5' y2='106' stroke='#38BDF8' strokeWidth='1.8' />
										<line x1='116' y1='96.5' x2='116' y2='115.5' stroke='#38BDF8' strokeWidth='1.8' />
									</g>
								</g>

								<g>
									<circle cx='178' cy='106' r='18' fill='#0F172A' stroke='#334155' strokeWidth='3' />
									<circle cx='178' cy='106' r='11.5' fill='#1E293B' stroke='#00E5FF' strokeWidth='2.6' />
									<circle cx='178' cy='106' r='5' fill='#CBD5E1' />
									<g style={{ transformOrigin: '178px 106px', animation: 'roverWheelSpin 2.6s linear infinite' }}>
										<line x1='168.5' y1='106' x2='187.5' y2='106' stroke='#38BDF8' strokeWidth='1.8' />
										<line x1='178' y1='96.5' x2='178' y2='115.5' stroke='#38BDF8' strokeWidth='1.8' />
									</g>
								</g>
							</svg>
						</div>
					</div>
				</div>

				<div className='flex items-start flex-wrap md-mid:flex-row flex-col'>
					<div className='flex md-mid:items-center md-mid:flex-row flex-col'>
						<UiLogo />
						<MainNavigation className='lg-mid:ml-[150px] lg-low:ml-16 md-mid:ml-5 gap-x-4 md-mid:my-0 my-7 xs-big:flex-row flex-col gap-y-4' />
					</div>
					<Info className='md-mid:ml-auto' />
				</div>

				<div className='flex flex-wrap items-center justify-between gap-4 mt-12'>
					<UiTypography
						font='Montserrat-L'
						className='xs-big:text-[15px] text-xs'
					>
						© 2024 - {new Date().getFullYear()} “Rav:coder”. Все права защищены.
					</UiTypography>
					<Link
						href='/privacy-policy'
						className='xs-big:text-[15px] text-xs opacity-80 hover:opacity-100 main-text-gradient underline underline-offset-4 transition-opacity'
					>
						Политика конфиденциальности
					</Link>
				</div>
			</UiContainer>
		</footer>
	)
}

export { Footer }

