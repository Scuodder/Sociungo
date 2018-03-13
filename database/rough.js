const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) throw err;
    const db = client.db('sociungo');

    const users = db.collection('users');

//    users.updateOne({"last_name" : "Thakur"},{$set : {"first_name" : "Scuodder"}}, function(err, result) {
//        if (err) throw err;

//        console.log(result);
//    })

db.listCollections()
users.find({"first_name" : "Scuodder"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
})
})
