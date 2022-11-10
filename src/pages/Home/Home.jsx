import React from "react";
import Banner from "./Component/Banner";
import MovieList from "./Component/MovieList";
import MovieSchedule from "./Component/MovieSchedule";
import New from "./Component/New";

const Home = (props) => {
  return (
    <div>
      <Banner/>
      <MovieList />
      <MovieSchedule />
      <New/>
    </div>
  );
};

export default Home;
