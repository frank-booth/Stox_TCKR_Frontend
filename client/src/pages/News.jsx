import { Search, Grid } from 'semantic-ui-react'
import { useState } from 'react'
import axios from 'axios'

const News = () => {
  const API_KEY2 = process.env.REACT_APP_ALPHA_KEY
  let searchQuery = ''
  const [searchData, setSearchData] = useState()

  const handleSearchChange = async (e) => {
    e.preventDefault()
    let res = await axios.get(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${searchQuery}&topics=technology&apikey=${API_KEY2}`
    )
    console.log(res.data)
    setSearchData(res.data)
  }

  //  useEffect(() => {
  //     getCpiData()
  //   }, [])
  return (
    <div>
      <Grid>
        <Grid.Column width={6}>
          <Search
            // loading={loading}
            // onResultSelect={(e, data) =>
            //   dispatch({
            //     type: 'UPDATE_SELECTION',
            //     selection: data.result.title
            //   })
            // }
            onSearchChange={handleSearchChange}
            // resultRenderer={resultRenderer}
            // results={results}
            value={searchQuery}
          />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default News
