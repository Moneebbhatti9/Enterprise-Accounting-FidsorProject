import React, { useEffect, useState } from 'react';
import TaskContentHeader from './TaskContentHeader';
import { useParams } from 'react-router-dom';
import AddNewTask from '../AddNewTask';
import { Hidden } from '@mui/material';
import AppsPagination from '@crema/components/AppsPagination';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import AppsFooter from '@crema/components/AppsFooter';
import TaskCalender from './TaskCalendar';
import { TodoDataType, TodoType } from '@crema/models/apps/Todo';

type Props = {
  taskLists: { data: TodoType[]; count: number };
  setQueryParams: (data: object) => void;
  setData: (data: TodoDataType) => void;
};
const TasksList = ({ taskLists, setQueryParams, setData }: Props) => {
  const params = useParams();

  const [filterText, onSetFilterText] = useState('');

  const [page, setPage] = useState(0);

  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  useEffect(() => {
    setPage(0);
    setQueryParams({
      type: params?.folder ? 'folder' : 'label',
      name: params?.folder || params?.label,
      page: page,
    });
  }, [page, params]);

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onPageChange = (event: any, value: number) => {
    setPage(value);
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return taskLists?.data;
    } else {
      return taskLists?.data.filter((task) =>
        task.title.toUpperCase().includes(filterText.toUpperCase())
      );
    }
  };

  const onUpdateTasks = (tasks: TodoType[]) => {
    setData({
      data: taskLists?.data.map((item) => {
        const contact = tasks.find((task) => task.id === item.id);
        if (contact) {
          return contact;
        }
        return item;
      }),
      count: taskLists?.count,
    });
  };

  const list = onGetFilteredItems();

  return (
    <>
      <AppsHeader>
        <TaskContentHeader
          taskLists={taskLists?.data}
          totalTasks={taskLists?.count}
          onUpdateTasks={onUpdateTasks}
          setData={setData}
          checkedTasks={checkedTasks}
          setCheckedTasks={setCheckedTasks}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
          page={page}
        />
      </AppsHeader>
      <AppsContent>
        <TaskCalender taskList={list} />
      </AppsContent>

      <Hidden smUp>
        {taskLists?.data?.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={taskLists?.count}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>

      {isAddTaskOpen ? (
        <AddNewTask
          isAddTaskOpen={isAddTaskOpen}
          onCloseAddTask={onCloseAddTask}
        />
      ) : null}
    </>
  );
};

export default TasksList;
