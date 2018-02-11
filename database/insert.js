const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;
    // create a database
const db = client.db('sociungo');
// collections
        const users = db.collection('users');

        users.insertOne({
            first_name : "Sudarshan",
            last_name : "Sharma",
            age : 21,
            gender : "male"
        }, function (err, result) {
            if (err) throw err ;

            console.log(result);
        })


})