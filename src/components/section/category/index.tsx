import { cards } from '../../../constants/card'
import Card from './card'

const CatgorySection = () => {
	return (
		<div className='mx-4 flex w-full max-w-[1024px] flex-wrap items-center justify-center gap-4 overflow-hidden rounded-lg bg-gradient-to-tr from-[#6563d4] via-[#5752c7] to-purple-200 p-4'>
			{cards.map(card => (
				<Card
					key={card.name}
					{...card}
				/>
			))}
		</div>
	)
}

export default CatgorySection
