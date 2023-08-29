import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <AuthContext.Provider
      value={{ session, setSession, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
