import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, Field, FieldArray } from 'formik';
import SelectField from './common/SelectField';
import * as classActions from './actions/entity_actions';
import { connect } from 'react-redux';

class StudentClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { fieldNum: 1 }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.getEntities('class')
    }

    classOptions() {
        return this.props.classes.map((cl) => {
            return <option key={cl.id} value={cl.id}>{cl.name}</option>
        })
    }

    createList() {
        var list = []
        for (var i = 0; i < this.state.fieldNum; i++) {
            list.push(<SelectField name={"class" + i} label={"Class " + (i + 1) + ":"} placeholder="Class">
                <option></option>
                {this.classOptions()}
            </SelectField>)
        }
        return list
    }

    handleClick() {
        this.setState({ fieldNum: this.state.fieldNum + 1 })
    }

    render() {
        return (
            <div>
                {this.createList()}
                <Button onClick={this.handleClick}>
                    Add Class
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.entities,
    }
}

export default connect(
    mapStateToProps, { ...classActions }
)(StudentClass);
