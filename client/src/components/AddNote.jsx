import {
  Button,
  Form,
  Segment,
  Grid,
  Header,
  Icon,
  TextArea
} from 'semantic-ui-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { useState } from 'react'
import axios from 'axios'

const AddNote = ({ getAllNotes }) => {
  let location = useLocation()
  let navigate = useNavigate()
  let user = location.state.user

  const initialState = {
    title: '',
    content: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/notes/${user.id}`, formState)
    setFormState(initialState)
    await getAllNotes()
    navigate(-1)
  }
  return (
    <div>
      <div className="add-stock-header">
        <Header as="h2" color="violet" icon>
          <Icon name="tasks" />
          Add A Note
        </Header>
      </div>
      <div className="main-container">
        <div className="form-container-signup">
          <Segment placeholder padded="very">
            <Grid relaxed="very" stackable>
              <Grid.Column>
                <Form onSubmit={handleSubmit}>
                  <Form.Input
                    label="Title"
                    id="title"
                    className="signup-input"
                    type="text"
                    onChange={handleChange}
                    value={formState.title}
                    placeholder="Title"
                    required
                  />
                  <TextArea
                    label="Note Content"
                    id="content"
                    className="signup-input"
                    type="text"
                    onChange={handleChange}
                    value={formState.content}
                    placeholder="Note Content"
                    required
                  />
                  <br />
                  <Button className="add-note-button" type="submit" primary>
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

export default AddNote
