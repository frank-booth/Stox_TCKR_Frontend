import { Table, Header, Icon, Button } from 'semantic-ui-react'
import { BASE_URL_MS } from '../globals'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Portfolio = ({ stocks, apiKey, notes }) => {
  let navigate = useNavigate()
  let location = useLocation()
  let currentValue = 0
  const [stockData, setStockData] = useState({})

  let user = location.state.user
  let userStocks = stocks?.filter((stock) => stock.userId === user.id)
  let userNotes = notes?.filter((note) => note.userId === user.id)

  const editStock = (stock) => {
    navigate(`/users/${user.id}/editstock`, { state: { stock: stock } })
  }

  const addStock = () => {
    navigate(`/users/${user.id}/addstock`, { state: { user: user } })
  }

  // const value = (qty) => {
  //   currentValue = qty * stockData
  // }

  const stockDataInfo = async (sym, quan) => {
    let res = await axios.get(
      `${BASE_URL_MS}eod/latest?access_key=${apiKey}&symbols=${sym}`
    )
    console.log(res.data.data[0].close)
    setStockData(res.data.data[0].close)
    currentValue = quan * stockData
  }

  // return price
  // }

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
              <Table.HeaderCell>Share Quantity</Table.HeaderCell>
              <Table.HeaderCell>Previous Day Close</Table.HeaderCell>
              <Table.HeaderCell>Current Value</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {userStocks?.map((stock) => (
              <Table.Row key={stock.id}>
                {stockDataInfo(stock.symbol, stock.quantity)}

                <Table.Cell>{stock.symbol}</Table.Cell>
                <Table.Cell>${stock.costBasis}</Table.Cell>
                <Table.Cell>{stock.quantity}</Table.Cell>
                <Table.Cell>{stockData}</Table.Cell>
                <Table.Cell>${currentValue}</Table.Cell>
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
