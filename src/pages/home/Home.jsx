import React from 'react'
import useFetch from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'


const Home = () => {

  const {data,isPending,error} = useFetch('http://localhost:8000/recipes')
  return (
    <div className='home'>
      {error && <p>{error}</p>}
      {isPending && <p>loading...</p>}
      {data && <RecipeList recipes = {data}/> }
     
      

    </div>
  )
}

export default Home