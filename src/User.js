import React,{ Component } from "react";
import './App.css';
import firebase from './firebase.js'
import { Table } from "./Table";
class User extends Component{
  constructor(props){
    super(props)
    this.state={
      Name:'',
      Phone:'',
      Father:'',
      DateOfBirth:'',
      Address:'',
      Aadhar:'',
      Email:'',
      disabled:true,
      details:[]
    }
  }
  click=()=>{
    const db=firebase.firestore();
    db.collection('user').add({
      Name:this.state.Name,
      Phone:this.state.Phone,
      Father:this.state.Father,
      DateOfBirth:this.state.DateOfBirth,
      Address:this.state.Address,
      Aadhar:this.state.Aadhar,
      Email:this.state.Email
    })
    this.setState({Name:'',
    Phone:'',
    Father:'',
    DateOfBirth:'',
    Address:'',
    Aadhar:'',
    Email:'',},()=>this.componentDidMount())
    
  }
  change=(event)=>{
    this.setState({[event.target.name]:event.target.value});

  }
  componentDidMount(){
    let a=[]
    this.setState({Aadhar:Math.floor(Math.random()*(Math.floor(999999999999)-Math.ceil(100000000000))+Math.ceil(100000000000))})
    const db=firebase.firestore();
    db.collection('user').get().then(
      (query)=>{
        query.forEach((items)=>{
          a.push(items.data()) 
        })
        console.log(a)
        this.setState({details:a})
      }
    )
    
  }
  render(){
    return(
      <div>
        
        <ul>
          Name : <input type='text' onChange={this.change} name='Name' value={this.state.Name} />
        </ul>
        <ul>
          Phone : <input type='text' onChange={this.change} name='Phone' value={this.state.Phone} />
        </ul>
        <ul>
          Father's Name : <input type='text' onChange={this.change} name='Father' value={this.state.Father} />
        </ul>
        <ul>
          Date of Birth : <input type='text' onChange={this.change} name='DateOfBirth' value={this.state.DateOfBirth} />
        </ul>
        <ul>
          Address : <input type='text' onChange={this.change} name='Address' value={this.state.Address} />
        </ul>
        <ul>
          Email : <input type='email' onChange={this.change} name='Email' value={this.state.Email} />
        </ul>
        <ul>
          Aadhar Number : {this.state.Aadhar}
        </ul>
        <ul>
          <button type='submit' onClick={this.click} disabled={this.state.disabled} >Submit</button>
        </ul>
        <div>
          <table className="table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Father's Name</th>
                <th>Date Of Birth</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Aadhar Number</th>
              </tr>
              {this.state.details.map((items)=><Table {...items} />)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default User;