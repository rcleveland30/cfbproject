import React from 'react';
import { useSelector } from 'react-redux'
import { selectLastWeek } from './slice';

const LastWeek = () => {
    const lastWeek = useSelector(selectLastWeek)

  return (
    <div>
      <div className="landing-redux">This is last week. {lastWeek} </div>
    </div>
  );
};

export default LastWeek;