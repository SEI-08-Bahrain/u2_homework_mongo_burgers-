//scheema
{protein :"", cheese :true, toppings :['']}


// create 5 burgers (at least 3 should be beef)
db.orders.insertMany([{protein :'beef',cheese :true,toppings :['ketchup', 'mustard', 'guacamole']}, {protein :"beef",cheese :true, toppings :['ketchup','mustard', 'guacamole', 'Worcestershire sauce', 'french fries', 'hot fudge', 'mayonnaise', 'pickled beets', 'mango', 'sriracha', 'onions', 'ramen', 'pickles', 'capers', 'relish', 'fried banana and with peanut butter', 'olives', 'tabasco', 'kimchi', 'maple syrup', 'mushrooms', 'fried green tomatoes']},{protein :"beef",cheese :false, toppings :['mustard']},{protein :"chicken",cheese :false, toppings :[]},{protein :"tofu",cheese :true, toppings :['ramen']}])

// find all the burgers
db.orders.find()

// show just the meat of each burger
db.orders.find({},{protein:1, _id:0})

// show just the toppings of each burger
db.orders.find({},{toppings:1, _id:0})

// show everything but the cheese
db.orders.find({},{cheese:0})

// find all the burgers with beef
db.orders.find({protein:'beef'})

// find all the burgers that are not beef
db.orders.find({protein:{$ne:'beef'}})

// find the first burger with cheese
db.orders.findOne({cheese:true})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.orders.updateOne({cheese:true},{$set: {cheese:'double cheese'}})

// find the burger you updated to have double cheese
db.orders.find({cheese:'double cheese'})

// find and update all the beef burgers to be 'veggie'
db.orders.updateMany({protein:'beef'},{$set: {protein:'veggie'}})

// delete one of your veggie burgers
db.orders.deleteOne({protein:'veggie'})

// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// drop the collection
db.orders.drop()

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
use burgers
//copy paste your insert burgers from above to reseed your database
db.orders.insertMany([{protein :'beef',cheese :true,toppings :['ketchup', 'mustard', 'guacamole']}, {protein :"beef",cheese :true, toppings :['ketchup','mustard', 'guacamole', 'Worcestershire sauce', 'french fries', 'hot fudge', 'mayonnaise', 'pickled beets', 'mango', 'sriracha', 'onions', 'ramen', 'pickles', 'capers', 'relish', 'fried banana and with peanut butter', 'olives', 'tabasco', 'kimchi', 'maple syrup', 'mushrooms', 'fried green tomatoes']},{protein :"beef",cheese :false, toppings :['mustard']},{protein :"chicken",cheese :false, toppings :[]},{protein :"tofu",cheese :true, toppings :['ramen']}])
// Change the name of the key cheese to 'pumpkinSpice'
db.orders.updateMany({},{ $rename: { 'cheese': 'pumpkinSpice' } })

// find all the burgers with ketchup (or another topping you used at least once)
db.orders.find({  toppings: 'ketchup'  })

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.orders.updateOne({  toppings: 'pickles'  },{$pull: {toppings:'pickles'}})
// add a topping of 'eggs' to all the beef burgers
db.orders.updateMany({  protein: 'beef'  },{$push: {toppings:'eggs'}})

//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
//Add a price to each burger, start with $5.00 for each burger 
db.orders.updateMany({ },{$set: {price:'$5.00'}})
