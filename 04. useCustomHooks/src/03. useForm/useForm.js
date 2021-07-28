import { useCallback, useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  console.log("values");

  const onChange = (e) => {
    setValues((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("onSubmit");
      console.log(values);
    },
    [values]
  );

  return {
    values,
    onChange,
    onSubmit,
  };
}

export default useForm;
