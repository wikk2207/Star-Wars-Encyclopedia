import { Formik } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import {useState} from "react";
import CancelableItem from "../CancelableItem/CancelableItem";

const StyledWrapper = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 60rem;
  align-items: center;
`;

const StyledPlanetsWrapper = styled.div`
  margin-top: 16px;
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
    ]);

  const handlePlanetDelete = (itemId) => {
    setPlanets(prevState => {
      return prevState.filter( ({id}) => itemId !== id)
    })
  }
  return (
    <StyledWrapper>
      <Formik
        initialValues={{ title: '', planet: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
            <Paragraph>Movie title</Paragraph>
            <Input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              name="title"
              placeholder="Please enter the title of the movie"
            />
            {errors.title && <div id="feedback">{errors.title}</div>}
            {planets &&
            <StyledPlanetsWrapper>
              {planets.map(({name, id}) => (
                <CancelableItem
                  name={name}
                  planetId={id}
                  onDelete={(id) => handlePlanetDelete(id)}
                />
              ))}
            </StyledPlanetsWrapper>}
            <Paragraph>Add planet</Paragraph>
            <Input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.planet}
              name="planet"
              placeholder="Search for the planet in database"
              search
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