import { render, screen } from "@testing-library/react";
import { BrowserRouter} from 'react-router-dom';
import React from "react";
import Rg from '../../components/pages/rg/';


describe("testing Rg component", ()=>{
    it("should show a page", ()=>{
        render(    
        <BrowserRouter>
            <Rg />
        </BrowserRouter>
        );
        const h1ElementTitle = screen.getByText("Insira o seu RG");

        expect(h1ElementTitle).toBeInTheDocument();
    })


})  