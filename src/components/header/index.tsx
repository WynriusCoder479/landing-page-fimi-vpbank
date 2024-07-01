import ActionButton from '../common/action-button'
import Logo from './logo'

const Header = () => {
	return (
		<div className='sticky inset-x-0 top-0 z-50 border bg-white shadow-md lg:mb-20'>
			<div className='mx-24 flex items-center justify-center px-2 py-4 lg:justify-between'>
				<Logo />
				<div className='hidden lg:block'>
					<ActionButton />
				</div>
			</div>
		</div>
	)
}

export default Header
