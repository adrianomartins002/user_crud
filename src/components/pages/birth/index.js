
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BackButton, Button, Container, Input, LabelMessageError, Title } from '../../atoms';

export default function Birth() {
    const [birth, setBirth] = useState("");

    const [messageError, setMessageError] = useState("");

    useEffect(() => {
        let birthLocal = window.localStorage.getItem("birth")
        if (birthLocal && birthLocal !== "")
            setBirth(birthLocal)
    }, [])


    function checkAndSaveData(e) {
        if (!birth || birth === "") {
            e.preventDefault()
            setMessageError("É necessário digitar a data de nascimento")
        } else {
            window.localStorage.setItem("birth", birth)
        }
    }

    return (
        <Container style={{ background: "#34eb8f" }}>
            <div className="header-back-button">
                <Link to="/name">
                    <BackButton><BiArrowBack /></BackButton>
                </Link>

            </div>
            <div className="content-input">

                <Title>Insira sua data de nascimento</Title>
                <Input
                    type={"date"}
                    onChange={(element) => {
                        setBirth(element.target.value)
                        if (element.target.value === "") {
                            window.localStorage.removeItem("birth")
                        }
                    }}
                    value={birth}
                ></Input>
                {messageError !== "" ?
                    <LabelMessageError>{messageError}</LabelMessageError>
                    :
                    null
                }
                <Link
                    onClick={checkAndSaveData}
                    to="/mother" >
                    <Button>Prosseguir</Button>
                </Link>
            </div>
        </Container>
    );
}