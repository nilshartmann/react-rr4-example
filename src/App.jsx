import React from 'react';

export default ({children}) => {
	return <main>
		<header>
			<div className='title'><h1>Contacts</h1></div>
			<div className='banner'>
				React Router v4 Demo
      </div>
		</header>
		{children}
	</main>;
};
