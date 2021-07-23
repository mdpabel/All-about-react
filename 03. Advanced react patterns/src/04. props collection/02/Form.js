import useForm from "./useForm";

function Label({ children }) {
  return <label htmlFor={children}>{children}</label>;
}

function Input({ type = "text", name }) {
  const { state, change } = useForm();

  return (
    <>
      <input
        style={{ marginBottom: 0 }}
        value={state[name]}
        minLength="3"
        required
        {...change}
        type={type}
        id={name}
        name={name}
      />

      <small
        style={{ color: "red", marginBottom: "1rem", display: "inline-block" }}
      >
        {state[name].length < 3 ? `${name} must be grater than 3` : null}
      </small>
    </>
  );
}

function Button({ children }) {
  return (
    <button style={{ marginTop: "1rem" }} type="submit">
      {children}
    </button>
  );
}

function Form({ children }) {
  const { submit } = useForm();
  return <form {...submit}>{children}</form>;
}

export { Label, Input, Button, Form };
