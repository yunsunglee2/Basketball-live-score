const GAMECOUNT = 8;
const $games = document.querySelector('.games');

for(let i = 0; i < (GAMECOUNT-1); i++){
  const $game = document.createElement('div');
  const $teams = document.createElement('div');
  const $team1 = document.createElement('span');
  const $team2 = document.createElement('span');
  const $inProgress = document.createElement('div');
  const $timeRemaining = document.createElement('div');
  const $score = document.createElement('div');
  const $score1 = document.createElement('span');
  const $score2 = document.createElement('span');

  $game.className = `game-${i+1}`
  $teams.className = 'teams'
  $team1.className = 'team1';
  $team1.textContent = 'Atlanta Hawks';
  $team2.className = 'team2';
  $team2.textContent = 'Los Angeles Lakers';

  $inProgress.className = 'inProgress';
  $inProgress.textContent = '3rd quater';
  $timeRemaining.className = 'timeRemaining';
  $timeRemaining.textContent = '3:47';

  $score.className = 'score';
  $score1.className = 'scroe1'; 
  $score1.textContent = '64';
  $score2.textContent = '54';
  $score2.className = 'scroe2'; 

  $teams.append($team1, $team2);
  $score.append($score1, $score2);
  $game.append($teams, $inProgress, $timeRemaining, $score);
  $games.append($game);
  console.log($games);
}

{/* <div class="games">
  <div class="game1">
    <div className="teams">
      <span className="team1"></span>
      <span className="team2"></span>
    </div>
  </div>
  <div className="inProgress"></div>
  <div className="timeReamining"></div>
  <div className="score">
    <span className="scroe1"></span>
    <span className="scroe2"></span>
  </div>
</div> */}
