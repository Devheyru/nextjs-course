import React from "react";

const Data = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const albums = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
      {albums.map((album: { userId: number; id: number; title: string }) => (
        <div
          key={album.id}
          className="bg-white shadow-md rounded-lg p-4 transition t..."
        >
          <h3 className="text-lg font-bold mb-2">{album.title} </h3>
          <p className="text-gray-600"> userId: {album.userId}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
