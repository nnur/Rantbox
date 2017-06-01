
const initialState = [{
    body: 'this tupperware company is smelly and gross and I hope they all get shrunk and stuck in their too small boxes',
    about: 'gazebos'
}]


const rants = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_RANT': {
            console.log(action)
            return [...state, {body: action.body, about: action.about}]
        }
        default : return state
    }
}

export default rants