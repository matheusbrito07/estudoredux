const INITIAL_STATE = {}

export default function homeReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "GET_PEOPLE": 

            state = { 
                ...state,
                name: action.payload.name,
                eyeColor: action.payload.eye_color,
                birthYear: action.payload.birth_year,
                height: action.payload.height,
                mass: action.payload.mass
            }
            console.log(state)
            return state

        case "EDIT_NAME":
            state = { 
                ...state, 
                name: action.payload.name,
            }
            console.log(state)

            return state
        default: 
            return state
        
    }
}