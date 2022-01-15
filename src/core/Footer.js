import React,{Fragment} from "react";
import "./Footer.css"
const Footer=()=>{
    return(
        <>
        <section className="ffooter ">
		<footer class="footer">
        <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h4 class="white-text">Contact US</h4>
                <p class="grey-text text-lighten-4">1243, Saint Sen Street, Pune</p>
                <p class="grey-text text-lighten-4">Phone : +21-562-896-5378</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h4 class="white-text">Social Media Links</h4>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#" onclick="toggleModal();">Facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="#" onclick="toggleModal();">Instagram</a></li>
                  <li><a class="grey-text text-lighten-3" href="#" onclick="toggleModal();">Twitter</a></li>
                  <li><a class="grey-text text-lighten-3" href="#" onclick="toggleModal();">Whatsapp</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container white-text">
            © Kuber E-Bikes 2021 All rights reserved.
            <a class="grey-text text-lighten-4 right text-center" href="#!">Developed with ❤️ by Aditya Yadav</a>
            </div>
          </div>
          </footer>
          </section>
          </>
    )
}
export default Footer;