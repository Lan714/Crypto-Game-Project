import React from 'react';
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
  return React.createElement(
    Link,
    { to: `/coins/${coin.id}`, className: "text-decoration-none my-1 coin" },
    React.createElement(
      "li",
      { className: "coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark" },
      React.createElement("img", { className: "coinlist-image", src: coin.image, alt: "" }),
      React.createElement(
        "span",
        { className: "text-decoration-none" },
        coin.current_price
      ),
      React.createElement(
        "span",
        {
          className: coin.price_change_percentage_24h < 0 ? "text-danger mr-2" : "text-success mr-2"
        },
        " ",
        coin.price_change_percentage_24h < 0 ? React.createElement("i", { className: "fas fa-sort-down align-middle mr-1" }) : React.createElement("i", { className: "fas fa-sort-up align-middle mr-1" }),
        coin.price_change_percentage_24h
      ),
      React.createElement("i", {
        onClick: e => {
          e.preventDefault();
          deleteCoin(coin.id);
        },
        className: "delete-icon far fa-times-circle text-danger"
      })
    )
  );
};

export default Coin;
