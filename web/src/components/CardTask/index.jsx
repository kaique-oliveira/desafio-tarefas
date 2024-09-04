import { Box, IconButton, Stack, Typography } from '@mui/material';
import { WrapperButtons, WrapperCard, WrapperHeaderTask } from './styles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useDialog } from '../../hook/useDialog';

export function CardTask({
  task,
  onChangeCurrentTask,
  onDeleteTask,
  onHandleEdit,
}) {
  const { handleOnOpenDialog } = useDialog();

  function handleStartDrag() {
    onChangeCurrentTask(task);
  }

  function handleEndDrag() {
    onChangeCurrentTask(null);
  }

  function handleDeleteTask() {
    console.log('click');
    handleOnOpenDialog({
      text: 'Deseja realmente deletar a tarefa?',
      onConfirm: () => onDeleteTask(task.id),
    });
  }

  return (
    <Stack
      sx={WrapperCard}
      draggable
      onDragStart={handleStartDrag}
      onDragEnd={handleEndDrag}
      style={{
        borderColor: `${
          task.state === 'TODO'
            ? '#ffa726'
            : task.state === 'DOING'
            ? '#29b6f6'
            : '#66bb6a'
        }`,
      }}
    >
      <Box sx={WrapperHeaderTask}>
        <Typography
          color={
            task.state === 'TODO'
              ? 'warning'
              : task.state === 'DOING'
              ? 'info'
              : 'success'
          }
          component="label"
          fontWeight={600}
          fontSize={14}
        >
          {task.title}
        </Typography>

        <Box sx={WrapperButtons}>
          <IconButton
            aria-label="edit"
            style={{ opacity: 0.6, marginRight: '-10px' }}
            color="default"
            size="small"
            onClick={() => onHandleEdit(task)}
          >
            <EditOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton
            aria-label="delete"
            style={{ opacity: 0.6, marginRight: '-10px' }}
            color="default"
            size="small"
            onClick={handleDeleteTask}
          >
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Typography
        color="textSecondary"
        component="p"
        fontWeight={400}
        fontSize={14}
      >
        {task.description}
      </Typography>
    </Stack>
  );
}
