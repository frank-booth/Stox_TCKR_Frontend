import { Table } from 'semantic-ui-react'
import { useNavigate, useLocation } from 'react-router-dom'

const Portfolio = ({ stocks }) => {
  let navigate = useNavigate()
  let location = useLocation()
  let user = location.state.user
  let userStocks = stocks?.filter((stock) => stock.userId === user.id)
  return (
    <div>
      <h2>{user.username}'s Portfolio</h2>
      <div>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Symbol</Table.HeaderCell>
              <Table.HeaderCell>Cost Basis</Table.HeaderCell>
              <Table.HeaderCell>Shares Quantity</Table.HeaderCell>
              <Table.HeaderCell>Previous Day Close</Table.HeaderCell>
              <Table.HeaderCell>Current Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {userStocks?.map((stock) => (
              <Table.Row key={stock.id}>
                <Table.Cell>{stock.symbol}</Table.Cell>
                <Table.Cell>{stock.costBasis}</Table.Cell>
                <Table.Cell>{stock.quantity}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default Portfolio
