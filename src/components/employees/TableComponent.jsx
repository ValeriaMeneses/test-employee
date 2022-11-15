import Table from 'react-bootstrap/Table';

export const TableComponent = ({ data }) => {
    return (
        <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de nacimiento</th>
                </tr>
            </thead>
            <tbody>
                { data &&
                    data.map((employee) => {
                        console.log(new Date().toLocaleDateString('es-mx',employee.birthday))
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.last_name}</td>
                                <td>{new Date().toLocaleDateString('es-mx',employee.birthday)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default TableComponent;