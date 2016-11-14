import React from 'react';

export default (props) => (
	<div className='Page'>
		<div className='title'><h1>About</h1></div>
		<div className='Left'>React Router v4 Demo</div>
		<div className='Right'>{JSON.stringify(props, null, 2)}</div>
	</div>
);
