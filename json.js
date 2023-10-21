const url = "https://www.balldontlie.io/api/v1/teams"
const $ul = document.querySelector('#topFiveTeam')

fetch(url).then(function (response) {
  if(response.status !== 200){
    alert('Error');
  } else {
    return response.json()
  }
}).then(function(jsonData){
  let data = jsonData.data;
  console.log(data);
  for( let i = 0; i < 5; i++ ){
      if(data[i]['conference'] === 'East'){
        console.log(data[i])
        const list = document.createElement('li')
        list.className = data[i]['city']
        list.innerHTML = data[i]['full_name']
        $ul.append(list);
      }
  }
})