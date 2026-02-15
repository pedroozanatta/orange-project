import { useEffect, useState } from "react";
import "./CollectionList.css";
import Card from "./Card";

export default function CollectionList({ collection }) {
  const API_URL = "http://localhost:1337";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`${API_URL}/${collection}`);

        if(!response.ok){
          throw new Error("Erro ao buscar dados na API")
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err);
        return
      } finally{
        setLoading(false)
      }
    };

    fetchData();
  }, [collection]);

  if(error){
    return <p className="error">{error}</p>
  }

  if(loading){
    return <p className="loading">Carregando...</p>
  }

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
