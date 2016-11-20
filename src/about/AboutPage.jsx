import React from 'react';

import Link from 'react-router/Link';
import Match from 'react-router/Match';

// https://github.com/ReactTraining/react-router/pull/4194/files
import { routerContext as routerContextType } from 'react-router/PropTypes'

const LinkButton = ({to, children}) => (
	<Link to={to}>{params => (
		<a className='button' href={params.href} onClick={params.onClick}>{children}</a>
	)}</Link>
);

const Why = () => <div className='Full'><h1>Why?</h1>Just to show: <a href='https://github.com/ReactTraining/react-router/tree/v4'>React Router v4</a> already works!</div>;
const Source = () => <div className='Full'><h1>Source</h1>You can find the Source Code at <a href='https://github.com/nilshartmann/react-rr4-example'>GitHub!</a></div>;
const More = () => <div className='Full'><h1>More Informations</h1>You can find a lot more Informations and meet nice people at the <a href='http://www.meetup.com/de-DE/Hamburg-React-js-Meetup/'>React Meetup!</a></div>;

export default ({ pathname }) => (
	<span>
		<div className='Page'>
			<div className='title'><h1>About</h1></div>
			<div className='Full'>
				<p>This is a simple react Router v4 Demo. <b>Click to below for more informations.</b></p>
				<div className='button-bar' style={{ textAlign: 'left', marginTop: '1rem' }}>
					{ /* Relative Links not supported: https://github.com/ReactTraining/react-router/issues/4195#issuecomment-261112564  */}
					<LinkButton to={`${pathname}/why`}>Why?</LinkButton>
					<LinkButton to={`${pathname}/source`}>Source</LinkButton>
					<LinkButton to={`${pathname}/more`}>More</LinkButton>
				</div>
			</div>
		</div>

		<div className='Page'>
			<Match pattern={`${pathname}/why`} exactly component={Why} />
			<Match pattern={`${pathname}/source`} exactly component={Source} />
			<Match pattern={`${pathname}/more`} exactly component={More} />
		</div>
	</span>
);
