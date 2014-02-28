var cat = {
    tiredness: 20,
    hunger: 20,
    loneliness: 3,
    happiness: 15,
    obedience: -5000,
    feed: function(){
        console.log("YES FOOD");
        this.hunger = this.hunger - 5;
    },

    pet: function(){
        if (this.happiness < 15){
            console.log("RAAAAWWWWR TSSSSSS");
            this.happiness = this.happiness - 3;
        }
        else {
            console.log("PRRR");
            this.happiness = this.happiness + 10;
        }
    }
};

cat.pet();