import React, {Component} from 'react';
import "./cussuggestion.css";
import {CardList} from '../../components/card-list/card-list.componnt';
import { SearchBox } from '../../components/search-box/search-box.component';
import { Link } from 'react-router-dom';

class CusSuggestion extends Component{
    constructor(){
      super();
      this.state ={
        monsters:[],
        searchField:''
      }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users})) ;  
        
      }
      handleChange =e =>{
            this.setState({searchField:e.target.value});
      };
      render(){
        const {monsters,searchField} =this.state;
        const filteredMonsters =monsters.filter(monster =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
         )
        return(
         <div className="Suggestion">
           <div>
           <SearchBox
         placeholder='Search Medicine'
         handleChange={this.handleChange}
         />
               <button className='addmediBtn'>
                  <p className='addbtntxt'>
                  <Link className="link" to="/DrugDetails">Upload the drug details</Link></p>
             </button>
           </div>
           <div className='suggestions'>
               <p className='suggestionTxt'>Suggestions</p>
           </div>
         <CardList monsters={filteredMonsters}>
         
         </CardList>
         
       </div>
        )
        }
   
   }
   
   export default CusSuggestion;
