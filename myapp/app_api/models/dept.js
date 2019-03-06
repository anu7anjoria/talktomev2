var mongoose = require( 'mongoose' );
var deptSchema = new mongoose.Schema({
    deptName:String,
    deptId:String,
    deptHeadId:String,
});
module.exports = mongoose.model('Dept', deptSchema);
