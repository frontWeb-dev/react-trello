import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='todo'>
        {(magic) => (
          <ul ref={magic.innerRef} {...magic.droppableProps}>
            <Draggable draggableId='0' index={0}>
              {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps}>
                  <span {...provided.dragHandleProps}>⌛</span>
                  Zero
                </li>
              )}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
