import {
  UPDATE_NEW_NODES,
} from '../constants/actionConstants';

const initialState = {
  newNodes: {
    nodeInfo: []
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_NODES:
      return {
        ...state,
        newNodes: {
          nodeInfo: action.payload.nodeInfo ? action.payload.nodeInfo : state.newNodes.nodeInfo,
        },
      };
    default:
      return state;
  }
};
