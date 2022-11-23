import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/searchDataSlice';

export default function SearchBar({ data }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e) {
    const value = e.target.value.toLowerCase();

    const filtered = data.filter(x => x.home_team.toLowerCase().indexOf(value) > -1 || x.away_team.toLowerCase().indexOf(value)  > -1 )
    setSearchTerm(value);

    dispatch(setSearchQuery(filtered));
  };


  return (
    <div className="App">
      <input value={searchTerm} onChange={handleChange} />
    </div>
  );
}
