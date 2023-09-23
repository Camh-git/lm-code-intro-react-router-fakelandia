import { Routes, Route } from "react-router-dom";
import Homepage from "../components/homepage";
import Confess from "../components/confess";
import Misdomeanours from "../components/misdomeanours";
import NotFound from "../components/notFound";
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
