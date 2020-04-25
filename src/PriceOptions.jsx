import { Form } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import PriceOption from './PriceOption';


class PriceOptions extends React.Component {
  constructor(props) {
    super(props)

    this.vals = [
      { name: 'weekly', label: 'Weekly' },
      { name: 'monthly', label: 'Monthly' },
      { name: 'yearly', label: 'Yearly' },
      { name: 'monthly_and_yearly', label: 'Monthly and Yearly' },
    ]
  }


  createList() {
    if (this.props.form.values.price_option) {
      return this.props.form.values.price_option.map((obj, i) => (
        <div>
          <PriceOption name={`price_option.${i}`} label={`Price Option ${i + 1}`} index={i} values={this.props.form.values.price_option[i]} />
          <Button onClick={() => this.props.remove(i)}>
            -
          </Button>
          <h6> </h6>
        </div>
      ))
    }
    return <div />
  }


  render() {
    return (
      <Form>
        {this.createList()}
        <Button onClick={() => this.props.push({})}>
          Add Price Option
        </Button>
      </Form>
    )
  }
}

export default (PriceOptions);
