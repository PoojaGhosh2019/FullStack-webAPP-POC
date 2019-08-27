import React, { Component } from 'react';
import './search.css';

class Search  extends Component {
    state = {
        query: '',
        tags: [],
    };

    handleInput = () =>{
           let key =  this.search.value;
           this.setState({
            query: key
            })

            var reqUrl
            if(key){
                reqUrl = 'http://localhost:4000/fuzzy-search/' + key; 
                this.fetchItems(reqUrl);
            }       
    }

    fetchItems = (endpoint) => { 
        fetch(endpoint)
        .then(res => res.text())
        .then(res =>{
            if (res) {
               let resJson = JSON.parse(res) ; 
               let resItem = resJson['Item']['tags']['S'];
               let resItemKeys = Object.keys(JSON.parse(resItem));
               let itemText = resItemKeys.join(' ');
               this.setState({
                    tags: itemText
               })   
            } else {
                this.setState({
                    tags: ""
               })
            }
        })
        .catch(error => console.error('Error',error))
    }

    render() { 
        return (
            <React.Fragment>
                <div className='search'>
                    <input placeholder="Search for...." ref={input => this.search = input} onChange={this.handleInput}/>
                    <p className='ingredients'><span><strong>Ingredients:  </strong></span>{this.state.query}</p>
                    <p><span ><strong>Tags:  </strong></span>{this.state.tags}</p>
                </div>
                
            </React.Fragment>
        );
    }      
}
 
export default Search ;