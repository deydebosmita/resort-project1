import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from '../components/Services'
export default function Home() {
   return(
      <>
    <Hero>
   <Banner title="luxorious rooms" subtitle="delux">
<Link to ="/rooms" className="btn-primary">
    our rooms
</Link>
   </Banner>
   </Hero>
   <Services/>
   </>
   );
}
