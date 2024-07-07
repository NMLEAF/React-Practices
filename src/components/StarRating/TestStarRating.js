import { React, useState } from "react";
import StarRating from "./StarRating";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "100px 0 100px 0",
};

const starStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const TestStarRating = () => {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div className="container" style={containerStyle}>
      <div className="star" style={starStyle}>
        <StarRating onSetRating={setMovieRating} maxRating={10} />
        <h3 style={{ textAlign: "center" }}>
          The Movie was rated {movieRating} stars
        </h3>
      </div>
    </div>
  );
};

export default TestStarRating;
