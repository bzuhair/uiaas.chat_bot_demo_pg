import {
  UPDATE_NEW_NODES,
} from '../constants/actionConstants';

export default function updateNewNodes(nodeInfo) {
  return ({
    type: UPDATE_NEW_NODES,
    payload: {
      nodeInfo
    }
  });
}
