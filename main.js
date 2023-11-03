const url_1 = "https://www.balldontlie.io/api/v1/teams"
const $ul = document.querySelector('#topFiveTeam')

//json 파일에서 받아오기
function loadGames() {
    return fetch(url_1)
    .then(response => response.json())
    .then(json => json.data);
}

// 불러온 데이터 업데이트
function displayGames(games) {
    const container = document.querySelector('.games')
    container.innerHTML = games.map( game => createHTMLString(game)).join('');
}

// function isHome(team){
//     if(team.conference === 'east') {
//         return true;
//     }
// }
    // json 파일 배열 데이터에서 조건에 맞는 값만 가져오는 방법 filter? 
    // 팀 8개만 불러오는 방법
    
    // 불러온 데이터로 부터 HTML list 생성
function createHTMLString(game) {
    return `
    <div class="game">
    <div class="teams">
      <span class="homeTeam">${game['full_name']}</span>
      <span class="awayTeam">${game['full_name']}</span>
    </div>
  </div>
  <div class="inProgress"></div>
  <div class="timeReamining"></div>
  <div class="score">
    <span class="homeTeamScore"></span>
    <span class="awayTeamScore"></span>
  </div>
    `;
}

// main
loadGames()
.then(games => {
    console.log(games)
    displayGames(games);
    // setEventListeners(team);
})
.catch(console.log);



// fetch(url)
//     .then(function (response) {
//         if(response.status !== 200){
//             alert('Error');
//         } else {
//             return response.json()
//         }
// }).then(function(jsonData){
//   let data = jsonData.data;
//   console.log(data);
//   for( let i = 0; i < 5; i++ ){
//       if(data[i]['conference'] === 'East'){
//         console.log(data[i])
//         const list = document.createElement('li')
//         list.className = data[i]['city']
//         list.innerHTML = data[i]['full_name']
//         $ul.append(list);
//       }
//   }
// })



