const express = require("express");
const path = require("path");
const router = express.Router();
const {
  getAllEmployees, 
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee
} = require("../../controllers/employeesController")


router
  .route("/")
  .get(getAllEmployees)
  .post(createNewEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);


  router.route("/:id").get(getEmployee)


  module.exports = router;