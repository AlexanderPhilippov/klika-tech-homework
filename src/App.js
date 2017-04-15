import React from 'react';
import {
  Container,
  Header,
  Table,
  Icon,
  Grid,
  Dropdown,
  Label
} from 'semantic-ui-react'

class App extends React.Component {
  state = {
    authorFilter: "all",
    genreFilter: "all",
    yearFilter: "all"
  }
  changeYearFilter = (e, {name, value}) => this.setState({yearFilter: value})
  changeGenreFilter = (e, {name, value}) => this.setState({genreFilter: value})
  changeAuthorFilter = (e, {name, value}) => this.setState({authorFilter: value})

  render() {
    const {playList, filterData} = this.props
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
              <Table sortable striped compact>
                <Table.Header>
                  <Table.HeaderCell><Icon name="user"/>Исполнитель</Table.HeaderCell>
                  <Table.HeaderCell><Icon name="sound"/>Песня</Table.HeaderCell>
                  <Table.HeaderCell><Icon name="tag"/>Жанр</Table.HeaderCell>
                  <Table.HeaderCell><Icon name="calendar"/>Год</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  {playList !== undefined && playList.map(x => 
                    ((this.state.yearFilter === 'all' || this.state.yearFilter === x.year) &&
                      (this.state.genreFilter === 'all' || this.state.genreFilter === x.genre) &&
                      (this.state.authorFilter === 'all' || this.state.authorFilter === x.author)) &&
                    <Table.Row key={`${x.author}_${x.song}`}>
                    <Table.Cell>{x.author}</Table.Cell>
                    <Table.Cell>{x.song}</Table.Cell>
                    <Table.Cell>{x.genre}</Table.Cell>
                    <Table.Cell>{x.year}</Table.Cell>
                  </Table.Row>)}
                </Table.Body>
                <Table.Footer>
                  <Table.HeaderCell colSpan="4">Всего: {playList !== undefined && playList.length}</Table.HeaderCell>
                </Table.Footer>
              </Table>
            </Grid.Column>
            <Grid.Column width="3">
              <Table>
                <Table.Header>
                  <Table.HeaderCell><Icon name="filter"/>Фильтр</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon size="mini" color="violet">Исполнитель</Label><Dropdown
                        fluid
                        search
                        selection
                        closeOnChange
                        options={filterData.authors}
                        onChange={this.changeAuthorFilter}
                        value={this.state.authorFilter}/></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon size="mini" color="teal">Жанр</Label><Dropdown
                        fluid
                        search
                        selection
                        closeOnChange
                        options={filterData.genres}
                        onChange={this.changeGenreFilter}
                        value={this.state.genreFilter}/></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon size="mini" color="blue">Год</Label><Dropdown
                        fluid
                        search
                        selection
                        closeOnChange
                        options={filterData.years}
                        onChange={this.changeYearFilter}
                        value={this.state.yearFilter}/></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default App;
