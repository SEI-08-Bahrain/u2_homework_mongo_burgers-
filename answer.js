// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  {
    protein: 'Beef',
    cheese: true,
    toppings: ['Olives', 'Mushrooms', 'Apple-slice']
  },
  {
    protein: 'Beef',
    cheese: true,
    toppings: ['Lettuce', 'Mushrooms', 'Pineapple-slice']
  },
  {
    protein: 'Beef',
    cheese: true,
    toppings: ['Lettuce', 'Mushrooms', 'Onion']
  },
  {
    protein: 'Chicken',
    cheese: true,
    toppings: ['Tomato', 'Lettuce', 'Onion']
  },
  {
    protein: 'Camel',
    cheese: true,
    toppings: ['Garlic', 'Red Chilli', 'Onion']
  }
])

// find all the burgers
db.burgers.find({})

// show just the meat of each burger
db.burgers.find({ protein: 'Beef' })

// show just the toppings of each burger
db.burgers.find({}, { _id: 0, toppings: 1 })

// show everything but the cheese

// find all the burgers with beef
db.burgers.find({ protein: 'Beef' })

// find all the burgers that are not beef

// find the first burger with cheese
db.burgers.find({ chease: 'Yes' })

// find one and update the first burger with cheese to have a property of 'double cheese'

// find the burger you updated to have double cheese

// find and update all the beef burgers to be 'veggie'

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// drop the collection
//Expected Output
//true

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

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
