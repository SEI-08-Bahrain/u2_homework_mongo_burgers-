// create 5 burgers (at least 3 should be beef)

db.burgers.insertMany([
  {
    name: "Classic Beef Burger",
    protein: "Beef",
    cheese: true,
    toppings: ["Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mustard"]
  },
  {
    name: "Cheeseburger Deluxe",
    protein: "Beef",
    cheese: true,
    toppings: ["Lettuce", "Tomato", "Onion", "Pickles", "Cheese", "Ketchup", "Mustard", "Mayo"]
  },
  {
    name: "Veggie Burger",
    protein: "Vegetarian",
    cheese: false,
    toppings: ["Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mustard", "Avocado"]
  },
  {
    name: "Chicken BBQ Burger",
    protein: "Chicken",
    cheese: true,
    toppings: ["Lettuce", "Tomato", "Onion", "Pickles", "BBQ Sauce", "Cheese"]
  },
  {
    name: "Spicy Black Bean Burger",
    protein: "Vegetarian",
    cheese: true,
    toppings: ["Lettuce", "Tomato", "Onion", "Pickles", "Spicy Sauce", "Cheese"]
  }
])


// find all the burgers

db.burgers.find({})

// show just the meat of each burger

db.burgers.find({}, { protein: 1 })

// show just the toppings of each burger

db.burgers.find({}, { toppings: 1 })

// show everything but the cheese

db.burgers.find({}, { cheese: 0 })

// find all the burgers with beef

db.burgers.find({ protein: "Beef" })

// find all the burgers that are not beef

db.burgers.find({ protein: { $ne: "Beef" } })

// find the first burger with cheese

db.burgers.findOne({ cheese: true })

// find one and update the first burger with cheese to have a property of 'double cheese'

db.burgers.findOneAndUpdate( { cheese: true }, { $set: { cheeseType: 'double cheese' } }, { $currentDate: { lastModified: true }})

// find the burger you updated to have double cheese

db.burgers.find({ cheeseType: 'double cheese' })

// find and update all the beef burgers to be 'veggie'

db.burgers.updateMany( { protein: "Beef" }, { $set: { protein: "Vegetarian" } } )

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

db.burgers.deleteOne({ protein: "Vegetarian" })

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
