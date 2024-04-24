const {Router} = require('express');

const {
    createTask,
    getAllTaskByDate,
    updateTask,
    deleteTask 
} = require('../Controller/TaskController');

const router = Router();

router.post('/', createTask);
router.post('/get', getAllTaskByDate);
router.post('/up', updateTask);
router.delete('/:Name', deleteTask);

module.exports = router;