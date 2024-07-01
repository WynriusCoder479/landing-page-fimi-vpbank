import { useSearchParams } from 'react-router-dom'

const ActionButton = () => {
	const [searchParams] = useSearchParams()

	const source = searchParams.get('utm_source') || 'no_source'
	const campaign = searchParams.get('utm_campaign') || 'any_campaign'
	const callback = searchParams.get('callback') || 'https://pub.fimi.tech'

	return (
		<a
			className='flex w-full items-center justify-center rounded-full bg-[#6563D4] p-2 text-lg font-bold text-white'
			href={`${callback}/?utm_source=${source};utm_campaign=${campaign}`}
		>
			Mở thẻ ngay
		</a>
	)
}

export default ActionButton
