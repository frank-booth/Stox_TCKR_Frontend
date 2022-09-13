import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { BASE_URL } from '../globals'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  let navigate = useNavigate()

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    passwordDigest: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/users`, formState)
    setFormState(initialState)
    navigate(`/users/${res.data.id}`, { state: { user: res.data } })
  }
  return (
    <div className="main-container">
      <div className="form-container-signup">
        <Segment placeholder padded="very">
          <Grid relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={handleSubmit}>
                <Form.Input
                  label="First Name"
                  id="firstName"
                  className="signup-input"
                  type="text"
                  onChange={handleChange}
                  value={formState.firstName}
                  placeholder="First Name"
                  required
                />
                <Form.Input
                  label="Last Name"
                  id="lastName"
                  className="signup-input"
                  type="text"
                  onChange={handleChange}
                  value={formState.lastName}
                  placeholder="Last Name"
                  required
                />
                <Form.Input
                  label="Email"
                  id="email"
                  className="signup-input"
                  type="email"
                  onChange={handleChange}
                  value={formState.email}
                  placeholder="Email"
                  required
                />
                <Form.Input
                  label="Username"
                  id="username"
                  className="signup-input"
                  type="text"
                  onChange={handleChange}
                  value={formState.username}
                  placeholder="Username"
                  required
                />
                <Form.Input
                  label="Password"
                  id="passwordDigest"
                  className="signup-input"
                  type="password"
                  onChange={handleChange}
                  value={formState.passwordDigest}
                  placeholder="Password"
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
  )
}

export default SignUp
