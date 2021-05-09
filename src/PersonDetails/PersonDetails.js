import React, { Component } from 'react';
import './PersonDetails.css';
import JobDetails from "../PersonJobDe/PersonJobDetails";



class PersonDetails extends Component{

    static getDerivedStateFromProps(props, state){
        console.log('[Details.js ] Details Get derivedFromProps');
        return state;
    }
    constructor(props){
        super(props)
        
        this.state = {name : this.props.name}
        console.log('[Details.js] Constructor')
        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Details.js ]Details Should Component Update');
        return true;
    }
    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log('[Details.js] Get Snap Shot Before Update');
        return {message : "Get SnapShor before Update!!!"};
    }
    changeName=(e)=>{
        this.setState({name:e.target.value})
    }
    componentDidMount(){
        console.log('[Details.js] Component did Mount')
    }
    componentDidUpdate(prevProps, prevState, snapshort){
        console.log('[Details.js] Componenet Did Update');
        console.log('shapshort',snapshort);
        console.log(prevProps);
        console.log(prevState);
    }
render(){
    console.log('[Details.js] Details Renderer')
    return(
        <>
            <div className='block'>
                Name : <span>{this.state.name}</span> <br/>
                Age : <span>{this.props.age}</span><br/>
                Change : <input type='text'onChange={(e) => this.changeName(e)} value={this.state.name}/>
                <JobDetails JobName={this.props.JobDe}/>
            </div>
        </>
    )
}

}

export default PersonDetails;