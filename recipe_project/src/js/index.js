import axios from 'axios'

async function getResult(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = '9b263d172248097f7ec9f2dd3066d6db';
  try {
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    console.log(error);
  }
}

getResult('pizza');
