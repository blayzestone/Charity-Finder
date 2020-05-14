import { useState } from 'react';

export const useForm = (state) => {
  const [values, setValues] = useState(state);

  const handleChanges = e => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return [values, handleChanges];
}