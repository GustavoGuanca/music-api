const mongoose = require("mongosse")

const TracksScheme = new mongoose.Scheme(
    {

        name: {
            type:String
        },
        album: {
            type:String
        },
        cover: {
            type:String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "Error_url"
            }
        },
        artist: {
            name:{
                type: String,   
            },
            nickname:{
                type: String,   
            },
            nationality:{
                type: String,   
            },
        },
        duration: {
           start: {
            type: Number,
           },
           end: {
            type:Number,
           },
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps:true,
        versionkey:false
    }
);

module.exports = mongoose.model("tracks", TracksScheme)