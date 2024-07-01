import { features } from '../../../constants/feature'
import Wrapper from '../../common/wrapper'
import FeatureCard from './feature-card'

const FeatureSection = () => {
	return (
		<Wrapper>
			<div className='flex w-full flex-col gap-x-4 gap-y-8 p-4 lg:flex-row'>
				{features.map(feature => (
					<FeatureCard
						key={feature.icon}
						{...feature}
					/>
				))}
			</div>
		</Wrapper>
	)
}

export default FeatureSection
