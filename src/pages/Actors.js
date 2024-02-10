import { useEffect, useState } from "react";
import DirectorCard from "../components/DirectorCard";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then(response => response.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])

  const actorList = actors.map(actor => <DirectorCard key={actor.id} name={actor.name} movies={actor.movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
}

export default Actors;
