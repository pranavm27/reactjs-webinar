const dev = {
    API: {
        "BASE_URL": "http://localhost:3005/",
        "LOGIN_ENDPOINT": "api/v1/login",
        "GET_ALL_CLIENTS": "api/v1/clients/",
        "GET_PAYMENTS" : "api/v1/client/payments/",
        "CREATE_CLIENT": "api/v1/clients/",
        "NEW_CHITTY": "api/v1/client/chitty/",

    },
    CONSTANTS: {
        "GENERATE_REPLACEMENT": 1
    },
   
};

const prod = {
    API: {
        "BASE_URL": "http://35.169.202.148:3000//",
        "LOGIN_ENDPOINT": "api/v1/login",
        "GET_ALL_CLIENTS": "api/v1/clients/",
        "GET_PAYMENTS" : "api/v1/client/payments/",
        "CREATE_CLIENT": "api/v1/clients/",
        "NEW_CHITTY": "api/v1/client/chitty/",


    },
    CONSTANTS: {
        "GENERATE_REPLACEMENT": 1
    },
 
};

// const config = process.env.REACT_APP_STAGE === 'production'
//   ? prod
//   : dev;

//PRODUCTN ::  REACT_APP_STAGE=production  npm start
//STAGING ::  REACT_APP_STAGE=stage  npm start
//ACCEPTANCE  ::  REACT_APP_STAGE=acceptance  npm start
//DEV    :: npm start

let config;
if (process.env.REACT_APP_STAGE === 'production') {
    config = prod
}
else {
    config = dev
}

export const Config = {
    ...config
};
