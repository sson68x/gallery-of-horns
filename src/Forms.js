import React from 'react';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Filter By Number of Horns</Form.Label>
          <Form.Select onChange={this.props.handleForm}>
            <option value=''>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </Form.Select>
        </Form.Group>
        {/* <Button variant='primary' type='submit'>
          Submit
        </Button> */}
      </Form>
    )
  }
}

export default Forms;