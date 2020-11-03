import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { BackButton, Button, CheckBox, Container, LabelMessageError, Title } from '../../atoms';
import { MockUserService } from '../../../common/services/user';

const arrayPerguntas = [
    "57312-060",
    "57309-794",
    "57315-202",
    "57312-240"
]

export default function Cep() {
    const { data } = useLocation();
    const [ceps, setCeps] = useState([]);
    const [messageError, setMessageError] = useState("");
    const [sucess, setSucess] = useState(false);


    async function finish() {
        if (data.rg && data.name && data.birth && data.mothersName) {

            let newUser = {
                rg: data.rg,
                name: data.name,
                birth: data.birth,
                mothersName: data.mothersName
            }

            const response = await MockUserService.createMockUser(newUser)
            if (response.status === 201) {
                setSucess(true)
            } else {
                setSucess(false)
            }
        } else {
            setMessageError("É necessário digitar o nome!")
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
                    <Link to={{
                        pathname: "/mother",
                        data: {
                            rg: data.rg,
                            name: data.name,
                            birth: data.birth,
                            mothersName: data.motersName
                        }
                    }}>
                        <BackButton><BiArrowBack /></BackButton>
                    </Link>
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
                </>
            }


        </Container>
    )
}