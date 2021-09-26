import { CheckCircleIcon } from "@primer/octicons-react";
import React from "react";

function ListItem(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="task-wrapper">
                <div key={item.key}>
                    <p>
                        <input type="text" 
                        key={item.key} className="new-list" 
                        value={item.text} 
                        onChange = {
                            (e) => {
                                props.setUpdate(e.target.value, item.key)
                            }
                        }></input>
                    </p>
                </div>
                <button id="task-done" onClick= {() => props.deleteItem(item.key)}><CheckCircleIcon/></button>
            </div>
        )
    })

    return (
        <div className="list-container">{listItems}</div>
    )
}

export default ListItem;