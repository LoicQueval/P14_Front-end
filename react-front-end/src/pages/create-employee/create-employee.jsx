import './create-employee.scss';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../index';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Modal} from 'loic-react-modal/dist';

function CreateEmployee() {
    const valueFromContext = React.useContext(Context);
    const [firstName, setFistName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [department, setDepartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const saveEmployee = (e) => {
        e.preventDefault()
        const employee = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth ? dateOfBirth.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }) : '',
            startDate: startDate ? startDate.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }) : '',
            department: department,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode
        };
        const newUsers = [...valueFromContext.users, employee]
        valueFromContext.setUsers(newUsers);
    }

    return (
        <main>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employees">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={saveEmployee} action="#" id="create-employee">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={(event) => setFistName(event.target.value)}/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={(event) => setLastName(event.target.value)}/>

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <DatePicker selected={dateOfBirth}
                                onChange={(date) => setDateOfBirth(date)}
                                dateFormat="MM/dd/yyyy">
                    </DatePicker>

                    <label htmlFor="startDate">Start Date</label>
                    <DatePicker selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="MM/dd/yyyy">
                    </DatePicker>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" onChange={(event) => setStreet(event.target.value)}/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" onChange={(event) => setCity(event.target.value)}/>

                        <label htmlFor="state">State</label>
                        <select name="state" id="state" onChange={(event) => setState(event.target.value)}>
                            {valueFromContext.states.map((state, index) => (
                                <option key={`${index}`} value={state.abbreviation}>{state.name}</option>
                            ))}
                        </select>

                        <label htmlFor="zipCode">Zip Code</label>
                        <input id="zipCode" type="number" onChange={(event) => setZipCode(event.target.value)}/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" onChange={(event) => setDepartment(event.target.value)}>
                        {valueFromContext.departments.map((department, index) => (
                            <option key={`${index}`}>{department.name}</option>
                        ))}
                    </select>
                    <Modal buttonText="Save">
                        Employee Created!
                    </Modal>
                </form>
            </div>
        </main>
    );
}

export default CreateEmployee;
