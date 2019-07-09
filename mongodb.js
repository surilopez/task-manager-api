//CRUD - Create Read Update Deletec

/* const  mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID */

const {MongoClient,ObjectID} = require('mongodb')

const  conectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'

MongoClient.connect(conectionURL,{useNewUrlParser:true},(error,client)=>{
  if (error){
      return console.log('Unable to conect to database!')
  }

     const db = client.db(databaseName)
  /* db.collection('user').insertOne({
        name:'Osvaldo',
        Age:65
    },(error,result)=>{
        if(error){
            return console.log('Unable to insert User')
        }

        console.log(result.ops)

    })
 */
    /* db.collection('user').insertMany([
        {
            name:'Alberita',
            Age:'64'
        },{
            name:'Lourdes',
            Age:'50'              
        }
    ],(error,result)=>{
       if (error){
        return console.log('Unable to insert Users')
       }
       console.log(result.ops)
    }) 

    db.collection('Task').insertMany([
        {
            Description:'Clean Office',
            Completed: true
        },{
            Description:'Buy Clothes',
            Completed: false           
        },{
            Description:'buy TV',
            Completed: false           
        }
    ],(error,result)=>{
       if (error){
        return console.log('Unable to insert Users')
       }
       console.log(result.ops)
    })

  db.collection('user').findOne({_id:new ObjectID('5cf7ce4be4e942623cd8f746')},(error,user)=>{
      if(error){
          return console.log('Unable to fetch')
      } 
      console.log(user)

    })
// buscando Varios documentos
    db.collection('user').find({Age:34}).toArray((error,users)=>{ 

        console.log(users)
    })

    db.collection('user').find({Age:34}).count((error,count)=>{ 

        console.log(count)
    })*/

    //Buscando un Documento
    /* db.collection('Task').findOne({_id:new ObjectID('5cf7e9e430c1331404faeb07')},(error,task)=>{
        if(error){
            return console.log('Unable to fetch')
        } 
        console.log(task)
  
      })

      db.collection('Task').find({Completed:false}).toArray((error,tasks)=>{ 

        console.log(tasks)
    })

 //Update Document
 db.collection('user').updateOne({
    _id:new ObjectID("5cf7c6c2204c244334f4fb43")
  },{
    $set:{
        name:'Julia'
    }
  }).then((result)=>{
  console.log(result)
  }).catch((error)=>{
  console.log(error)
  })

//Incrementando valores
    db.collection('user').updateOne({
        _id: new ObjectID("5cf7c6c2204c244334f4fb43")
    }, {
            $inc: {
                Age: 2
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
//Actualizar varios documentos
    db.collection('Task').updateMany({
        Completed: false
    }, {
            $set: {
                Completed: true
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
        //BOrrar muchos
        db.collection('user').deleteMany({
            Age: 34
        }).then((result) => {
                console.log(result)
            }).catch((error) => {
                console.log(error)
            })*/

            db.collection('user').deleteOne({
                Age: 36
            }).then((result) => {
                    console.log(result)
                }).catch((error) => {
                    console.log(error)
                })

}) 
