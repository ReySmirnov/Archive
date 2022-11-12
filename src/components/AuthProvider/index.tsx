import React, { PropsWithChildren, useState } from "react";

type AuthValue = { userName: string; email: string } | null;
type AuthProviderProps = PropsWithChildren<{ value?: AuthValue }>;
export const AuthContext = React.createContext<{
  value: AuthValue;
  setValue: (value: AuthValue) => void;
}>({
  value: null,
  setValue: () => {},
});
const AuthProvider = ({children, value = null}: AuthProviderProps) => {
  const [authContextValue, setAuthContextValue] = useState<AuthValue>(
    value
  );
  return (
    <AuthContext.Provider
      value={{ value: authContextValue, setValue: setAuthContextValue }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
