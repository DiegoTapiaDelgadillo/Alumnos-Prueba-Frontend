import { lazy, Suspense } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LoadingSvg from "./components/loadingSvg";
export default function App() {
  const Home = lazy(() => import("./pages/homePage/index"));
  const NotFound = lazy(() => import("./pages/notFoundPage/index"));
  const Alumnos = lazy(() => import("./pages/alumnosPage/index"));
  const Materias = lazy(() => import("./pages/materiasPage/index"));
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Suspense fallback={<LoadingSvg></LoadingSvg>}>
          <Routes>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/alumnos" element={<Alumnos></Alumnos>}></Route>
            <Route path="/materias" element={<Materias></Materias>}></Route>
          </Routes>
        </Suspense>
        <Footer></Footer>
      </HashRouter>
    </>
  );
}
