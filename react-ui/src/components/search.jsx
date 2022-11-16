import React from 'react';
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
