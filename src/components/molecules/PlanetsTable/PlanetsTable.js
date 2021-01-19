import React, {useEffect, useMemo, useState} from "react";
import { useTable, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import StyledTable from './StyledTable';


import styled from "styled-components";
import {useQuery} from "@apollo/client";
import { GET_MOVIE_PLANETS } from "../../../api/queries";


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
    if(response) {
      const {film: {planetConnection: {planets}}} = response;
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
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => {
                  let props = {...column.getHeaderProps(column.getSortByToggleProps())}
                  return (
                    <th {...props}>
                      {column.render('Header')}
                      <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
                    </th>
                  );
                })}
              </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    let props = {...cell.getCellProps()}
                    return (
                      <td {...props}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
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