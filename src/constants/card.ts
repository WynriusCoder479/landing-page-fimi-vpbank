export type CardInfo = {
	name: string
	detail: string[]
	image: 'the1' | 'the2' | 'the3' | 'the4' | 'the5'
}

export const cards = [
	{
		name: 'StepUp',
		detail: [
			'Hoàn đến 1.100.000 đồng trong tháng đầu',
			'Hoàn tiền không giới hạn hàng tháng',
			'Ưu đãi trả góp tại hơn 150 đối tác',
			'Giảm đến 30% tại hơn 5.000 cửa hàng',
			'Miễn phí phí thường niên (*)'
		],
		image: 'the1'
	},
	{
		name: 'Lady',
		detail: [
			'Hoàn tiền đến 15% giá trị: giáo dục, bảo hiểm trực tuyến, y tế, chăm sóc sắc đẹp, siêu thị,...',
			'Ưu đãi trả góp tại hơn 150 đối tác',
			'Giảm đến 30% tại hơn 5.000 cửa hàng',
			'Miễn phí phí thường niên (*)'
		],
		image: 'the2'
	},
	{
		name: 'Z',
		detail: [
			'Hoàn đến 800.000 đồng trong tháng đầu',
			'Ưu đãi trả góp 0% tại mọi giao dịch',
			'Hoàn 10% tối đa 500.000 đồng hàng tháng',
			'Giảm đến 30% tại hơn 5.000 cửa hàng',
			'Miễn phí phí thường niên (*)'
		],
		image: 'the3'
	},
	{
		name: 'MC2',
		detail: [
			'Tích 1.000đ = 6 điểm cho chi tiêu tại siêu thị',
			'Tích 1.000đ = 3 điểm cho các giao dịch khác',
			'Ưu đãi trả góp tại hơn 150 đối tác',
			'Giảm đến 30% tại hơn 5.000 cửa hàng'
		],
		image: 'the4'
	},
	{
		name: 'VNA Platinum',
		detail: [
			'Hoàn đến 1.000.000 đồng trong tháng đầu',
			'Tặng đến 1.000 dặm trong tháng đầu',
			'Tích dặm không giới hạn hàng tháng',
			'Giảm đến 30% tại hơn 5.000 cửa hàng',
			'Miễn phí phí thường niên (*)'
		],
		image: 'the5'
	}
] satisfies CardInfo[]
