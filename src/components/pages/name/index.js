import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackButton, Button, Container, Input, LabelMessageError, Title } from '../../atoms';
import { BiArrowBack } from 'react-icons/all';
import { useLocation } from "react-router-dom";


export default function Name() {
    const {data} = useLocation();
    const [name, setName] = useState("");
    const [messageError, setMessageError] = useState("");

    function checkDataInput(e) {
        if (!name || name === "") {
            e.preventDefault()
            setMessageError("É necessário digitar o nome!")
        }
    }
    return (
        <Container style={{ background: "#34eb8f" }}>
            <Link to={{
                    pathname: "/",
                    data: {
                        rg: data.rg,
                        name: data.name
                    }
                }}>
                <BackButton><BiArrowBack /></BackButton>
            </Link>
            <Title>Insira o seu nome completo</Title>
            <Input
            onChange={(element)=>setName(element.target.value)}
            ></Input>
            {messageError !== "" ?
                <LabelMessageError>{messageError}</LabelMessageError>
                :
                null
            }
            <Link
                className="birth-link"
                onClick={checkDataInput}
                to={{
                    pathname: "/birth",
                    data: {
                        rg: data.rg,
                        name
                    }
                }}  >
                <Button>Prosseguir</Button>
            </Link>
        </Container>
    );
}