import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [], 
            searchField: ''
        }
    }

    componentDidMount(){

        // Using jsonplaceholder/user fetching the data which is set by jsonplaceholder

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
       
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {

        const { robots , searchField } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(robots.length === 0){
            return <h2 id="load">Loading...</h2>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />

                    {/* Children */}
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>   
                    
                   
                </div>
            );
        }
    }
}

export default App;
