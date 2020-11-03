import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Input, LabelMessageError, Title } from '../../atoms';


export default function Rg() {
    const [rg, setRg] = useState("");
    const [messageError, setMessageError] = useState("");

    function checkAndSaveData(e) {
        if (!rg || rg === "") {
            e.preventDefault()
            setMessageError("É necessário digitar a info de RG")
        }else{
            window.localStorage.setItem("rg", rg)
        }

    }

    return (
        <Container style={{ background: "#34eb8f" }}>
            <Title>Insira o seu RG</Title>
            <Input
                onChange={(element) => {
                    setRg(element.target.value)
                    setMessageError("")
                }}
                type={"Number"}
                required
            ></Input>
            {messageError !== "" ?
                <LabelMessageError>{messageError}</LabelMessageError>
                :
                null
            }
            <Link
                onClick={checkAndSaveData}
                to="/name"  >
                <Button type={"submit"} >
                    Prosseguir</Button>
            </Link>

        </Container>
    );
}
