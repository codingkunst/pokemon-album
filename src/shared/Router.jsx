import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import PokeCardList from "../components/PokeCardList";
import PokeDetail from "../components/PokeDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PokeCardList />} />
        <Route path="/pokemon/:name" element={<PokeDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
