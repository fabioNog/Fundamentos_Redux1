import { createStore } from 'redux';


const INITIAL_STATE = {
    activeLesson: null,
    activeModule: null,
    modules: [
        {
            id: 1,
            title: "Testando Redux",
            lessons: [
                { id: 1, title: "Primeira Aula" },
                { id: 2, title: "Segunda Aula" },
            ]
        },
        {
            id: 2,
            title: "Testando Laravel",
            lessons: [
                { id: 1, title: "Primeira Aula" },
                { id: 2, title: "Segunda Aula" },
            ]
        },
    ]
}

function reducer(state = INITIAL_STATE, action) {

    console.log(action);
    return state
}


const store = createStore(reducer);


export default store;