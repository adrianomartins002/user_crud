import { render, screen } from "@testing-library/react";
import { BrowserRouter} from 'react-router-dom';
import React from "react";
import Name from '../../components/pages/name/';


describe("testing Name component", ()=>{
    it("should show a page", ()=>{
        render(    
        <BrowserRouter>
            <Name />
        </BrowserRouter>
        );
        const h1ElementTitle = screen.getByText("Insira o seu nome completo");

        expect(h1ElementTitle).toBeInTheDocument();
    })


})  