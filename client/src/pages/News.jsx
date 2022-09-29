import { Segment, Grid, Form, Button, Item } from 'semantic-ui-react'
import { useState } from 'react'
import axios from 'axios'

const News = () => {
  const API_KEY2 = process.env.REACT_APP_ALPHA_KEY
  const [searchResults, setSearchResults] = useState()
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.get(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${searchQuery}&topics=technology&apikey=${API_KEY2}`
    )
    await setSearchResults(res.data.feed)
    setSearchQuery('')
  }

  return (
    <div className="search-bar-container">
      <Grid>
        <Grid.Column width={4}>
          <Form widths="equal" onSubmit={handleSubmit}>
            <Form.Input
              id="searchQuery"
              type="text"
              icon="search"
              iconPosition="left"
              placeholder="Search"
              onChange={handleChange}
              value={searchQuery}
            />
            <Button type="submit">Search</Button>
          </Form>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
      {searchResults ? (
        <Grid>
          <Grid.Column width={12}>
            <Segment.Group>
              <Item.Group>
                {searchResults.map((article) => (
                  <Segment>
                    <Item key={article.url}>
                      <Item.Content>
                        <Item.Description>
                          Title: {article.title}
                        </Item.Description>
                        <br />
                        <Item.Description className="item-blue">
                          Summary: {article.summary}
                        </Item.Description>
                        <Item.Description
                          as="a"
                          href={article.url}
                          target="blank"
                        >
                          Article Link
                        </Item.Description>
                        <br />
                        <br />
                      </Item.Content>
                    </Item>
                  </Segment>
                ))}
              </Item.Group>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      ) : null}
    </div>
  )
}

export default News
