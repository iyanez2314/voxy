import React, { createContext, useContext, useState, useEffect } from "react";
import { DbUser } from "@/src/types";

interface DatabaseUserContextType {
  user: DbUser | null;
  setUser: (user: DbUser | null) => void;
  getDbUser: () => Promise<void>;
}

const DatabaseUserContext = createContext<DatabaseUserContextType | undefined>(
  undefined
);

export const DatabaseUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<DbUser | null>(null);

  const getDbUser = async () => {
    const res = await fetch("/api/user");
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    getDbUser();
  }, []);

  return (
    <DatabaseUserContext.Provider value={{ user, setUser, getDbUser }}>
      {children}
    </DatabaseUserContext.Provider>
  );
};

export const useDatabaseUserContext = (): DatabaseUserContextType => {
  const context = useContext(DatabaseUserContext);
  if (context === undefined) {
    throw new Error(
      "useDatabaseUserContext must be used within a DatabaseUserProvider"
    );
  }
  return context;
};
