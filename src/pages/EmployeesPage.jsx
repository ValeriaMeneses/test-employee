
import { useState, useEffect } from "react";
import { InputSearch, TableComponent, AddEmployeeComponent } from "../components/employees";

export const EmployeesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [ employee, setEmployee ] = useState('');
    const [dataEmployee, setDataEmployee] = useState(null);
    const [dataEmployeeFilter, setDataEmployeeFilter] = useState([]);

    useEffect(() => {
        if (isLoading) {
            fetch("http://localhost:3004/employee")
                .then((response) => {
                return response.json();
                })
                .then((data) => {
                    setDataEmployee(data);
                    setIsLoading(false);
                })
                .catch((e) => {
                    console.log(e.message);
                })
        }
    }, [isLoading]); 

    const onChangeUser = (employeeInput) => {
        setEmployee(employeeInput);

        const results = dataEmployee.filter(employeeItem => {
            return employeeItem.name.toLowerCase().includes(employeeInput) || employeeItem.last_name.toLowerCase().includes(employeeInput);
        })

        setDataEmployeeFilter(results);
        
    }

    if (isLoading) {
        return (
            <div className="container Employees-container">
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <div className="container Employees-container">
            <h1>Empleados</h1>
            <div className="row mx-1">
                <div className="col px-0 mr-3">
                    <InputSearch 
                        onChangeInput={ (value) => onChangeUser(value)}
                    />
                </div>
                <div className="col-auto px-0">
                    <AddEmployeeComponent />
                </div>
            </div>
            <TableComponent 
                data={ dataEmployeeFilter && dataEmployeeFilter.length > 0 ? dataEmployeeFilter : dataEmployee }
            />
        </div>
    )
}