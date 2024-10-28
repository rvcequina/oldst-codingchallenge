import React from "react";
import "./result-item.css";
import svgImage from './assets/X.svg';
interface IResultItem {}

const ButtonComponent = ({
  title = "",
  text,
  color,
  rounded = false,
  close = false,
}) => {
  return (
    <div className={`${color} ${rounded ? "rounded" : ""} btn-component`}>
      {close ? <div className="close-btn"><img src={svgImage}/></div> : ""}
      {title ? <strong>{title}:</strong> : ""}
      {text}
    </div>
  );
};

const ResultItem: React.FC<IResultItem> = ({}) => (
  // TODO Create your component here

  <React.Fragment>
    <div className="result-item">
      <div className="card">
        <div className="header">
          <div>PMID: 34483505</div>
          <ButtonComponent text="AI Excluded" color="red" rounded close />
        </div>
        <div className="content">
          <div>
            A pandemic of acute respiratory distress syndrome-role of{" "}
            <strong>lung transplant</strong> in <strong>coronavirus</strong>{" "}
            <br />
            disease-2019-associated respiratory failure
          </div>
          <div>
            <strong>Summary:</strong> Aliquam pulvinar vestibulum blandit. Donec
            sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque
            <br /> vulputate quam a quam volutpat, sed ullamcorper erat commodo.
            Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia
            <br /> nec neque. Aenean quis consectetur nisi, ac interdum elit
          </div>
        </div>
        <div className="footer">
          <div className="buttons">
            <div>
              <div className="titles">Abstract Screening</div>
              <ButtonComponent title="Clinical Trial" text="Yes" color="blue" />
              <ButtonComponent title="Disease" text="Unsure" color="yellow" />
              <ButtonComponent
                title="Intervention"
                text="Unsure"
                color="green"
              />
              <ButtonComponent title="Outcome" text="No" color="violet" />
              <ButtonComponent title="treatment" text="No" color="brown" />
            </div>
            <div>
              <div className="titles">Full Text Review</div>
              <ButtonComponent title="Clinical Trial" text="No" color="blue" />
              <ButtonComponent title="Disease" text="Yes" color="yellow" />
              <ButtonComponent title="Intervention" text="Yes" color="green" />
              <ButtonComponent title="Outcome" text="Unsure" color="violet" />
              <ButtonComponent title="treatment" text="No" color="brown" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default ResultItem;
