// Common type definitions for the project

export interface Post {
	title: string;
	description?: string;
	date: Date;
	author: string;
	categories?: string[];
	image?: string;
	slug: string;
}

export interface Project {
	title: string;
	description?: string;
	date: Date;
	author: string;
	categories?: string[];
	image?: string;
	slug: string;
}

export interface NavItem {
	title: string;
	href: string;
	external?: boolean;
}

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}
