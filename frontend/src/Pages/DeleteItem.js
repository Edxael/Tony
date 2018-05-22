import React from 'react'
import gql from "graphql-tag"
import { client } from '../Client'


export default class extends React.Component{
    state = { listsId: '' }

    render(){

        const deleteById = async () => {
            console.log("Delete by Id: ")

            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        deleteList(where: { id: "${this.state.listsId}" }){
                            id
                            name
                        }
                    }
                `}).then((result) => { return result.data.createList } )

            await console.log("List Deleted: ", temp1 )
            await this.setState({ listsId: '' })
            window.location.reload()
        }

        return(
            <div>

                <h1>Delete Item</h1>

                <div>
                    <h3>ID of Items to Delete</h3>
                    <input className="gralInput" type="text" value={ this.state.listsId } onChange={ (e) => { this.setState({ listsId: e.target.value }) } } />
                    <br/><br/>
                    <button className="gralButton" onClick={ deleteById } >Delete Products from DataBase</button>
                </div>

            </div>
        )
    }
}