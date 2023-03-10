import './employee-list.scss'

export const EmployeeList = () => {

    return (
        <main>
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                <table id="employee-table" className="display"></table>
                <a href="/">Home</a>
            </div>
        </main>
    );
}
