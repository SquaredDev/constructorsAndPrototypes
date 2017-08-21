//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
  this.status = 'normal'
  this.color = 'black'
  this.hungry = true
  this.owner
}

var sadie = new Dog()
sadie.hungry = false
var moonshine = new Dog()
var atticus = new Dog()

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
  this.pet = function (dog) {
    dog.status = 'happy'
  }
  this.feed = function (dog) {
    dog.hungry = false
  }
  this.cool = false
}

var mason = new Human
var julia = new Human
julia.cool = true

// Instances of Human
// Needed: mason, julia
