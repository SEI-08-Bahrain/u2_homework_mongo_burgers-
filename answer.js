// create 5 burgers (at least 3 should be beef)

db.burger.insertMany([
  { protein: "beef", cheese: true, topping: "onions" },
  { protein: "chicken", cheese: true, topping: "mustard" },
  { protein: "turkey", cheese: false, topping: "french fries" },
  { protein: "ostrich", cheese: false, topping: "ketchup" },
  { protein: "tofu", cheese: true, topping: "olives" },
  { protein: "buffalo", cheese: false, topping: "pickles" },
])

// find all the burgers
db.burger.find({})

// show just the protein of each burger
db.burger.distinct('protein')

// show just the toppings of each burger
db.burger.distinct('toppings')

// show everything but not the cheese
db.burger.find({} , {protein: 1, topping: 1})

// find all the burgers with beef
db.burger.find({protein: 'beef'})

// find all the burgers that are not beef
db.burger.find({protein: {$ne: 'beef'}})

// find the first burger with cheese
db.burger.findOne({protein: 'beef'})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOneAndUpdate({cheese: true}, {$set: {cheese: 'double cheese'}})

// find the burger you updated to have double cheese
db.burger.findOne({cheese: 'double cheese'})

// find and update all the beef burgers to be 'veggie'
db.burger.findOneAndUpdate({protein: 'beef'}, {$set: {protein: 'veggie'}})


// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.deleteOne({protein: 'veggie'})


// drop the collection
//Expected Output
//true
db.burger.drop()


// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
