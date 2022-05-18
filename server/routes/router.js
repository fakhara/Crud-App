const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description RootRoute
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description add student
 * @method GET/add-student
 */
route.get('/add-student', services.add_student);

/**
 * @description for update student
 * @method GET/update-student
 */
route.get('/update-student', services.update_student);
//API
route.post('/api/students', controller.create);
route.get('/api/students', controller.find);
route.put('/api/students/:id', controller.update);
route.delete('/api/students/:id', controller.delete);

module.exports = route;