
export const startRegistr = 'startRegistr'
export const finishReg = 'finishReg'
export const regFail = 'regFail'

export const registerUser = (userData) => {
    return async (dispatch) => {
        dispatch(startRegistration())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            const data = await response.json()
            dispatch(registrationFinish(data))
        } catch (error) {
            dispatch(registrationFail(error.message))
        }
    }
}

export const startRegistration = () => ({ type: startRegistr })
export const registrationFinish = (user) => ({ type: finishReg, payload: user })
export const registrationFail = (error) => ({ type: regFail, payload: error })
