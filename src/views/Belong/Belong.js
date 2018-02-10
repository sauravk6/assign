import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import $ from 'jquery';

class Belong extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	     	showModal: false,
	     	name: '',
	     	status: '',
	     	notes: '',
	     	selectAll: false,
	     	company: '',
	     	userArray: [
	     		{
	     			'name': 'Hello World!',
	     			'company': 'Belong',
	     			'status': '0',
	     			'notes': 'Hello Again!',
	     			'id': 0
	     		},
	     		{
	     			'name': 'React',
	     			'company': 'Facebook',
	     			'status': 1,
	     			'notes': 'Hello All over again!',
	     			'id': 1
	     		}
	     	]
	    };

	    this.singleUser = this.singleUser.bind(this);

	    this.addMember = this.addMember.bind(this);
	    this.id = 1;
	    this.arr = [];
	    this.deleteUser = this.deleteUser.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.pushUser = this.pushUser.bind(this);
	    this.pushUsers = this.pushUsers.bind(this);
	    this.toggle = this.toggle.bind(this);
	    this.selectChange = this.selectChange.bind(this);

	    
  	}

  	handleChange(input, e){
	    var parent = this;
	    let text = e.target.value;
	    this.setState({
	      [input]: text
	    });
  	}

  	toggle(){
  		this.setState({
	  		showModal: !this.state.showModal
	  	})
  	}

	addMember(){
	  	this.setState({
	  		showModal: true
	  	})

	}

	singleUser(id){
		var count = 0;
		alert(id);
		console.log(document.getElementById(id).value);
		if(document.getElementById(id).value == 'on'){
			id = id.split('check')[1];
			this.arr.push(this.state.userArray[id]);
			console.log(this.arr);
			alert('if');

			
		} else{
			alert('else');
			id = id.split('check')[1];
			var data = this.state.userArray;
			for(var i = 0; i < data.length; i++) {
			    if(data[i].id == id) {
			        data.splice(i, 1);
			        break;
			    }
			}

			this.arr = data;
			console.log(this.arr);

		}
	}

	deleteUser(id){
		// var id = 2;
		var data = this.state.userArray;
		for(var i = 0; i < data.length; i++) {
		    if(data[i].id == id) {
		        data.splice(i, 1);
		        break;
		    }
		}

		this.setState({
			userArray: data
		})
	}

	pushUsers(){
		alert('Please check the result in console');
		this.setState({
			selectAll: !this.state.selectAll
		}, () => {
			if(this.state.selectAll){
				this.arr = this.state.userArray;
			} else{
				this.arr = [];
			}
			console.log('Array of users', this.arr);

		})
		


	}

	pushUser(){
		this.id++;
		var userArray = this.state.userArray;
		var objAppend = {
			'name': this.state.name,
			'company': this.state.company,
			'status': this.state.status,
			'notes': this.state.notes,
			'id': this.id
		};

		userArray.push(objAppend);

		this.setState({
			userArray: userArray,
			showModal: false
		})
	}

	selectChange(){
		var selectedValue = document.getElementById('statusContainer').value;
		this.setState({
			status: selectedValue
		})
		// alert(selectedValue);
	}



  render() {
  	const parent = this;
    return (
	   	<div className="containerOuter">
	   		<div className="headerContainer">
	   			<div><p className="header">Team Members</p></div>
	   			<div className="blueBtnCon">
	   				<button type="button" className="blueBtn" onClick={this.addMember}>Add Member +</button>
	   			</div>
	   		</div>

	   		<div className="containerInner">
	   			<div className="barsContainer">
	   				<p className="barContent">Company (2)</p>
	   			</div>

	   			<div className="barsContainer">
	   				<p className="barContent">Status</p>
	   			</div>
	   		</div>

	   		{this.state.userArray && 
	   			<table>
	   				<thead>
	   					<tr>
		   					<th>
		   						<input type="checkbox" value={this.state.selectAll} onClick={this.pushUsers}/>
		   					</th>
		   					<th>Name</th>
		   					<th>Company</th>
		   					<th>Status</th>
		   					<th>Last Updated</th>
		   					<th>Notes</th>
		   					<th></th>
	   					</tr>
	   				</thead>
	   				<tbody>
	   					{this.state.userArray.map(function(per_item, i){
	   						return <tr key={per_item["id"]}>
	   									<td>
					   						
	   									</td>
	   									<td>{per_item["name"]}</td>
	   									<td>{per_item["company"]}</td>
	   									<td>
	   										{ per_item["status"] ? 'Active' : 'Offline'}	
	   									</td>
	   									<td>9/12/2017</td>
	   									<td>{per_item["notes"]}</td>
	   									<td className="test">
	   										<div className="deleteContainer">
	   											<p className="deleteContent" onClick={e => parent.deleteUser(per_item["id"])}>Delete</p>
	   										</div>
	   									</td>
	   								</tr>
	   					})
	   					}
	   				</tbody>
	   			</table>
	   		}

	      	{this.state.showModal && 
		      	<div id="myModal" className="modal">
				  <div className="modal-content">
		      		<div className="close" onClick={this.toggle}>&times;</div>
				    <div className="modal-body">
				      <div className="inputContainer">
				      	<label>Name</label>
				      	<input type="text" className="inputField" onChange={ e => this.handleChange('name', e)}/>
				      </div>

				      <div className="inputContainer">
				      	<label>Company</label>
				      	<input type="text" className="inputField" onChange={ e => this.handleChange('company', e)}/>
				      </div>

				      <div className="inputContainer">
				      	<label>Status</label>
				      	<select id="statusContainer" className="sortBy" onChange={this.selectChange}>
							<option disabled selected value> Select Status </option>
						    <option value="1">Active</option>
						    <option value="0">Offline</option>
						</select>
				      </div>

				      <div className="inputContainer">
				      	<label>Note</label>
				      	<textarea type="description" className="inputField" onChange={ e => this.handleChange('notes', e)}></textarea>
				      </div>
				    </div>
				    <div className="addUser">
	   					<button type="button" className="blueBtn" onClick={this.pushUser}>Add Member</button>
				    </div>
				  </div>

				</div>
			}
	    </div>
    )
  }
}

export default Belong;
