// create 5 burgers (at least 3 should be beef)

db.mongoBurgers.insertMany([
  {
    name: 'Wagyu Burger',
    protein: 'Beef',
    cheese: true,
    toppings: ['ketchup', 'mayo', 'onions', 'pickels', 'lettuce']
  },
  {
    name: 'Spicy burger',
    protein: 'Beef',
    cheese: true,
    toppings: ['ketchup', 'mayo', 'onions', 'pickels', 'lettuce', 'jalapenos']
  },
  {
    name: 'Chicken',
    protein: 'Chicken',
    cheese: true,
    toppings: ['ketchup', 'mayo', 'onions', 'pickels', 'lettuce']
  },
  {
    name: 'Grilled chicken',
    protein: 'Chicken',
    cheese: true,
    toppings: [
      'ketchup',
      'mayo',
      'onions',
      'pickels',
      'lettuce',
      'barbeque sauce'
    ]
  },
  {
    name: 'Cheese Burger',
    protein: 'Beef',
    cheese: true,
    toppings: ['ketchup', 'mayo', 'onions', 'pickels', 'lettuce']
  }
])

// find all the burgers
db.mongoBurgers.find({})

// show just the meat of each burger
db.mongoBurgers.find({}, { protein: 1 })

// show just the toppings of each burger
db.mongoBurgers.find({}, { toppings: 1 })

// show everything but the cheese
db.mongoBurgers.find({}, { cheese: 0 })

// find all the burgers with beef
db.mongoBurgers.find({ protein: 'Beef' })

// find all the burgers that are not beef
db.mongoBurgers.find({ protein: { $ne: 'Beef' } })

// find the first burger with cheese
db.mongoBurgers.findOne({ cheese: true })

// find one and update the first burger with cheese to have a property of 'double cheese'
db.mongoBurgers.updateOne(
  { cheese: true },
  { $set: { doubleCheese: true }, $currentDate: { lastModified: true } }
)

// find the burger you updated to have double cheese
db.mongoBurgers.findOne({ doubleCheese: true })

// find and update all the beef burgers to be 'veggie'
db.mongoBurgers.updateMany(
  { protein: 'Beef' },
  { $set: { protein: 'veggie' }, $currentDate: { lastModified: true } }
)

// delete one of your veggie burgers
db.mongoBurgers.deleteOne({ protein: 'veggie' })
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.mongoBurgers.deleteMany({ protein: 'veggie' })

// drop the collection
//Expected Output
//true
db.mongoBurgers.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()
// Output was { ok: 1, dropped: 'mongoBurgers' }
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
