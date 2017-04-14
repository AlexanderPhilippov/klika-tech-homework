import React, {Component} from 'react';
import {Container, Header, Table, Icon, Grid, Dropdown, Label} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
          <Header as='h2' icon textAlign='center'>
            <Icon name='music' circular/>
            <Header.Content>
              Музыка на любой вкус!
            </Header.Content>
          </Header>
          <Grid divided="vertically">
          <Grid.Row columns="2">
          <Grid.Column width="13">
          <Table sortable striped>
            <Table.Header>
              <Table.HeaderCell><Icon name="user"/>Исполнитель</Table.HeaderCell>
              <Table.HeaderCell><Icon name="sound"/>Песня</Table.HeaderCell>
              <Table.HeaderCell><Icon name="tag"/>Жанр</Table.HeaderCell>
              <Table.HeaderCell><Icon name="calendar"/>Год</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  1234</Table.Cell>
                <Table.Cell>
                  <Icon name="trash"/>
                  4234342</Table.Cell>
                <Table.Cell>
                  234234</Table.Cell>
                <Table.Cell>
                  234234234</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  1234</Table.Cell>
                <Table.Cell>
                  <Icon name="trash"/>
                  4234342</Table.Cell>
                <Table.Cell>
                  234234</Table.Cell>
                <Table.Cell>
                  234234234</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  1234</Table.Cell>
                <Table.Cell>
                  <Icon name="trash"/>
                  4234342</Table.Cell>
                <Table.Cell>
                  234234</Table.Cell>
                <Table.Cell>
                  234234234</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.HeaderCell colSpan="4">Всего:</Table.HeaderCell>
            </Table.Footer>
          </Table>
          </Grid.Column>
          <Grid.Column width="3">
          <Table>
          <Table.Header><Table.HeaderCell><Icon name="filter"/>Фильтр</Table.HeaderCell></Table.Header>
          <Table.Body>
          <Table.Row><Table.Cell><Label ribbon color="pink">Исполнитель</Label><Dropdown fluid/></Table.Cell></Table.Row>
          <Table.Row><Table.Cell><Label ribbon color="orange">Жанр</Label><Dropdown fluid/></Table.Cell></Table.Row>
          <Table.Row><Table.Cell><Label ribbon color="blue">Год</Label><Dropdown fluid/></Table.Cell></Table.Row>
          </Table.Body>
          </Table>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
