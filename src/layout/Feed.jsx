import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import VideoCard from '../components/VideoCard';

import { Context } from '../context/apiContext';
import LeftNav from './LeftNav';

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  // console.log(searchResults);

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)] ">
      <LeftNav />
      <main className="grow w-[calc(100% - 240px)] h-full overflow-y-auto bg-black ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
          {!loading &&
            searchResults &&
            searchResults?.map((item) => {
              if (item?.type !== 'video') return false;
              return (
                <VideoCard
                  key={`${item?.video?.videoId} ${uuidv4()}`}
                  video={item?.video}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default Feed;
