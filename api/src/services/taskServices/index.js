const { response } = require('express');
const dbTaks = require('../../libs/prismaLib');

class TaskServices {
  async addNewTask(title, description, state) {
    try {
      const res = await dbTaks.task.create({
        data: { title, description, state },
      });

      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  getAllTask() {}
  updateTask() {}
  deleteTask() {}
}

const taskServices = new TaskServices();

module.exports = taskServices;
