import type React from "react";
import { useState, type JSX, type SubmitEventHandler } from "react";
import { useForm } from "react-hook-form";

type LoginFormValues = {
    email: string,
    password: string
}
export const SignUpForm = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<LoginFormValues>({
        mode: "onTouched", // Validates when a user leaves an input
    });

    // 3. This function only runs if validation passes
    const onSubmit = (data: LoginFormValues) => {
        console.log("Validated Form Data:", data);
        reset()
    };
    return (
        <div className="max-w-fit mt-2 mx-auto">
            <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                {/* EMAIL FIELD */}
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                    className="border"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format",
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* PASSWORD FIELD */}
                <div className="form-group">
                    <label>Password</label>
                    <input
                    className="border"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                            maxLength:{
                                value:10,
                                message:"Password must be at most 10 characters"
                            }
                        })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}