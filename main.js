console.log("you're scriptin")

// how to explain inheritance
//

var dog = {}


dog.bark = function() {
  console.log("woof")
}

dog.bark()       //returns woof!

// Methods are functions inside objects
//
//
var sparky = {}

sparky.bark = function() {console.log("woof")}

sparky.bark()
//sparky also barks


// RIGHT NOW THERE ARE TWO OBJECTS WHICH EXIST
// They both have the same function acting on them


sparky.name = "Sparky"

sparky.bark = function() {console.log(this.name + "said, woof")}

sparky.bark()     //---> returns Sparky said woof


// ==================================================================

// we dont' know what seeing "this" means without seeing it's context

// ==================================================================



// changing the method/function of the object does not change
// the functionality of this.bark   this.bark is made with a copy



var jacobsAge = 10
jaccobsAge++

var jacob {age: jacobsAge}

jacob.age  //--> returns 11


// ==================================================================
var  emptyObj = {}

// inherits functions which alll OBJECTS have
Object.getPrototypeOf(emptyObj) //---> returns Object.prototype

// array literal syntax

var array = [1,2,3,4]

Array(1,2,3,4) // --> returns [1,2,3,4]

Object.getPrototypeOf(array) //-->returns []
Object.getPrototypeOf(Object.getPrototypeOf(array)) //---> returns Object


var child = {name: 'Sue', age: 3, speak: function()  {
  console.log("My name is "+ this.name +" and I am " + this.age + " years old.")

}


var billy = Object.create(child)   //---> returns same properties of Sue currently
                            // ----> child has a higher authority than billy

billy.name ---> returns "Sue"

billy.name = "billy"
billy.age = 7

// the speak function NOW is a prototype of child
//
// =============================================================


var child = { legs: 2, likes: "toys", speak: function () {console.log("My name is " + this.name)}}






var billy = Object.create(child)
var sue = Object.create(child)

billy.name = "Billy"
sue.name = "Sue"

child.likes = ["toys", "candy"]


// billy and sue inherit their likes, legs and speak from child
// the old way is using constructors--which is still valid
//
// =========================CONSTRUCTOR====================================
function Bear () {
    this.claws = true


}

// ALL CAPITOL LETTER S FOR CONTANTS
// ie Math.PI
// var  IMPORTANT_API = "firebase stuff"
// always use new keyword with constructors otherwise
// things get attached to window object
var smokey = new Bear()

// NEW EXAMPLE+=====================

function Bear(name, location) {
  // this.claws = true
  // this.likes= ['honey', 'slow runners']
  // this.growl = function() { console.log('rawr')}  --> 1000,000 million copies
  this.name = name
  this.location = location
}
Bear.prototype.claws = true
Bear.prototype. likes = 'honey', 'slow runners']
Bear.growl = function() { console.log('rawr')}

var winnie = new Bear('Winnie', '100 Acre Wood')
var poe = new Bear('Poe', 'Japan')


winnie.likes === winnie.__proto__.likes

winnie.likes.push('apple pie') //--->  this edited the prototype so now all bears love apple pie

bear.prototype.kills = 0

winnie.kills = 0
poe.kills++1


// is a VS has a
//
// is a === prototype

// has a  === property of object
