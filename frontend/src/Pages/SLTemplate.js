import React,{Component} from 'react'

export default class extends Component{
    render(){
        // const info = this.props.data;
        return(
            <div className="templateCont">
                <div><strong>Name: </strong> list item</div>

                <div><strong>Type: </strong>list name</div>

                <div><strong>Aisle: </strong>list asile</div>
                <br/>

                <button>Remove</button>
            </div>
        )
    }
}