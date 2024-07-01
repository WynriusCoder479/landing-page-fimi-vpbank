import { FC } from 'react'

import { Feature } from '../../../constants/feature'

const FeatureCard: FC<Feature> = ({ qoute, icon, note }) => {
	return (
		<div className='relative h-52 w-[28rem] overflow-hidden rounded-3xl bg-[#6563D4] p-4 lg:w-[25rem]'>
			<img
				src='/bg/feature-bg-1.png'
				alt='bg'
				className='absolute object-cover'
			/>
			<div className='relative flex h-[calc(100%-30px)] items-center justify-center'>
				<img
					src={`/icon/${icon}.svg`}
					alt='icon'
					className='absolute -left-1 top-2 z-10 h-14 w-14'
				/>
				<div className='h-20 w-[calc(100%-50px)] -rotate-2 rounded-xl bg-white p-4 text-center text-lg font-bold'>
					<p>{qoute}</p>
				</div>
			</div>

			<p className='text-center font-semibold text-black'>{note}</p>
		</div>
	)
}

export default FeatureCard
