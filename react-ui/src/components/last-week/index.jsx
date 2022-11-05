import React from 'react';
import { useSelector } from 'react-redux'
import { selectLastWeek } from './slice';

const LastWeek = () => {
    const lastWeek = useSelector(selectLastWeek)

  return (
    <footer>
      <div className="y-wrap">This is last week. {lastWeek} </div>
    </footer>
  );
};

export default LastWeek;