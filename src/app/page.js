"use client";
import { useState } from "react";
import Auth from "./components/auth/Auth";
import Feed from "./components/feed/Feed";


export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return isAuthenticated ? <Feed setIsAuthenticated={setIsAuthenticated}  /> : <Auth setIsAuthenticated={setIsAuthenticated} />;
}
