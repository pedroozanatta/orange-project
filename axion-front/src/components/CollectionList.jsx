import { useEffect, useState } from "react";
import "./CollectionList.css";
import Card from "./Card";

export default function CollectionList({ collection }) {
  const API_URL = "http://localhost:1337";

  const [items, setItems] = useState([]);

  useEffect(() => {
    if(!collection) return

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/${collection}`);

        if(!response.ok){
          throw new Error("Erro ao buscar dados na API")
        }

        const data = await response.json();
        setItems(data);

      } catch (err) {
        console.error(err)
      } 
    };

    fetchData();
  }, [collection]);

  return (
    <div className="content">
      <div className="title">
        <h2 className="section-title">
          List Of {collection}
        </h2>
        <div className="gradient-line" />
      </div>

      <div className="grid">
        {items.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={`${API_URL}${item.link}`}
          />
        ))}
      </div>
    </div>
  );
}
