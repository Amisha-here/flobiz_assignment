import { useState } from "react";

export default function ItemStorage() {
  const data = localStorage.getItem("itemsList");
  const object = JSON.parse(data);
  const [itemsList, setitemsList] = useState(object);

  const storeItems = (itemsList) => {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
    setitemsList(itemsList);
  };

  return { storeItems, itemsList };
}
