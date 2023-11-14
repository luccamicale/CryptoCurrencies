import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ContainerMainNavbar, ContainerNavUL, ContainerUlLi } from '../Navbar/style.ts';
import { ContactInfo, ContainerContact, ContainerSectionOne, ContainerSectionTwo, ContainerTitle, TitleContact } from "../Home/style.ts";


function Contact() {
  return (
    
    <ContainerContact id="Contact">
    <ContainerSectionOne>
      <TitleContact>HOW TO CONTACT US</TitleContact>
      <ContactInfo>Crypto Security</ContactInfo>
      <ContactInfo>+54 9 11587369</ContactInfo>
      <ContactInfo>Buenos Aires, Argentina</ContactInfo>
    </ContainerSectionOne>
    <ContainerSectionTwo>
        <form action="https://formspree.io/f/xknegzyn" method="POST" id="form">
            <ul className="ul-list">
              <li tabindex="0">
                  <label for="name"></label>
                  <input type="text" id="name" name="user_name" required placeholder="Crypto Security" maxlength="30"/>
                  <hr className="line-1"></hr>
              </li>
              <li tabindex="0">
                  <label for="mail"></label>
                  <input type="email" id="mail" name="user_email" required placeholder="cryptoSecurity@gmail.com"/>
                  <hr className="line-1"></hr>
              </li>
              <li tabindex="0">
                  <label for="mail"></label>
                  <input type="email" id="mail" name="user_email"  placeholder="Write your message here"/>
                  <hr className="line-1"></hr>
              </li>
             </ul>
              <button className="but-get" tabindex="0" type="submit" id="sub">Get in touch</button>
              <small id="mistake"></small>
        </form>
    </ContainerSectionTwo>
  </ContainerContact>
    
  );
}

export default Contact;