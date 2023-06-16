import axios from 'axios'
import authHeader from '../components/AuthHeader';

const EMPLOYEE_FIND_ALL = 'http://localhost:8091/employee/admin/all';

const EMPLOYEE_SAVE= 'http://localhost:8091/employee/admin/save';

const EMPLOYEE_UPDATE= 'http://localhost:8091/employee/normal/update';

const EMPLOYEE_GET_BY_ID= 'http://localhost:8091/employee/normal';

const EMPLOYEE_DELETE= 'http://localhost:8091/employee/admin/delete';

const EMPLOYEE_WITH_LEAVES= 'http://localhost:8091/employee/normal/leaves';

const EMPLOYEE_TAX_DETAILS= 'http://localhost:8091/employee/normal/tax';

const TAX_SAVE= 'http://localhost:8093/tax/save';

const EMPLOYEE_LOGIN= 'http://localhost:8091/login';

const USER_SAVE_LEAVES= 'http://localhost:8092/leaves/save';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_FIND_ALL, {headers: authHeader()})
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_SAVE, employee, {headers: authHeader()})
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_GET_BY_ID+"/"+employeeId, {headers: authHeader()})
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_UPDATE + '/' +employeeId, employee, {headers: authHeader()});
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_DELETE + '/' + employeeId, {headers: authHeader()});
    }

    getEmployeesLeaves(employeeId){
        return axios.get(EMPLOYEE_WITH_LEAVES + '/' + employeeId, {headers: authHeader()});
    }

    getEmployeesTax(employeeId){
        return axios.get(EMPLOYEE_TAX_DETAILS + '/' + employeeId, {headers: authHeader()});
    }

    saveTax(taxInput){
        return axios.post(TAX_SAVE, taxInput, {headers: authHeader()});
    }

    login(loginDTO){
        return axios.post(EMPLOYEE_LOGIN,loginDTO);
    }

    saveLeaves(leaves){
        return axios.post(USER_SAVE_LEAVES,leaves, {headers: authHeader()});
    }

    
}

export default new EmployeeService();