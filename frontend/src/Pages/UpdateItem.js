import React,{Component} from 'react'
import gql from "graphql-tag"
import { client } from '../Client'


export default class extends Component{
    state = { listType: '', listName: '' };

    render(){

        const updateDataBase = async () => {
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        updateList(
                            data: { name: "${this.state.listName}" }
                            where: { type: "${this.state.listType}" }
                        ){
                            type
                            name
                        }
                    }
                `}).then((result) => { return result.data.createList } )

            await console.log("User Deleted: ", temp1 )
            await this.setState({ listName: '', listType: '' })
            window.location.reload()
        }

        return(
            <div>
                <h1>Update Shopping List Information</h1>

                <div>
                    <h3>Provide Info to Update</h3>

                    <div>type to Update:</div>
                    <input className="gralInput" type="text" value={ this.state.listType } onChange={ (e) => { this.setState({ listType: e.target.value }) } } />
                    <br/><br/>

                    <div>name of item:</div>
                    <input className="gralInput" type="text" value={ this.state.listName } onChange={ (e) => { this.setState({ listName: e.target.value }) } } />
                    <br/><br/>
                    <button className="gralButton" onClick={ updateDataBase } >Update DataBase</button>
                </div>
            </div>
        )
    }
}