export const WrapperPage = {
  width: '100%',
  height: '100vh',

  padding: '32px',

  overflow: 'hidden',
  position: 'relative',
};

export const WrapperPanel = {
  width: '100%',
  height: `calc(100vh - 140px)`,
  minHeight: '500px',
  position: 'relative',
};

export const PanelTask = {
  maxHeight: '100%',
  borderRadius: '12px',

  padding: '8px 16px',
  bgcolor: '#191919',
};

export const WrapperHeaderPanelTask = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
};

export const ListTasks = {
  width: '100%',
  height: '92%',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: '8px',

  gap: '16px',
  flexDirection: 'column',
  overflowY: 'auto',
  paddingRight: '4px !important',
};

export const WrapperForm = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#191919',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '12px',
  p: 4,

  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

export const WrapperButtons = {
  display: 'flex',
  gap: '16px',

  justifyContent: 'flex-end',
  marginTop: '32px',
};
