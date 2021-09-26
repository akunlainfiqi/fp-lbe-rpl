import React from 'react';
import ListItem from './Listitem';
import {PlusIcon} from '@primer/octicons-react';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          items: [],
          currentItem: {
            text:"",
            key:""
          }
        }
    
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
      }
    
      handleInput(e) {
        this.setState({
          currentItem: {
            text: e.target.value,
            key: Date.now()
          }
        })
      }
    
      addItem(e) {
        e.preventDefault();
    
        const newItem = this.state.currentItem;
        
        if(newItem.text !== "") {
          const addedItem = [...this.state.items, newItem];
          this.setState({
            items: addedItem,
            currentItem: {
              text: "",
              key: ""
            }
          })
        }
      }
    
      deleteItem(key) {
        const filteredItems = this.state.items.filter(item => 
          item.key !== key);
          this.setState({
            items: filteredItems
        })
      }
    
      setUpdate(text, key) {
        const item = this.state.items;
    
        item.map((item) => {
          if(item.key === key) {
            item.text = text;
          }
          return null;
        })
        this.setState({
          items: item
        })
      }
    
      render() {
        return (
          <div className="to-do-app">
            <div className="to-do-card">
              <header>
                <h2>Your Focus on Today</h2>
              </header>
              <section>
                <form id="to-do-form" autoComplete="off" onSubmit={this.addItem}>
                  <input id="add-task" type="text" placeholder="Type your plan here"
                  value={this.state.currentItem.text}
                  onChange={this.handleInput}></input>
                  <button id="button-new" type="submit"><PlusIcon/></button>
                </form>
              </section>
              <ListItem items = {this.state.items} 
              deleteItem = {this.deleteItem}
              setUpdate = {this.setUpdate}/>
            </div>
          </div>
        );
      }
}

export default Todolist;