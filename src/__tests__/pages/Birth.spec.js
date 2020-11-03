import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, Link, MemoryRouter, Router} from 'react-router-dom';
import React from "react";
import Birth from '../../components/pages/birth/';


describe("testing Birth component", ()=>{
    it("should show a page", ()=>{
        render(    
        <BrowserRouter>
            <Birth />
        </BrowserRouter>
        );
        const h1ElementTitle = screen.getByText("Insira sua data de nascimento");

        expect(h1ElementTitle).toBeInTheDocument();
    })


})  