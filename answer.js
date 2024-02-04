// create 5 burgers (at least 3 should be beef)
db.orders.insertMany([
  { portein: 'Beef', cheese: 'Yes', toppings: ['ketchup', 'Mushrooms'] },
  { portein: 'Beef', cheese: 'Yes', toppings: ['Mustard', 'Tomatoes'] },
  {
    portein: 'Beef',
    cheese: 'No',
    toppings: ['Guacamole', 'Mushrooms', 'ketchup']
  },
  { portein: 'Chicken', cheese: 'No', toppings: ['Mushrooms'] },
  { portein: 'Chicken', cheese: 'Yes', toppings: ['ketchup'] }
])
// find all the burgers
db.orders.find({})
// show just the meat of each burger
db.orders.find({}, { portein: 1 })
// show just the toppings of each burger
db.orders.find({}, { toppings: 1 })
// show everything but the cheese
db.orders.find({}, { portein: 1, toppings: 1 })
// find all the burgers with beef
db.orders.find({ portein: 'Beef' })
// find all the burgers that are not beef
db.orders.find({ portein: { $ne: 'Beef' } })
// find the first burger with cheese
db.orders.find({ cheese: 'Yes' }).limit(1)

// find one and update the first burger with cheese to have a property of 'double cheese'
db.orders.findOneAndUpdate(
  { cheese: 'Yes' },
  { $set: { cheese: 'double cheese' } }
)
// find the burger you updated to have double cheese
db.orders.find({ cheese: 'double cheese' })
// find and update all the beef burgers to be 'veggie'
db.orders.updateMany({ portein: 'Beef' }, { $set: { portein: 'veggie' } })
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.orders.deleteOne({ portein: 'veggie' })
// drop the collection
//Expected Output
//true
db.orders.drop()
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
db.orders.insertMany([
  { portein: 'Beef', cheese: 'Yes', toppings: ['ketchup', 'Mushrooms'] },
  { portein: 'Beef', cheese: 'Yes', toppings: ['Mustard', 'Tomatoes'] },
  {
    portein: 'Beef',
    cheese: 'No',
    toppings: ['Guacamole', 'Mushrooms', 'ketchup']
  },
  { portein: 'Chicken', cheese: 'No', toppings: ['Mushrooms'] },
  { portein: 'Chicken', cheese: 'Yes', toppings: ['ketchup'] }
])
// Change the name of the key cheese to 'pumpkinSpice'
db.orders.updateMany({}, { $rename: { cheese: 'pumpkinSpice' } })
// find all the burgers with ketchup (or another topping you used at least once)
db.orders.find({ toppings: 'Guacamole' })
// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.orders.find({ toppings: 'Mushrooms' })
db.users.deleteMany({ toppings: 'Mushrooms' })

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.orders.updateMany({ portein: 'Beef' }, { $push: { toppings: 'eggs' } })

//Add a price to each burger, start with $5.00 for each burger

db.users.updateOne(
  { _id: ObjectId('65bf143cf7135872ce7c43b6') },
  { $set: { price: '$5.50' } }
)
db.users.updateOne(
  { _id: ObjectId('65bf143cf7135872ce7c43b7') },
  { $set: { price: '$6.50' } }
)
db.users.updateOne(
  { _id: ObjectId('65bf143cf7135872ce7c43b8') },
  { $set: { price: '$3.50' } }
)
db.users.updateOne(
  { _id: ObjectId('65bf143cf7135872ce7c43b9') },
  { $set: { price: '$4.00' } }
)
