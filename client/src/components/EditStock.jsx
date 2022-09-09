import { Button, Form, Segment, Grid, Header, Icon } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const EditStock = ({ getAllStocks }) => {
  let location = useLocation()
  let navigate = useNavigate()

  let stock = location.state.stock

  const initialStateStock = {
    symbol: `${stock.symbol}`,
    costBasis: `${stock.costBasis}`,
    quantity: `${stock.quantity}`
  }

  const [stockFormState, setStockFormState] = useState(initialStateStock)

  const handleChange = (event) => {
    setStockFormState({
      ...stockFormState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`${BASE_URL}/stocks/${stock.id}`, stockFormState)
    setStockFormState(initialStateStock)
    await getAllStocks()
    navigate(-1)
  }
  const deleteStock = async (e) => {
    e.preventDefault()
    await axios.delete(`${BASE_URL}/stocks/${stock.id}`)
    await getAllStocks()
    navigate(-1)
  }

  return (
    <div>
      <div className="add-stock-header">
        <Header as="h2" color="violet" icon>
          <Icon name="tasks" />
          Update or Delete Selected Stock
        </Header>
      </div>
      <div className="main-container">
        <div className="form-container-signup">
          <Segment placeholder padded="very">
            <Grid relaxed="very" stackable>
              <Grid.Column>
                <Form onSubmit={handleSubmit}>
                  <Form.Input
                    label="Stock Symbol"
                    id="symbol"
                    className="signup-input"
                    type="text"
                    onChange={handleChange}
                    value={stockFormState.symbol}
                    placeholder="Stock Symbol"
                    required
                  />
                  <Form.Input
                    label="Cost Basis"
                    id="costBasis"
                    className="signup-input"
                    type="number"
                    onChange={handleChange}
                    value={stockFormState.costBasis}
                    placeholder="Cost Basis"
                    required
                  />
                  <Form.Input
                    label="Share Quantity"
                    id="quantity"
                    className="signup-input"
                    type="number"
                    onChange={handleChange}
                    value={stockFormState.quantity}
                    placeholder="Stock Quantity"
                    required
                  />
                </Form>
                <Button.Group>
                  <Button positive>Update</Button>
                  <Button.Or />
                  <Button negative onClick={(e) => deleteStock(e)}>
                    Delete
                  </Button>
                </Button.Group>
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
      </div>
    </div>
  )
}

export default EditStock
