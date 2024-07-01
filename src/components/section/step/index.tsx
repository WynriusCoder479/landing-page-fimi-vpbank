import { steps } from '../../../constants/step'
import Wrapper from '../../common/wrapper'
import Step from './step'

const StepSection = () => {
	return (
		<Wrapper>
			<div className='relative mx-auto mt-16 grid gap-x-4 gap-y-8 rounded-3xl bg-gradient-to-br from-[#09824b] via-[#56d6a9] to-[#09824b] px-10 pb-4 pt-12 text-white sm:px-20 lg:grid-cols-3 lg:px-4'>
				<div className='absolute -top-4 left-1/2 w-[calc(100%-50px)] -translate-x-1/2 -translate-y-1/2 -rotate-2 transform rounded-md bg-[#6563D4] px-4 py-7 text-xl font-extrabold lg:w-fit'>
					<p>NHẬN ƯU ĐÃI VỚI 6 BƯỚC ĐƠN GIẢN</p>
				</div>
				{steps.map(step => (
					<Step
						key={step.step}
						{...step}
					/>
				))}
			</div>
		</Wrapper>
	)
}

export default StepSection
