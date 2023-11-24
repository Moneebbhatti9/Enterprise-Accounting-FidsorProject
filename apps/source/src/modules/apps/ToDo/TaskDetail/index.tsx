import React, { useEffect } from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import { useParams } from 'react-router-dom';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import { MailDetailSkeleton } from '@crema/components/MailDetailSkeleton';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { TodoType } from '@crema/models/apps/Todo';

const TaskDetail = () => {
  const { id } = useParams();
  const [{ apiData: selectedTask }, { setQueryParams, setData }] =
    useGetDataApi<TodoType>('/api/todoApp/task/', undefined, { id: id }, false);

  useEffect(() => {
    setQueryParams({ id });
  }, [id]);

  const onUpdateSelectedTask = (data: TodoType) => {
    setData(data);
  };

  if (!selectedTask?.id) {
    return <MailDetailSkeleton />;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader
          selectedTask={selectedTask}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody
          selectedTask={selectedTask}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
