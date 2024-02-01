// create 5 burgers (at least 3 should be beef)
db.BURGERS.insertMany([
  {
    protein: "chicken",
    cheese: true,
    toppings: ["ketchup", "french fries", "hot fudge", "mayonnaise", "latus"],
  },
  {
    protein: "beef",
    cheese: true,
    toppings: [
      "latus",
      "ketchup",
      "mayonnaise",
      "onions",
      "pickels",
      "mushrooms",
    ],
  },
  {
    protein: "beef",
    cheese: true,
    toppings: [
      "latus",
      "ketchup",
      "mayonnaise",
      "onions",
      "pickels",
      "mushrooms",
    ],
  },
  {
    protein: "chicken",
    cheese: false,
    toppings: ["ketchup", "french fries", "hot fudge", "mayonnaise", "latus"],
  },
  {
    protein: "beef",
    cheese: false,
    toppings: ["latus", "ketchup", "mayonnaise", "pickels", "mushrooms"],
  },
])

// find all the burgers
db.BURGERS.find({})
// show just the meat of each burger
db.BURGERS.find({}, { protein: 1 })
// show just the toppings of each burger
db.BURGERS.find({}, { toppings: 1 })
// show everything but the cheese
db.BURGERS.find({}, { protein: 1, toppings: 1 })
// find all the burgers with beef
db.BURGERS.find({ protein: "beef" })
// find all the burgers that are not beef
db.BURGERS.find({ protein: { $ne: "beef" } })
// find the first burger with cheese
db.BURGERS.findOne({ cheese: true })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.BURGERS.updateOne({ cheese: true }, { $set: { cheese: "double cheese" } })
// find the burger you updated to have double cheese
db.BURGERS.findOne({})
// find and update all the beef burgers to be 'veggie'
db.BURGERS.updateMany({ protein: "beef" }, { $set: { protein: "veggie" } })
// delete one of your veggie burgers
db.BURGERS.deleteOne({ protein: "veggie" })
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// drop the collection
db.BURGERS.drop({})
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
