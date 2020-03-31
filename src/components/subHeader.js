import React, { Component } from 'react'
import {Breadcrumb,Button} from 'react-bootstrap';
import '../subheader.css';
export default class subHeader extends Component {
    constructor(props){
       super(props)
       this.state = {
           isAllow: false
       }
    }
    arrowBackHandler = () =>{
        alert("In Progress")
    }
    iconHandler = () =>{
        alert("In Progress")
    }
    render() {
        const {breadcrums} = this.props
        const {isAllow} = this.state        
        return (
            <div className="subheader-block row">
                <div className="col-9 p-0"> 
                <div className="row">
                    {isAllow === true ?
                    <button className="col-1 arrowBlock p-0" onClick={this.arrowBackHandler}>
                        <span><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></span> 
                    </button> : null}
                    <div className="col-11 p-0">
                        <Breadcrumb>
                            {isAllow === true ? 
                             breadcrums.map(item =>{
                                return <Breadcrumb.Item onClick={this.iconHandler}>{item}</Breadcrumb.Item>
                            })                             
                            : <Breadcrumb.Item onClick={this.iconHandler}>Contracts</Breadcrumb.Item>}                        
                        </Breadcrumb>
                        {isAllow === true ? <h4>HSP Standard Provider Profile</h4> :  <h4>Contracts</h4>}
                    </div>
                </div>
                </div>                
                <div className="col-3 sheader-btn-block p-0">
                {isAllow === true ?
                    <span>
                        <i class="fa fa-search" aria-hidden="true" onClick={this.iconHandler}></i>
                        <i class="fa fa-ellipsis-h" aria-hidden="true" onClick={this.iconHandler}></i>
                    </span> :
                    <Button variant="primary" onClick={this.iconHandler}>Create Contracts</Button> 
                }
                </div> 
            </div>
        )
    }
}
