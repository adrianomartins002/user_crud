
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MockUserService } from '../../../common/services/user';
import { Button, Container, Title } from '../../atoms';

export default function UsersList() {

    const [users, setUsers] = useState([]);

    async function searchUsers() {
        const { data } = await MockUserService.searchUsers();
        console.log("üsuarios:", users)
        if (data && data.length > 0)
            setUsers(data);
    }

    useEffect(() => {
        searchUsers()
    }, [])

    return (
        <Container style={{ background: "#34eb8f" }}>
            <div className="header-back-button">

                <Title>Lista de Cadastrados:</Title>

            </div>
            <div className="content-input">
                {users && users.length > 0 ?
                    <div className="users-list">
                        <table>
                            <tr>
                                <th>Nomes</th>
                                <th>RG</th>
                                <th>Mãe</th>

                            </tr>
                            
                                {users.map(user => (
                            <tr>        
                                    <td>{user.name}</td>
                                    <td>{user.rg}</td>
                                    <td>{user.mothersName}</td>
                            </tr>
                                ))}
                            
                        </table>


                    </div>
                    :
                    null
                }

                <Link
                    to="/" >
                    <Button>Início</Button>
                </Link>
            </div>
        </Container>
    );
}