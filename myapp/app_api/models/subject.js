var mongoose = require( 'mongoose' );

var subjectSchema = new mongoose.Schema({
    subjectName:String,
    subjectId2:String
});

module.exports = mongoose.model('Subject', subjectSchema);
