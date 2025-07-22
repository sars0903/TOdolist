import React, { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainstack, setmainstack] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainstack([...mainstack, { title, desc }]);
    setdesc("");
    settitle("");
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainstack];
    copyTask.splice(i, 1);
    setmainstack(copyTask);
  };
  let renderTask = <h2 className="w-full bg-blue-100 p-4 font-semibold">No Task Available</h2>;

  if (mainstack.length > 0) {
    renderTask = mainstack.map((t, i) => {
      return (
        <li
          key={i}
          className=" bg-blue-100 flex items-center justify-between mb-3 p-3 rounded-lg"
        >
          <div className="flex justify-between items-center w-2/3">
            <h5 className="text-2xl">{t.title}</h5>
            <h6 className="text-xl">{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-500 p-2 rounded px-4 text-white"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-center font-bold text-5xl p-5">
        My Todo List
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex justify-center items-center py-10"
      >
        <input
          type="text"
          placeholder="Enter Task Here"
          className="border-2 border-black m-5 p-2 text-zinc-500 text-2xl font-light"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description Here"
          className="border-2 border-black  text-zinc-500 m-5 p-2 text-2xl font-light"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="font-bold text-2xl border-2 p-2 px-5 rounded m-5 bg-black text-amber-50">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-3 mb-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;
