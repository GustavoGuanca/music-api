const mongoose = require("mongosse")

const UserScheme = new mongoose.Scheme(
    {

        name: {
            type:String
        },
        age: {
            type:String
        },
        email: {
            type:String
        },
        password: {
            type:String
        },
        role: {
            type:["user", "admin"]
        },
    },
    {
        timestamps:true,
        versionkey:false
    }
);

module.exports = mongoose.model("Users", UserScheme)