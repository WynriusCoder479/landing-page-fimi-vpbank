import { FC, PropsWithChildren } from 'react'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return <div className='mx-auto flex max-w-[1230px]'>{children}</div>
}

export default Wrapper
