const mongoose = require('mongoose');

const uri = 'mongodb+srv://<username>:<password>@cluster0.wxnea.gcp.mongodb.net/PaseCovid?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useUnifiedTopology:true,
    useNewUrlParser:true,
});

const schema = mongoose.Schema({
    Country: String,
    Confirmed: Number,
    Active: Number,
    Deaths:Number,
    Recoveries:Number,
    Date: String,
    
});


const Case = mongoose.model('Case', schema);

module.exports = Case;