var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema
var deptSchema = new mongoose.Schema({
    deptName:String,
    deptId:String,
    deptHeadId:String,
    subjectId:[{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    classId:[{Id:String}],
    facultyId:[{Id:String}]
});
module.exports = mongoose.model('Admin', deptSchema);
