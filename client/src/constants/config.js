export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loading, Please wait"
    },
    success: {
        title: "Success...",
        message: "Data Successfully Loaded"
    },
    responseFailure: {

        title: "Error...",
        message: "An error occured while fetching response from the server.Please try again"
    },
    requestFailure: {

        title: "Error...",
        message: "An error occured while parsing  request data"
    },

    networkError: {

        title: "Error...",
        message: "Unable to connect with the server. Please chcek internet connectivity and try again later"
    },
}


//api call
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' }
}
