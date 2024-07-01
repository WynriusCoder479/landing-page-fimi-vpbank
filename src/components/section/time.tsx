import Wrapper from '../common/wrapper'

const TimeSection = () => {
	return (
		<Wrapper>
			<div className='flex items-center justify-center'>
				<img
					src='/banner-2.png'
					alt='banner 2'
					className='hidden lg:block'
				/>
				<img
					src='/banner-2-mobile.png'
					alt='banner 2'
					className='sm:w-4/5 lg:hidden'
				/>
			</div>
		</Wrapper>
	)
}

export default TimeSection
