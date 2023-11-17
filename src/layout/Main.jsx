import React from "react"
import { Movies } from '../components/Movies'
import { Search } from '../components/Search'
import Preloader from "../components/Preloader";

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=ba498a71&s=matrix')
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=ba498a71&s=${str}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    render() {
        const { movies } = this.state;

        return <main className='container content'>
            <Search searchMovies={this.searchMovies} />
            {
                movies.length ? (
                    < Movies movies={this.state.movies} />
                ) : <Preloader />
            }


        </main>

    }
}

export { Main }