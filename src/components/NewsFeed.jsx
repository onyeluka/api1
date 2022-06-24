import React, {useEffect, useState} from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
      }
    }
    
    axios.request(options).then((response) => {
      
      setArticles(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, [])
  const first7Articles = articles?.slice(0,4)
  
  return (
    <div className='newsfeed'>
<h2>News Feed</h2>
{first7Articles?.map((article,_index)=> (
<div key={_index}>

<p >
{article.title}
</p>
<p>
  <a href={article.url}>Read More</a>
  </p>
  <p>
    Source: {article.source}
  </p>
</div>
))}

    </div>
  )
}

export default NewsFeed