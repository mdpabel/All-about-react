import React from "react";
import { Button, Form, Input, Label } from "./Form";

const App = () => {
  return (
    <div style={{ width: "450px", margin: "auto" }}>
      <Form>
        <div>
          <Label>Username</Label>
          <Input name="Username" />
        </div>

        <div>
          <Label>Password</Label>
          <Input type="password" name="Password" />
        </div>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default App;
