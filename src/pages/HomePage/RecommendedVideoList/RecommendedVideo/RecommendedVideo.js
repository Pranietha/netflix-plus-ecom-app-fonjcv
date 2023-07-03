import React from 'react';

const RecommendedVideo = ({index, handleManageWatchlist, ...video}) => {
      //map return
      return (
        //key must be added in first element when you are returning in map
          <div className="card">
            <img
              src={video.thumbnailUrl}
              className="card-img-top"
              alt={video.title}
            />
            <div className="card-body">
              <h5 className="card-title">{video.title}</h5>
              <p className="card-text">{video.desc}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{video.views}</li>
              <li className="list-group-item">{video.publishedOn}</li>
              <li className="list-group-item">
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={this.handleManageWatchlist.bind(this, index)}
                >
                  {/* code connect in JSX -- Conditional Rendering with ternary if else to display in watchlist/ add to watchlist*/}
                  {video.isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
                </button>
              </li>
            </ul>
          </div>
        
      )
    };

    //final return of the rendered method


export default RecommendedVideo;