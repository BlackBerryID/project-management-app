import { Box, Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { DragDropContext, DraggableId } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Column from '../../../components/Column/Column';
import ModalNewBoard from '../../../components/ModalNewBoard/ModalNewBoard';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import { updateTask } from '../../../store/slices/currentBoardSlice';
import { Loader } from '../../Loader';
import './board.scss';

interface DraggableLocation {
  droppableId: string;
  index: number;
}

interface Combine {
  draggableId: string;
  droppableId: string;
}

interface DragResult {
  reason: 'DROP' | 'CANCEL';
  destination?: DraggableLocation;
  source: DraggableLocation;
  combine?: Combine;
  mode: 'FLUID' | 'SNAP';
  draggableId: DraggableId;
}

const Board = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.signinSignup);
  const { currentBoard } = useAppSelector((state) => state.currentBoard);
  const { columns } = useAppSelector((state) => state.currentBoard.currentBoard);
  const loading = useAppSelector((state) => state.currentBoard.loading);
  const { t: translate } = useTranslation();
  const [open, setOpen] = useState(false);

  //with part from https://codesandbox.io/s/brave-jepsen-ff99rl?file=/src/App.js:4789-4813

  const onDragEnd = (result: DragResult, columns: ColumnInterface[]) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns.filter(
        (column) => column?.id && column?.id === source.droppableId
      )[0];
      const destColumn = columns.filter(
        (column) => column?.id && column?.id === destination.droppableId
      )[0];
      const sourceItems = sourceColumn?.tasks && [...sourceColumn.tasks];
      const destItems = destColumn.tasks && [...destColumn.tasks];
      if (sourceItems) {
        const [removed] = sourceItems.splice(source.index, 1);
        destItems?.splice(destination.index, 0, removed);
        currentBoard.id &&
          sourceColumn.id &&
          destColumn?.id &&
          destColumn.tasks &&
          dispatch(
            updateTask({
              boardId: currentBoard.id,
              columnId: sourceColumn?.id,
              token: token,
              newColumnId: destColumn?.id,
              newOrder: destColumn.tasks?.length - 1,
              taskId: result.draggableId,
              userId: '527176c4-ff92-4525-9c38-d327eaed7c01',
            })
          );
      }
    } else {
      //TODO: add replacing inside the column
      const column = columns[/* source.droppableId */ 0];
      const copiedItems = column?.tasks && [...column?.tasks];
      if (copiedItems) {
        const [removed] = copiedItems?.splice(source.index, 1);
        copiedItems?.splice(destination.index, 0, removed);
      }
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Button onClick={() => navigate(-1)}>{translate('Back to main page')} </Button>
      <ModalNewBoard isOpen={open} onClose={() => setOpen(false)} item="column" />
      <div className="boardContainer">
        <Paper
          elevation={12}
          sx={{
            margin: '32px 32px ',
            minWidth: '1100px',
            maxWidth: '95vw',
            height: '66vh',
            overflowY: 'auto',
          }}
        >
          <Typography variant="h3">{currentBoard.title}</Typography>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            {translate('Create column')}
          </Button>
          <DragDropContext onDragEnd={(result) => columns && onDragEnd(result, columns)}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                },
              }}
            >
              {columns?.map(
                (column: ColumnInterface) =>
                  column?.id && (
                    <Column
                      key={column.id}
                      title={column.title}
                      order={column.order}
                      id={column.id}
                      tasks={column.tasks}
                    ></Column>
                  )
              )}
            </Box>
          </DragDropContext>
        </Paper>
      </div>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
        }}
      >
        {translate('Get things done!')}
      </Typography>
    </div>
  );
};

export default Board;
