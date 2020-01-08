



var shopper = {

    name: "Matilda",

    age: 65,

    rewardsMember: true,

    groceryCart: [1,2,3,4,5,6,7,8,9,10],

    checkOut: function(){

        var senior_discount = "will not receive a senior discount on her "

        if (this.age >= 55){}
        else {senior_discount = " will receive a senior discount"};
            
        if (this.rewardsMember){
            return this.name + " will receive a member discount and " + senior_discount + this.groceryCart[9] + " items."}
        else {return this.name + " will not receive a member discount on her " + this.groceryCart[9] + " items."}
    }
}



document.getElementById("demo").innerHTML = shopper.checkOut()
