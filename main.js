const GAME_COUNT = 8;
const $games = document.querySelector(".games");

{/* <div class="games">
  <div className="game1">
    <div className="teams">
      <span class="team1"></span>
      <span class="team2"></span>
    </div>
    <div class="inProgress"></div>
    <div class="timeRemaining"></div>
    <div class="score">
      <span class="score1"></span>
      <span class="score2"></span>
    </div>
  </div>
</div> */}

for(let i = 0; i < GAME_COUNT; i++) {
  const $game = document.createElement("div");
  const $teams = document.createElement("div");
  const $score = document.createElement("div");
  const $inProgress = document.createElement("div");
  const $timeRemaining = document.createElement("div");

  $game.classList.add(`game${i}`);
  $teams.classList.add('teams');
  $score.classList.add('score');
  $inProgress.classList.add('inProgress');
  $timeRemaining.classList.add('timeRemaining');

  const $team1 = document.createElement("span")
  $team1.classList.add('team1');
  const $team2 = document.createElement("span");
  $team2.classList.add('team2');
  const $score1 = document.createElement("span");
  $score1.classList.add('score1');
  const $score2 = document.createElement("span");
  $score2.classList.add('score2');

  $inProgress.textContent = '3rd quarter'
  $timeRemaining.textContent = '3:47'
  $team1.textContent = 'Atlanta Hawks'
  $team2.textContent = 'Los Angeles Lakers'
  $score1.textContent = '64'
  $score2.textContent = '68'

  $teams.append($team1, $team2);
  $score.append($score1, $score2);

  $game.append($inProgress, $timeRemaining, $teams, $score);
  $games.append($game)
}
