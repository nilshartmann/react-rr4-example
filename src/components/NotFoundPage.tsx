import * as React from 'react';
import { Link } from 'react-router';
const connect = require('react-redux').connect;

interface INotFoundPageProps {
  location: Location;
}

function mapStateToProps(state, ownProps): INotFoundPageProps {
  return {
    location: ownProps.location
  };
}

const NotFoundPage = ({ location }: INotFoundPageProps) => {
  return <div>
    <h3>The requested page <b>({location.pathname})</b> has not been found.</h3>
    <p><Link to='/'>Back to Contacts</Link></p>
  </div>;
};

export default connect(mapStateToProps)(NotFoundPage);

