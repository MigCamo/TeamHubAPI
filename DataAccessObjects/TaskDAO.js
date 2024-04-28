const { task } = require('../Models/Index');

class TaskDAO{

    static async createNewTask(taskAux) {
        const existingTask = await task.findOne({
            where: { Name: taskAux.Name } 
        });

        if (existingTask) {
            return { message: 'La actividad ya está registrada en la base de datos.' };
        }

        return await task.create(taskAux);
    }

    static async getAllTasks(){
        return await task.findAll();
    }

    static async findTasksByDate(startDate, endDate) {
        return await task.findAll({
            where: {
                StartDate: {
                    $lte: startDate, 
                },
                EndDate: {
                    $gte: endDate, 
                },
            },
        });
    }

    static async updateTaskByName(name, taskNew) {
        const result = await task.update(taskNew, {
            where: { Name: name }, 
        });

        const [affectedCount] = result;

        if (affectedCount === 0) {
            return { message: 'No se encontró ninguna tarea con ese nombre para actualizar.' };
        }

        return { message: 'La tarea se actualizó con éxito.', affectedCount }; 
    }

    static async deleteTaskByName(name) {
        return await task.destroy({ where: { name } });
    }
}

module.exports = TaskDAO;