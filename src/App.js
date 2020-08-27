import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Segment, Container, GridRow} from 'semantic-ui-react';


class App extends Component {

render() {
  return (
    <Container className='container' > 
      <Grid centered>
        <Segment>
          <GridRow fluid color='black'>
            <Segment size='big' color='black' inverted textAlign='right'>1</Segment>
          </GridRow>
          <Grid.Row centered>
             <Button size='big'>7</Button>
             <Button size='big'>8</Button>
             <Button size='big'>9</Button>
             <Button size='big'>/</Button>
          </Grid.Row>
          <Grid.Row centered>
             <Button size='big'>4</Button>
             <Button size='big'>5</Button>
             <Button size='big'>6</Button>
             <Button size='big'>*</Button>
          </Grid.Row>
          <Grid.Row centered>
             <Button size='big'>1</Button>
             <Button size='big'>2</Button>
             <Button size='big'>3</Button>
             <Button size='big'>+</Button>
          </Grid.Row>
          <Grid.Row centered>
             <Button size='big'>.</Button>
             <Button size='big'>0</Button>
             <Button size='big'>=</Button>
             <Button size='big'>-</Button>
          </Grid.Row>
          <GridRow><Button fluid size='big'>Clear</Button></GridRow>
        </Segment>
      </Grid>
    
      
  </Container>
  )
  }
}

export default App;
