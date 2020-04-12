import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {this.setState({monsters: users})})
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredList = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
        <h1>Monsterdex</h1>
        <input type='search' name='searchMonster' placeholder='Enter name to search'
          onChange={this.handleChange} />
        <CardList monsters={filteredList} />
      </div>
    )
  }
}

export default App;
