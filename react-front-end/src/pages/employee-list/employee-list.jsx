import './employee-list.scss'
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../index';
import DataTable from 'react-data-table-component';

export const EmployeeList = () => {
    const {users} = useContext(Context);
    const [filteredUsers, filterUsers] = React.useState(users);
    const filter = (txt) => {
        if (txt.length === 0)
            filterUsers(users)
        else
            filterUsers(users.filter(
                item => item.firstName.toLowerCase().includes(txt.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(txt.toLowerCase()) ||
                    item.department.toLowerCase().includes(txt.toLowerCase()) ||
                    item.city.toLowerCase().includes(txt.toLowerCase()) ||
                    item.state.toLowerCase().includes(txt.toLowerCase()) ||
                    item.street.toLowerCase().includes(txt.toLowerCase()) ||
                    item.dateOfBirth.toString().includes(txt) ||
                    item.startDate.toString().includes(txt) ||
                    item.zipCode.toString().includes(txt)
            ));
    }

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,
        },
        {
            name: 'Date of Birth',
            selector: row => row.dateOfBirth,
            sortable: true,
        },
        {
            name: 'Start Date',
            selector: row => row.startDate,
            sortable: true,
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true,
        },
        {
            name: 'Zip Code',
            selector: row => row.zipCode,
            sortable: true,
        },
    ];

    return (
        <main>
            <div className="container-list">
                <h1>Current Employees</h1>
                <div>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e) => filter(e.target.value)}
                        />
                    </div>
                    <DataTable
                        direction="auto"
                        columns={columns}
                        data={filteredUsers}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="600px"
                        highlightOnHover
                        responsive
                        subHeader={false}
                    />
                </div>
                <Link to="/">New employee</Link>
            </div>
        </main>
    );
}
