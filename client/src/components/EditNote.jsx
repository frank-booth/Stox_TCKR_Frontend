import {
  Button,
  Form,
  Segment,
  Grid,
  Header,
  Icon,
  TextArea
} from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const EditNote = ({ getAllNotes }) => {
  let location = useLocation()
  let navigate = useNavigate()

  let note = location.state.note

  const initialStateNote = {
    title: `${note.title}`,
    content: `${note.content}`
  }

  const [noteFormState, setNoteFormState] = useState(initialStateNote)

  const handleChange = (event) => {
    setNoteFormState({
      ...noteFormState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`${BASE_URL}/notes/${note.id}`, noteFormState)
    setNoteFormState(initialStateNote)
    await getAllNotes()
    navigate(-1)
  }
  const deleteNote = async (e) => {
    e.preventDefault()
    await axios.delete(`${BASE_URL}/notes/${note.id}`)
    await getAllNotes()
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
                    label="Title"
                    id="title"
                    className="signup-input"
                    type="text"
                    onChange={handleChange}
                    value={noteFormState.title}
                    placeholder="Title"
                    required
                  />
                  <TextArea
                    label="Note Content"
                    id="content"
                    className="signup-input"
                    type="number"
                    onChange={handleChange}
                    value={noteFormState.content}
                    placeholder="Cost Basis"
                    required
                  />
                  <Button.Group>
                    <Button positive>Update</Button>
                    <Button.Or />
                    <Button negative onClick={(e) => deleteNote(e)}>
                      Delete
                    </Button>
                  </Button.Group>
                </Form>
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
      </div>
    </div>
  )
}

export default EditNote
