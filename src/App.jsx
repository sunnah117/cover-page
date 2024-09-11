import AssignmentCoverPage from "./Components/AssignmentCoverPage";
import CoverPage from "./Components/CoverPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <div className="bg-primary">
      <Navbar/>
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-4 p-2 mt-6 md:mt-0 md:p-10">
        <AssignmentCoverPage/>
        <CoverPage/>
        </div>
    <Footer/>
    </div>
  );
};
export default App;
