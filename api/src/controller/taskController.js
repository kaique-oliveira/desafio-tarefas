const { task } = require('../libs/prismaLib');
const taskServices = require('../services/taskServices');

const State = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
};

class TaskController {
  async create(req, res) {
    try {
      const { title, description, state } = req.body;

      if (!title || typeof title !== 'string') {
        return res
          .status(409)
          .json({ error: 'O titulo é obrigatório, e deve ser texto' });
      }

      if (!description || typeof description !== 'string') {
        return res
          .status(409)
          .json({ error: 'A descrição é obrigatório, e deve ser texto' });
      }

      if (!Object.values(State).includes(state)) {
        return res.status(409).json({
          error: 'O status é obrigatório e deve ser "TODO", "DOING" ou "DONE" ',
        });
      }

      const response = await taskServices.addNewTask(title, description, state);

      res.status(201).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Algo deu errado.', error: JSON.stringify(error) });
    }
  }
  async readAll(_, res) {
    try {
      const response = await taskServices.getAllTask();

      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Algo deu errado.', error: JSON.stringify(error) });
    }
  }
  async update(req, res) {
    try {
      const { taskId } = req.query;
      const { title, description, state } = req.body;

      if (typeof taskId === 'number' && taskId > 0) {
        return res
          .status(409)
          .json({ error: 'Id da tarefa é obrigatório, e deve ser um número' });
      }

      if (!title || typeof title !== 'string') {
        return res
          .status(409)
          .json({ error: 'O titulo é obrigatório, e deve ser texto' });
      }

      if (!description || typeof description !== 'string') {
        return res
          .status(409)
          .json({ error: 'A descrição é obrigatório, e deve ser texto' });
      }

      if (!Object.values(State).includes(state)) {
        return res.status(409).json({
          error: 'O status é obrigatório e deve ser "TODO", "DOING" ou "DONE"',
        });
      }

      const response = await taskServices.updateTask(
        taskId,
        title,
        description,
        state
      );

      if (!response) {
        return res.status(400).json({
          error: 'Tarefa não existe',
        });
      }

      res.status(200).json({ message: 'Tarefa atualizada com succeso.' });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Algo deu errado.', error: JSON.stringify(error) });
    }
  }
  async delete(req, res) {
    try {
      const { taskId } = req.query;

      if (typeof taskId === 'number' && taskId > 0) {
        return res
          .status(409)
          .json({ error: 'Id da tarefa é obrigatório, e deve ser um número' });
      }

      const response = await taskServices.deleteTask(taskId);

      if (!response) {
        return res.status(400).json({
          error: 'Tarefa não existe',
        });
      }

      res.status(200).json({ message: 'Tarefa deletada com succeso.' });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Algo deu errado.', error: JSON.stringify(error) });
    }
  }
}

const taskController = new TaskController();

module.exports = taskController;
