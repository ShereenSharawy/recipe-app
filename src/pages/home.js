import React from "react";
import HeroSection from "../components/herosection/herosection";
import ImproveSkills from "../components/improveskills/improveskills";
import QuoteSection from "../components/quotesection/quotesection";
import ChiefsSection from "../components/chiefssection/chiefssection";
function Home() {
    return (
        <>
            <HeroSection />
            <ImproveSkills />
            <QuoteSection />
            <ChiefsSection />
        </>
    )
}
export default Home;