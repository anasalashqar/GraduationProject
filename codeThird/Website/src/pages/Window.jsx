import React from "react";
import { FaHeartbeat, FaUser, FaIdCard, FaClock, FaTemperatureLow } from "react-icons/fa";
import "./Window.css";

function Window(props) {
  return (
    <ul class="SG">
      <li >
        
            <li class="LIM">
              <FaHeartbeat />
              <span>{props.heart}</span>
            </li>
            <li class="LIM">
              <FaUser />
              <span>{props.name}</span>
            </li>
            <li class="LIM">
              <FaIdCard />
              <span>{props.id}</span>
            </li>
            <li class="LIM">
              <FaTemperatureLow />
              <span>{props.temp}</span>
            </li>
          
        
      </li>
    </ul>
  );
}

export default Window;
