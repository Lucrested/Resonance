import React, { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import Landing from "./Landing";
import { useAuth } from "../AuthContext";

export default function Home() {
  const { session, userData } = useAuth();
  console.log(session);

  if (!session) return <Landing />;
  else
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
}
