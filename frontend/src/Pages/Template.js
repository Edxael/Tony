import React,{Component} from 'react'

export default class extends Component{
    render(){

        const info = this.props.data;

        const AddToData = () => {

        };

        return(
            <div className="templateCont">
                <div><strong>Name: </strong>{info.name}</div>

                <div><strong>Type: </strong>{info.type}</div>

                <div><strong>Aisle: </strong>{info.aisle}</div>
                {/*<br/>*/}
                {/*<button onClick={AddToData}>ADD TO SHOPPING</button>*/}

            </div>

        )
    }
}