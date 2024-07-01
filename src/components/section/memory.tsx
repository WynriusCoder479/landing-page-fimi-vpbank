import Wrapper from '../common/wrapper'

const MemorySection = () => {
	return (
		<Wrapper>
			<div className='flex items-center justify-center'>
				<img
					src='/banner-1.png'
					alt='banner 1'
					className='hidden lg:block'
				/>
				<img
					src='/banner-1-mobile.png'
					alt='banner 1'
					className='sm:w-4/5 lg:hidden'
				/>
			</div>
		</Wrapper>
	)
}

export default MemorySection
