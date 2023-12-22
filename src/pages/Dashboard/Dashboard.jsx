import { useContext } from "react";
import Footer from "../SharedPages/Footer";
import Navbar from "../SharedPages/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import ToDo from "./ToDo/ToDo";
import Ongoing from "./Ongoing/Ongoing";
import Completed from "./Completed/Completed";

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.task_name.value;
    const description = form.task_description.value;
    const date = form.date.value;
    const priority = form.priority.value;
    const status = form.status.value;

    const taskInfo = {
      email:user?.email,
      title: title,
      description: description,
      date: date,
      priority: priority,
      status: status
    }
    axiosPublic.post("/tasks", taskInfo).then(res => {
      if(res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your task has been added",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
      }
    })
  };
  return (
    <div>
      <div className="bg-sky-700">
        <Navbar></Navbar>
      </div>
      <h2 className="text-2xl font-semibold text-center mt-10 pb-3">
        Dashboard - Task Management
      </h2>
      <p className="w-[200px] mx-auto border border-sky-700"></p>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center lg:items-start">
        {/* 1 */}
        <div className="w-[90%] md:w-[60%] lg:w-[30%] px-3 py-3 border rounded-lg my-5">
          <div className="flex justify-between items-center my-5 border-b-2 border-orange-400 pb-3">
            <div className="flex items-center">
              <p className="w-1.5 h-1.5 border-2 border-orange-600 rounded-full"></p>
              <h4 className="text-xl font-bold ml-3">To do</h4>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="text-3xl px-2 rounded-lg bg-orange-200 text-orange-600"
            >
              +
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                </div>
                <form onSubmit={handleAddTask}>
                  <input
                    className="py-1 px-3 w-[95%] mx-auto mb-3 text-lg font-semibold"
                    type="text"
                    name="task_name"
                    placeholder="Task Name"
                    required
                  />
                  <textarea
                    className="py-1 px-3 text-sm border rounded-md w-[95%] h-[10vh] mx-auto mb-3"
                    type="text"
                    name="task_description"
                    placeholder="Description"
                    required
                  />
                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <input
                      type="date"
                      name="date"
                      className="border py-1.5 px-3 rounded w-[180px]"
                      required
                    />
                    <div className="flex items-center w-[180px] border rounded">
                      <select name="priority" className="py-1.5 px-3">
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                      </select>
                      <p className="font-medium">Priority</p>
                    </div>
                    <div className="flex items-center w-[180px] border rounded">
                      <select name="status" className="py-1.5 px-3 w-full">
                        <option defaultValue>Do</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-max mx-auto mt-5">
                    <button className="py-1.5 px-5 bg-[#D55454] rounded text-white">
                      Add Task
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
          <ToDo></ToDo>
        </div>
        {/* 2 */}
        <div className="w-[90%] md:w-[60%] lg:w-[30%] px-3 py-3 border rounded-lg my-5">
          <div className="flex justify-between items-center my-5 border-b-2 border-sky-400 pb-3">
            <div className="flex items-center">
              <p className="w-1.5 h-1.5 border-2 border-sky-600 rounded-full"></p>
              <h4 className="text-xl font-bold ml-3">Ongoing</h4>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="text-3xl px-2 rounded-lg bg-sky-200 text-sky-600"
            >
              +
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                </div>
                <form onSubmit={handleAddTask}>
                  <input
                    className="py-1 px-3 w-[95%] mx-auto mb-3 text-lg font-semibold"
                    type="text"
                    name="task_name"
                    placeholder="Task Name"
                    required
                  />
                  <textarea
                    className="py-1 px-3 text-sm border rounded-md w-[95%] h-[10vh] mx-auto mb-3"
                    type="text"
                    name="task_description"
                    placeholder="Description"
                    required
                  />
                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <input
                      type="date"
                      name="date"
                      className="border py-1.5 px-3 rounded w-[180px]"
                      required
                    />
                    <div className="flex items-center w-[180px] border rounded">
                      <select name="priority" className="py-1.5 px-3">
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                      </select>
                      <p className="font-medium">Priority</p>
                    </div>
                    <div className="flex items-center w-[180px] border rounded">
                      <select name="status" className="py-1.5 px-3 w-full">
                        <option defaultValue>Ongoing</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-max mx-auto mt-5">
                    <button className="py-1.5 px-5 bg-[#D55454] rounded text-white">
                      Add Task
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
          <Ongoing></Ongoing>
        </div>
        {/* 3 */}
        <div className="w-[90%] md:w-[60%] lg:w-[30%] px-3 py-3 border rounded-lg my-5">
          <div className="flex justify-between items-center my-5 border-b-2 border-green-400 pb-3">
            <div className="flex items-center">
              <p className="w-1.5 h-1.5 border-2 border-green-600 rounded-full"></p>
              <h4 className="text-xl font-bold ml-3">Completed</h4>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="text-3xl px-2 rounded-lg bg-green-200 text-green-600"
            >
              +
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                </div>
                <form onSubmit={handleAddTask}>
                  <input
                    className="py-1 px-3 w-[95%] mx-auto mb-3 text-lg font-semibold"
                    type="text"
                    name="task_name"
                    placeholder="Task Name"
                    required
                  />
                  <textarea
                    className="py-1 px-3 text-sm border rounded-md w-[95%] h-[10vh] mx-auto mb-3"
                    type="text"
                    name="task_description"
                    placeholder="Description"
                    required
                  />
                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <input
                      type="date"
                      name="date"
                      className="border py-1.5 px-3 rounded w-[180px]"
                      required
                    />
                    <div className="flex items-center w-[180px] border rounded">
                      <select name="priority" className="py-1.5 px-3">
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                      </select>
                      <p className="font-medium">Priority</p>
                    </div>
                    <div className="flex items-center w-[180px] border rounded">
                      <select name="status" className="py-1.5 px-3 w-full">
                        <option defaultValue>Completed</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-max mx-auto mt-5">
                    <button className="py-1.5 px-5 bg-[#D55454] rounded text-white">
                      Add Task
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
          <Completed></Completed>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
