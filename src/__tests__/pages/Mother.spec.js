import { render, screen } from "@testing-library/react";
import { BrowserRouter} from 'react-router-dom';
import React from "react";
import Mother from '../../components/pages/mother/';


describe("testing Mother component", ()=>{
    it("should show a page", ()=>{
        render(    
        <BrowserRouter>
            <Mother />
        </BrowserRouter>
        );
        const h1ElementTitle = screen.getByText("Insira o nome da sua mãe completo");

        expect(h1ElementTitle).toBeInTheDocument();
    })


})  