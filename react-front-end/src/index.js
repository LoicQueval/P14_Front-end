import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CreateEmployee from './pages/create-employee/create-employee';
import {EmployeeList} from './pages/employee-list/employee-list';
import {data} from './services/data';

const router = createBrowserRouter([
    {
        path: '/',
        element: <CreateEmployee/>,
    },
    {
        path: '/employees',
        element: <EmployeeList/>,
    },
]);
export const Context = React.createContext(undefined);

const root = ReactDOM.createRoot(document.getElementById('root'));
const Index = () => {
    const [states, setStates] = useState(data.states);
    const [departments, setDepartments] = useState(data.departments);
    const [users, setUsers] = useState(data.users);

    useEffect(() => {
        setStates(data.states);
        setDepartments(data.departments);
        setUsers(data.users);
        console.log("Data loaded")
    }, []);

    return (
        <React.StrictMode>
            <Context.Provider value={{states, departments, users, setStates, setDepartments, setUsers}}>
                <RouterProvider router={router}/>
            </Context.Provider>
        </React.StrictMode>
    );
};

root.render(<Index/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
