import { Component } from "react";
import MovieCard from "./MovieCard";
export class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    id: 1,
                    title: "The Avengers",
                    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    price: 150,
                    rating: 8.5,
                    count: 0,
                    cart: false,
                    stars: 0,
                    fav: false,
                    img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                },
                {
                    id: 2,
                    title: "Iron Man",
                    plot: "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon",
                    price: 100,
                    rating: 7.5,
                    count: 0,
                    cart: false,
                    stars: 0,
                    fav: false,
                    img: "https://cdn.shopify.com/s/files/1/1057/4964/products/Iron-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1657659788"
                },
                {
                    id: 3,
                    title: "Captain America: Civil War",
                    plot: "Friction arises between the Avengers when one group supports the government's decision to implement a law to control their powers while the other opposes it",
                    price: 170,
                    rating: 7.2,
                    count: 0,
                    cart: false,
                    stars: 0,
                    fav: false,
                    img: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg"
                },
            ]

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
        const { movies } = this.state;
        const mid = movies.indexOf(movie)
        movies[mid].cart = !movies[mid].cart
        this.setState({
            movies: movies
        })
    }
    render() {
        const { movies } = this.state //destructing
        const { handleStarsinc, handleStarsdec, handlefav, handlecart } = this; //desctructuring functions from this 
        return (
            <>
                {movies.map((item, index) => <MovieCard
                    movies={item}
                    handleStarsinc={handleStarsinc}
                    handleStarsdec={handleStarsdec}
                    handlefav={handlefav}
                    handlecart={handlecart}
                    key= {movies.id}
                />
                )}

            </>
        )
    }
}
