import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    Valor1: function (state, action) {
        return {
            valor1: 3
        }
    },
    Valor2: function (state, action) {
        return {
            valor2: 10
        }
    },
    // De uma forma diferente do modelo da atividade
    Soma: function (state, action) {
        switch(action.type){
            case 'NOVO_VALOR':
                return{
                    soma: action.payload
                }
            default:
                return{
                    soma: 0
                }
        }
    },
    Mult: function (state, action) {
        switch(action.type){
            case 'NOVO_VALOR':
                return{
                    mult: action.payload
                }
            default:
                return{
                    mult: 0
                }
        }
    },
    Maior: function (state, action) {
        switch(action.type){
            case 'NOVO_VALOR':
                return{
                    maior: action.payload
                }
            default:
                return{
                    maior: 0
                }
        }
    },
})
//criando o store a partir dos reducers
function storeConfig() {
    return createStore(reducers)
}
export default storeConfig