import axios from 'axios';
const initialState = {
    Data: {}
}

axios.get('https://lt-fn-cdn001.akamaized.net/common/en/Etc:UTC/cricket/get_scorecard/39497519')
    .then(function (response) {
        // handle success
        initialState.Data = response.data
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

const changeNumber = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}
export default changeNumber;