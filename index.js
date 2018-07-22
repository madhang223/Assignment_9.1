$(function(){
    var me = new createObject("Bala", "180cm");
    console.log(me.aboutYourSelf())
    function createObject(name, height){
        this.Name = name;
        this.Height = height;
        this.aboutYourSelf = function(){
            console.log("I am " + this.Name + ". I am " + this.Height + " height");
        }
    }
});