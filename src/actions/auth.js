import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const register = ({ name, email, password }) => async (dispatch) => {
    const config = {
        headers {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({
        name, email, password
    })
    
};
