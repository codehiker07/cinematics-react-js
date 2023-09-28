import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main>
      <MovieList></MovieList>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Root;
