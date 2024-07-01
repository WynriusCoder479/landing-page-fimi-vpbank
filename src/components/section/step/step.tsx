import { FC } from 'react'

import { type Step } from '../../../constants/step'

const Step: FC<Step> = ({ step, title, description, image, mobileImage }) => {
	return (
		<div className='relative flex w-[24.25rem] justify-center gap-4'>
			<div className='flex flex-col items-center justify-between'>
				<p className='text-center text-2xl font-bold tracking-wider'>
					Bước {step}
				</p>
				<p className='text-center text-xl font-bold opacity-80'>{title}</p>
				<p className='text-center'>{description}</p>
				<img
					src={`/step/${image}.svg`}
					alt='step'
					className='hidden aspect-[9/16] w-72 lg:block'
				/>
				<img
					src={`/step/${mobileImage}.svg`}
					alt='step-mobile'
					className='md:hidden'
				/>
			</div>
		</div>
	)
}

export default Step
