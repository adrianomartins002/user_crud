import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BackButton, Button, Container, Input, LabelMessageError, Title } from '../../atoms';
import { BiArrowBack } from 'react-icons/all';


export default function Name() {
    const [name, setName] = useState("");
    const [messageError, setMessageError] = useState("");

    useEffect(()=>{
        let nameLocal = window.localStorage.getItem("name")
        if(nameLocal && nameLocal !== "")
            setName(nameLocal)
    },[])


    function checkAndSaveData(e) {
        if (!name || name === "") {
            e.preventDefault()
            setMessageError("É necessário digitar o nome!")
        }else{
            window.localStorage.setItem("name", name)
        }
    }


    return (
        <Container style={{ background: "#34eb8f" }}>
            <Link to="/">
                <BackButton><BiArrowBack /></BackButton>
            </Link>
            <Title>Insira o seu nome completo</Title>
            <Input
            onChange={(element)=>{
                setName(element.target.value)
                if(element.target.value === ""){
                    window.localStorage.removeItem("name")
                }
            }}
            value={name}
            ></Input>
            {messageError !== "" ?
                <LabelMessageError>{messageError}</LabelMessageError>
                :
                null
            }
            <Link
                className="birth-link"
                onClick={checkAndSaveData}
                to="/birth" >
                <Button>Prosseguir</Button>
            </Link>
        </Container>
    );
}