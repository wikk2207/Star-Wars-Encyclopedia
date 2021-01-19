import React, {useEffect, useMemo, useState} from "react";
import { useTable, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'


import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {GET_MOVIE_PLANETS, GET_MOVIES} from "../../../api/queries";

const StyledTable = styled.table`
  font-size: ${({theme}) => theme.fontSize.xs};
  color: ${({theme}) => theme.color.text.regular};
  background-color: white;
  width: 100%;
  padding: 16px;
`;

const StyledTableRow = styled.tr`

`;

const StyledTableHeaderRow = styled.tr`
  box-shadow: 0 1px 0px rgba(196, 196, 196, 1);
`;

const StyledTableHeader = styled.th`
  font-weight: normal;
  text-align: ${({isName}) => isName ? 'left' : 'right'};
  padding: 7px 0;
  color: ${({isName, theme}) => isName
  ? theme.color.text.accent
  : theme.color.text.regular};
`;

const StyledTableCell = styled.td`
  width: 10rem;
  padding: 15px 0;
  text-align: ${({isName}) => isName ? 'left' : 'right'};
  color: ${({isName, theme}) => isName
  ? theme.color.text.accent
  : theme.color.text.regular};
`;

const StyledLoader = styled(Loader)`
  width: fit-content;
  margin: 25px auto 0 auto;
`;

const StyledWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const PlanetsTable = ({movieId}) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Planet name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Rotation period',
        accessor: 'rotationPeriod',
      },
      {
        Header: 'Orbital period',
        accessor: 'orbitalPeriod',
      },
      {
        Header: 'Diameter',
        accessor: 'diameter',
      },
      {
        Header: 'Climate',
        accessor: 'climates',
      },
      {
        Header: 'Surface water',
        accessor: 'surfaceWater',
      },
      {
        Header: 'Population',
        accessor: 'population',
      },
    ],
    []
  )

  const [planets, setPlanets] = useState([])
  const { loading, error, data: response } = useQuery(
    GET_MOVIE_PLANETS,
    {variables: {id: movieId}}
    );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: planets }, useSortBy);

  useEffect(() => {
    console.log(response)
    if(response) {
      const {film: {planetConnection: {planets}}} = response;
      console.log(planets);

      setPlanets(planets);
    }
  }, [response]);

  return (
    <StyledWrapper>
      { loading && (
        <StyledLoader
          type="TailSpin"
          color="#00BFFF"
          height={25}
          width={25}
        />
      )}
      {
        response && (
          <StyledTable {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
              <StyledTableHeaderRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => {
                  let props = {...column.getHeaderProps(column.getSortByToggleProps())}
                  if (column.id==="name") {
                    props = {
                      ...props,
                      isName: true,
                    }
                  }
                  return (
                    <StyledTableHeader {...props}>
                      {column.render('Header')}
                      <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
                    </StyledTableHeader>
                  );
                })}
              </StyledTableHeaderRow>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <StyledTableRow {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    let props = {...cell.getCellProps()}
                    if (cell.column.id==="name") {
                      props = {
                        ...props,
                        isName: true,
                      }
                    }
                    return (
                      <StyledTableCell {...props}>
                        {cell.render('Cell')}
                      </StyledTableCell>
                    )
                  })}
                </StyledTableRow>
              )
            })}
            </tbody>
          </StyledTable>
        )
      }
    </StyledWrapper>
  )
}

PlanetsTable.propTypes = {
  movieId: PropTypes.string.isRequired,
}

export default PlanetsTable;