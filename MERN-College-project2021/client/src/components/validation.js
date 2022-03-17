const Validation = (user)=>
    {

let errors ={};

 if(!user.name)
 {
     errors.name = "* Name is Required";
 }
 if(!user.email)
 {
     errors.email = "* Email is required" ;
 }else if(!/\S+@\S+\.\S+/.test(user.email)){
     errors.email = "Invalid Email" ;
 }
 if(!user.phone)
 {
     errors.phone = "* Contact is required"
 }else if(user.phone.length !== 10)
 {
errors.phone = "Invalid Contact Number";
 }
 if(!user.work)
 {
     errors.work = "* Field is Required" ; 
}
if(!user.password)
{
    errors.password = "* Password is Required";

}else if(user.password.length < 8)
{
    errors.password = "Password must be more than 8 characters";
}
if(!user.cpassword)
{
    errors.cpassword = "* Confirm Password is Required";

}else if(user.password !== user.cpassword)
{
    errors.password = "Passwords do not match ";
    }
if(!user.adhar)    {

    errors.adhar=" * Adhar is required";

}else if(user.adhar.length !== 12)
 {
errors.adhar = "Invalid adhar Number";
 }
 if(!user.programme)    {

    errors.programme="* Programme is required";

}
if(!user.department)    {

    errors.department=" * Department is required";
}
if(!user.rollno)    {

    errors.rollno=" * Roll Number is required";

}
if(!user.college)    {

    errors.college=" * College is required";

}if(!user.city)    {

    errors.city=" * City is required";

}if(!user.state)    {

    errors.state=" * State is required";

}if(!user.blood)    {

    errors.blood=" * Blood Group is required";

}

    return errors;
}


    export default Validation;