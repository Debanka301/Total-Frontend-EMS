import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeesComponent';
import EmployeeLeavesList from './components/EmployeeLeavesList';
import EmployeeLeavesDetails from './components/EmployeeLeavesDetails';
import EmployeesTaxList from './components/EmployeesTaxList';
import EmployeeTaxDetails from './components/EmployeeTaxDetails';
import AddTaxDetails from './components/AddTaxDetails';
import LoginComponent from './components/LoginComponent';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import UserTaxDetails from './components/UserTaxDetails';
import AddLeaves from './components/AddLeaves';
import UserAddLeavesDetails from './components/UserAddLeavesDetails';
import AddEditUser from './components/AddEditUser';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
        <HeaderComponent />
          <Router>
            <Routes>
              <Route exact path='/' Component={LoginComponent} />
              <Route path='/employees' Component={EmployeeList} />
              <Route path='/add-employee' Component={AddEmployeeComponent} />
              <Route path='/edit-employee/:id' Component={AddEmployeeComponent} />
              <Route path='/employee-leaves' Component={EmployeeLeavesList} />
              <Route path='/individual-employee-leaves/:id' Component={EmployeeLeavesDetails} />
              <Route path='/tax-list' Component={EmployeesTaxList} />
              <Route path='/tax-details/:id' Component={EmployeeTaxDetails} />
              <Route path='/add-tax' Component={AddTaxDetails} />
              <Route path='/admin-dashboard' Component={AdminDashboard} />
              <Route exact path='/user-dashboard' Component={UserDashboard} />
              <Route path='/user-tax/:id' Component={UserTaxDetails} />
              <Route path='/user-addLeaves/:id' Component={AddLeaves} />
              <Route path='/user-addLeavesDetails/:id' Component={UserAddLeavesDetails} />
              <Route path='/user-addEdit' Component={AddEditUser} />
              <Route path='/user-addEdit/:id' Component={AddEditUser} />
              <Route path='/user-profile/:id' Component={UserProfile} />
            </Routes>
          </Router>
        <FooterComponent />
    </div>
  );
}

export default App;
