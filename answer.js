// create 5 burgers (at least 3 should be beef)
db.burger.insertMany([
  { protein: 'chicken', cheese: true, toppings: ['Mushroom', 'Onion', 'Egg'] },
  {
    protein: 'beef',
    cheese: false,
    toppings: ['Lettuce', 'Tomato', 'Pickles']
  },
  { protein: 'fish', cheese: false, toppings: ['Cabbage', 'Cilantro', 'Lime'] },
  {
    protein: 'tofu',
    cheese: true,
    toppings: ['Avocado', 'Sprouts', 'Sriracha']
  },
  {
    protein: 'shrimp',
    cheese: false,
    toppings: ['Cucumber', 'Carrot', 'Sweet Chili Sauce']
  }
])
// find all the burgers
db.burger.find({})

// show just the meat of each burger
db.burger.find({}, { protein: 1 })

// show just the toppings of each burger
db.burger.find({}, { toppings: 1 })
// show everything but the cheese
db.burger.find({}, { cheese: false })
// find all the burgers with beef
db.burger.find({}, { protein: 'beef' })
// find all the burgers that are not beef
db.burger.find({ protein: { $ne: 'beef' } })
// find the first burger with cheese
db.burger.find({ protein: { $ne: 'beef' } })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOneAndUpdate(
  { cheese: true },
  { $set: { cheese: 'double cheese' } }
)
// find the burger you updated to have double cheese
db.burger.find( { cheese: 'double cheese' }  )
// find and update all the beef burgers to be 'veggie'
db.burger.updateMany(
  { protein: 'beef' },
  { $set: { protein: 'veggie' } }
)
// delete one of your veggie burgers
db.burger.deletOne({protein: "veggie"})
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

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
db.burger.insertMany([
  { protein: 'chicken', pumpkinSpice: true, toppings: ['Mushroom', 'Onion', 'Egg'] },
  {
    protein: 'beef',
    pumpkinSpice: false,
    toppings: ['Lettuce', 'Tomato', 'Pickles']
  },
  { protein: 'fish', pumpkinSpice: false, toppings: ['Cabbage', 'Cilantro', 'Egg'] },
  {
    protein: 'tofu',
    pumpkinSpice: true,
    toppings: ['Avocado', 'Sprouts', 'Egg']
  },
  {
    protein: 'shrimp',
    pumpkinSpice: false,
    toppings: ['Cucumber', 'Carrot', 'Sweet Chili Sauce']
  }
])

// find all the burgers with ketchup (or another topping you used at least once)
db.burger.find({}, { toppings: 'Tomato' })
// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burger.updateMany({ $or: [ { toppings: 'Pickles' }, { toppings: { $gt: 1 } } ] }, { $pull: { toppings: 'Pickles' } })
// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burger.updateMany(
  { protein: 'beef' },
  { $push: { toppings: 'eggs' } }
)
//Add a price to each burger, start with $5.00 for each burger
db.burger.updateMany(
  {},
  { $set: { price: 5.00 } }
)
