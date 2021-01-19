import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetAllFilms {
    allFilms {
      films {
        title
        id
      }
    }
  }
`;

export const GET_MOVIE_PLANETS = gql`
  query GetPlanetsForFilm  ($id: ID){
    film(id: $id) {
      planetConnection {
        planets {
          id
          name
          rotationPeriod
          orbitalPeriod
          diameter
          climates
          surfaceWater
          population
        }
      }
    }
  }
`;