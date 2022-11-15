import { Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBar';
import { HomePage, EmployeesPage } from './pages';

export const App = () => {
	return (
		<div>
			<NavBarComponent />
			<Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/employees" element={ <EmployeesPage /> } />
            </Routes>
		</div>
	)
}

export default App;
