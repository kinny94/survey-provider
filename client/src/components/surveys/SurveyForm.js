import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
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
                <form onSubmit={ this.props.handleSubmit( this.props.onSurveySubmit )}> 
                    { this.renderFields() }
                    <Link to="/surveys" className="red btn-flat white-text" >
                        Cancel <i className="material-icons right">cancel</i>
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate( values ){
    const errors = {};

    errors.emails = validateEmails( values.emails || '' );

    _.each(FIELDS, ({ name }) => {
        if( !values[name] ){
            errors[name] = 'You must provide a value!';
        } 
    });

    
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm'
})( SurveyForm );