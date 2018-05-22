import React from 'react'
import { ApolloProvider } from "react-apollo"
import { HashRouter, Route, Link } from 'react-router-dom'
import './Style.css'
import { client } from '../Client'

import Paper from 'material-ui/Paper'
import Lists from './Lists'
import AddItem from './AddItem'
import UpdateItem from './UpdateItem'
import DeleteItem from './DeleteItem'


export default class extends React.Component{
    render(){

        return(
            <ApolloProvider client={client}>
                <HashRouter>
                    <div className="MainContainer">

                        <Paper className="menu1">
                            <Link className="menuButton" to="/">SHOPPING LIST</Link>
                            <Link className="menuButton" to="/2">Add-ITEM</Link>
                            <Link className="menuButton" to="/3">Update-LIST</Link>
                            <Link className="menuButton" to="/4">Delete-ITEM</Link>
                        </Paper>

                        <hr/>

                        <Route exact path="/" component={Lists}/>
                        <Route path="/2" component={AddItem}/>
                        <Route path="/3" component={UpdateItem}/>
                        <Route path="/4" component={DeleteItem}/>

                        <br/>
                        <hr/>


                    </div>
                </HashRouter>
            </ApolloProvider>
        )
    }
}

