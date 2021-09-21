const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName ='student'

MongoClient.connect(connectionURL,{useNewParser:true},(error,client) =>{
    if(!error){
        return console.log('unable to connect')
    }
    console.log('connected')
    
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name:"somu",
        age:67
    },(error,result) => {
        if(error){
            return console.log('unable to connect')
        }
        console.log(result.insertedID)
    })
    /*db.collection('users').insertMany([
        {
        name:'jan',
        dateofyear:2000,
        rollno:43
        },{
            name:'sowmya',
            dateofyear:2001,
            rollno:34
        }
    ],(error,result) => {
        if(error) {
        return console.log('unable to insert document')
      }
    console.log(result.insertedIds)
    })*/

//get user details
    /*db.collection('users').findOne({name:'somu'},(error,user) => {
        if(error) {
            return console.log('unable to connect')
        }
        console.log(user)
    })

    db.collection('users').find({age:21}).toArray((error,users) => {
        console.log(users)
    })

    db.collection('users').find({age:21}).count((error,users) => {
        console.log(users)
    })*/
//update user details
    /*db.collection('users').updateOne({
        _id:new ObjectId("6140b4a00f1729a7ed342ea4")

    },{
        $set:{
            name:'jaya'
        }
        $inc: {
            age:1
        }
    }).then((result) => {
        console.log(result)

    }).catch((error) => {
        console.log(error)
    })*/
//delete a user
    /*db.collection('users').deleteMany({
        age:21

    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

})