import React from 'react';
import week9 from '../mocks/week9.json'
import week10 from '../mocks/week10.json'
import week11 from '../mocks/week11.json'
import week12 from '../mocks/week12.json'
import week13 from '../mocks/week13.json'
import { useState } from 'react';

export default function SearchBar() {
  const [searchTeam, setSearchTeam] = useState('');

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchTeam(e.target.value);
        }}
      />
      {week10
        .filter((val) => {
          if (searchTeam == '') {
            return val;
          } else if (
            val.away_team.toLowerCase().includes(searchTeam.toLowerCase()) ||
            val.home_team.toLowerCase().includes(searchTeam.toLowerCase())
            // Other information to be added (Players, venues, etc.)
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <ul className="teams" key={key}>
              <li>
                {val.away_team} @ {val.home_team}
              </li>
            </ul>
          );
        })}
    </div>
  );
}
