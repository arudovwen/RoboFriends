import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundary from '../container/ErrorBoundary';
import './App.css';




class App extends Component {
    constructor(){
        super();
        this.state={
            searchField:'',
            robots:  []
        }
    }
    //fetch data when it mounts....
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({robots:users}))
}


onSearchChange=(event)=>{
  this.setState(
     { searchField:event.target.value}
  )
}

    render(){
        const {searchField,robots}= this.state
        const FilteredRobots = robots.filter((robot)=>{
                return robot.name.toLowerCase().includes(searchField.toLowerCase())

    }
       )
       
        return( 
        
        (robots.length===0)?<h1 className='f1'>Loading.....</h1>:
            <div className='tc'> 
                <h1 className='f1'> ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <ErrorBoundary>
                    <Scroll>
                      <CardList  robots = {FilteredRobots}/>
                    </Scroll>
                </ErrorBoundary>
               

            </div>
        )
    }
}


export default App;