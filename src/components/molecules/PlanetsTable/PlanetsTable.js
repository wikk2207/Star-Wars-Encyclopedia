import { useTable, useSortBy } from 'react-table';
import { useMemo } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  font-size: ${({theme}) => theme.fontSize.xs};
  color: ${({theme}) => theme.color.text.regular};
  background-color: white;
  width: 73rem;
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

const PlanetsTable = ({data}) => {
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  return (
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

export default PlanetsTable;