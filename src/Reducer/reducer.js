
export const reducer = (state,action) =>{
    switch(action.type){
        case 'ADD-POST':{
            return [...state,{...action.payload}]
        }
        default:{
            return [...state]
        }
    }
}

