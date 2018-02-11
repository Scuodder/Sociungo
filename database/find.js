const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;
    // create a database
const db = client.db('sociungo');
// collections
        const users = db.collection('users');

        users.find({last_name : "Sharma"}).toArray(function (err, results) {
            if (err) throw err ;

            console.log(results);
        }
    ) 


})