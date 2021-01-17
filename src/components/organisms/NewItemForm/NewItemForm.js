import { Formik } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import {useState} from "react";
import CancelableItem from "../../molecules/CancelableItem/CancelableItem";
import Select from "../../molecules/Select/Select";

const StyledWrapper = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 60rem;
  align-items: center;
`;

const StyledPlanetsWrapper = styled.div`
  margin: 16px 0;
  width: 54rem;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
  margin: 30px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NewItemForm = () => {
  const [planets, setPlanets] = useState([
    {name: 'planeta1', id: '23353'},
    {name: 'planetdda1', id: '2333'},
    {name: 'Ziemia', id: '244333'},
    {name: 'planeta1', id: '236353'},
    {name: 'planetdda1', id: '23733'},
    {name: 'Ziemia', id: '2443433'},
    {name: 'planeta1', id: '233353'},
    {name: 'planetdda1', id: '23133'},
    {name: 'Ziemia', id: '2443833'},
    ]);
  const [selectedPlanets, setSelectedPlanets] = useState([])

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
      >
        {
          ({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors
          }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              name="title"
              label="Movie title"
              placeholder="Please enter the title of the movie"
            />
            {errors.title && <div id="feedback">{errors.title}</div>}
            {planets &&
            <StyledPlanetsWrapper>
              {selectedPlanets.map(({name, id}) => (
                <CancelableItem
                  key={id}
                  name={name}
                  planetId={id}
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
            {errors.planet && <div id="feedback">{errors.planet}</div>}
            <StyledButton type="submit">Add movie</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
}

export default NewItemForm;