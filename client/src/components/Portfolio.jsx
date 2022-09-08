import { Table, Header, Icon, Button } from 'semantic-ui-react'
import { BASE_URL_MS } from '../globals'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Portfolio = ({ stocks, apiKey }) => {
  let navigate = useNavigate()
  let location = useLocation()
  let currentValue = 0
  const [stockData, setStockData] = useState()

  console.log(apiKey)
  let user = location.state.user
  let userStocks = stocks?.filter((stock) => stock.userId === user.id)

  const editStock = (stock) => {
    navigate(`/users/${user.id}/editstock`, { state: { stock: stock } })
  }

  const addStock = () => {
    navigate(`/users/${user.id}/addstock`, { state: { user: user } })
  }
  // const stockDataInfo = async (sym, quan) => {
  //   let res = await axios.get(
  //     `https://api.marketstack.com/v1/eod?access_key=6fbf9e69e7289f1826a1e67850102e4c$symbols=AAPL`
  //   )
  //   console.log(res.data)
  // }
  // useEffect(() => {
  //   stockDataInfo('AMZN', 250)
  // }, [])

  const test = (qty) => {
    currentValue = qty * 24
    return currentValue
  }

  return (
    <div>
      <div className="portfolio-header">
        <Header color="violet" size="huge">
          <Icon name="chart line" />
          <Header.Content className="header">
            {user.username}'s Portfolio
          </Header.Content>
        </Header>
      </div>
      <div className="table-container">
        <Table celled color="grey" inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Symbol</Table.HeaderCell>
              <Table.HeaderCell>Cost Basis</Table.HeaderCell>
              <Table.HeaderCell>Shares Quantity</Table.HeaderCell>
              <Table.HeaderCell>Previous Day Close</Table.HeaderCell>
              <Table.HeaderCell>Current Value</Table.HeaderCell>
              <Table.HeaderCell>Note</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {userStocks?.map((stock) => (
              <Table.Row key={stock.id}>
                <Table.Cell>{stock.symbol}</Table.Cell>
                <Table.Cell>{stock.costBasis}</Table.Cell>
                <Table.Cell>{stock.quantity}</Table.Cell>
                <Table.Cell>{test(stock.quantity)}</Table.Cell>
                <Table.Cell>{currentValue}</Table.Cell>
                <Table.Cell
                  selectable
                  textAlign="center"
                  onClick={() => editStock(stock)}
                >
                  Edit
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Button color="violet" onClick={addStock}>
          Add Stock
        </Button>
      </div>
    </div>
  )
}

export default Portfolio
