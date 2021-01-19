import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import logoImage from 'assets/logo.svg';
import CollapsibleItem from 'components/organisms//CollapsibleItem';
import PlanetsTable from 'components/molecules/PlanetsTable';
import NewItemForm from "../components/organisms/NewItemForm";
import {useQuery} from "@apollo/client";
import {GET_MOVIES} from "../api/queries";

const StyledWrapper = styled.div`
  background-color: ${({theme}) => theme.color.background.grey};
  width: 65%;
  height: fit-content;
  border-radius: 8px;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  position: relative;
`;

const StyledLogo = styled.img`
  margin: 30px auto;
`;

const StyledItemsWrapper = styled.div`
  width: 93%;
  align-self: center;
`;

const StyledLineBreak = styled.hr`
  border-top: 2px dashed white;
  overflow: visible;
  margin: 10px 0;
`;

const StyledCopyright = styled.p`
  text-transform: uppercase;
  align-self: center;
  color: ${({theme}) => theme.color.text.footer};
  font-size: ${({theme}) => theme.fontSize.xs};;
`;

const Main = () => {
  //const [movies, setMovies] = useState([]);

  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <StyledWrapper>
      <StyledLogo src={logoImage} />
      <StyledItemsWrapper>
        {data && data.allFilms.films.map(({title, id}) => (
          <CollapsibleItem title={title} key={id}>
            <PlanetsTable movieId={id}/>
          </CollapsibleItem>
        ))}
      </StyledItemsWrapper>
      <StyledLineBreak />
      <StyledItemsWrapper>
        <CollapsibleItem title="Add movie">
          <NewItemForm />
        </CollapsibleItem>
      </StyledItemsWrapper>
      <StyledCopyright>
        copyright © 2019 mirumee software
      </StyledCopyright>
    </StyledWrapper>
  )
}

export default Main;