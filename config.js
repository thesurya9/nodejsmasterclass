/*
* Create and export config valirable
*
*/



// container for all the environments
var environments = {};


//staging (default) environments

environments.staging ={
    'httpPort':3000,
    'httpsPort':3001,
    'envName':'statging'

};

//production environments
environments.production={
    'httpPort':5000,
    'httpsPort':5001,
    'envName':'production'
}

//Detwermine which environment was passed as a command-line argument

var currentEnvironments = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLocaleLowerCase():'';

var environmentToExport = typeof(environments[currentEnvironments]) == 'object' ? environments[currentEnvironments] : environments.staging;

module.exports = environmentToExport;