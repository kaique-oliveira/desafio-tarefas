import {
  Box,
  Button,
  Grid2,
  IconButton,
  List,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  ListTasks,
  PanelTask,
  WrapperButtons,
  WrapperForm,
  WrapperHeaderPanelTask,
  WrapperPage,
  WrapperPanel,
} from './styles';
import AddIcon from '@mui/icons-material/Add';
import { CardTask } from '../../components/CardTask';
import { taskServices } from '../../services/taskServices';
import { useEffect, useState } from 'react';
import { useDialog } from '../../hook/useDialog';
import { useAlert } from '../../hook/useAlert';
import { useLoading } from '../../hook/useLoading';

export function Taks() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { handleOnCloseDialog } = useDialog();
  const { handleOnOpenAlert } = useAlert();
  const { handleOnOpenLoading, handleOnCloseAlert } = useLoading();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('TODO');
  const [isEditing, setIsEditing] = useState(false);

  async function fetchTask() {
    try {
      handleOnOpenLoading();
      const response = await taskServices.getAllTask();

      setTasks(response);
      handleOnCloseAlert();
    } catch (error) {
      handleOnCloseAlert();
      console.log(error);
      handleOnOpenAlert({ text: 'Algo deu errado' });
    }
  }

  async function updateState(event, state) {
    event.preventDefault();

    try {
      handleOnOpenLoading();
      await taskServices.updateTask(
        currentTask.id,
        currentTask.title,
        currentTask.description,
        state
      );

      await fetchTask();
    } catch (error) {
      handleOnCloseAlert();
      console.log(error);
      handleOnOpenAlert({ text: 'Algo deu errado' });
    }
  }

  async function updateTask() {
    try {
      handleOnOpenLoading();
      await taskServices.updateTask(
        currentTask.id,
        title,
        description,
        currentTask.state
      );

      await fetchTask();

      setOpenModal(false);
      setIsEditing(false);

      handleOnOpenAlert({ text: 'Tarefa editada com sucesso' });
    } catch (error) {
      handleOnCloseAlert();
      console.log(error);
    }
  }

  async function saveNewTask() {
    try {
      if (title && description) {
        handleOnOpenLoading();
        await taskServices.createTask(title, description, state);

        await fetchTask();

        setOpenModal(false);
        handleOnOpenAlert({ text: 'Tarefa criada com sucesso' });
      }
    } catch (error) {
      console.log(error);
      handleOnCloseAlert();
      handleOnOpenAlert({ text: 'Algo deu errado' });
    }
  }

  async function deleteTask(taskId) {
    try {
      handleOnOpenLoading();

      const res = await taskServices.deleteTask(taskId);

      await fetchTask();
      handleOnCloseDialog();

      handleOnOpenAlert({ text: res });
    } catch (error) {
      console.log(error);
      handleOnCloseAlert();
      handleOnOpenAlert({ text: 'Algo deu errado' });
    }
  }

  function handleEditTask(task) {
    setCurrentTask(task);
    setTitle(task.title);
    setDescription(task.description);

    setIsEditing(true);
    setOpenModal(true);
  }

  function clearInputs() {
    setTitle('');
    setDescription('');
  }

  useEffect(() => {
    fetchTask();
  }, []);

  useEffect(() => {
    if (openModal && !isEditing) {
      clearInputs();
    }
  }, [openModal]);

  return (
    <Stack sx={WrapperPage}>
      <Typography
        variant="h6"
        component="h6"
        fontWeight={600}
        color="textSecondary"
      >
        Tarefas
      </Typography>

      <Typography
        marginBottom="24px"
        variant="subtitle2"
        fontWeight={500}
        fontSize="14px"
        color="textSecondary"
        style={{ opacity: 0.6 }}
      >
        Crie suas tarefas e arraste-as para os estados ‘Fazer’, ‘Fazendo’ ou
        ‘Concluído’
      </Typography>

      <Grid2 container spacing={3} sx={WrapperPanel}>
        <Grid2
          sx={PanelTask}
          item="true"
          size="grow"
          onDrop={(e) => updateState(e, 'TODO')}
          onDragOver={(e) => e.preventDefault()}
        >
          <Box sx={WrapperHeaderPanelTask}>
            <Typography
              color="textPrimary"
              component="label"
              fontWeight={600}
              fontSize={14}
            >
              Fazer
            </Typography>

            <IconButton
              aria-label="delete"
              style={{ opacity: 0.6 }}
              color="default"
              size="small"
              onClick={() => {
                setOpenModal(true);
                setState('TODO');
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>

          <List sx={ListTasks}>
            {tasks
              .filter((f) => f.state === 'TODO')
              .map((task) => (
                <CardTask
                  key={task.id}
                  task={task}
                  onChangeCurrentTask={setCurrentTask}
                  onDeleteTask={deleteTask}
                  onHandleEdit={handleEditTask}
                />
              ))}
          </List>
        </Grid2>

        <Grid2
          sx={PanelTask}
          item="true"
          size="grow"
          onDrop={(e) => updateState(e, 'DOING')}
          onDragOver={(e) => e.preventDefault()}
        >
          <Box sx={WrapperHeaderPanelTask}>
            <Typography
              component="label"
              fontWeight={600}
              fontSize={14}
              color="textPrimary"
            >
              Fazendo
            </Typography>

            <IconButton
              aria-label="delete"
              style={{ opacity: 0.6 }}
              color="default"
              size="small"
              onClick={() => {
                setOpenModal(true);
                setState('DOING');
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>

          <List sx={ListTasks}>
            {tasks
              .filter((f) => f.state === 'DOING')
              .map((task) => (
                <CardTask
                  key={task.id}
                  task={task}
                  onChangeCurrentTask={setCurrentTask}
                  onDeleteTask={deleteTask}
                  onHandleEdit={handleEditTask}
                />
              ))}
          </List>
        </Grid2>

        <Grid2
          sx={PanelTask}
          item="true"
          size="grow"
          onDrop={(e) => updateState(e, 'DONE')}
          onDragOver={(e) => e.preventDefault()}
        >
          <Box sx={WrapperHeaderPanelTask}>
            <Typography
              component="label"
              fontWeight={600}
              fontSize={14}
              color="textPrimary"
            >
              Concluído
            </Typography>

            <IconButton
              aria-label="delete"
              style={{ opacity: 0.6 }}
              color="default"
              size="small"
              onClick={() => {
                setOpenModal(true);
                setState('DONE');
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>

          <List sx={ListTasks}>
            {tasks
              .filter((f) => f.state === 'DONE')
              .map((task) => (
                <CardTask
                  key={task.id}
                  task={task}
                  onChangeCurrentTask={setCurrentTask}
                  onDeleteTask={deleteTask}
                  onHandleEdit={handleEditTask}
                />
              ))}
          </List>
        </Grid2>
      </Grid2>

      <Modal
        open={openModal}
        onClose={setOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={WrapperForm}>
          <Typography
            id="modal-modal-title"
            fontSize="16px"
            variant="h6"
            component="h6"
            fontWeight={600}
            style={{ marginBottom: '16px' }}
          >
            Criar tarefa
          </Typography>

          <TextField
            style={{ width: '100%' }}
            id="title-task"
            label="Titulo"
            variant="outlined"
            color="success"
            size="small"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            style={{ width: '100%' }}
            id="title-task"
            label="Descrição"
            variant="outlined"
            color="success"
            multiline
            maxRows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Box sx={WrapperButtons}>
            <Button
              style={{ borderRadius: '10px' }}
              color="error"
              variant="outlined"
              onClick={() => setOpenModal(false)}
            >
              Cancelar
            </Button>

            <Button
              style={{ borderRadius: '10px' }}
              color="success"
              variant="contained"
              onClick={isEditing ? updateTask : saveNewTask}
              disabled={!title || !description ? true : false}
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}
