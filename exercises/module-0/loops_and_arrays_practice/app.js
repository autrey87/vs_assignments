var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var i = 1
var count = 0
for(i;i<=officeItems.length;i++){
    if(officeItems[i]==="computer"){
        count++
    }
    if(i>=officeItems.length){
        console.log(count + " computers")
    }
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]
var p = 0

for(p;p<peopleWhoWantToSeeMadMaxFuryRoad.length;p++){

    var arrayNames = peopleWhoWantToSeeMadMaxFuryRoad[p].name
    var arrayGender = peopleWhoWantToSeeMadMaxFuryRoad[p].gender
    var pronouns = function(){
        if(peopleWhoWantToSeeMadMaxFuryRoad[p].gender==="female"){
            return "her "
        }
        else{
            return "him "
        }
    }

    if(peopleWhoWantToSeeMadMaxFuryRoad[p].age>=18){
        console.log(arrayNames + " is old enough. Let " + pronouns() + "in.")
    }
    else{
        console.log(arrayNames + " is not old enough. Don't let " + pronouns() + "in.")
    }
}

var randomArray = [1,2];
var c = 0;
var sum = 0;
var light = "";

for(c;c<randomArray.length;c++){
    sum += randomArray[c] 
    if(sum%2===0){
        light = "off."
    }
    else{
        light = "on."
    }
}
console.log("The light is " + light)