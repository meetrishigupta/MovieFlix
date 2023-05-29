import { Component } from "react";
import MovieCard from "./MovieCard";

export class MovieList extends Component{
    render(){
        return(
            <>
            <MovieCard />
            <MovieCard /> 
            <MovieCard />
            </>
        )
    }
}