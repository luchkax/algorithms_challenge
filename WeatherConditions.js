var obj = [{name: 'tsunami', value: 15},{name: 'volcanoe', value: 10}, 
        {name: 'earthquake', value:20}, {name: 'blizzard', value:25}, 
        {name: 'meteor', value:30}]

function whatHappenesToday(){
  for (var i = 1; i<101; i++){
     obj = obj.map((o, idx)=>{
       if(o.value > 0) return o;
    }).filter(notUndefined => notUndefined)
    var x = Math.floor(Math.random() * obj.length)
    console.log("Day "+i+": "+ obj[x].name)
    obj[x].value -= 1;
  }
}
whatHappenesToday()