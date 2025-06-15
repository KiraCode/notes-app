import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NoteModal from "../components/NoteModal";

const Home = () => {
  const [isModalOpen, setModealOpen] = useState(false);
  const closeModal = () => {
    setModealOpen(false);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <button
        onClick={() => setModealOpen(true)}
        className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full "
      >
        +
      </button>
      {isModalOpen && <NoteModal closeModal={closeModal} />}
    </div>
  );
};

export default Home;
