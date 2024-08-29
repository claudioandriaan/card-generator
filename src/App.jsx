import { useState } from "react";
import "./App.css";
import CardForm from "./components/CardForm";
import ShowCard from "./components/showCard";

function App() {
  const [idCardData, setIdCardData] = useState(null);

  const handleGenerate = (data) => {
    setIdCardData(data);
  };

  return (
    <div className="App">
      <h1>Card Generator</h1>
      <CardForm onGenerate={handleGenerate} />
      {idCardData && <ShowCard data={idCardData} />}
    </div>
  );
}

export default App;
