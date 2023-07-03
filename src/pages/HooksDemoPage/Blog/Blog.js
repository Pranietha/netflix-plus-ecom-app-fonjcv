import React, { useEffect, useState } from 'react';

const Blog = () => {
  console.log('1. Program Started');
  const [topicName, setTopicName] = useState('React Hooks Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());

  useEffect(() => {
    //runs after initial rendering
    //this is alternative to lifecycle hooks -- componentDidMount and componentDidUpdate
    //this is ideal place for your REST API calls
    //you can update state from here
    document.title = topicName;
    console.log('3. Inside useEffect');
  }, [topicName]); //second arg: dependency. It is an array and it is optional
  //if the dep is changed by any means, then useEffect callback will be called or else it won't be called.

  console.log('2. Program Ended');
  return (
    <div>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setTopicName('Demo of useEffect hook and useState hook');
        }}
      >
        Change Topic
      </button>
      <hr/>
      <p>Published Date: {publishedDate.toString()}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setPublishedDate(new Date());
        }}
      >
        Update Published Date{' '}
      </button>
      {/* <p>Published By: </p> */}
    </div>
  );
};

export default Blog;
