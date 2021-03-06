
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BackButton, Button, Container, Input, LabelMessageError, Title } from '../../atoms';

export default function Mother() {
    const [mothersName, setMothersName] = useState("");

    const [messageError, setMessageError] = useState("");

    useEffect(() => {
        let motherLocal = window.localStorage.getItem("mother")
        if (motherLocal && motherLocal !== "")
            setMothersName(motherLocal)
    }, [])


    function checkAndSaveData(e) {
        if (!mothersName || mothersName === "") {
            e.preventDefault()
            setMessageError("É necessário digitar o nome da mãe!")
        } else {
            window.localStorage.setItem("mother", mothersName)
        }
    }


    return (
        <Container style={{ background: "#34eb8f" }}>
            <div className="header-back-button">
                <Link to="/birth">
                    <BackButton><BiArrowBack /></BackButton>
                </Link>
            </div>
            <div className="content-input">

                <Title>Insira o nome da sua mãe completo</Title>
                <Input
                    onChange={(element) => {
                        setMothersName(element.target.value)
                        if (element.target.value === "") {
                            window.localStorage.removeItem("mother")
                        }
                    }}
                    value={mothersName}
                ></Input>
                {messageError !== "" ?
                    <LabelMessageError>{messageError}</LabelMessageError>
                    :
                    null
                }
                <Link
                    onClick={checkAndSaveData}
                    to="/cep"  >
                    <Button>Prosseguir</Button>
                </Link>
            </div>
        </Container>
    );
}