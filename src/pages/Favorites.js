import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoritesCtx.favorites} />
      {!favoritesCtx.totalFavorites && <p>You got no favorites yet.</p>}
    </section>
  );
};

export default FavoritesPage;
