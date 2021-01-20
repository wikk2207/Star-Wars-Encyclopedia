import {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components';
import {useQuery} from '@apollo/client';
import { GET_PLANETS } from 'api/queries';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Select from 'components/molecules/Select';
import RemovableElement from 'components/atoms/RemovableElement';

const StyledWrapper = styled.div`
  margin: auto;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 100%;
  }
`;

const StyledPlanetsWrapper = styled.div`
  margin: 16px 0;
  width: 100%;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
  margin: 30px 0;
  @media
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 100%;
    align-self: center;
    margin: 30px 10px 0 10px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NewItemForm = () => {
  const { data } = useQuery(GET_PLANETS);
  const [planets, setPlanets] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const validationSchema = Yup.object({
    title: Yup.string().matches(
      /^[A-Z]/,
      'Movie title name must start with a capital letter.'
      )
  })

  const handlePlanetDelete = (itemId) => {
    const planet = selectedPlanets.find(({id}) => id === itemId);
    setPlanets(prevState => {
      return [
        ...prevState,
        planet
      ]
    })
    setSelectedPlanets(prevState => {
      return prevState.filter( ({id}) => itemId !== id)
    })
  }

  useEffect(() => {
    if(data) {
      const {allPlanets: {planets}} = data;
      setPlanets(planets);
    }
  }, [data]);

  const handleSelectPlanet = (planet) => {
    setPlanets(prevState => {
      return prevState.filter( ({id}) => planet.id !== id)
    })
    setSelectedPlanets(prevState => {
      return [
        ...prevState,
        planet
      ]
    })
  }

  return (
    <StyledWrapper>
      <Formik
        initialValues={{ title: '', planet: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validationSchema}
      >
        {
          ({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched
          }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              name="title"
              autoComplete="off"
              label="Movie title"
              placeholder="Please enter the title of the movie"
              errorMessage={touched.title ? errors.title : ''}
            />
            {planets &&
            <StyledPlanetsWrapper>
              {selectedPlanets.map(({name, id}) => (
                <RemovableElement
                  key={id}
                  name={name}
                  elementId={id}
                  onDelete={(id) => handlePlanetDelete(id)}
                />
              ))}
            </StyledPlanetsWrapper>}
            <Select
              name="planet"
              label="Add planet"
              items={planets}
              placeholder="Search for the planet in database"
              onItemSelect={(item) => handleSelectPlanet(item)}
            />
            <StyledButton type="submit">Add movie</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
}

export default NewItemForm;