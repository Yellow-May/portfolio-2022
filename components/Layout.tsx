import { FC, Fragment, ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Header />

			{children}
		</Fragment>
	);
};

export default Layout;
