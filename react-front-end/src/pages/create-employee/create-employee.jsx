import './create-employee.scss';
import React, {useEffect} from 'react';
import {Context} from '../../index';
import {states, departments, users} from '../../services/data';

function CreateEmployee() {

    /*$( function() {
        $('#date-of-birth').datetimepicker({
            timepicker: false,
            format: 'm/d/Y'
        });
        $('#start-date').datetimepicker({
            timepicker: false,
            format: 'm/d/Y'
        });
    });
    */

    const valueFromContext = React.useContext(Context);

    useEffect(() => {
        valueFromContext.setStates(states);
        valueFromContext.setDepartments(departments);
        valueFromContext.setUsers(users);
    }, [])

    const saveEmployee = (e) => {
        e.preventDefault()
        const firstName = e.target.firstName;
        const lastName = e.target.lastName;
        const dateOfBirth = e.target.dateOfBirth;
        const startDate = e.target.startDate;
        const department = e.target.department;
        const street = e.target.street;
        const city = e.target.city;
        const state = e.target.state;
        const zipCode = e.target.zipCode;

        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value
        };

        const newUsers = [...valueFromContext.users]
        newUsers.push(employee);
        valueFromContext.setUsers(newUsers);
        alert('Employee Created!')
        /*$('#confirmation').modal();*/
    }

    console.log(valueFromContext);

    return (
        <main>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <a href="/employees">View Current Employees</a>
                <h2>Create Employee</h2>
                <form onSubmit={saveEmployee} action="#" id="create-employee">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName"/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName"/>

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input id="dateOfBirth" type="text"/>

                    <label htmlFor="startDate">Start Date</label>
                    <input id="startDate" type="text"/>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text"/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text"/>

                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            {valueFromContext.states.map((state, index) => (
                                <option key={`${index}`} value={state.abbreviation}>{state.name}</option>
                            ))}
                        </select>

                        <label htmlFor="zipCode">Zip Code</label>
                        <input id="zipCode" type="number"/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        {valueFromContext.departments.map((department, index) => (
                            <option key={`${index}`}>{department.name}</option>
                        ))}
                    </select>
                    <button type="submit">Save</button>
                </form>

            </div>
           {/* <div id="confirmation" className="modal">Employee Created!</div>*/}
        </main>
    );
}

export default CreateEmployee;
