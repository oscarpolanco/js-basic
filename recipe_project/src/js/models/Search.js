import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '9b263d172248097f7ec9f2dd3066d6db';
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  }
}
