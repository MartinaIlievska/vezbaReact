import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../actions/caracters/caractersActions";
import CharacterCard from "../caracters/caractersCard";

function Home() {
  const { charachters, error, loading } = useSelector(
    (state) => state.charachtersReducer.characters
  );

  console.log(charachters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [ dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {charachters?.results?.map((charachter) => (
        <h1>{charachter.name}</h1>
      ))}
      <CharacterCard
        name={charachter.name}
        img={charachter.results.image}
        status={charachter.results.status}
      />
    </div>
  );
}

export default Home;
