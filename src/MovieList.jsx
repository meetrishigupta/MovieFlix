import { Component } from "react";
import MovieCard from "./MovieCard";

export class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
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
    render() {
        // const {title, plot, price,rating, count,cart,stars,fav,img} =  this.state;
        const { movies } = this.state //destructing
        return (
            <>
                {movies.map((item) => <MovieCard
                    movies={item}
                />
                )}

            </>
        )
    }

}