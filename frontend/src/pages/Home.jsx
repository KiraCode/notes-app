import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NoteModal from "../components/NoteModal";

const Home = () => {
  const [isModalOpen, setModealOpen] = useState(false);
  const closeModal = () => {
    setModealOpen(false);
  };

  const addNote = async ({ title, description }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/note/add", {
        title,
        description,
      });
      if (response.data.success) {
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <button
        onClick={() => setModealOpen(true)}
        className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-none "
      >
        +
      </button>
      {isModalOpen && <NoteModal closeModal={closeModal} addNote={addNote} />}
    </div>
  );
};

export default Home;
