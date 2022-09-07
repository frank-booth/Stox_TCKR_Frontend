import { Button, Divider, Form, Grid, Segment, Input } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  const signUp = () => {
    navigate('/signup')
  }

  return (
    <div>
      <div className="form-container">
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                />

                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
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
