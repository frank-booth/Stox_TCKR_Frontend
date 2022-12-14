import { Table, Header, Icon, Button, Card } from 'semantic-ui-react'
import { BASE_URL_MS } from '../globals'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Portfolio = ({ stocks, apiKey, notes }) => {
  let navigate = useNavigate()
  let location = useLocation()

  const [stockInfo, setStockInfo] = useState()

  let currentValue = ''
  let priceArr = []
  let price = 0
  let user = location.state.user
  let userStocks = stocks?.filter((stock) => stock.userId === user.id)
  let userNotes = notes?.filter((note) => note.userId === user.id)

  const editStock = (stock) => {
    navigate(`/users/${user.id}/editstock`, { state: { stock: stock } })
  }

  const addStock = () => {
    navigate(`/users/${user.id}/addstock`, { state: { user: user } })
    stockPrice(userStocks)
  }

  const addNote = () => {
    navigate(`/users/${user.id}/addnote`, { state: { user: user } })
  }

  const editNote = (note) => {
    navigate(`/users/${user.id}/editnote`, { state: { note: note } })
  }

  const stockPrice = async (arr) => {
    console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
      let stockSymbol = arr[i].symbol
      let priceObj = {}
      let res = await axios.get(
        `${BASE_URL_MS}eod/latest?access_key=${apiKey}&symbols=${stockSymbol}`
      )
      price = res.data.data[0].close
      priceObj = {
        symbol: stockSymbol,
        price: price
      }
      priceArr.push(priceObj)
    }
    await setStockInfo(priceArr)
  }

  useEffect(() => {
    stockPrice(userStocks)
  }, [])

  const priceChecker = (sym, qty, arr) => {
    let value = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].symbol === sym) {
        value = (qty * arr[i].price).toFixed(2)
        // number conversion help: https://code-boxx.com/add-comma-to-numbers-javascript/
        currentValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return arr[i].price
      }
    }
  }

  return (
    <div>
      <div className="portfolio-header">
        <Header color="grey" inverted size="huge">
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
          {stockInfo ? (
            <Table.Body>
              {userStocks?.map((stock) => (
                <Table.Row key={stock.id}>
                  <Table.Cell>{stock.symbol}</Table.Cell>
                  <Table.Cell>${stock.costBasis}</Table.Cell>
                  <Table.Cell>{stock.quantity}</Table.Cell>
                  <Table.Cell>
                    ${priceChecker(stock.symbol, stock.quantity, stockInfo)}
                  </Table.Cell>
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
          ) : null}
        </Table>
        <Button.Group>
          <Button color="yellow" onClick={addStock}>
            Add Stock
          </Button>
          <Button.Or />
          <Button color="orange" onClick={addNote}>
            Add Note
          </Button>
        </Button.Group>
      </div>
      <div className="card-container">
        <Card.Group>
          {userNotes?.map((note) => (
            <Card key={note.id}>
              <Card.Content header={note.title} />
              <Card.Content description={note.content} />
              <Button onClick={() => editNote(note)} color="orange">
                Edit
              </Button>
            </Card>
          ))}
        </Card.Group>
      </div>
    </div>
  )
}

export default Portfolio
