import NavBar from '../../components/navbar/NavBar'
import LoginForm from './LoginForm'
import './Login.css';


function Login (){
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            
            <main className="login-page">
                <LoginForm></LoginForm>
            </main>
        </>
    );
}

export default Login;