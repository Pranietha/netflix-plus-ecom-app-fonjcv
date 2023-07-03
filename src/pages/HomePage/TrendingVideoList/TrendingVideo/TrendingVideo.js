import React from 'react';

const TrendingVideo = ({
  title,
  thumbnailUrl,
  trendingRank,
  desc,
  views,
  publishedOn,
}) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={thumbnailUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">
            #{trendingRank} {title}
          </h5>
          <p className="card-text">{desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{views} Views</li>
          <li className="list-group-item">{publishedOn}</li>
        </ul>
      </div>
    </div>
  );
};

export default TrendingVideo;
