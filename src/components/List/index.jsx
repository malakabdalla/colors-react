import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListItems() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch("https://www.csscolorsapi.com/api/colors");
    const colorData = await response.json();
    setItems(colorData.data);
  };

  return (
    <div>
      {items.map((el) => (
        <p key={el.id}>
          <Link to={`/colors/${el.id}`}></Link>
        </p>
      ))}
    </div>
  );
}
