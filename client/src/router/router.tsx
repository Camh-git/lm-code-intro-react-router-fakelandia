import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Confess from "../components/Confess";
import Misdomeanours from "../components/Misdomeanours";
import NotFound from "../components/NotFound";
import MainLayout from "../components/main_layout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />}></Route>;
        <Route path="/confess" element={<Confess />}></Route>
        <Route path="/Misdomeanour" element={<Misdomeanours />}></Route>
        <Route path="/Misdomeanours" element={<Misdomeanours />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
