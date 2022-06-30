import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	Menu as MenuIcon,
	X as CloseIcon,
	Home as HomeIcon,
	Code as CodeIcon,
	Mail as MailIcon,
} from 'react-feather';

const navItems = [
	{ id: 0, NavIcon: HomeIcon, label: 'Home', href: '/' },
	{ id: 1, NavIcon: CodeIcon, label: 'Projects', href: '/projects' },
	{ id: 2, NavIcon: MailIcon, label: 'Contact Me', href: '/contact' },
];

const Header: FC = () => {
	const [isOpen, setisOpen] = useState<boolean>(false);
	const openNav = () => setisOpen(true);
	const closeNav = () => setisOpen(false);

	const router = useRouter();
	useEffect(() => {
		setisOpen(false);
	}, [router.pathname]);

	return (
		<header className='main-layout-header'>
			<Link href='/'>
				<a>
					<Image
						src='/images/new_logo.png'
						alt='y-may'
						width={125}
						height={50}
					/>
				</a>
			</Link>

			<button title='open navbar' className='menu-btn' onClick={openNav}>
				<MenuIcon />
			</button>

			<nav className={isOpen ? '' : 'mob-closed-nav'}>
				<button title='close navbar' className='close-btn' onClick={closeNav}>
					<CloseIcon />
				</button>

				{navItems.map(({ id, NavIcon, label, href }) => {
					let active = router.pathname === href ? 'active' : '';

					return (
						<Link key={id} href={href}>
							<a className={`nav-link ${active}`}>
								<NavIcon />
								<span>{label}</span>
							</a>
						</Link>
					);
				})}
			</nav>
		</header>
	);
};

export default Header;
