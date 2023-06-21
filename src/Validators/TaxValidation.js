export default function TaxValidation(value){

    const errors= {};

    if(value.empId === ""){
        errors.empId= "Employee Id cannot be blank"
    }

    if(value.salary === ""){
        errors.salary= "Salary cannot be blank"
    }

    return errors;
}