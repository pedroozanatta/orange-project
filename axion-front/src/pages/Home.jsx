import {useState} from "react";
import Header from "../components/Header";
import CollectionList from "../components/CollectionList";
import "../styles/globals.css";

export default function Home() {
  const [collection, setCollection] = useState("foods")

  return (
    <>
      <Header 
        setCollection={setCollection} 
        collection={collection}/>
      <CollectionList collection={collection}/>
    </>
  );
}
