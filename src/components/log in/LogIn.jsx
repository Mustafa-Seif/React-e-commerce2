import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

function LogIn() {
  const [match,setMatch]=useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.password === data.coPassword) {
      setMatch(true)
      
      
    }

    console.log(match)

  }

  return (
    <div className="container w-50 mt-5 mb-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-danger">Email is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true, maxLength: 10 })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-danger">Password is required</p>
          )}
        </Form.Group>
       

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            {...register("checkbox", { required: true })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    )
}

export default LogIn