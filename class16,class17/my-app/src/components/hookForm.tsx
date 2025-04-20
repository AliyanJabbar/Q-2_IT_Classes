"use client";
import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => console.log("data:");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" />
        <input
          type="text"
          {...register("email", { required: true && "required email" })}
        />
        <input type="password" />
      </form>
    </div>
  );
};

export default HookForm;
