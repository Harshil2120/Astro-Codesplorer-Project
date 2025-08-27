// Site-wide constants and configuration

export const SITE_CONFIG = {
	name: 'CodeSplorer Blog',
	description: 'A personal blog about software development, technology, and coding insights',
	url: 'https://codesplorer-blog.com', // Update with your actual domain
	author: 'Your Name', // Update with your name
	email: 'your.email@example.com', // Update with your email
	github: 'https://github.com/yourusername', // Update with your GitHub
	linkedin: 'https://linkedin.com/in/yourusername', // Update with your LinkedIn
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
