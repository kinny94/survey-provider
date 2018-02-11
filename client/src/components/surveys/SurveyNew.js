import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component{

    state = { showFormReview: false }

    renderContent(){
        if( this.state.showFormReview === true ){
            return <SurveyFormReview />
        }

        return <SurveyForm onSurveySubmit={ () => this.setState({ showFormReview: true })} />
    }

    render(){
        return (
            <div>
               { this.renderContent() }
            </div>
        );
    }
}

export default SurveyNew;