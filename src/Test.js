import { React, useState } from "react";
import StarRating from "./components/StarRating/StarRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating onSetRating={setMovieRating} maxRating={10} />
      <h3>The Movie was rated {movieRating} stars</h3>
    </div>
  );
};

export default Test;
