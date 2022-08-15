import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'

const PizzaTable = ({data}) => {
  return(
    <Table autoHeight data={data} rowHeight={50}>
      <Column width={150} minwidth={150} fixed>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={150} minwidth={150} fixed>
        <HeaderCell>Location</HeaderCell>
        <Cell dataKey="location" />
      </Column>

      <Column width={100} minwidth={150} align={'center'} fixed>
        <HeaderCell>Price</HeaderCell>
        <Cell dataKey="price" />
      </Column>

      <Column width={100} minwidth={150} fixed>
        <HeaderCell>Open</HeaderCell>
        <Cell dataKey="open" />
      </Column>

      <Column width={100} minwidth={150} fixed>
        <HeaderCell>Close</HeaderCell>
        <Cell dataKey="close" />
      </Column>
    </Table>
  )
};

export default PizzaTable;
