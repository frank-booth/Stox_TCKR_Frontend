import { Button, Form, Segment, Grid, Header, Icon } from 'semantic-ui-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { useState } from 'react'
import axios from 'axios'

const AddStock = () => {
  let location = useLocation()
  let navigate = useNavigate()
  let user = location.state.user

  const initialState = {
    symbol: '',
    costBasis: '',
    quantity: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/stocks/${user.id}`, formState)
    setFormState(initialState)
    // navigate(`/riders/${res.data.id}`, { state: { rider: res.data } })
  }
  return (
    <div>
      <div className="add-stock-header">
        <Header as="h2" color="violet" icon>
          <Icon name="tasks" />
          Add Stock To Your Portfolio
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
                    value={formState.symbol}
                    placeholder="Stock Symbol"
                    required
                  />
                  <Form.Input
                    label="Cost Basis"
                    id="costBasis"
                    className="signup-input"
                    type="number"
                    onChange={handleChange}
                    value={formState.costBasis}
                    placeholder="Cost Basis"
                    required
                  />
                  <Form.Input
                    label="Share Quantity"
                    id="quantity"
                    className="signup-input"
                    type="number"
                    onChange={handleChange}
                    value={formState.quantity}
                    placeholder="Stock Quantity"
                    required
                  />
                  <Button type="submit" primary>
                    Submit
                  </Button>
                </Form>
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
      </div>
    </div>
  )
}

export default AddStock
