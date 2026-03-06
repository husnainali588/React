import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    const copyTask = [...task];

    copyTask.push({ title, text });
    setTask(copyTask);
    setTitle("");
    setText("");
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  };

  return (
    <div className="min-h-screen bg-black text-white flex p-10 gap-10">
      {/* LEFT SIDE - FORM */}
      <div className="w-1/2 bg-gray-900 p-6 rounded-xl border border-gray-700">
        <h1 className="text-2xl font-bold mb-6">Add Note</h1>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Note title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <textarea
            placeholder="Write your note..."
            rows="6"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
          ></textarea>

          <button className="active:bg-amber-700 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition">
            Add Note
          </button>
        </form>
      </div>

      {/* RIGHT SIDE - NOTES LIST */}
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-6">Your Notes</h1>

        <div className="grid grid-cols-2 gap-4">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-5 shadow-lg hover:scale-[1.02] hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-semibold text-white wrap-break-words">
                    {elem.title}
                  </h2>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    Note
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed wrap-break-words">
                  {elem.text}
                </p>

                <div className="mt-4 pt-3 border-t border-gray-700 flex justify-end">
                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="text-sm px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
