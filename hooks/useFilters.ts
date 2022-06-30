import projects from 'data/projects.json';
import { useMemo } from 'react';

export type MatchType =
	| 'All'
	| 'MERN'
	| 'ReactJs'
	| 'VueJs'
	| 'NextJs'
	| 'NextJs'
	| 'NodeJs'
	| 'Typescript'
	| 'SCSS'
	| 'Styled-Components'
	| 'Ant-design'
	| 'Tailwindcss'
	| 'Redux'
	| 'ExpressJs'
	| 'MongoDB';

const filterMatch = {
	All: [],
	MERN: ['MERN'],
	ReactJs: ['MERN', 'ReactJs'],
	VueJs: ['VueJs'],
	NextJs: ['NextJs'],
	NodeJs: ['MERN', 'NodeJs'],
	Typescript: ['Typescript'],
	SCSS: ['SCSS'],
	'Styled-Components': ['Styled-Components'],
	'Ant-design': ['Ant-design'],
	Tailwindcss: ['Tailwindcss'],
	Redux: ['Redux', 'Redux Toolkit'],
	ExpressJs: ['MERN', 'ExpressJs'],
	MongoDB: ['MERN', 'MongoDB'],
};

export const filterOptions = Object.keys(filterMatch) as MatchType[];

const useFilters = (activeFilter: MatchType) => {
	const filteredProjects = useMemo(() => {
		if (activeFilter !== 'All') {
			const match = filterMatch[activeFilter];
			return projects.filter(({ keywords }) => {
				let x = false;
				match.forEach(e => {
					if (keywords.includes(e)) x = true;
				});
				return x;
			});
		}

		return projects;
	}, [activeFilter]);

	return filteredProjects;
};

export default useFilters;
