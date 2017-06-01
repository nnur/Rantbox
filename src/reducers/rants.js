
const initialState = [{
    body: 'i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child i hate this stupid gazebo the roof fell down on my 5 yr old child',
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