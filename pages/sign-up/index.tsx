import React, { useState } from "react";
import Text, { Size, Weight } from "../../components/Text";

const Signup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleFirstNameChange(e: React.FormEvent<HTMLInputElement>) {
    setFirstName(e.currentTarget.value);
  }

  function handleLastNameChange(e: React.FormEvent<HTMLInputElement>) {
    setLastName(e.currentTarget.value);
  }

  function handleEmailChange(e: React.FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e: React.FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="h-[500px] w-96 shadow-lg flex flex-col justify-around items-center">
        <div className="mt-2 p-2">
          <Text size={Size.XLARGE} weight={Weight.MEDIUM}>
            Create your Stedy account
          </Text>
        </div>
        <form action="submit" className="w-11/12 flex flex-col items-center">
          <label className="pl-2 self-start" htmlFor="firstName">
            First name
          </label>
          <input
            className="mb-3 p-2 rounded border border-gray-200 w-full"
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <label className="pl-2 self-start" htmlFor="lastName">
            Last name
          </label>
          <input
            className="mb-3 w-full p-2 rounded border border-gray-200"
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <label className="pl-2 self-start" htmlFor="email">
            Email
          </label>
          <input
            className="mb-3 w-full p-2 rounded border border-gray-200"
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
          Sign up
        </button>
      </div>
      <div className="mt-2">
        <Text>
          Already have an account?{" "}
          <a className="text-indigo-500" href="/sign-in">
            Sign in
          </a>
        </Text>
      </div>
    </div>
  );
};

export default Signup;
