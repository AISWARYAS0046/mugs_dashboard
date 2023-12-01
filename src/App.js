import React from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { GlobalFilter } from './GlobalFilter';
import { Styles } from './TableStyles';
// import { BackgroundImageContainer} from './TableStyles';

// Sample data
const data = [
  { id: 1, name: 'Aiswarya', age: 19, city: 'Coimbatore' },
  { id: 2, name: 'Santhiya', age: 20, city: 'Kaaraikal' },
  { id: 3, name: 'Rajapriya', age: 23, city: 'Kumbakonam' },
  { id: 4, name: 'Amirtha', age: 25, city: 'Thanjavur' },
  { id: 5, name: 'Siva', age: 52, city: 'Nagapattinam' },
  { id: 6, name: 'Sahana', age: 42, city: 'Namakkal' },
  { id: 7, name: 'Sudharsan', age: 22, city: 'Trichy' },
  { id: 8, name: 'Cheran', age: 62, city: 'Vedaranyam' },
  { id: 9, name: 'Harshitha', age: 29, city: 'Chennai' },
  { id: 10,name: 'Bala', age: 47, city: 'Vellore' },
  { id: 11, name: 'Ponmani', age: 31, city: 'New York' },
  { id: 12, name: 'Kavi', age: 32, city: 'Los Angeles ' },
  { id: 13, name: 'Snehan', age: 33, city: 'Madurai' },
  { id: 14, name: 'Kuzhal', age: 35, city: 'Salem' },
  { id: 15, name: 'Jagan', age: 34, city: 'Thiruvarur' },
  { id: 16, name: 'Agathiyan', age: 71, city: 'Tiruppur' },
  { id: 17, name: 'Nandhini', age: 91, city: 'Thuthookudi' },
  { id: 18, name: 'Dhivya', age: 89, city: 'Tenkasi' },
  { id: 19, name: 'Srinidhi', age: 9, city: 'Chennai' },
  { id: 20,name: 'Shanmathi', age: 78, city: 'Virudhunagar' },
];


const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'City', accessor: 'city' },
  
];

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <div>
      {/* <BackgroundImageContainer>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </BackgroundImageContainer> */}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
      </div>
    </div>
    
  );
}

function App() {
  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default App;
