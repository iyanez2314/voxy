import React from "react";

interface TextFieldProps {
  field: string;
  password?: boolean;
}

export default function MyTextField({ field, password }: TextFieldProps) {
  return (
    <>
      <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {field}
      </label>
      <input
        placeholder={password ? "********" : "johndoe@email.com"}
        type={password ? "password" : "email"}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </>
  );
}
