// create 5 burgers (at least 3 should be beef)

db.burgers.insertMany([
  {protein:"beef",cheese: true,toppings:["ketchup",'french fries','mayo']}
  {protein:"beef", cheese:true, toppings:["lettuce",'mayo','caramlised onions']}
  {protein:"beef", cheese:true, toppings:['hot fudge','guacamole','relish']}
  {protein:'chicken', cheese:true, toppings:['mayo','mushrooms','mix peppers']}
  {protein:'veinson', cheese:true, toppings:['lettuce','ranch','onion']}
])

// find all the burgers

db.burgers.find({})

// show just the meat of each burger
db.burgers.find({},{protein:1})

// show just the toppings of each burger
db.burgers.find({},{toppings:1})

// show everything but the cheese
db.burgers.find({},{cheese:0})

// find all the burgers with beef
db.burgers.find({protein:"beef"})

// find all the burgers that are not beef
db.burgers.find( {protein:{ $nin:  ["beef"]  } } )

// find the first burger with cheese
db.burgers.findOne({cheese:true})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne({protein:'chicken'}, {$set:{doubleCheese: true}})

// find the burger you updated to have double cheese
db.burgers.findOne({doubleCheese:true})

// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({protein:'beef'},{$set: {protein:"veggie"}})

// delete one of your veggie burgers
db.burgers.deleteOne({protein:'veggie'})
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteMany({protein:'veggie'})
// drop the collection
db.burgers.drop()
//Expected Output
//true

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
