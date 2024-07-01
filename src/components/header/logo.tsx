const Logo = () => {
	return (
		<div className='flex items-center justify-center gap-x-8'>
			<img
				src='/fimi-logo.png'
				alt='Logo1'
				className='h-10 w-20'
			/>
			<div className='h-10 w-[0.13rem] rounded-md bg-slate-400'></div>
			<img
				src='/vpbank-logo.png'
				alt='Logo2'
				className='h-10 w-32'
			/>
		</div>
	)
}

export default Logo
