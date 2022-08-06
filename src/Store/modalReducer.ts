
interface ModalStatus {
    type: string
    active: boolean;
    id?:number
}

const defaultState: boolean = false

const modalReducer = (state = defaultState, action: ModalStatus) => {
    switch (action.type) {
        case "modalAdd":
            return {
                type: 'modalAdd',
                active: true
            }
        case "modalUpdate":
            return {
                type: 'modalUpdate',
                active: true,
                id:action.id
            }

            case "modalCancel":
                return {
                    type: '',
                    active: false
                }


        default:
            return state
    }
}
export default modalReducer