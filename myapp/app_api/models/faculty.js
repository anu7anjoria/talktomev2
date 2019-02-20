var mongoose = require( 'mongoose' );

var facultySchema = new mongoose.Schema({
    facultyName:String,
    subjectName:String,
    subjectId:String,
    classId:[{
        Id:String
    }]
});

module.exports = mongoose.model('Faculty', facultySchema);
