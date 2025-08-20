"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId ,verifyId}) {
  const [next, setNext] = useState(false);
  return (
 

        <LoginForm adminId={adminId} posterId={posterId}verifyId={verifyId } />
    
  );
}
