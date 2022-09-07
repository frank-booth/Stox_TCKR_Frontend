import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { BASE_URL } from '../globals'
import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
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
    // navigate(`/riders/${res.data.id}`, { state: { rider: res.data } })
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
                />
                <Form.Input
                  label="Last Name"
                  id="lastName"
                  className="signup-input"
                  type="text"
                  onChange={handleChange}
                  value={formState.lastName}
                  placeholder="Last Name"
                />
                <Form.Input
                  label="Email"
                  id="email"
                  className="signup-input"
                  type="email"
                  onChange={handleChange}
                  value={formState.email}
                  placeholder="Email"
                />
                <Form.Input
                  label="Username"
                  id="username"
                  className="signup-input"
                  type="text"
                  onChange={handleChange}
                  value={formState.username}
                  placeholder="Username"
                />
                <Form.Input
                  label="Password"
                  id="passwordDigest"
                  className="signup-input"
                  type="password"
                  onChange={handleChange}
                  value={formState.passwordDigest}
                  placeholder="Password"
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
