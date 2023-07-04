import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return(
    <div>
      <h3>404 error</h3>
      <h2>Page Not Found</h2>
      <p>Go to <Link to ="/">Home Page</Link></p>
    </div>
  )
}

export default PageNotFound;