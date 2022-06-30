import Link from 'next/link';
import { FC } from 'react';

const badges = ['NextJs', 'ReactJs', 'NodeJs'];

const IntroJumbotron: FC = () => {
	return (
		<section className='intro'>
			<div>
				<div className='my-info'>
					<h1>Onyekwere Precious</h1>
					<p>Javascript Web Developer</p>

					<div className='badge-list'>
						{badges.map(badge => (
							<span key={badge} className='badge'>
								{badge}
							</span>
						))}
					</div>
				</div>

				<div className='links'>
					<Link href='/projects'>
						<a className='left-link'>My Projects</a>
					</Link>
					<Link href='/contact'>
						<a className='right-link'>Hire Me</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default IntroJumbotron;
