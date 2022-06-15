import React from "react";
import Footer from "./components/Footer/footer.component";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar/navbar.component";
import projectData from "./assets/projects-data";

const App = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                <Landing projectData={projectData} />
                <Footer />
            </div>
        </>
    );
};

export default App;
