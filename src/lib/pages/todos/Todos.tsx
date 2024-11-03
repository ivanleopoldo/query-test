import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export default function Todos() {
  const { todoId } = useParams();

  const fetchTodo = async () => {
    const response = await fetch(`http://localhost:8000/todos/${todoId}`);
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["todo", todoId],
    queryFn: fetchTodo,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="p-12">
      <div className="rounded-md bg-gray-100 p-12">
        <div className="text-xl font-bold">{data.data.title}</div>
        <div>{data.data.body}</div>
      </div>
    </div>
  );
}
