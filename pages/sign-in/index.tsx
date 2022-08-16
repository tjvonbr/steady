import React, { useState } from "react";
import type { NextPage } from "next";
import Text, { Size, Weight } from "../../components/Text";

const SignIn: NextPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleEmailChange(e: React.FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e: React.FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="h-96 w-96 shadow-lg flex flex-col justify-around items-center">
        <div className="mt-2 p-2">
          <Text size={Size.XLARGE} weight={Weight.MEDIUM}>
            Sign in to your account
          </Text>
        </div>
        <form action="submit" className="w-11/12 flex flex-col items-center">
          <label className="pl-2 self-start" htmlFor="email">
            Email
          </label>
          <input
            className="mb-3 p-2 rounded border border-gray-200 w-full"
            name="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="pl-2 self-start" htmlFor="password">
            Password
          </label>
          <input
            className="mb-3 w-full p-2 rounded border border-gray-200"
            name="password"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
        </form>
        <button className="w-11/12 p-2 rounded border text-white bg-indigo-500 hover:bg-indigo-600">
          Sign in
        </button>
      </div>
      <div className="mt-2">
        <Text>
          Dont have an account?{" "}
          <a className="text-indigo-500" href="/sign-up">
            Sign up
          </a>
        </Text>
      </div>
    </div>
  );
};

export default SignIn;
