"use client"
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";


export default function RegisterForm() {
  const [errors, setErrors] = useState({});

  const onSubmit = (e:any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!data.username) {
      setErrors({username: "Username is required"});

      return;
    }
  };

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-3"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <Input
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
      />
      <Button type="submit" variant="flat">
        Submit
      </Button>
    </Form>
  );
}

// Fake server used in this example.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function callServer(data) {
//   return {
//     errors: {
//       username: "Sorry, this username is taken.",
//     },
//   };
// }

