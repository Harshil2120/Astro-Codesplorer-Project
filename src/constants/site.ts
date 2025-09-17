// Site-wide constants and configuration

export const SITE_CONFIG = {
	name: 'CodeSplorer Blog',
	description: 'A personal blog about software development, technology, and coding insights by Harshil Donga',
	url: 'https://codesplorer-blog.com', // Update with your actual domain
	author: 'Harshil Donga',
	email: 'harshildonga9@gmail.com',
	github: 'https://github.com/srleom', // Update with your GitHub
	linkedin: 'https://www.linkedin.com/in/harshil-donga/',
	twitter: 'https://twitter.com/yourusername', // Update with your Twitter
} as const;

export const NAVIGATION = [
	{ title: 'Home', href: '/' },
	{ title: 'Blog', href: '/blogs' },
	{ title: 'Projects', href: '/projects' },
	{ title: 'About', href: '/author' },
] as const;

export const SOCIAL_LINKS = [
	{
		name: 'GitHub',
		url: SITE_CONFIG.github,
		icon: 'github'
	},
	{
		name: 'LinkedIn',
		url: SITE_CONFIG.linkedin,
		icon: 'linkedin'
	},
	{
		name: 'Twitter',
		url: SITE_CONFIG.twitter,
		icon: 'twitter'
	}
] as const;
