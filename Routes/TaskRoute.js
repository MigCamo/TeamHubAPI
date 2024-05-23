const {Router} = require('express');

const {
    createTask,
    getAllTaskByDate,
    updateTask,
    deleteTask,
    getAllTaskCompleteByProject
} = require('../Controller/TaskController');

const router = Router();

router.post('/', createTask);
router.get('/get', getAllTaskByDate);
router.get('/getAll', getAllTaskCompleteByProject);
router.post('/up', updateTask);
router.delete('/:Name', deleteTask);

module.exports = router;