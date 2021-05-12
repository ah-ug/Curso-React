import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = ''} = queryString.parse( location.search )

    const [formValues, handleInputChange] = useForm({
        input_search: q
    })
    const {input_search} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]) ;

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${ input_search }`)
        console.log(input_search)
    }

    return (
        <div>
            <h1> Search Screen </h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr/>

                    <form onSubmit={ handleSearch } >
                        <input
                            type="text"
                            name="input_search"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            value={ input_search }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-putline-primary"
                        >
                            Search ...
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There isn't a hero with { q }
                        </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
