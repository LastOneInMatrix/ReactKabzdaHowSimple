const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    CHANGE_TOGGLE: 'CHANGE_TOGGLE'
} as const;
type ActionsConstType = typeof ACTIONS;

export type TodoType = {
    id: string;
    tittle: string;
    isActive: boolean;
};
const creatTodo = (name: string) => {
    return {
        id: Date.now().toString(),
        tittle: name,
        isActive: true,
}}

export const addTodoAC = (name: string) => {
    return {type: ACTIONS.ADD_TODO, payload: {name: name}} as const
}
export const deleteTodoAC = (id: string) => {
    return {type: ACTIONS.DELETE_TODO, payload: {id}} as const
}
export const changeToggleAC = (id: string) => {
    return {type: ACTIONS.CHANGE_TOGGLE, payload: {id}} as const
}


export type ActionsType =
    ReturnType<typeof addTodoAC>
    | ReturnType<typeof deleteTodoAC>
    | ReturnType<typeof changeToggleAC>
    | {type: 'fake'}


export type StateType = Array<TodoType>

export const todoListReducer = (state: StateType, action: ActionsType): StateType => {
    switch (action.type) {
        case ACTIONS.ADD_TODO: {
            let newTodo = creatTodo(action.payload.name);
            return  [...state, newTodo];

        }
        case ACTIONS.DELETE_TODO: {
            return state.filter( t => t.id !== action.payload.id)
        }
        case ACTIONS.CHANGE_TOGGLE: {
            console.log()
            return state.map(t => t.id === action.payload.id ? {...t, isActive: !t.isActive} : t)
        }
        default:
            throw new Error('Something bad happened');
    }
}

export  type R = typeof todoListReducer;