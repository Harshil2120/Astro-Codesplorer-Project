import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className='fixed hidden md:block md:bottom-5 right-5 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300'
					aria-label='Scroll to top'>
					<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
					</svg>
				</button>
			)}
		</>
	);
};

export default ScrollToTopButton;
