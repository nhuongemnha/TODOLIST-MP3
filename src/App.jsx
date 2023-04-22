import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  const handleAdd = () => {
    if (todos.some(item => item.id === work.replaceAll(' ', ''))) {
      toast.error("Duplicate");
      return
    }
    setTodos([...todos, { id: work.replaceAll(' ', ''), job: work }])
    setWork('')
    toast.success("Wow so easy!");
  }

  const handleDeleteWork = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center border border-red-400 ">
        <div className="flex gap-8">
          <input
            type="text"
            value={work}
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            onChange={(e) => setWork(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div className="">
          <h3 className="font-bold text-xl"> Content:</h3>
          <ul>
            {
              todos.map((item) => {
                return (
                  <li className="flex gap-5 items-center justify-between" key={item.id} >
                    <span> {item.job}</span>
                    <button onClick={() => handleDeleteWork(item.id)} >X</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
