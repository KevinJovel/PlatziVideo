import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ myList: [], trends: [], originals: [] });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(videos);
  return videos;
};

export default useInitialState;

