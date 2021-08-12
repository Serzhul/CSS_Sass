import React from 'react';

function Shovel(props) {
	const title = props.title || "shovel";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.2 14.9L49 1.5c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5.4 5.5-3.7 3.7-1-1c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l1 1-17.9 18-5.2-5.2c-.8-.8-2.1-.8-2.9 0L4.5 43.9C.2 48.3.2 55.4 4.5 59.7c2.1 2.1 4.9 3.3 7.9 3.3s5.8-1.2 7.9-3.3l15.3-15.4c.8-.8.8-2.1 0-2.9l-5.2-5.3L48.3 18l.9 1c.7.7 1.8.7 2.5 0s.7-1.8 0-2.5l-1-1 3.7-3.7 5.4 5.4c.7.7 1.8.7 2.5 0 .6-.5.6-1.6-.1-2.3zM32 42.9L17.8 57.3c-1.4 1.5-3.4 2.3-5.4 2.3-2 0-3.9-.8-5.4-2.3-3-3-3-7.9 0-10.9L21.2 32l4.2 4.2-1 1c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5l1-1 4.2 4.2z"/>
	</g>
</svg>
	);
};

export default Shovel;