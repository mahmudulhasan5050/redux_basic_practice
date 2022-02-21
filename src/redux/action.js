export const userLogin = () => {

    return {
        type: 'USER_LOGIN',
        
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}


//action creator funtion to make UpdateUser dynamic
export const updateUser = (first, last) => {
    return {
        type: 'UPDATE_USER',
        payload: {
            firstName: first,
            lastName: last
        }
    }
}
///////////// DOG ///////////////////////// 
export const fetchDogSuccess = data =>{
    return { type: 'FATCH_DOG_SUCCESS', payload: data }
}
export const fetchDogError = error =>{
    return { type: 'FATCH_DOG_ERROR', payload: error }
}

export const fetchDog = () => {
    return async (dispatc) => {
        try {
            const response = await fetch(
                'https://restcountries.com/v2/all'
            ).then(res => res.json())
         console.log("response from thunk dispatc    : ", dispatc)
            dispatc(fetchDogSuccess(response))
        } catch (error) {
            dispatc(fetchDogError(error))
        }
    }
}