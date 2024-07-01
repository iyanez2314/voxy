import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { DbUser } from "@/src/types";
import { UserType } from "@/src/types/User";
import { useUser } from "@clerk/nextjs";

interface DatabaseUserContextType {
  user: UserType | null;
  dbUser: DbUser | null;
  setUser: (user: UserType | null) => void;
}

const GlobalUserContext = createContext<DatabaseUserContextType | undefined>(
  undefined
);

export const GlobalUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user: clerkUser } = useUser(); // This uses the Clerk hook to grab the logged in user.
  const [user, setUser] = useState<UserType | null>(null); // This is from clerk
  const [dbUser, setDbUser] = useState<DbUser | null>(null); // This is from the database

  const fetchDbUser = useCallback(async (user_id: string) => {
    console.log("Getting user from DB:", user_id);
    try {
      const res = await fetch("/api/user?user_id=" + user_id);
      const data = await res.json();
      if (data.status !== 200) {
        console.log("User not found", data);
        return;
      }
      setDbUser(data);
    } catch (error) {
      console.log("Error getting user from DB:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    if (clerkUser) {
      const newUser = {
        id: clerkUser.id,
        email: clerkUser.primaryEmailAddress as any,
        full_name: clerkUser.fullName,
        hasImage: clerkUser.hasImage,
        imageUrl: clerkUser.imageUrl,
        primaryEmailAddress: clerkUser.primaryEmailAddress as any,
      };
      setUser(newUser);
    }
  }, [clerkUser]);

  useEffect(() => {
    if (user?.id) {
      fetchDbUser(user.id);
    }
  }, [user]);

  return (
    <GlobalUserContext.Provider value={{ user, setUser, dbUser }}>
      {children}
    </GlobalUserContext.Provider>
  );
};

export const useGlobalUserContext = (): DatabaseUserContextType => {
  const context = useContext(GlobalUserContext);
  if (context === undefined) {
    throw new Error(
      "useDatabaseUserContext must be used within a DatabaseUserProvider"
    );
  }
  return context;
};
