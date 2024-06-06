import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { TopMenu } from "./components/TopMenu";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      {/* Needed to implement scroll, because default react router scroll restoration was not behaving properly. Product detail pages landed in random places, often the very bottom, but almost never on top. */}
      <ScrollToTop />
      <TopMenu />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
