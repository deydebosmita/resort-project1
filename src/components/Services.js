import React, { Component } from "react";
import {FaCocktail,FaHiking,FaBeer} from "react-icons/fa";
import Title from "./Title";
export default class Services extends
 Component {
     state={
         services:[
             {
                 icon:<FaCocktail/>,
                 title:"free cocktails",
                 info:'dfghj sedfgt drgtyh drgt sedrfgv drgt dcfgvbh drfgt drfgtdfcgvbhb'
             },

             {
                icon:<FaHiking/>,
                title:"free hiking",
                info:'dfghj sedfgt drgtyh drgt sedrfgv drgt dcfgvbh drfgt drfgtdfcgvbhb'
            },
          
            {
                icon:<FaBeer/>,
                title:"free beer",
                info:'dfghj sedfgt drgtyh drgt sedrfgv drgt dcfgvbh drfgt drfgtdfcgvbhb'
            }
         ]
     }
    render() {
        return (
           <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                       return( <article key={index} classname="service">
                           <span> {item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>);
                   })}
               </div>
           </section>
        );
    }
}
