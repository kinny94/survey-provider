const sengrid = require( 'sendgrid' );
const helper = sengrid.mail;
const keys = require( '../config/keys' );

class Mailer extends helper.Mail {
    constructor( { subject, recipients }, content ){
        super();
        this.from_email = new helper.Email( 'no-reply@surveyprovider.com' );
        this.subject = subject;
        this.body = new helper.Content( 'text/html', content );
        this.recipients = this.formatAddresses( recipients );  
    }
}

moduel.exports = Mailer;