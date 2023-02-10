import React from 'react';
import moment from 'moment';

const VideoPeriod = ({ time }) => {
  const videoPeriodInSeconds = moment()
    .startOf('day')
    .seconds(time)
    .format('H:mm:ss');
  return (
    <time className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoPeriodInSeconds}
    </time>
  );
};

export default VideoPeriod;
