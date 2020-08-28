import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Segment, Container, GridRow } from 'semantic-ui-react';


class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      operator: "",
      input: "",
      currentVal: "",
      previusVal: ""
    }
  }

  addToInput = (val) => {
    this.setState({input: this.state.input + val});
  };

  addOperator = (val) => {
    this.setState({previusVal: this.state.input});
    this.setState({operator: val});
    this.setState({input: ""});
  };

  equalOp = () => {
    this.setState({currentVal: this.state.input});

    
  }


render() {
  return (
    <Container className='container'> 
      <Grid centered>
        <Segment>
          <GridRow>
            <Segment size='big' color='black' inverted textAlign='right'
            >{this.state.input}</Segment>
          </GridRow>
          <Grid.Row centered>
             <Button size='big' onClick={()=>this.addToInput(7)}>7</Button>
             <Button size='big' onClick={()=>this.addToInput(8)}>8</Button>
             <Button size='big' onClick={()=>this.addToInput(9)}>9</Button>
             <Button size='big' onClick={()=>this.addOperator('/')}>/</Button>
          </Grid.Row>
          <Grid.Row centered>
             <Button size='big' onClick={()=>this.addToInput(4)}>4</Button>
             <Button size='big' onClick={()=>this.addToInput(5)}>5</Button>
             <Button size='big' onClick={()=>this.addToInput(6)}>6</Button>
             <Button size='big' onClick={()=>this.addOperator('*')}>*</Button>
          </Grid.Row>
          <Grid.Row centered>
             <Button size='big' onClick={()=>this.addToInput(1)}>1</Button>
             <Button size='big' onClick={()=>this.addToInput(2)}>2</Button>
             <Button size='big' onClick={()=>this.addToInput(3)}>3</Button>
             <Button size='big' onClick={()=>this.addOperator('+')}>+</Button>
          </Grid.Row>
          <Grid.Row centered>
             <Button size='big' onClick={()=>this.addToInput('.')}>.</Button>
             <Button size='big' onClick={()=>this.addToInput(0)}>0</Button>
             <Button size='big'>=</Button>
             <Button size='big'onClick={()=>this.addOperator('-')}>-</Button>
          </Grid.Row>
          <GridRow>
            <Button fluid size='big'onClick={()=>this.setState({input: ""})}>Clear</Button>
            </GridRow>
        </Segment>
      </Grid>
    
      
  </Container>
  )
  }
}

export default App;
