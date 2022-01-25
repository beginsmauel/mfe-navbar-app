import React from "react";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";


export default function Root(props) {

   const Logout = () => {
        localStorage.clear();
        window.location.href = "http://34.124.216.252:8000/";
   }
   
   let isLoggedIn  = false;
   let temp = localStorage.getItem("loggedIn");
   if(temp == "true"){
        isLoggedIn = true;
   }

  return (
    <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        
        MICRO-FRONTEND POC
       
     </div>
      <div className="flex items-center justify-between">
        {links.map((link) => {
          return (
            <Link key={link.href} className="p-6" to={link.href}>
              {link.name}
            </Link>
          );
        }
        
        )}
      
     {
        isLoggedIn 
          ? (
              <div className="authentication">
                <button onClick={Logout}>Welcome {localStorage.getItem("username")}, Logout</button> 
              </div>
            )
          : ( 
              <a href='http://34.124.216.252:8000/'>
                <button>Login</button>
              </a>
            )
      }  
 
      </div>
   
    </div>
  );
}
