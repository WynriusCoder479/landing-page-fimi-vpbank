export type Step = {
	step: number
	title: string
	description: string
	image: 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6'
	mobileImage:
		| 'step1-mobile'
		| 'step2-mobile'
		| 'step3-mobile'
		| 'step4-mobile'
		| 'step5-mobile'
		| 'step6-mobile'
}

export const steps = [
	{
		step: 1,
		title: 'Đăng ký mở thẻ',
		description:
			'Khách hàng nhập số điện thoại để đăng ký mở thẻ tín dụng VPBank tại đường link chương trình ưu đãi ',
		image: 'step1',
		mobileImage: 'step1-mobile'
	},
	{
		step: 2,
		title: 'Định danh điện tử',
		description:
			'Khách hàng chụp ảnh căn cước công dân gắn chip và ảnh chân dung theo quy định của ngân hàng',
		image: 'step2',
		mobileImage: 'step2-mobile'
	},
	{
		step: 3,
		title: 'Đăng nhập vào  và nhận voucher',
		description:
			'Đăng nhập tài khoản  tại https://.vn/taikhoan bằng số điện thoại mở thẻ thành công sau khi hoàn tất mở thẻ để nhận voucher.',
		image: 'step3',
		mobileImage: 'step3-mobile'
	},
	{
		step: 4,
		title: 'Nhận thẻ và kích hoạt thẻ vật lý',
		description: `Nhận và kích hoạt thẻ vật lý được bàn giao bởi đơn vị vận chuyển của VPBank.
		 tự động cập nhật thông tin kích hoạt của khách hàng trong vòng từ 3-5 ngày làm việc kể từ thời điểm kích hoạt.`,
		image: 'step4',
		mobileImage: 'step4-mobile'
	},
	{
		step: 5,
		title: 'Nhập thông tin tài khoản và nhận hoàn tiền',
		description: `Nhập thông tin tài khoản thanh toán để nhận hoàn tiền từ  tại https://.vn/taikhoan.
		Hoàn tiền được thực hiện trong vòng 07 ngày kể từ thời điểm kích hoạt thẻ vật lý & cung cấp thông tin tài khoản.`,
		image: 'step2',
		mobileImage: 'step2-mobile'
	},
	{
		step: 6,
		title: 'Chi tiêu và nhận hoàn tiền theo kỳ sao kê',
		description: `Chi tiêu bằng thẻ tín dụng VPBank và nhận hoàn tiền theo kỳ sao kê từ VPBank.
		Nhận hoàn tiền bằng cách tải & đăng nhập tài khoản của bạn trên app VPBank NEO, chọn chức năng Hoàn tiền.
		Gọi tổng đài số 1900 545 415 của VPBank 24/7 nếu bạn cần hỗ trợ.`,
		image: 'step2',
		mobileImage: 'step2-mobile'
	}
] satisfies Step[]
