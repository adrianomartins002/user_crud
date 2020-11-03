
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BackButton, Button, Container, Input, LabelMessageError, Title } from '../../atoms';
import { useLocation } from "react-router-dom";

export default function Birth(){
    const [birth, setBirth] = useState();
    const {data} = useLocation();
    const [messageError, setMessageError] = useState("");

    function checkDataInput(e) {
        if (!birth || birth === "") {
            e.preventDefault()
            setMessageError("É necessário digitar a data de nascimento")
        }
    }
    
    return (
        <Container style={{background:"#34eb8f"}}>
            <Link to={{
                    pathname: "/name",
                    data: {
                        rg: data.rg,
                        name: data.name,
                        birth: birth,
                    }
                }}>
                <BackButton><BiArrowBack /></BackButton>
            </Link>
            <Title>Insira sua data de nascimento</Title>
            <Input
            onChange={(element)=>setBirth(element.target.value)}
            ></Input>
             {messageError !== "" ?
                <LabelMessageError>{messageError}</LabelMessageError>
                :
                null
            }
            <Link
                onClick={checkDataInput}
                to={{
                    pathname: "/mother",
                    data: {
                        rg: data.rg,
                        name: data.name,
                        birth
                    }
                }}  >
                <Button>Prosseguir</Button>
            </Link>
        </Container>
    );
}