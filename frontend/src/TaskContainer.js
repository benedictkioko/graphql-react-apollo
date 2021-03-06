import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Task } from "./Task";
import { AddTask } from "./AddTask";
import { GET_TASKS } from "./Query";
const TaskContainer = () => {
  const { loading, error, data, refetch } = useQuery(GET_TASKS, {
    pollInterval: 500,
    fetchPolicy: "cache-and-network",
  });

  return (
    <>
      {" "}
      <div className="task">
        <AddTask refetch={refetch} className="task" />
      </div>
      <div className="task">
        <Task error={error} loading={loading} data={data} />
      </div>
    </>
  );
};

export { TaskContainer };
