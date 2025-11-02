import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landingPage/home/Hero";

describe("Hero component", ()=>{
    test("renders hero image", ()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero img");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    })
})