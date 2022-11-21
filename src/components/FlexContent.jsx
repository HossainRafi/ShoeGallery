import React from "react";

const FlexContent = ({
  ifExists,
  endpoint: { title, heading, text, img, btn, url },
}) => {
  return (
    <>
      <div>
        <div>
                  <h1>{heading}</h1>
                  <h1>{title}</h1>
                  <p>{text}</p>
          <a href={url}>
                      <button type="button" className="">{btn}</button>
          </a>
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
