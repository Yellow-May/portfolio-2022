import type { NextPage } from 'next';
import ProjectCard from 'components/ProjectCard';
import useFilters, { filterOptions, MatchType } from 'hooks/useFilters';
import { useState } from 'react';

const MyProjects: NextPage = () => {
	const [activeFilter, setActiveFilter] = useState<MatchType>('All');
	const projects = useFilters(activeFilter);

	return (
		<main className='projects_page'>
			<h1>My Projects</h1>

			<div className='filter-section'>
				{filterOptions.map(option => (
					<div
						key={option}
						className={
							activeFilter === option ? 'filter-option active' : 'filter-option'
						}>
						<input
							type='radio'
							name='filters'
							value={option}
							aria-label={option}
							checked={activeFilter === option}
							onChange={() => setActiveFilter(option)}
						/>
						<span>{option}</span>
					</div>
				))}
			</div>

			<ul className='card-wrapper'>
				{projects.map(project => (
					<ProjectCard key={project.id} {...project} />
				))}
			</ul>
		</main>
	);
};

export default MyProjects;
