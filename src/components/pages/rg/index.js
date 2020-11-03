import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Input, LabelMessageError, Title } from '../../atoms';


export default function Rg() {
    const [rg, setRg] = useState("");
    const [messageError, setMessageError] = useState("");

    function checkDataInput(e) {
        if (!rg || rg === "") {
            e.preventDefault()
            setMessageError("É necessário digitar a info de RG")
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
                onClick={checkDataInput}
                to={{
                    pathname: "/name",
                    data: {
                        rg
                    }
                }}  >
                <Button type={"submit"} >
                    Prosseguir</Button>
            </Link>

        </Container>
    );
}
