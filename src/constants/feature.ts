export type Feature = {
	qoute: string
	icon: string
	note: string
}

export const features = [
	{
		qoute: 'Mở thẻ online, với CCCD gắn chip',
		icon: 'credit',
		note: 'Không cần chứng minh thu nhập'
	},
	{
		qoute: 'Hạn mức lên đến 100 triệu đồng',
		icon: 'coin',
		note: 'Chọn thẻ theo nhu cầu chỉ với 1 lần đăng ký'
	},
	{
		qoute: 'Nhận ngay voucher sau 10 phút mở thể',
		icon: 'cuppon',
		note: 'Thanh toán ngay không cần thể cứng'
	}
] satisfies Feature[]
