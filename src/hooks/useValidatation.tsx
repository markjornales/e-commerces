import {useState} from 'react';

interface errorProps {
    message?: string,
    error?: boolean
}
export function useValidation () {
    const [isFullName, setFullName] = useState<string>('');
    const [isEmail, setEmail] = useState<string>('');
    const [isPassword, setPassword] = useState<string>('');
    const [isPasswordConf, setPasswordConf] = useState<string>('');
    const [isErrorFullname, setErrorFullname] = useState<errorProps>({})
    const [isErrorEmail, setErrorEmail] = useState<errorProps>({})
    const [isErrorPassword, setErrorPassword] = useState<errorProps>({})
    const [isErrorPasswordConfi, setErrorPasswordConfi] = useState<errorProps>({})

    const validate = () => {
        let error = false;
        if(!isFullName) {
            setErrorFullname({error: true, message: "Full name is required!"});
            error = true;
        }else {
            setErrorFullname({error: false, message: ""});
            error = false;
        } 
        if(!isEmail){
            setErrorEmail({error: true, message: "Email is required!"});
            error = true;
        } else {
            setErrorEmail({error: false, message: ""});
            error = false;
        }
        if(!isPassword) {
            setErrorPassword({error: true, message: "Password is required!"});
            error = true; 
        }else {
            setErrorPassword({error: false, message: ""});
            error = false;
        }
        if(!isPasswordConf) {
            setErrorPasswordConfi({error: true, message: "Confirm Password is required!"});
            error = true; 
        }else {
            setErrorPasswordConfi({error: false, message: ""});
            error = false; 
        }

        if((isPassword && isPasswordConf ) && (isPassword !== isPasswordConf)) {
            setErrorPassword({error: true});
            setErrorPasswordConfi({error: true, message: "Your password and confirm password do not match!"});
            error = true; 
        }

        return error;
    }
    
    const clearInput = () => {
        setFullName('');
        setEmail('');
        setPassword('');
        setPasswordConf('');
    }
    
    return {
        isFullName, 
        isEmail, 
        isPassword, 
        isPasswordConf,
        isErrorFullname,
        isErrorEmail,
        isErrorPassword,
        isErrorPasswordConfi,
        setFullName,
        setEmail,
        setPassword,
        setPasswordConf,
        setErrorFullname,
        setErrorEmail,
        setErrorPassword,
        setErrorPasswordConfi,
        validate,
        clearInput
    };
} 


export function loginValidation () {
    const [isEmail, setEmail] = useState<string>('');
    const [isPassword, setPassword] = useState<string>('');
    const [isErrorEmail, setErrorEmail] = useState<errorProps>({})
    const [isErrorPassword, setErrorPassword] = useState<errorProps>({}) 

    const validate = () => {
        let error = false; 
        if(!isEmail){
            setErrorEmail({error: true, message: "Email is required!"});
            error = true;
        } else {
            setErrorEmail({error: false, message: ""});
            error = false;
        }
        if(!isPassword) {
            setErrorPassword({error: true, message: "Password is required!"});
            error = true; 
        }else {
            setErrorPassword({error: false, message: ""});
            error = false;
        } 
        return error;
    }
    
    const clearInput = () => { 
        setEmail('');
        setPassword(''); 
    }
    
    return { 
        isEmail, 
        isPassword,   
        isErrorEmail,
        isErrorPassword,  
        setEmail,
        setPassword, 
        setErrorEmail,
        setErrorPassword, 
        validate,
        clearInput
    };

}