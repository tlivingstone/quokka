import Company from "../components/Company";
import companies from "../data/Companies";
import { useState } from "react";
import Head from "next/head";

export default function Index() {


    return (
        <>
        <Head>
            <title>Quokka</title>
            <meta name= "Quokka" content="Taryn's personal page"/>
        </Head>

        <div id = "container">

        <div id = "top-section">
            <>
                <h2>Quokka Ventures</h2>
                <p>
                    {/* VC by day, hacker by night. I lead founder fellowship programs at 
                    <a href = "https://www.somacap.com/"><span id = "bolder"> <span className="underline">Soma Capital</span></span></a>and
                    <a href = "https://www.envisionaccelerator.com/"><span id = "bolder"> <span className="underline">Envision Accelerator</span></span>,</a> 
                    document my learnings through writing, design &amp; build out 
                    product ideas, and grow communities in SF &amp; beyond. */}

                    Quokka is a venture syndicate dedicated to democratizing access to 
                    Silicon Valley startups and relentlessly supporting our founders. We run our 
                    syndicate on <a href="https://www.angellist.com/" className="underline">Angellist</a>where you can join us to recieve updates for each of the 
                    new investments we launch. 
                </p>

                <p className="social-links">
                    <a href = "https://twitter.com/wetarynitup"> <span className="underline">Taryn </span>&#x2197;</a> 
                    <a href = "https://www.linkedin.com/in/taryn-e-livingstone/"> <span className="underline">Vishnu </span>&#x2197;</a> 
                </p>
                </>

                <h2>Select Investments</h2>
                    <div className = "flex">
                    {companies.map(d => (
                        <Company
                            name={d.name}
                            description={d.description}
                            link={d.link}
                            />
                    ))}
                    </div>

            </div>

        </div>
        </>
    );
}
