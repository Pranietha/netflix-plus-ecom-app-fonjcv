import React from 'react';
import PropTypes from 'prop-types';

const LatestVideo = (props) => {
  //you can receive data from parent comp via props
  console.log(props);
  //props are object
  //props are read only

  return (
    <div className="card">
      <img src={props.thumbnailUrl} className="card-img-top" />

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.views}</li>
        <li className="list-group-item">{props.publishedOn}</li>
      </ul>
    </div>
  );
};

LatestVideo.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  views: PropTypes.string,
  publishedOn: PropTypes.string,
  children: PropTypes.string,
};

export default LatestVideo;
