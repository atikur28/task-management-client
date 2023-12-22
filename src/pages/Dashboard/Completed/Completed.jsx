import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Completed = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });
  const filteredUser = tasks?.filter((item) => item?.email === user?.email);
  const filteredCompleted = filteredUser?.filter(
    (data) => data?.status === "Completed"
  );

  return (
    <div>
      {filteredCompleted.map((item) => (
        <div className="p-2 border rounded mb-3" key={item?._id}>
          <div className="flex justify-between items-center">
            <p className="text-sm text-white bg-orange-500 font-medium w-max px-1 py-0.5 rounded">
              {item?.priority}
            </p>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="w-full bg-orange-500 py-1 text-center rounded text-white font-semibold cursor-pointer mb-3">
                  Edit
                </li>
                <li className="w-full bg-red-500 py-1 text-center rounded text-white font-semibold cursor-pointer">
                  Delete
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-semibold">{item?.title}</h3>
          <p className="text-sm text-zinc-600">{item?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Completed;
