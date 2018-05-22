import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



import Main from './Pages/Main'


const Home = () => (
    <div>
        <MuiThemeProvider>
            <Main/>
        </MuiThemeProvider>
    </div>
);


ReactDOM.render(<Home />, document.getElementById('root'));
