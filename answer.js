// create 5 burgers (at least 3 should be beef)
db.orders.insertMany([
  { protein: 'beef', cheese: true, toppings: ['ketchup', 'mustard'] },
  {
    protein: 'beef',
    cheese: false,
    toppings: ['sriracha', 'onions', 'tomatoes']
  },
  { protein: 'beef', cheese: true, toppings: ['pickles', 'capers', 'relish'] },
  {
    protein: 'chicken',
    cheese: true,
    toppings: ['mayonnaise', 'pickled beets', 'onions']
  },
  {
    protein: 'turkey',
    cheese: false,
    toppings: ['guacamole', 'tomatoes', 'tabasco']
  }
])
// find all the burgers
db.orders.find({})
// show just the meat of each burger
db.orders.find({}, { protein: 1 })
// show just the toppings of each burger
db.orders.find({}, { toppings: 1 })
// show everything but the cheese
db.orders.find({}, { cheese: 0 })
// find all the burgers with beef
db.orders.find({ protein: 'beef' })
// find all the burgers that are not beef
db.orders.find({ protein: { $ne: 'beef' } })
// find the first burger with cheese
db.orders.findOne({ cheese: true })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.orders.updateOne({ cheese: true }, { $set: { double_cheese: true } })
// find the burger you updated to have double cheese
db.orders.findOne({ double_cheese: true })
// find and update all the beef burgers to be 'veggie'
db.orders.updateMany({ protein: 'beef' }, { $set: { protein: 'veggie' } })
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.orders.deleteOne({ protein: 'veggie' })
// drop the collection
//Expected Output
//true
db.orders.drop({})
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
