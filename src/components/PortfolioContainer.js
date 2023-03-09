import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Resume from "./Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.

  const renderPage = () => {
    switch (currentPage) {
      case "Contact":
        return <Contact />;
      case "About":
        return <About />;
      case "Work":
        return <Work />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="main-content">{renderPage()}</div>
      <Footer />
    </>
  );
}
