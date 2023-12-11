import React, { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import Landing from "./Landing";
import { useAuth } from "../AuthContext";
import SideBarHome from "../components/SideBarHome";
import Chats from "../components/Chats";
import ChatRoom from "../components/ChatRoom";

export default function Home() {
  const { session, userData } = useAuth();
  console.log(session);

  if (!session) return <Landing />;
  else
    return (
      <div className="bg-gray-800 min-h-screen flex ">
        <SideBarHome />
        <Chats />
        <ChatRoom />
      </div>
    );
}
