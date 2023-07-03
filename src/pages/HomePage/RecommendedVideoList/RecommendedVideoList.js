import React, { Component } from 'react';

class RecommendedVideoList extends Component {
  // comp-wide data
  state = {
    videos: [
      {
        id: 4545665,
        title: 'Ind Vs Aus Cricket 2023',
        thumbnailUrl: 'https://placehold.co/260x220',
        desc: 'Enjoy watching Cricket Series between India and Australia',
        views: '1.1M',
        publishedOn: '3 days ago',
        isInWatchlist: true,
      },
      {
        id: 7896798,
        title: 'Top 10 Goals of Messi',
        thumbnailUrl: 'https://placehold.co/260x220',
        desc: 'Enjoy watching the 10 best goals of Messi',
        views: '600K',
        publishedOn: '2 days ago',
        isInWatchlist: false,
      },
      {
        id: 345678,
        title: 'Top 10 Goals of Ronaldo',
        thumbnailUrl: 'https://placehold.co/260x220',
        desc: 'Enjoy watching the 10 best goals of Ronaldo',
        views: '800K',
        publishedOn: '5 days ago',
        isInWatchlist: false,
      },
    ],
  };

  //before render method we can have event handler method with handleManage prefix
  // console.log('clicked');
  // console.log(this);
  // console.log(index);

  // duplicating video array from state
  // working with state immutably

  handleManageWatchlist(index) {
    const duplicateVideos = [...this.state.videos];
    duplicateVideos[index].isInWatchlist =
      !duplicateVideos[index].isInWatchlist;
    console.log(duplicateVideos);

    this.setState({
      videos: duplicateVideos,
    });
  }

  render() {
    //Conditional Rendering
    if (this.state.videos.length === 0) {
      return (
        <div className="alert alert-danger">
          Sorry! No recommendations found. Please watch more videos!
        </div>
      );
    }

    //component specific transformations can be done here
    //loop through is a.k.a lists in react
    let videoList = null;
    videoList = this.state.videos.map((video, index) => {
      console.log(video);
      //map return
      return (
        //key must be added in first element when you are returning in map

        <div className="col-md-3" key={video.id}>
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
        </div>
      );
    });

    //final return of the rendered method
    return <div className="row">{videoList}</div>;
  }
}

export default RecommendedVideoList;





// import React, { Component } from 'react';
// import RecommendedVideo from './RecommendedVideo/RecommendedVideo';

// class RecommendedVideoList extends Component {
//   // comp-wide data
//   state = {
//     videos: [
//       {
//         id: 4545665,
//         title: 'Ind Vs Aus Cricket 2023',
//         thumbnailUrl: 'https://placehold.co/260x220',
//         desc: 'Enjoy watching Cricket Series between India and Australia',
//         views: '1.1M',
//         publishedOn: '3 days ago',
//         isInWatchlist: true,
//       },
//       {
//         id: 7896798,
//         title: 'Top 10 Goals of Messi',
//         thumbnailUrl: 'https://placehold.co/260x220',
//         desc: 'Enjoy watching the 10 best goals of Messi',
//         views: '600K',
//         publishedOn: '2 days ago',
//         isInWatchlist: false,
//       },
//       {
//         id: 345678,
//         title: 'Top 10 Goals of Ronaldo',
//         thumbnailUrl: 'https://placehold.co/260x220',
//         desc: 'Enjoy watching the 10 best goals of Ronaldo',
//         views: '800K',
//         publishedOn: '5 days ago',
//         isInWatchlist: false,
//       },
//     ],
//   };

//   //before render method we can have event handler method with handleManage prefix
//   // console.log('clicked');
//   // console.log(this);
//   // console.log(index);

//   // duplicating video array from state
//   // working with state immutably

//   handleManageWatchlist = ({index}) => {
//     const duplicateVideos = [...this.state.videos];
//     duplicateVideos[index].isInWatchlist =
//       !duplicateVideos[index].isInWatchlist;
//     console.log(duplicateVideos);
  
//     this.setState({
//       videos: duplicateVideos,
    
//     });
//   }
  

//   render() {
//     //Conditional Rendering
//     if (this.state.videos.length === 0) {
//       return (
//         <div className="alert alert-danger">
//           Sorry! No recommendations found. Please watch more videos!
//         </div>
//       );
//     }
    
//     let videoList = null;
//     videoList = this.state.videos.map((video, index) => {
//       console.log(video);
//       return (
//         <div className="col-md-3" key={video.id}>
//     <RecommendedVideo index={index} handleManageWatchlist={this.handleManageWatchlist(index)} {...video} />
//     </div>
//       );
//     });
//     return <div className="row">{videoList}</div>;
//   }
// }

// export default RecommendedVideoList;
 