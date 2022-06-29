import { FC, Key } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
	id: string;
	title: string;
	keywords: string[];
	links: { repo: string; site: string };
	imageUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	title,
	keywords,
	links,
	imageUrl,
}) => {
	return (
		<li>
			<div className='project_card'>
				<h3 className='heading'>{title}</h3>

				<div className='body'>
					<div className='img-wrapper'>
						<Image src={imageUrl} alt={title} layout='fill' priority />
					</div>
					<ul className='keywords-list'>
						{keywords.map(tech => (
							<li key={tech as Key}>{tech}</li>
						))}
					</ul>
				</div>

				<div className='project_links'>
					<a href={links.repo} target='_blank' rel='noreferrer'>
						Github Repo
					</a>
					<a href={links.site} target='_blank' rel='noreferrer'>
						Live Site
					</a>
				</div>
			</div>
		</li>
	);
};

export default ProjectCard;
