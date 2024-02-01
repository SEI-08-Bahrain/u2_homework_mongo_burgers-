// create 5 burgers (at least 3 should be beef)
db.burger.insertMany([{ protein: "beef", cheese: true, toppings: ['lettuce', 'tomato']}, { protein: "beef", cheese: false, toppings: ['olives', 'pickles']}])

db.burger.insertMany([{ protein: "beef", cheese: true, toppings: []}, { protein: "chicken", cheese: true, toppings: ['lettuce', 'pickles', 'onions']}, {protein: "chicken", cheese: true, toppings: ['mushrooms']}])
// find all the burgers
db.burger.find({})

// show just the meat of each burger
db.burger.find( {  }, { protein: 1 } )

// show just the toppings of each burger
db.burger.find( {  }, { toppings: 1 } )

// show everything but the cheese
db.burger.find( {  }, { cheese: 0 } )

// find all the burgers with beef
db.burger.find( { protein: 'beef' } )

// find all the burgers that are not beef
db.burger.find( { protein: { $nin: 'beef' } })
// find the first burger with cheese
db.burger.find( { protein: { $nin: ['beef'] } })

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.updateOne({cheese: true}, {$set: {doubleCheese: true}})

// find the burger you updated to have double cheese
db.burger.find({doubleCheese: true})

// find and update all the beef burgers to be 'veggie'
db.burger.updateMany({protein:'beef'}, {$set: {protein: 'veggie'}})

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.deleteOne( { protein: 'veggie' } )

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
db.burger.drop()
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

db.burger.insertMany([{ protein: "beef", cheese: true, toppings: ['lettuce', 'tomato']}, { protein: "beef", cheese: false, toppings: ['olives', 'pickles']}])

db.burger.insertMany([{ protein: "beef", cheese: true, toppings: []}, { protein: "chicken", cheese: true, toppings: ['lettuce', 'pickles', 'onions']}, {protein: "chicken", cheese: true, toppings: ['mushrooms']}])

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 