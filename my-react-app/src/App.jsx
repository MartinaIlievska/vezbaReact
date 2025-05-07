import React from "react";

import CharactersPage from "./components/caracters/charactersPage";
import CharacterDetails from "./components/caracters/caracterDetails";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router";

function App() {
  return(
    <>
       <Navbar />
        <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
    </>
  )
}

export default App;
