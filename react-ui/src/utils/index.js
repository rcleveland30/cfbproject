import weeks from './weeks.json'  

export function getTodayMs() {
    const today = new Date();
    let d = today.getDate();
    let m = today.getMonth() + 1;
    let y = today.getFullYear();
    return Date.parse(`${y}-${m}-${d}`);
  }
  
  export function getCurrentWeek() {
    const date = getTodayMs()
    let previousWeek = 0;
    const currentWeek = weeks.filter((week, index) => {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        previousWeek = Date.parse(weeks[prevIndex].endDate);
        const weekMs = Date.parse(week.endDate);
        return previousWeek < date && date <= weekMs;
      }
    });
    return currentWeek[0].week;
  }
  
  export function renderListItems(items, title, el) {
    const ul = document.createElement('ul');
    const h1 = document.createElement('h1');
    h1.innerHTML = title;
    ul.append(h1);
    items.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h2>${item.home_team} vs ${item.away_team}</h2> 
      `;
      ul.append(li);
    });
    el.append(ul);
  }

  export function weeksSplit(games) {
    const currentWeek = getCurrentWeek()
    let lastWeeksGames = [];
    let thisWeeksGames = [];
    let nextWeeksGames = [];
    games.forEach((game) => {
        if (game.week == currentWeek - 1) {
          lastWeeksGames.push(game);
        } else if (game.week == currentWeek) {
          thisWeeksGames.push(game);
        } else if (game.week == currentWeek + 1) {
          nextWeeksGames.push(game);
        }
    });
    return {
        lastWeeksGames,
        thisWeeksGames,
        nextWeeksGames
    }
  }