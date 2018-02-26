export default function({ dispatch }) {
    return next => action => {
        //If action doesn't have a payload
        // or, the payload doesn't have a .then property 
        // we don't care about it, send it on.
        if(!action.payload || !action.payload.then){
            console.log('we dont have a promise', action)
            return next(action);
        }

        // Make sure the actions promise resolves
        action.payload
        .then(function(response) {
            console.log('we have a promise', action)
           //crreate the new action but replace the promise with the response data
           const newAction =  { ...action, payload: response };
           dispatch(newAction);
        });
       
    };
}