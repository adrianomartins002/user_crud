import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BackButton, Button, CheckBox, Container, LabelMessageError, Title } from '../../atoms';
import { MockUserService } from '../../../common/services/user';

const arrayPerguntas = [
    "57312-060",
    "57309-794",
    "57315-202",
    "57312-240"
]

export default function Cep() {
    const [ceps, setCeps] = useState([]);
    const [messageError, setMessageError] = useState("");
    const [sucess, setSucess] = useState(false);


    async function finish() {
        let data = {
            rg: window.localStorage.getItem("rg"),
            name: window.localStorage.getItem("name"),
            birth: window.localStorage.getItem("birth"),
            mothersName: window.localStorage.getItem("mother"),
            ceps: ceps
        }
        if (data.rg && data.name && data.birth && data.mothersName && ceps.length > 0) {


            const response = await MockUserService.createMockUser(data)
            if (response.status === 201) {
                setSucess(true)
                window.localStorage.clear()
            } else {
                setSucess(false)
            }
        } else {
            setMessageError("Um dos campos está faltando!")
        }

    }

    function handleChange(event, cep) {
        if (event.target.checked) {
            let cepsNew = ceps
            cepsNew.push(cep)
            setCeps(cepsNew);

        }
        else {
            let cepsNew = ceps
            cepsNew.splice(cepsNew.indexOf(cep), 1)
            setCeps(cepsNew);

        }

    }

    return (
        <Container style={{ background: "#34eb8f" }}>
            {sucess ?
                <>
                    <Title>Cadastro concluído!</Title>
                    <Link to={{
                        pathname: "/"
                    }}>
                        <BackButton><BiArrowBack /></BackButton>
                    </Link>
                </>
                :
                <>
                    <div className="header-back-button">
                        <Link to="/mother">
                            <BackButton><BiArrowBack /></BackButton>
                        </Link>
                    </div>
                    <div className="content-input">
                        <Title>Qual desses ceps você conhece?</Title>

                        {arrayPerguntas.map(cep =>
                            <label key={cep} style={{ padding: 5, fontSize: "24px", color: "#FFF" }}>
                                <CheckBox key={cep} onChange={event => handleChange(event, cep)}></CheckBox> {cep}
                            </label>)}
                        {messageError !== "" ?
                            <LabelMessageError>{messageError}</LabelMessageError>
                            :
                            null
                        }
                        <Button type={"button"} onClick={finish}>Finalizar</Button>
                    </div>
                </>
            }


        </Container>
    )
}