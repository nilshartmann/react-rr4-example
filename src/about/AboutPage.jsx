import React from 'react';

import Link from 'react-router/Link';
import Match from 'react-router/Match';

const Why = () => <div className='Full'><h1>Why?</h1>Just to show: <a href='https://github.com/ReactTraining/react-router/tree/v4'>React Router v4</a> already works!</div>;
const Source = () => <div className='Full'><h1>Source</h1>You can find the Source Code at <a href='https://github.com/nilshartmann/react-rr4-example'>GitHub!</a></div>;
const More = () => <div className='Full'><h1>More Informations</h1>You can find a lot more Informations and meet nice people at the <a href='http://www.meetup.com/de-DE/Hamburg-React-js-Meetup/'>React Meetup!</a></div>;

export default () => (
	<span>
		<div className='Page'>
			<div className='title'><h1>About</h1></div>
			<div className='Full'>
				This is a simple react Router v4 Demo. <b>Click to below for more informations.</b>

 				<div className='button-bar' style={{textAlign: 'left', marginTop: '1rem'}}>
					<div className='button' style={{marginLeft: 0}}><Link to='/about/why'>Why?</Link></div>
					<div className='button'><Link to='/about/source'>Source</Link></div>
					<div className='button'><Link to='/about/more'>More</Link></div>
				</div>
			</div>
		</div>

		<div className='Page'>
			<Match pattern='why' component={Why} />
			<Match pattern='source' component={Source} />
			<Match pattern='more' component={More} />
		</div>
	</span>
);
