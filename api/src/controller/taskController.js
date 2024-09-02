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
}

const taskController = new TaskController();

module.exports = taskController;
