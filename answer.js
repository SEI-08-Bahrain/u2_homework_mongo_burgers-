// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  {patty: "beef", cheese: true, toppings: ["tomato", "pickels", "mayo", "ketchup", "mustard"]},
  {patty: "beef", chees: false, toppings: ["tomato", "pickels", "mayo", "ketchup", "mustard"]},
  {patty: "beef", cheese: true, toppings: ["mayo"]},
  {patty: "chicken", cheese: false, toppings: []},
  {patty: "chicken", cheese: true, toppings: ["tomato", "lettuce", "mayo"]}
  ])
// find all the burgers
db.burgers.find({})
// show just the meat of each burger
db.burgers.find({}, {patty: 1, _id: 0})
// show just the toppings of each burger
db.burgers.find({}, {toppings: 1, _id: 0})
// show everything but the cheese
db.burgers.find({}, {cheese: 0, _id: 0})
// find all the burgers with beef
db.burgers.find({patty: "beef"})
// find all the burgers that are not beef
db.burgers.find({patty: {$ne: "beef"}})
// find the first burger with cheese
db.burgers.findOne({cheese: true})
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.findOneAndUpdate({cheese: true}, {$set: {doubleCheese: true}})
// find the burger you updated to have double cheese
db.burgers.find({doubleCheese: {$exists: true}})
// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({patty: "beef"}, {$set: {patty: "veggie"}});
// delete one of your veggie burgers
db.burgers.deleteOne({patty: "veggie"})
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteMany({patty: "veggie"});
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

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database
db.burgers.insertMany([
  {patty: "beef", cheese: true, toppings: ["tomato", "pickels", "mayo", "ketchup", "mustard"]},
  {patty: "beef", chees: false, toppings: ["tomato", "pickels", "mayo", "ketchup", "mustard"]},
  {patty: "beef", cheese: true, toppings: ["mayo"]},
  {patty: "chicken", cheese: false, toppings: []},
  {patty: "chicken", cheese: true, toppings: ["tomato", "lettuce", "mayo"]}
  ])
// Change the name of the key cheese to 'pumpkinSpice'
db.burgers.updateMany({cheese: {$exists: true}}, {$rename: {"cheese": "pumpkinSpice"}})
// find all the burgers with ketchup (or another topping you used at least once)
db.burgers.find({toppings: {$all: ["mayo"]}})
// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burgers.updateMany({toppings: {$all: ["tomato"]}}, {$pull: {toppings: ["tomato"]}})
// add a topping of 'eggs' to all the beef burgers
db.burgers.updateMany({patty: "beef"}, {$push: {toppings: "eggs"}})
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 
db.burgers.updateMany({}, {$set: {price: "$5.00"}})