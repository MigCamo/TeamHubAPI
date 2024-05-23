const { tasks } = require('../Models/Index');

class TaskDAO{

    static async createNewTask(taskAux) {
        const existingTask = await tasks.findOne({
            where: { Name: taskAux.Name } 
        });

        if (existingTask) {
            return { message: 'La actividad ya está registrada en la base de datos.' };
        }

        return await tasks.create(taskAux);
    }

    static async getAllTasks(){
        return await tasks.findAll();
    }

    static async findTasksByDate(startDate, endDate) {
        console.log(startDate, endDate);
        return await tasks.findAll({
            where: {
                StartDate: startDate,
                EndDate: endDate, 
            },
        });
    }

    static async updateTaskByName(name, taskNew) {
        const result = await tasks.update(taskNew, {
            where: { Name: name }, 
        });

        const [affectedCount] = result;

        if (affectedCount === 0) {
            return { message: 'No se encontró ninguna tarea con ese nombre para actualizar.' };
        }

        return { message: 'La tarea se actualizó con éxito.', affectedCount }; 
    }

    static async deleteTaskByName(name) {
        return await tasks.destroy({ where: { name } });
    }
}

module.exports = TaskDAO;