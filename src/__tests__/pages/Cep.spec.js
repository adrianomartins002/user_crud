import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, Link, MemoryRouter, Router} from 'react-router-dom';
import React from "react";
import Cep from '../../components/pages/cep/';


describe("testing Cep component", ()=>{
    it("should show a page", ()=>{
        render(    
        <BrowserRouter>
            <Cep />
        </BrowserRouter>
        );
        const h1ElementTitle = screen.getByText("Qual desses ceps você conhece?");

        expect(h1ElementTitle).toBeInTheDocument();
    })


})  