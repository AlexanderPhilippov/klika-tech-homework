import React from 'react';
import {
  Container,
  Header,
  Table,
  Icon,
  Grid,
  Dropdown,
  Label,
  Button
} from 'semantic-ui-react'

class App extends React.Component {
  state = {
    authorFilter: "all",
    genreFilter: "all",
    yearFilter: "all",
    sortByArtist: true,
    sortBySong: false,
    sortByGenre: false,
    sortByYear: false,
    sortAscending: true,
    sliceBegin: 0,
    sliceEnd: 15,
    pageSize: 15
  }
  changeYearFilter = (e, {name, value}) => this.setState({yearFilter: value})
  changeGenreFilter = (e, {name, value}) => this.setState({genreFilter: value})
  changeAuthorFilter = (e, {name, value}) => this.setState({authorFilter: value})

  render() {
    const {playList, prepareFilter} = this.props
    
    this.state.sortByArtist && playList.sort( (a,b) => {
      if(a.author > b.author) return this.state.sortAscending? 1 : -1
      if(a.author < b.author) return this.state.sortAscending? -1 : 1
      return 0
    })
    
    this.state.sortBySong && playList.sort( (a,b) => {
      if(a.song > b.song) return this.state.sortAscending? 1 : -1
      if(a.song < b.song) return this.state.sortAscending? -1 : 1
      return 0
    })
    
    this.state.sortByGenre && playList.sort( (a,b) => {
      if(a.genre > b.genre) return this.state.sortAscending? 1 : -1
      if(a.genre < b.genre) return this.state.sortAscending? -1 : 1
      return 0
    })
    
    this.state.sortByYear && playList.sort( (a,b) => {
      if(a.year > b.year) return this.state.sortAscending? 1 : -1
      if(a.year < b.year) return this.state.sortAscending? -1 : 1
      return 0
    })

    let filterAuthor =[], filterGenre = [], filterYear = []
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
              <Table sortable striped compact fixed>
                <Table.Header>
                  <Table.HeaderCell
                  onClick={() => this.setState({sortByArtist: true, sortByGenre: false, sortByYear: false, sortBySong: false, sortAscending: !this.state.sortAscending})}>
                  <Icon name="user"/>Исполнитель <Icon name={this.state.sortByArtist ? this.state.sortAscending ? "sort ascending" : "sort descending" : "sort"}/></Table.HeaderCell>
                  <Table.HeaderCell
                  onClick={() => this.setState({sortByArtist: false, sortByGenre: false, sortByYear: false, sortBySong: true, sortAscending: !this.state.sortAscending})}
                  ><Icon name="sound"/>Композиция <Icon name={this.state.sortBySong ? this.state.sortAscending ? "sort ascending" : "sort descending" : "sort"}/></Table.HeaderCell>
                  <Table.HeaderCell
                  onClick={() => this.setState({sortByArtist: false, sortByGenre: true, sortByYear: false, sortBySong: false, sortAscending: !this.state.sortAscending})}
                  ><Icon name="tag"/>Жанр <Icon name={this.state.sortByGenre ? this.state.sortAscending ? "sort ascending" : "sort descending" : "sort"}/></Table.HeaderCell>
                  <Table.HeaderCell
                  onClick={() => this.setState({sortByArtist: false, sortByGenre: false, sortByYear: true, sortBySong: false, sortAscending: !this.state.sortAscending})}
                  ><Icon name="calendar"/>Год <Icon name={this.state.sortByYear ? this.state.sortAscending ? "sort ascending" : "sort descending" : "sort"}/></Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  {playList !== undefined && playList.slice(this.state.sliceBegin,this.state.sliceEnd).map(x => 
                    ((this.state.yearFilter === 'all' || this.state.yearFilter === x.year) &&
                      (this.state.genreFilter === 'all' || this.state.genreFilter === x.genre) &&
                      (this.state.authorFilter === 'all' || this.state.authorFilter === x.author)) &&
                      (filterAuthor.push(x.author) && filterGenre.push(x.genre) && filterYear.push(x.year)) &&
                    <Table.Row key={`${x.author}_${x.song}`}>
                    <Table.Cell>{x.author}</Table.Cell>
                    <Table.Cell>{x.song}</Table.Cell>
                    <Table.Cell>{x.genre}</Table.Cell>
                    <Table.Cell>{x.year}</Table.Cell>
                  </Table.Row>)}
                </Table.Body>
                <Table.Footer>
                  <Table.HeaderCell colSpan="3">Отображено: {this.state.sliceEnd > playList.length ? playList.length: this.state.sliceEnd} из {playList !== undefined && playList.length}</Table.HeaderCell>
                  <Table.HeaderCell>
                    <Button.Group>
                      <Button icon="chevron left" disabled={this.state.sliceBegin < 1} 
                        onClick={() => this.setState({sliceBegin: this.state.sliceBegin - this.state.pageSize, sliceEnd: this.state.sliceEnd - this.state.pageSize})}/>
                      <Button icon="chevron right" disabled={this.state.sliceEnd >= playList.length}
                      onClick={() => this.setState({sliceBegin: this.state.sliceBegin + this.state.pageSize, sliceEnd: this.state.sliceEnd + this.state.pageSize})}/>
                    </Button.Group>
                  </Table.HeaderCell>
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
                        options={prepareFilter(filterAuthor)}
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
                        options={prepareFilter(filterGenre)}
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
                        options={prepareFilter(filterYear)}
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
