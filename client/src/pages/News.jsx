import { Segment, Grid, Form, Button, Header, Item } from 'semantic-ui-react'
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
    console.log(searchQuery)
    let res = await axios.get(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${searchQuery}&topics=technology&apikey=${API_KEY2}`
    )
    console.log(res.data.feed)
    console.log(res.data.feed[0].source_domain)
    await setSearchResults(res.data.feed)
    setSearchQuery('')
  }

  // const handleKeyPress = (e) => {
  //   //it triggers by pressing the enter key
  //   if (e.keyCode === 13) {
  //     handleSubmit()
  //   }
  // }
  // if (!searchData) {
  //   return <h2> loading please wait</h2>
  // } else {
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

              // onKeyPress={handleKeyPress}
            />
            <Button type="submit">Search</Button>
          </Form>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
      {searchResults ? (
        <Grid>
          <Grid.Column width={15}>
            <Segment>
              <Item.Group>
                {searchResults.map((article) => (
                  <Item key={article.url}>
                    <Item.Content>
                      <Item.Header as="h3" href={article.url}>
                        {article.title}
                      </Item.Header>
                      <br />
                      <br />
                      {/* <Item.Meta>Summary</Item.Meta> */}
                      <Item.Header>Summary: {article.summary}</Item.Header>
                    </Item.Content>
                  </Item>
                ))}
              </Item.Group>
            </Segment>
          </Grid.Column>
        </Grid>
      ) : (
        <p>Still Loading</p>
      )}
    </div>
  )
  // }
}

export default News
