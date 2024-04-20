import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar.js';

class ClientList extends Component {
     constructor(props) {
        super(props);
        this.state = {clients: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/tutorials/all',{
            mthod:'GET'
        })
            .then(response => response.json())
            .then(data => this.setState({clients: data}));
    }

    async edit(id) {
        const answer = window.confirm("are you sure?");
        if (answer) {
        await fetch(`/api/tutorials/${id}`, {
            method: 'GET'

        }).then(() => {
            let updatedClients = [...this.state.clients].filter(i => i.id !== id);
            this.setState({clients: updatedClients});
        });
        window.confirm("User deleted!");  
    }
        else{
            window.confirm("User was not deleted!");
        }
    }

      async remove(id) {
        const answer = window.confirm("are you sure?");
        if (answer) {
        await fetch(`/api/tutorials/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.clients].filter(i => i.id !== id);
            this.setState({clients: updatedClients});
        });
        window.confirm("User deleted!");  
    }
        else{
            window.confirm("User was not deleted!");
        }
    }

    render() {
        const {clients, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const clientList = clients.map(client => {
            return <tr key={client.id}>
                <td style={{whiteSpace: 'nowrap'}}>{client.userEmail}</td>
                <td>{client.password}</td>
                <td>
                    <ButtonGroup>
                      <a class="btn btn-primary" href="" role="button" onClick={() => this.edit(client.id)}>Edit</a>
                      <button type="button" class="btn btn-danger" onClick={() => this.remove(client.id)} >Delete</button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
              <AppNavbar/>
                <Container fluid>
                    <h3>
                      Clients
                      </h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th align= "center" width="25%">Email</th>
                            <th align= "center" width="25%">Password</th>
                            <th align= "center" width="40%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clientList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ClientList;