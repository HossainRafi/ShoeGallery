import React from "react";
import emptybag from "../../assets/emptybag.png";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const CartEmpty = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <img
          src={emptybag}
          alt="emptybag/img"
        />
        <button
          type="button"
        >
          <ArrowLeftIcon className="w-5 h-5 text-slate-900" />
          <span className="">Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
