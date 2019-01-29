import React,{Fragment} from 'react' 
import '../styles/avatar.scss'

class Avatar extends React.Component {

  constructor(props){
    super(props)
    //Escribo mis estados
    this.state = {user: undefined}
  }

  render() {
    //Escribo mis propiedades
    let { gender } = this.props
    let userCut = () =>{
      return user.charAt(0)
    }
    return (
      <Fragment>
        <div className={`rn-avatar ${gender}`} user={this.props.user}> 
          {(this.state.user != undefined) ? (userCut()) : ("?")}
          </div>
      </Fragment>
    )
  }
}

export default Avatar