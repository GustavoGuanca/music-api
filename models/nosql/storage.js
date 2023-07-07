const mongoose = require("mongosse")

const StorageSchemeScheme = new mongoose.Scheme(
    {

        url: {
            type:String
        },
        filename: {
            type:String
        },
    },
    {
        timestamps:true,
        versionkey:false
    }
);

module.exports = mongoose.model("storage", StorageScheme)