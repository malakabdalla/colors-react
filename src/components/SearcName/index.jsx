import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Search() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [item, steItem] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      const fetchItems = await fetch(
        `https://www.csscolorsapi.com/api/colors/${name}`
      );
      const item = await fetchItems.json();
      steItem(item.data);
    };
    fetchItems();
  }, [name]);

  if (Object.keys(item).length === 0) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <button onClick={() => navigate("/colorList")}>Back to colors</button>
      <h1>{item.name}</h1>
      <p>{item.theme}</p>
      <p>{item.group}</p>
      <p>{item.hex}</p>
      <p>{item.rgb}</p>
    </div>
  );
}
