import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  render(){
    
    return(
      <div>
        <h1>Kalvium Gallery</h1>
        <div className = "row">
        {
          this.props.data.map((image)=>{
            return(
              <div className="column" key={image.id}>
                <img src={image.img} alt="" className='ele'/>
               </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
