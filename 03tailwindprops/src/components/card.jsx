import React from "react";

export function Card({username = "cards Tile", btnText = "Buy Now"}) {
  // console.log("props",props);
  
  return (
    <div className="card bg-base-100 w-96 shadow-sm border-8 border-indigo-600">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{username}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{btnText}</button>
        </div>
      </div>
    </div>
  );
}
