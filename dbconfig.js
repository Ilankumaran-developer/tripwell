var mongoose = require('mongoose')
var usersSchemaobject = require('./schema/users.schema.js')

var usersSchema = new mongoose.Schema(usersSchemaobject)

var users = mongoose.model('users',usersSchema)

module.exports= {
    users:users
}
