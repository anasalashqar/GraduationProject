import React from "react";
import { DUMMY_TEXT } from "../store/Dummy";
import "./About.css";
import {
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaThList,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaTemperatureHigh,
} from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { MdSwitchAccount } from "react-icons/md";

const About = () => {
  return (
    <div class="NO">
      {DUMMY_TEXT.map((st) => {
        return (
          <div class="ULI">
            <ul>
              <li>
                <div>
                  { <HiIdentification/> } 
                  {st.id}
                </div>
              </li>
              <li>
                <div>
                  {<FaMapMarkerAlt />} lng ${st.lng} & lat ${st.lat}
                </div>
              </li>
              <li>
                <div>
                  {" "}
                  {<MdSwitchAccount />} {st.name}
                </div>
              </li>
              <li>
                <div>
                  {<FaHeartbeat />}
                  {st.heartbeats}
                </div>
              </li>
              <li>
                <div>
                  {<FaTemperatureHigh />}
                  {st.temp}
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default About;
