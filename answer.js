// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  { OnlienOrPickup: "Online", protein: "beef", cheese: 1, toppings: "ketchup" },
  { OnlienOrPickup: "Online", protein: "beef", cheese: 2 },
  { OnlienOrPickup: "Online", protein: "beef", toppings: "capers" },
  { OnlienOrPickup: "Pickup", protein: "turkey", toppings: "french fries" },
  { OnlienOrPickup: "Pickup", protein: "tofu", toppings: "guacamole" },
  { OnlienOrPickup: "Pickup", protein: "tofu", toppings: "mustard" },
])

// find all the burgers
db.burgers.find({})
// show just the meat of each burger
db.burgers.find({ protein: "beef" })
// show just the toppings of each burger
db.burgers.find({}, { toppings: 1 })
// show everything but the cheese
db.burgers.find({}, { toppings: 1, protein: 1, OnlienOrPickup: 1 })
// find all the burgers with beef
db.burgers.find({ protein: "beef" })
// find all the burgers that are not beef
db.burgers.find({ protein: { $ne: "beef" } })
// find the first burger with cheese
db.burgers.findOne({ cheese: { $exists: true } })

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.findOneAndUpdate(
  { cheese: 1 },
  { $set: { cheese: 2 } },
  { returnDocument: "after" }
)

// find the burger you updated to have double cheese
db.burgers.findOne({ cheese: 2 })

// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({ protein: "beef" }, { $set: { protein: "veggie" } })

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteOne({ protein: "veggie" })

// drop the collection
//Expected Output
//true
db.burgers.drop()
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.burgers.drop()

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
