import { Segment, Grid, Form, Button, Header, Item } from 'semantic-ui-react'
import { useState } from 'react'
import axios from 'axios'

const News = () => {
  const API_KEY2 = process.env.REACT_APP_ALPHA_KEY
  const [searchData, setSearchData] = useState()
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
    await setSearchData(res.data.feed)
    setSearchQuery('')
    console.log(searchData)
  }

  // const handleKeyPress = (e) => {
  //   //it triggers by pressing the enter key
  //   if (e.keyCode === 13) {
  //     handleSubmit()
  //   }
  // }

  return (
    <div className="search-bar-container">
      <Grid>
        <Grid.Column width={4}>
          <Form onSubmit={handleSubmit} widths="equal">
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
      <Grid>
        <Grid.Column width={15}>
          <Segment>
            <Item.Group>
              {searchData?.map((article) => (
                <Item key={article.title}>
                  <Item.Content>
                    <Item.Header as="h3">{article.title}</Item.Header>
                    <Item.Meta>Summary</Item.Meta>
                    <Item.Descritpion>{article.summary}</Item.Descritpion>
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default News
