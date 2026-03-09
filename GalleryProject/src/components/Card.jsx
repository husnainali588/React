import React from "react";

function Card({ elem }) {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noreferrer"
      className="block w-56 bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 backdrop-blur-sm"
    >
      <div className="h-44 w-full overflow-hidden bg-white">
        <img
          className="h-full w-full object-cover"
          src={elem.download_url}
          alt={elem.author}
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-white truncate">{elem.author}</h2>
        <p className="text-sm text-gray-400 mt-1">Click to view image</p>
      </div>
    </a>
  );
}

export default Card;