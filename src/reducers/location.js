export default function(state = "Seattle, WA",
action){
    if (action.payload === 'CHANGE_LOCATION') {
        return action.payload
    } else {
        return state;
    }
}