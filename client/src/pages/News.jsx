import { Search, Grid, Input, Form, Button } from 'semantic-ui-react'
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
    // let res = await axios.get(
    //   `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${searchQuery}&topics=technology&apikey=${API_KEY2}`
    // )
    // console.log(res.data)
    // setSearchData(res.data)
    setSearchQuery('')
    console.log(searchQuery)
  }

  // const handleKeyPress = (e) => {
  //   //it triggers by pressing the enter key
  //   if (e.keyCode === 13) {
  //     handleSubmit()
  //   }
  // }

  return (
    <div>
      <Grid>
        <Grid.Column width={6}>
          <Form onSubmit={handleSubmit}>
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
      </Grid>
    </div>
  )
}

export default News
