import Header from './layout/Header';
import { Footer } from './layout/Footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
