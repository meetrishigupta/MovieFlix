import React from "react";
import { MovieList } from "./MovieList";
import { Navbar } from "./Navbar";
import { movies } from "./moviedata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
      loading: true,
    }
  }
  handleStarsinc = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie)

    if (movies[mid].stars < 5) {
      movies[mid].stars += 0.5;
    }
    this.setState({
      movies: movies
    })
  };

  handleStarsdec = (movie) => {
    const { movies } = this.state
    const mid = movies.indexOf(movie)
    if (movies[mid].stars > 0) {
      movies[mid].stars -= 0.5
    }
    this.setState({
      movies: movies
    })
  }

  handlefav = (movie) => {
    const { movies } = this.state
    const mid = movies.indexOf(movie)
    movies[mid].fav = !movies[mid].fav
    this.setState({
      movies: movies
    })
  }
  handlecart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    console.log(movies[mid].cart)
    if (movies[mid].cart) {
      cartCount = cartCount + 1
    }
    else {
      cartCount = cartCount - 1
    }
    this.setState({
      movies: movies,
      cartCount: cartCount
    })
  }

  

  render() {
    if(this.state.loading){
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 1500);
      return<img className="loading" src={require("/workspaces/MovieFlix/src/loadingss.gif")} />
    }
    
    const { movies } = this.state;
    const { cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          handleStarsinc={this.handleStarsinc}
          handleStarsdec={this.handleStarsdec}
          handlefav={this.handlefav}
          handlecart={this.handlecart}
        />
      </>
    );
  }
}
export default App;