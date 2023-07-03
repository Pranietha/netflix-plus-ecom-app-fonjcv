//class component

import React, { Component } from 'react';
import TrendingVideo from './TrendingVideo/TrendingVideo';

//class comp must inherit comp class

class TrendingVideoList extends Component {
  // state is a place to hold comp-wide data
  // state is an object
  // state is a keyword in react

  state = {
    videoResolution: '4K',
    videos: [
      {
        id: 1,
        trendingRank: 1,
        title: 'Man Vs Wild',
        thumbnailUrl: 'https://placehold.co/260x220',
        desc: 'A Wild Adventure show in Discovery Channel',
        views: '700K',
        publishedOn: '1 week ago',
      },
      {
        id: 2,
        trendingRank: 2,
        title: 'Planet Earth II',
        thumbnailUrl: 'https://placehold.co/260x220',
        desc: 'A show by David Attenborough on BBC Earth Channel',
        views: '900K',
        publishedOn: '2 weeks ago',
      },
    ],
  };

  //event handler method
  handleChangeResolution = () => {
    //Do not mutate state directly use setState().

    this.setState({
      videoResolution: '8k',
    });
    //whenever setState is called -- render method will be execduted.
    //setState() will smartly merge the change with other properties of state data.
  };

  //must have render menthod
  render() {
    console.log('Inside Render Method');
    //must return jsx

    return (
      <div className="row">
        <p>
          Enjoy watching this video {this.state.videoResolution} Resolution{' '}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handleChangeResolution}
          >
            Change Resolution
          </button>
        </p>
        {this.state.videos.map((video) => {
          return (
            <TrendingVideo
              key={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              trendingRank={video.trendingRank}
              desc={video.desc}
              views={video.views}
              publishedOn={video.publishedOn}
            />
          );
        })}
      </div>
    );
  }
}

export default TrendingVideoList;
