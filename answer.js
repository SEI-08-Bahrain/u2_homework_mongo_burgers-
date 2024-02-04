// create 5 burgers (at least 3 should be beef)debugger.mongoBurgers.insertMany([{protein: "beef", cheese: true, topping: []},])
db.menu.insertMany([
  { protein: 'beef', cheese: true, topping: ['hot sause', 'hot sause 102'] },
  { protein: 'beef', cheese: false, topping: ['hot sause', 'cachup'] },
  { protein: 'chiken', cheese: true, topping: ['mayonese'] },
  {
    protein: 'beef',
    cheese: true,
    topping: ['mayonese', 'hot sause', 'katchup']
  }
])

// find all the burgers
db.menu.find({})
// show just the meat of each burger
db.menu.find({}, { protein: 1 })
// show just the toppings of each burger
db.menu.find({}, { topping: 1 })
// show everything but the cheese
db.menu.find({}, { cheese: 0 })
// find all the burgers with beef
db.menu.find({ protein: { $eq: 'beef' } })
// find all the burgers that are not beef
db.menu.find({ protein: { $ne: 'beef' } })
// find the first burger with cheese
db.meun.find({ cheese: { $eq: true } })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.menu.update({}, { $set: { cheese: 'double cheese' } })
// find the burger you updated to have double cheese
db.meun.update({ cheese: { $eq: { cheese: 'double cheese' } } })
// find and update all the beef burgers to be 'veggie'
db.menu.updateMany({ protein: 'beef' }, { $set: { protein: 'veggie' } })
// delete one of your veggie burgers
db.menu.deleteOne({ protein: 'veggie' })
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// drop the collection
db.menu.drop()
//Expected Output
//true

// drop the database
db.dropDatabase()
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

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
