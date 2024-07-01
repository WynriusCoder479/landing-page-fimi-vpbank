import { PlusCircle } from 'lucide-react'
import { FC } from 'react'

import { CardInfo } from '../../../constants/card'

const Card: FC<CardInfo> = ({ ...card }) => {
	return (
		<div
			key={card.name}
			className='relative flex h-96 w-[30rem] gap-x-6 rounded-lg bg-white p-4'
		>
			<img
				src={`/card/${card.image}.png`}
				alt='card'
				className='h-64 w-40'
			/>
			<div className='flex flex-1 flex-col space-y-8'>
				<div className='rounded-md bg-black p-2 text-base font-semibold text-white'>
					<p>Thẻ tín dụng VP Bank {card.name}</p>
				</div>
				<ul className='space-y-4 text-sm'>
					{card.detail.map(item => (
						<li className='list-disc'>{item}</li>
					))}
				</ul>
			</div>
			<button className='absolute bottom-2 right-2 flex items-center justify-center gap-4 rounded-md bg-indigo-600 px-8 py-2 text-lg font-semibold text-white'>
				Chi tiết
				<PlusCircle />
			</button>
		</div>
	)
}

export default Card
