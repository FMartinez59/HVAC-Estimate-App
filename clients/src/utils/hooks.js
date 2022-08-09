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