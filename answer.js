// create 5 burgers (at least 3 should be beef)

db.burgers.insertMany([
  {
    protein: 'Chicken',
    cheese: false,
    toppings: ['Pesto', 'Tomatoes', 'Lettuce']
  },
  {
    protein: 'Chicken',
    cheese: false,
    toppings: ['Mayonnaise', 'Tomatoes', 'Lettuce']
  },
  {
    protein: 'Beef',
    cheese: false,
    toppings: ['Ketchup', 'Tomatoes', 'Lettuce']
  },
  {
    protein: 'Beef',
    cheese: true,
    toppings: ['Onions', 'Tomatoes', 'Lettuce']
  },
  {
    protein: 'Beef',
    cheese: false,
    toppings: ['Ketchup', 'Tomatoes', 'Lettuce']
  }
])

// find all the burgers
db.burgers.find({})
// show just the meat of each burger
db.burgers.find({}, { cheese: 0, _id: 0, toppings: 0 })
// show just the toppings of each burger
db.burgers.find({}, { cheese: 0, _id: 0, protein: 0 })
// show everything but the cheese
db.burgers.find({}, { cheese: 0 })
// find all the burgers with beef
db.burgers.find({ protein: 'Beef' })
// find all the burgers that are not beef
db.burgers.find({ protein: { $not: { $eq: 'Beef' } } })
// find the first burger with cheese
db.burgers.findOne({ cheese: true })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne({ cheese: true }, { $set: { doubleCheese: true } })
// find the burger you updated to have double cheese
db.burgers.find({ doubleCheese: true })
// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({ protein: 'Beef' }, { $set: { protein: 'veggie' } })
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteOne({ protein: 'veggie' })
// drop the collection
//Expected Output
//true
db.burgers.drop({})
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
db.burgers.updateMany({}, { $rename: { cheese: 'pumpkinSpice' } })
// find all the burgers with ketchup (or another topping you used at least once)
db.burgers.find({ toppings: 'Ketchup' })
// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burgers.updateMany(
  { toppings: 'Tomatoes' },
  { $pull: { toppings: 'Tomatoes' } }
)
// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burgers.updateMany({ protein: 'Beef' }, { $push: { toppings: 'eggs' } })
//Add a price to each burger, start with $5.00 for each burger
db.burgers.updateMany({}, { $set: { price: '$5.00' } })
