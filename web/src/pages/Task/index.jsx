import { Grid2, Typography } from '@mui/material';
import { PanelTask, WrapperPage, WrapperPanel } from './styles';

export function Taks() {
  return (
    <WrapperPage>
      <Typography variant="h6" component="h6" fontWeight={600}>
        Tarefas
      </Typography>

      <WrapperPanel container spacing={2}>
        <PanelTask item size="grow"></PanelTask>
        <PanelTask item size="grow"></PanelTask>
        <PanelTask item size="grow"></PanelTask>
      </WrapperPanel>
    </WrapperPage>
  );
}
