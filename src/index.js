import React, {Fragment} from "react"
import { render } from 'react-dom'
import Avatar from './components/Avatar'

//Render principal de la APP
const App = () => (
  <Fragment>
    <div>HOLA PO</div>
    <Avatar user='Edo' gender='male'/>
  </Fragment>
)

render(<App/>, document.getElementById('root'))