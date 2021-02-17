import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
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
        <InfoIcon />
      </div>
      {newsArticle("Chloe Wang is Back", "Top news -9000 readers")}
      {newsArticle("Covid-19: USA updates", "Top news -9090 readers")}
      {newsArticle("Bitcoin Breaks $50,000", "Crypto -8000 readers")}
      {newsArticle("Is Redux great?", "Code -100 readers")}
      {newsArticle("Tesla hits new highs", "Cars & Auto -7000 readers")}
    </div>
  );
}

export default Widgets;
