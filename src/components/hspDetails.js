import React, { Component } from 'react'
import '../detailStyles.css';
const data = [
    {    
        "id":1,
        "name":"HSP Standard Office Profile",
    },
    {    
        "id":2,
        "name":"HSP Capitational Contract",
    },
    {    
        "id":3,
        "name":"HSP Standard Office Profile",
    },
    {    
        "id":4,
        "name":"HSP Capitational Contract",
    },
    {    
        "id":5,
        "name":"HSP Standard Office Profile",
    },

]
export default class hspDetails extends Component {
    constructor(){
        super();
        this.state = {
            isShowing:false,
            data:[]
        }
    }
    componentDidMount () {
        this.setState({
            data:data
        })
    }
    handleHoverDropdown = () =>this.setState((currentState) => ({isShowing: !currentState.isShowing}));   
    render() {
        const hiddenStyle= {
            maxHeight: '0',
            transition: 'max-height 0.40s ease-out',
            overflow:   'hidden',
            paddingTop: '0px',
            transition:'padding-top 0.40s ease-out'
        }
        const showStyle = {
            maxHeight: '60px',
            transition: 'max-height 0.40s ease-in',           
            paddingTop: '10px',
            transition:'padding-top 0.40s ease-in'
        }
        return (
            <React.Fragment>
               <div className="row dropdown-details-block" style={ this.state.isShowing ? showStyle:hiddenStyle}>
                <div className="col-9">
                  <div class="form-group stylesheet-dropdown"> 
                    <select class="form-control">
                        {this.state.data.map((list) =>{                       
                            return <option>{list.name}</option>
                        })}
                    </select>
                  </div>
                </div>
                <div className="col-3 Details-icons">
                  <i class="fa fa-refresh" aria-hidden="true"></i>
                  <i class="fa fa-print" aria-hidden="true"></i>
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                  <span>                    
                    <select className="resize-zoom">
                        <option>100%</option>
                        <option>75%</option>
                        <option>50%</option>
                        <option>25%</option>                        
                    </select>
                  </span>
                </div>
                </div>
                <div className="btn-block">
                    <button onMouseOver={this.handleHoverDropdown}>HSP Standard Embedded Dashboard</button>
                </div>                
            </React.Fragment>
        )
    }
}
