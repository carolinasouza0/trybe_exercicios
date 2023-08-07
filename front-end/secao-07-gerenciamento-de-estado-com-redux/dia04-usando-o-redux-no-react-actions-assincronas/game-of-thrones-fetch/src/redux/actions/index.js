export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
    return {
        type: REQUEST_STARTED,
    }
};

function requestSuccessful(data) {
    return {
        type: REQUEST_SUCCESSFUL,
        payload: data,
    }
};

function requestFailed(error) {
    return {
        type: REQUEST_FAILED,
        payload: error,
    }
};

export function fetchCharacters(characterName) {
    return async (dispatch) => {
        dispatch(requestStarted());
        try {
            const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName}`);
            const data = await response.json();
            dispatch(requestSuccessful(data));
        } catch (error) {
            dispatch(requestFailed(error));
        }
    }
}