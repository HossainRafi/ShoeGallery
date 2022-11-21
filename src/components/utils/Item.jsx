import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
          <div>
            <div>
              <h1>{price}</h1>
            </div>
            <div>
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1>{rating}</h1>
            </div>
          </div>
          <div>
            <button type="button" className="">
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button type="button" className="">
              {btn}
            </button>
          </div>
        </div>
        <div>
          <img src={img} className="" />
        </div>
      </div>
    </>
  );
};

export default Item;
