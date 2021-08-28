import React from 'react'

export default function Alert(props) {

    // Adding capitalize function for capital first letter of our alert type 
    const capitalize  = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
     
          props.alert &&  <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>
     
    )
}
