const express = require('express')

const expressInstance = express()

expressInstance.get('/', (request, response)=>{
    let dateInstance = new Date()
    response.send(`${dateInstance.getDate()}-${dateInstance.getMonth()+1}-${dateInstance.getFullYear()}`)
})

expressInstance.listen(3000);

module.exports = expressInstance