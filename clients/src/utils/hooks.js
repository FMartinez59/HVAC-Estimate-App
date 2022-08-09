import { useState } from 'react';

export const useForm = (callback, intitialState = {}) => {
    const [values, setValues] = useState(intitialState);

    const onChange = (e) => {
        satValues({...values, [e.target.name]: e.target.value });
        console.log(values);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        callback();
    };

    return {
        onChange,
        onSubmit,
        values
    }
}

// This is a react hook for the register and login forms.
// This will make it so I won't have to redo the react form logic everytime I need to make a form.