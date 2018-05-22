import React from 'react'
import gql from "graphql-tag"
import { client } from '../Client'


export default class extends React.Component{
    state = { listName: '', listType: '', listAisle:''}

    render(){

        const addToDataBase = async () => {
            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        createList(
                            data: {
                                name: "${this.state.listName}",
                                type: "${this.state.listType}",
                                aisle: "${this.state.listAisle}"

                                
                            }    
                          )
                        {
                            id
                            name
                            type
                            aisle
                        }
                        }
                `
            }).then((result) => {
                return result.data.createList
            });

            await console.log("La Data: ", temp1 );
            await this.setState({ listName: '', listType: '', listAisle:'' });
            window.location.reload()
        };

        return(
            <div>
                <h1>Add to list</h1>

                <div>
                    <h3>type in shopping list</h3>
                      <form>
                        <input className="gralInput" type="text" value={ this.state.listName } onChange={ (e) => { this.setState({ listName: e.target.value }) } } />
                        <input className="gralInput" type="text" value={ this.state.listType } onChange={ (e) => { this.setState({ listType: e.target.value }) } } />
                        <input className="gralInput" type="text" value={ this.state.listAisle } onChange={ (e) => { this.setState({ listAisle: e.target.value }) } } />
                        <button className="gralButton" onClick={ addToDataBase } >Add to Item</button>
                      </form>
                    <br/><br/>

                </div>
            </div>
        )
    }
}