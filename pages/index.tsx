import React, { useEffect } from "react";

const RedirectToSignIn = (): React.ReactNode => {
  useEffect(() => {
    window.location.replace("/sign-in");
  }, []);

  return null;
};

export default RedirectToSignIn;
