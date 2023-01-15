export const contractReducer = (state: any, action: { type: any; payload: any }) => {
    switch (action.type) {
            case 'SET_IPFS':
                return {
                   ...state,
                    ipfs: action.payload
                }
            case 'ADD_CANDIDATE':
                return {
                   ...state,
                    isAdded: true
                }
           case 'SET_CANDIDATES':
                return {
                    ...state,
                    candidates: action.payload
                }           
            case 'SET_DETAILS': 
        
            return {
                ...state,
                isElectionState: action?.payload?.isElectionStarted,
                startTime: action.payload?.startTime?.toString(),
                deadline: action.payload?.deadline?.toString(),
                elapsed: action.payload?.elapsed
            }

            case 'SET_CANDIDATE':
                return {
                    ...state,
                    candidate: action?.payload
                }
        default: return state
            
    }
}