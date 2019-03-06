var mongoose = require('mongoose');
var Dept = mongoose.model('Dept');
var Subject = mongoose.model('Subject');
var ClassObj = mongoose.model('Class');
var Faculty = mongoose.model('Faculty');
module.exports.getDept = function(req, res) {
    Dept.findById(req.params.dept_id, function (err, dept) {
        if (err)
            res.send(err);
        else res.json(dept);
    });
};
module.exports.postDept = function(req,res) {
    var dept = new Dept();
    dept.deptName = req.body.deptName,
    dept.deptId = req.body.deptId,
    dept.deptHeadId = req.body.deptHeadId,
    dept.save(function (err) {
        if (err)
            res.json(err);
        else res.json({
            message: 'New department created!',
        });
    });
};
module.exports.deleteDept = function(req,res) {
    Dept.deleteOne({
        _id: req.params.dept_id
    }, function (err, dept) {
        if (err)
            res.json(err);
        else 
            res.json(dept);
    });
};
module.exports.updateDept = function(req,res) {
        Dept.findById(req.params.dept_id, function (err, dept) {
        if (err)
            res.send(err);
        else {
            dept.deptName = req.body.deptName,
            dept.deptId = req.body.deptId,
            dept.deptHeadId = req.body.deptHeadId,

            // save the contact and check for errors
            dept.save(function (err) {
                if (err)
                    res.json(err);
                else res.json(dept);
            });
        }
    });
}



module.exports.getSubject = function(req,res) {
    Subject.findById(req.params.deptSubject_id, function (err, subject) {
        if (err)
            res.send(err);
        else res.json(subject);
    });
}
module.exports.addSubject = function(req,res) {
    var subject = new Subject()
    subject.subjectName = req.body.subjectName,
    subject.subjectId = req.body.subjectId
    subject.save(function (err) {
        if (err)
            res.json(err);
        else res.json({
            message: 'New Subject created!',
        });
    });
}
module.exports.deleteSubject = function(req,res) {
    Subject.deleteOne({
        _id: req.params.deptSubject_id
    }, function (err, subject) {
        if (err)
            res.json(err);
        else 
            res.json(subject);
    });
}
module.exports.updateSubject = function(req,res) {
    Subject.findById(req.params.deptSubject_id, function (err, subject) {
        if (err)
            res.send(err);
        else {
            subject.subjectName = req.body.subjectName,
            subject.subjectId = req.body.subjectId

            // save the contact and check for errors
            subject.save(function (err) {
                if (err)
                    res.json(err);
                else res.json(subject);
            });
        }
    });
}




module.exports.displayClass = function(req,res) {
    ClassObj.findById(req.params.class_id, function (err, classObj) {
        if (err)
            res.send(err);
        else res.json(classObj);
    });
}
module.exports.createClass = function(req,res) {
    var classObj = new ClassObj();
    classObj.className = req.body.className,
    classObj.classId = req.body.classId,
    classObj.save(function (err) {
        if (err)
            res.json(err);
        else res.json({
            message: 'New class created!',
        });
    });    
}
module.exports.deleteClass = function(req,res) {
    ClassObj.deleteOne({
        _id: req.params.class_id
    }, function (err, classObj) {
        if (err)
            res.json(err);
        else 
            res.json(classObj);
    });
}
module.exports.updateClass = function(req,res) {
    ClassObj.findById(req.params.class_id, function (err, classObj) {
        if (err)
            res.send(err);
        else {
            classObj.className = req.body.className,
            classObj.classId = req.body.classId,
            // save the contact and check for errors
            classObj.save(function (err) {
                if (err)
                    res.json(err);
                else res.json(classObj);
            });
        }
    });
}




module.exports.displayFaculty = function(req,res) {
    Faculty.findById(req.params.faculty_id, function (err, faculty) {
        if (err)
            res.send(err);
        else res.json(faculty);
    });
}
module.exports.createFaculty = function(req,res) {
    var faculty = new Faculty();
    faculty.facultyName = req.body.facultyName,
    faculty.subjectName = req.body.subjectName,
    faculty.subjectId = req.body.subjectId,
    faculty.classId = req.body.classId
    faculty.save(function (err) {
        if (err)    
            res.json(err);
        else res.json({
            message: 'New class created!',
        });
    });    
}
module.exports.deleteFaculty = function(req,res) {
    Faculty.deleteOne({
        _id: req.params.faculty_id
    }, function (err, faculty) {
        if (err)
            res.json(err);
        else 
            res.json(faculty);
    });
}
module.exports.updateFaculty = function(req,res) {
    Faculty.findById(req.params.faculty_id, function (err, faculty) {
        if (err)
            res.send(err);
        else {
            faculty.facultyName = req.body.facultyName,
            faculty.subjectName = req.body.subjectName,
            faculty.subjectId = req.body.subjectId,
            faculty.classId = req.body.classId

            // save the contact and check for errors
            faculty.save(function (err) {
                if (err)
                    res.json(err);
                else res.json(faculty);
            });
        }
    });
}


