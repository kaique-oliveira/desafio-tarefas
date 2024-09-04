import { apiTask } from '../libs/apiTask';

class TaskServices {
  async createTask(title, description, state) {
    const res = await apiTask.post(`/task/create`, {
      title,
      description,
      state,
    });

    return res.data.message;
  }
  async getAllTask() {
    const res = await apiTask.get('/task/read-all');

    return res.data;
  }
  async updateTask(taskId, title, description, state) {
    const res = await apiTask.put(`/task/update?taskId=${taskId}`, {
      title,
      description,
      state,
    });

    return res.data.message;
  }
  async deleteTask(taskId) {
    const res = await apiTask.delete(`/task/delete?taskId=${taskId}`);

    return res.data.message;
  }
}

export const taskServices = new TaskServices();
