const express = require('express')
require('./db/mongoose')


const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT




/* app.use((req, res, next) => {
    if (req.method == 'GET') {
        res.send('GET request are disable')
    } else {
        next()
    }

}) 

app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon!!')

})*/


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)

})



/* const Task = require('./models/task')
const User =require('./models/user')

const main = async ()=>{
   /*  const task = await Task.findById('5d0a98f5b6ca336880eff618')
    await task.populate('owner').execPopulate()
    console.log(task.owner)
    const user = await User.findById('5d0a9414dcc06c2bd4638342')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main() */


/*const jwt = require('jsonwebtoken')

 const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '5 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')

    console.log(data)
}

myFunction() */



