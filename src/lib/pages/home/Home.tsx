import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Home() {
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/todos");
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="grid grid-cols-2 gap-2 p-12">
      {data.data &&
        data.data.map((todo: any) => (
          <Link to={`/todos/${todo.id}`}>
            <div className="flex flex-row gap-2 rounded-md bg-gray-100 px-4 py-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {}}
              />
              <p className="text-xl">{todo.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
