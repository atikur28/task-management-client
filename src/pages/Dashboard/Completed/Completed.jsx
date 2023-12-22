import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import CountdownTimer from "../CountDownTimer/CountDownTimer";

const Completed = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const today = new Date().getTime();

  const { data: tasks = [], refetch } = useQuery({
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Task has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleShift = (id) => {
    const updatedStatus = { status: "Do" };
    axiosPublic.patch(`/tasks/${id}`, updatedStatus).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: "You have shifted the task!",
          icon: "success",
        });
        refetch();
      }
    });
  };

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
                <li className="mb-3">
                  <div className="flex justify-between items-center border rounded">
                    <select name="status">
                      <option value="Ongoing">Ongoing</option>
                    </select>
                    {new Date(item?.date).getTime() > today ? (
                      <button
                        onClick={() => handleShift(item._id)}
                        className="py-1 px-2 rounded text-white bg-green-600 hover:bg-green-600"
                      >
                        Shift
                      </button>
                    ) : (
                      <button disabled className="py-1 px-2 rounded text-white">
                        Shift
                      </button>
                    )}
                  </div>
                </li>
                <li
                  onClick={() => handleDelete(item._id)}
                  className="w-full bg-red-500 py-1 text-center rounded text-white font-semibold cursor-pointer"
                >
                  Delete
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-semibold">{item?.title}</h3>
          <p className="text-sm text-zinc-600">{item?.description}</p>
          <CountdownTimer date={item?.date}></CountdownTimer>
        </div>
      ))}
    </div>
  );
};

export default Completed;
