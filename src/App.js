import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import SearchForm from "./components/Search/searchFor";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    allEmployees: employees || [], 
    search: ""
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search)
    
    // this.setState({
    //   employees:this.state.search
    // });
    this.setState({
      employees: this.state.employees.filter(employee => employee === this.state.search)
    })


  };

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper> 
        <SearchForm
        handleInputChange= {this.handleInputChange} 
        value={this.state.search}  
        handleFormSubmit={this.handleFormSubmit}
        ></SearchForm>
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            phone={employee.phone}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
