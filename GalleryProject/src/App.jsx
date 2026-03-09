import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center">
            Picsum Gallery
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Browse beautiful random images
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg">
            <h2 className="text-lg font-semibold">Page {index}</h2>
          </div>
        </div>

        <div className="min-h-[70vh]">
          {loading ? (
            <div className="flex justify-center items-center min-h-[70vh]">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="text-gray-300 text-lg">Loading images...</h3>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-6">
              {userData.map((elem) => (
                <div key={elem.id}>
                  <Card elem={elem} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            className={`px-5 py-2.5 rounded-xl font-semibold transition duration-200 shadow-md ${
              index === 1
                ? "bg-gray-600 cursor-not-allowed text-gray-300"
                : "bg-amber-400 text-black hover:scale-105 active:scale-95"
            }`}
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
              }
            }}
            disabled={index === 1}
          >
            Prev
          </button>

          <button
            className="px-5 py-2.5 rounded-xl font-semibold bg-amber-400 text-black hover:scale-105 active:scale-95 transition duration-200 shadow-md"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;