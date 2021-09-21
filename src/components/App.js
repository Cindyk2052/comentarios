import '../styles/App.css';
import {useState} from "react";
import DayAdvice from "./DayAdvice";
import BuscarConsejo from "./BuscarConsejo";


function App() {

    const [consejosFav, setConsejosFav] = useState([]);

    const handleCatch = (message) => {
        setConsejosFav((prevState) => [...prevState, message]);
    };

    const handleDelete = (adviceDelete) => {
        const newFavoriteAdvices = consejosFav.filter(
            (consejo, index) => index !== adviceDelete
        );
        setConsejosFav(newFavoriteAdvices);
    };


  return (
    <div className="App">
      <DayAdvice
          fav = {consejosFav}
          handleAddFav={handleCatch}
          handleDelete={handleDelete}

      />

        <BuscarConsejo
            handleAddFav = {handleCatch}
        />
    </div>
  );
}

export default App;
