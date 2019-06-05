import axios from 'axios';
import store from '../store/store';

const URL_USER = '/api/v3.1/users';
const oauthKey = 'oauth_snMDtxJzhaLR13BIEAFNSiqjdXkYZ0uvowpyrKC4';
const userId = '5cdca3d814ddee0064a05b17';
const publicKey = 'public_key_qWCwNJcVPT2jMY105s7K6bUDm3gixoXkf94ZrR8F';
const ipAddress = '172.69.22.117';

// localStorage.setItem('userID', '5b5f95dcf122e319740dbc76');
// localStorage.setItem('synapseOauth', 'oauth_y4NKwCgfj2QF1svkoV5pqHuU7Im8OXaxZTAtd0hL');
// localStorage.setItem('ipAddress', '172.69.22.117');
// localStorage.setItem('publicKey', 'public_key_n7YOZjuGemJ9cPWBKQLNMH2h0iaU1X0v5CrdgAIx');

export default function fetchNodes(type) {
  let URL_NODE = `${URL_USER}/${userId}/nodes`;
  if (type) {
    URL_NODE += `?type=${type}`;
  }
  return axios.get(URL_NODE, {
    headers: {
      'Content-Type': 'application/json',
      'X-SP-USER': `${oauthKey}|`,
      'X-SP-USER-IP': '172.69.22.117'
    }
  });
}
