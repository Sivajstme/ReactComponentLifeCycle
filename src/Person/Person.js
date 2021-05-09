import React, { Component } from 'react';
import PersonDetails from '../PersonDetails/PersonDetails';


class Person extends Component {

    constructor(props){
        super(props);
        console.log('[Person.js] this is from Constructor');

        this.state = {person : 
                            [{
                            name:'nam1',
                            age:21,
                            Job: 'Test Job1'
                            },
                            {
                            name:'nam2',
                            age:22,
                            Job: 'Test Job2'
                            },
                            {
                            name:'nam3',
                            age:23,
                            Job: 'Test Job3'
                            }
                            ],
                    OtherState:'Some other State',
                    showHide : false
                    }
        //console.log(this.state);
    }
    ShowHideUser = () =>{
        let isTrue = this.state.showHide;
        this.setState({showHide: !isTrue});
    }
    static getDerivedStateFromProps(props, state){
        console.log('[Person.js] From Get Derived State From Props');
        // console.log(state);
        // console.log(props);
        state = props;
        return state;
        
    }
    componentDidMount(){
        console.log('[Person.js] Componenet Did Mount')
    }
    // componentWillMount(){
    //     console.log('Componenet Will Unmount');
    // }
    shouldComponentUpdate(){
        console.log('[Person.js] Should Componenet Update');
        return true;
    }
    componentDidUpdate(){
        console.log('[Person.js]Componenet Did Update')
    }
    render(){
        console.log('[Person.js] Render');
        return(
            <>
                <h1>Hello below are the list of persons</h1>
                <button onClick={this.ShowHideUser}>ShowHide</button>
                <div className='Person'>
                    {
                    this.state.showHide ? 
                        
                        <div> 
                            {console.log('Child')}
                            {
                            this.state.person.map((e,i)=>{
                                return(
                                    <PersonDetails key={i} name={e.name} age={e.age} JobDe={e.Job}/>
                                )
                            })
                            
                            }
                        </div> : <></>
                    }
                </div>
            </>
        )
    }
}

export default Person;