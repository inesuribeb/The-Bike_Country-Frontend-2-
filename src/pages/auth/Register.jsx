import NavBar from '../../components/navbar/NavBar'
import RegistrationForm from './RegistrationForm';
import './Register.css';


function Register (){
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            
            <main className="register-page">
                <RegistrationForm></RegistrationForm>
            </main>
        </>
    );
}

export default Register;