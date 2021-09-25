import React from "react";
import './css/ListItem.css';
import './css/ListItemResponsive.css';

function ListItem(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="task-wrapper">
                <div key={item.key}>
                    <p>
                        <input type="text" 
                        id={item.key} className="new-list" 
                        value={item.text} 
                        onChange = {
                            (e) => {
                                props.setUpdate(e.target.value, item.key)
                            }
                        }></input>
                    </p>
                </div>
                <button id="task-done" onClick= {() => props.deleteItem(item.key)}><i class="far fa-check-circle"></i></button>
            </div>
        )
    })

    return (
        <div>{listItems}</div>
    )
}

export default ListItem;