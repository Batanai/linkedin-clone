import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("Papa react is back", "high value - 2,000 views")}
      {newsArticle("Covid news - latest", "New infections - 900 views")}
      {newsArticle("Power up your cv", "CEO advice - 4,333 views")}
      {newsArticle("react js value", "react is taking over - 568 views")}
      {newsArticle("React vs angular", "The big debate - 1,274 views")}
      {newsArticle("Travel restrictions", "Flight cancelations - 5,343 views")}
    </div>
  );
};

export default Widgets;
