var mongoose = require( 'mongoose' );

var classSchema = new mongoose.Schema({
    className:String,
    classId:String,
    studentId:[{
        Id:String
    }]  
});

module.exports = mongoose.model('Class', classSchema);
