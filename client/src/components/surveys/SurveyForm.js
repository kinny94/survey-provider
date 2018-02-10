import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'Subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipients List', name: 'emails'}
];

class SurveyForm extends Component{

    renderFields(){
        return _.map( FIELDS, field => {
            return <Field component={ SurveyField } key={ field.name } type="text" label={ field.label } name={ field.name } />
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={ this.props.handleSubmit( values => console.log( values ))}> 
                    { this.renderFields() }
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})( SurveyForm );