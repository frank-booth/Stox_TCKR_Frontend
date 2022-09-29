import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = ({ users }) => {
  let navigate = useNavigate()

  const initialState = {
    username: 'jones',
    passwordDigest: 'pw123'
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = () => {
    const userData = users.find(
      (user) =>
        user.username === formState.username &&
        user.passwordDigest === formState.passwordDigest
    )
    if (userData) {
      navigate(`/users/${userData.id}`, { state: { user: userData } })
    } else {
      alert('try again')
    }
  }
  const signUp = ({ users }) => {
    navigate('/signup')
  }

  return (
    <div>
      <div className="form-container">
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={handleSubmit}>
                <Form.Input
                  id="username"
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={formState.username}
                  required
                />
                <Form.Input
                  id="passwordDigest"
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  onChange={handleChange}
                  value={formState.passwordDigest}
                  required
                />
                <Button content="Login" primary />
              </Form>
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button
                content="Sign up"
                icon="signup"
                size="medium"
                onClick={signUp}
              />
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    </div>
  )
}

export default Login
