
'use client'
import { MD_MID } from '@/shared/constants/breakpoints';
import { useBodyClassName, useScreen } from '@/shared/hooks';
import { cn } from '@/shared/lib/cn';
import { UiButton } from '@/shared/ui/UiButton';
import { UiContainer } from '@/shared/ui/UiContainer';
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle';
import { UiTypography } from '@/shared/ui/UiTypography';
import { ContentItem } from '@/widgets/HomeAbout/ui/ContentItem';

import Image from 'next/image';
import React from 'react';
 import type { Metadata } from 'next'

  const metadata: Metadata = {
	title: 'Услуги | Rav.Coder',
	description: 'Ознакомьтесь с полным спектром наших услуг, включая веб-разработку, UI/UX дизайн, техническую поддержку и SEO-продвижение.',
}
    const Services = () => {
			const { screenWidth } = useScreen()
		
     return (
		<section className='md-mid:py-10 py-7  md-mid:px-7 px-5'>
	     <UiContainer className={cn('h-full', useBodyClassName)}>
				<UiDecorationTitle className=' md-mid:text-3xl text-2xl'>
					Услуги
				</UiDecorationTitle>
				<div className='md-mid:relative z-[0] md-mid:pl-16 md-mid:pt-16 md-mid:pb-10 pb-25 md-mid:block flex flex-col justify-end h-full text-amber-50'>
					
					<UiTypography
						font='Montserrat-B'
						className='text-left md-mid:text-[20px] text-1xl text-amber-50'
					>
						Всё для вашего проекта
						</UiTypography>
						<br />
					<UiTypography font='Montserrat-R' className='text-[20px] mt-4 mb-7  text-amber-50'>
						
						
						
					Комплексные <span className='main-text-gradient'>DIGITAL-РЕШЕНИЯ</span> для роста <br/> вашего бизнеса — от идеи до поддержки.
						
					</UiTypography>	
					
					
						
					
						
					<UiButton theme='fill-invert' className='uppercase w-max'>
						<UiTypography font='Montserrat-SB'><a href="https://t.me/Ravcoderbot_bot">Заказать проект</a></UiTypography>
					</UiButton>
					<Image
						src={
							
							screenWidth >= MD_MID
								? '/images/Home/Serveces/servis-bg-Frame 6153.png'
								: '/images/Home/Serveces/servis-bg-Frame 6153.png'
						}
						alt='Главный фон'
						width={screenWidth >= MD_MID ? 1440 : 380}
						height={screenWidth >= MD_MID ? 450 : 555}
						className={cn(
							'absolute inset-0 size-full  widht-avto object-cover -z-[1] md-mid:rounded-md',
							{
								'object-top': screenWidth < MD_MID,
							}
						)}
					/>
				</div>
			</UiContainer>
						
						
			  <p className='p-20 md-mid:py-15 py-7 md-mid:px-7 px-5 '>Мы разрабатываем современные <span className='main-text-gradient'>сайты, мобильные приложения и цифровые сервисы,</span>  
				 которые помогают бизнесу расти, быть заметным и удобным для клиентов. В центре нашей работы — сочетание дизайна, технологий и понимания задач заказчика.</p>

				 <UiDecorationTitle className='md-mid:text-3xl text-2xl'>
				 Наши ключевые направления:
				</UiDecorationTitle>
					<ul className={cn('flex flex-col gap-y-8', useBodyClassName)}>
							<ContentItem>
							<UiTypography  font='Montserrat-M' tag='span'>
									Разработка веб-сайтов и приложений
								</UiTypography>
								 — от лендингов до сложных платформ, с учётом всех требований бизнеса и пользователей.	{' '}
							</ContentItem>
							<ContentItem>
								<UiTypography font='Montserrat-M' tag='span'>
									UI/UX-дизайн 
								</UiTypography>
									 — проектируем понятные, привлекательные и эффективные интерфейсы.{' '}
							</ContentItem>
							<ContentItem>
								<UiTypography font='Montserrat-M' tag='span'>
									Техническая поддержка 
								</UiTypography>
								— обеспечиваем стабильную работу продуктов и быстро реагируем на любые задачи.{' '}
							</ContentItem>
							<ContentItem>
								
								<UiTypography font='Montserrat-M' tag='span'>
									{' '}
								Продвижение и SEO 
								</UiTypography>
								— повышаем видимость сайта, улучшаем позиции в поиске и привлекаем целевую аудиторию{' '}
								<UiTypography font='Montserrat-M' tag='span'>
									{' '}
									
								</UiTypography>
								
							</ContentItem>
							<ContentItem>
								<UiTypography font='Montserrat-M' tag='span'>
									Техническая поддержка 
								</UiTypography>
								— внедряем ИИ-решения для автоматизации, персонализации и улучшения пользовательского опыта.
								</ContentItem>
						</ul>
						  <p className='p-40 md-mid:py-10 py-7 md-mid:px-7 px-5 text-center'><span className='main-text-gradient'>Мы предлагаем гибкий формат сотрудничества: от разовых задач до полного сопровождения проектов.</span>  </p>
			
                 <UiDecorationTitle className='md-mid:text-3xl text-2xl'>
				 Технологии будущего уже сегодня
				</UiDecorationTitle>
                  
				<ul className={cn('flex flex-col gap-y-5', useBodyClassName)}>
			<ContentItem>
				 Интегрируем решения<UiTypography font='Montserrat-M' tag='span'>
					 <br/>  на базе нейросетей
					 </UiTypography>
					 <br/> 
			    	и искусственного интеллекта для автоматизации, персонализации и улучшения цифровых продуктов.
				</ContentItem>
				<ContentItem>
			     Мы внедряем нейросетевые технологии в цифровые продукты, чтобы они становились {' '}
				<UiTypography font='Montserrat-M' tag='span'>
					умнее, быстрее и эффективнее.
				</UiTypography>
			</ContentItem>
			<ContentItem>
		    <UiTypography font='Montserrat-M' tag='span'>
				Используем ИИ
				</UiTypography><br/> 
				 для автоматизации, генерации контента, персонализации интерфейсов и интеллектуального анализа данных.		{' '}
			</ContentItem>
			
		</ul>
		         <Image src='/images/Home/Serveces/computer-burd.png' 
				    alt='dssfdsfdsf'
					width={500}
					height={500}
					className='object-cover w-full max-h-[300px] rounded-lg mt-7 mb-2.5 '/>
		</section>
	   
  );
}

export default Services;
