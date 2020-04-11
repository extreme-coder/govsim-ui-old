import React from 'react';

class FormWrapper extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        debugger;
        var title = ""
        if (this.props.isNew) {
            title = "New "+this.props.title
        } else {
            title = "Edit "+this.props.title
        }
        return (
            <div>
                <h3>{title}</h3>
                {this.props.children}
            </div>
        );
    }
}

export default FormWrapper