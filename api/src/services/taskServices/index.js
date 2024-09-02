const { response } = require('express');
const dbTaks = require('../../libs/prismaLib');

class TaskServices {
  async addNewTask(title, description, state) {
    try {
      const res = await dbTaks.task.create({
        data: { title, description, state },
      });

      return res;
    } catch (error) {
      throw error;
    }
  }
  async getAllTask() {
    try {
      const res = await dbTaks.task.findMany({ orderBy: { title: 'asc' } });

      return res;
    } catch (error) {
      throw error;
    }
  }
  async updateTask(taskId, title, description, state) {
    try {
      const oldTask = await this.getOneById(taskId);

      if (!oldTask) {
        return false;
      }

      await dbTaks.task.update({
        data: { title, description, state },
        where: { id: Number(taskId) },
      });

      return true;
    } catch (error) {
      throw error;
    }
  }
  async getOneById(taskId) {
    try {
      const res = await dbTaks.task.findUnique({
        where: { id: Number(taskId) },
      });

      return res;
    } catch (error) {
      throw error;
    }
  }
  async deleteTask(taskId) {
    try {
      const oldTask = await this.getOneById(taskId);

      if (!oldTask) {
        return false;
      }

      await dbTaks.task.delete({
        where: { id: Number(taskId) },
      });

      return true;
    } catch (error) {
      throw error;
    }
  }
}

const taskServices = new TaskServices();

module.exports = taskServices;
