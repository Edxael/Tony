import React,{Component} from 'react'
import gql from "graphql-tag"
import { client } from '../Client'
import './Style.css'
import Template from './Template'
//import SLTemolate from './SLTemplate'
import Paper from 'material-ui/Paper'

import {Button} from 'reactstrap'

export default class extends Component{
    state = { list: [] };
   // async componentWillMount(){
   //
   //      console.log("hello")
   //     let temp1 = await client.query({
   //      query: gql`
   //          query {
   //              lists {
   //                  id
   //                  name
   //                  type
   //                  aisle
   //                  inList
   //              }
   //          }
   //      `}).then((result) => { return result.data.lists } )
   //
   //  await console.log("La Data: ", temp1 );
   //  await this.setState({ list: temp1 })
   //  }

    render() {


        const loadList = async () => {
        let temp1 = await
        client.query({
            query: gql`
                query {
                    lists {
                        id
                        name
                        type
                        aisle
                        inList
                    }
                }
            `
        }).then((result) => {
            return result.data.lists
        })

        await
        console.log("La Data: ", temp1);
        await
        this.setState({list: temp1})
    }

        return(
            <Paper className="all">
                <h1 className="title">Product List</h1>
                {<Button color="danger" className="gralButton" onClick={ loadList } >
                   <div className="words"> Get Shopping lists</div>
                </Button>}
                <br/><br/>
                { this.state.list[0] ? this.state.list.map((x) => { return <Template key={x.id} data={x} /> }) : <div>Click to get Shopping List</div> }


                {/*<div className="parent">*/}
                    {/*<div className="left">*/}
                        {/*{ this.state.list[0] ? this.state.list.map((x) => { return <Template key={x.id} data={x} /> }) : <div>Click to get Shopping List</div> }*/}
                    {/*</div>*/}
                    {/*<div className="right">*/}
                        {/*<h1>shopping list</h1>*/}
                        {/*{ [1,2,3,4 ].map((x) => { return( <SLTemolate/> ) }) }*/}
                    {/*</div>*/}
                {/*</div>*/}

            </Paper>
        )
    }
}

// { this.state.list[0] ? this.state.list.map((x) => { return <Template key={x.id} data={x} /> }) : <div>Click to get Shopping List</div> }
// const loadList = async () => {
//     let temp1 = await client.query({
//         query: gql`
//             query {
//                 lists {
//                     id
//                     name
//                     type
//                     aisle
//                 }
//             }
//         `}).then((result) => { return result.data.lists } )
//
//     await console.log("La Data: ", temp1 );
//     await this.setState({ list: temp1 })
// };
//
