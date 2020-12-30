const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    name :{
        type :String,
        required : true
    },
    genre :{
        type :String,
        required : true
    },
    date :{
        type :Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Movies',MovieSchema)