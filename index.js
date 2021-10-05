const { join } = require( 'path' );

module.exports = {
    defaultValues: {
        wpScripts: false
    },
    templatesPath: join( __dirname, 'templates' ),
};