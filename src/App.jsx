import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CatchPokemonPage from "./pages/CatchPokemonPage";
import BagPage from "./pages/BagPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CatchPokemonPage />} />
        <Route path="/bag" element={<BagPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
