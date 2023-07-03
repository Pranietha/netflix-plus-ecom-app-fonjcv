//fn comp with arrow fn

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LatestVideo from './LatestVideo/LatestVideo';
import TrendingVideoList from './TrendingVideoList/TrendingVideoList';
import RecommendedVideoList from './RecommendedVideoList/RecommendedVideoList';
import Subscription from './Subscription/Subscription';
import MyProfile from './MyProfile/MyProfile';
import LifeCycleDemo from './LifeCycleDemo/LifeCycleDemo';

const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <title>Netflix App </title>
      </HelmetProvider>

      <h1 className="mt-3">Welcome to Home Page!</h1>

      <div className="row mb-3">
        <h2>Latest Videos | Props (parent to child comp comm) Demo</h2>
        <div className="col-md-3">
          <LatestVideo
            title="Arg Vs Fra FIFA  "
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="2M"
            publishedOn="6 days ago"
          >
            Watch the highlights of Arg and Fra played in Qatar.
          </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            title="CSK Vs KKR IPL "
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="6M"
            publishedOn="2 days ago"
          >
            Watch the highlights of chennai and Kolkata IPL 2023.
          </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            title="GT Vs MI IPL "
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="1.2M"
            publishedOn="5 hours ago"
          >
            Watch the highlights of Gujarat and Mumbai IPL 2023.
          </LatestVideo>
        </div>
      </div>

      <div className="row mb-3">
        <h2>Trending Videos | Class Component, States and Events Demo</h2>
        <TrendingVideoList />
      </div>

      {
        <div className=" mb-3">
          <h2>
            Recommended Video List | Class Comp, States, Events, Lists & keys
            and conditionals demo
          </h2>
          <RecommendedVideoList />
        </div>
      }

      <div className="mb-3">
        <h2>Subscription | styling in React - Demo</h2>
        <Subscription />
      </div>

      <div className="mb-3">
        <h2>My Profile| Two way binding in React - Demo </h2>
        <MyProfile />
      </div>

      <div className="mb-3">
        <h2> Life Cycle Hooks Demo </h2>
        <LifeCycleDemo />
      </div>
    </>
  );
};

export default HomePage;
