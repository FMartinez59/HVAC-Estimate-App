import React from "react"
import { useNavigation } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [FornState, setFormState] = useState({
        login: true,
        email: '',
        password: '',
        name: ''
    });

    return (
        <div>
            <h4 className="mv3">
                {setFormState.login ? 'Login' : 'Sign Up'}
            </h4>
            <div className="flex flex-column">
                {!setFormState.login && (
                    <input
                    value={formstate.name}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            name: e.target.valuer
                        })
                    }
                    type="text"
                    placeholder="Your Name"/>
                )}
                <input 
                value={formState.email}
                onChange={(e) =>
                    setFormState({
                        ...formState,
                        email: e.target.value
                    })
                }
                type="text"
                placeholder="Your Email"
                />
                <input 
                value={formState.password}
                onChange={(e) =>
                    setFormState({
                        ...formState,
                        password: e.target.value
                    })
                }
                type="text"
                placeholder="Your Password"
                />
            </div>
            <div className="flex mt3">
                <button
                className="pointer mr2 button"
                onClick={() => console.log("on click")}>
                    {formState.login ? 'login' : 'create account'}
                </button>
                <button
                className="pointer button"
                onClick={(e) =>
                    setFormState({
                        ...formState,
                        login: !formState.login
                    })
                }>
                {formState.login
                ? 'need to create account?' : 'already have an account?'}
                </button>
            </div>
        </div>
    )
}

// class Login extends React.Component {
//     render(){

//     }
// }

export default Login;