# Lundb
- Simple Database Module!

**UPTADE 2.1.0**

- added `on` function

- added `math` method

- `connect` feature removed

- fixed undefined `FilePath`

# Setup

```js
const Database = require("lundb");
const db = new Database()
```

# Example

```js
//It will send a message to the console when connected to the database
db.on("ready",{ 
message : "connected to database"
})

//a message will be sent to the console when data is added to the database.
db.on("dataAdd",{
message : "data added to database"
})

db.set("Hello", "World"); //change data (hello => World)

db.get("Hello"); //shows data (Hello)

db.delete("Hello"); //deletes data (hello => )

db.has("Hello"); //makes a condition (false || true)

db.fetch("Hello"); //fetches the data (hello)

db.add("age", 1); //adds data (+)

db.subtract("age", 9); //extract data (-)

db.push("array", "orange"); //creates an array (Array: 'orange')

db.clear(); //deletes all data (hepsi için)

console.log(db.math("35 , "+" , "5")); //40
```

# Docs

**all method**

```js
set(key , key2)
get(key)
has(key) //boolean
fetch(key)
add(key , key2)
subtract(key , key2)
push("array name" , {"array1" : "value" , "array2" : "value"})
delete(key)
clear(key)
```
**client methods**

```js
db.on("ready" , {
message : "ready message"
})

db.on("dataAdd" , {
message : "data add message"
})
```

# Contact
[Discord Server](https://discord.gg/wsR36xXgpJ) 

[Discord User](https://discord.com/users/817381153211809802)
