var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
      secret: 'MY_SECRET',
      userProperty: 'payload'
});
          
var ctrlUser = require('../controllers/user.controller');
var ctrlAdmin = require('../controllers/admin.controller');

router.get('/profile', auth, ctrlUser.profileRead);
router.post('/register', ctrlUser.register);
router.post('/login', ctrlUser.login);

//department - Cse,me,ee
//batch - UWA,UCA,JAVA
//section - UCA-1,UCA-2,UCA-3
router.route('/admin/dept')
      .post(ctrlAdmin.postDept)
router.route('/admin/dept/:dept_id')
      .patch(ctrlAdmin.updateDept)
      .put(ctrlAdmin.updateDept)
      .delete(ctrlAdmin.deleteDept)
      .get(ctrlAdmin.getDept)

router.route('/admin/dept/deptSubject')
      .post(ctrlAdmin.addSubject)
router.route('/admin/dept/deptSubject/:deptSubject_id')
      .delete(ctrlAdmin.deleteSubject)
      .patch(ctrlAdmin.updateSubject)
      .put(ctrlAdmin.updateSubject)
      .get(ctrlAdmin.getSubject)

router.route('/admin/dept/class')               //this is like we will ask student to add his class then we will add him to class
      .post(ctrlAdmin.createClass)              //
router.route('/admin/dept/class/:class_id')
      .get(ctrlAdmin.displayClass)
      .put(ctrlAdmin.updateClass)
      .patch(ctrlAdmin.updateClass)
      .delete(ctrlAdmin.deleteClass)

router.route('/admin/dept/faculty')
      .post(ctrlAdmin.createFaculty)
router.route('/admin/dept/faculty/:faculty_id')
      .get(ctrlAdmin.displayFaculty)
      .put(ctrlAdmin.updateFaculty)
      .patch(ctrlAdmin.updateFaculty)
      .delete(ctrlAdmin.deleteFaculty)

module.exports = router;
