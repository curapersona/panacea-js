import {
  ADD_CERTIFICATION,
  DATA_UPLOAD,
  REVOKE_CERTIFICATION,
  VOTE,

  ADD_CERTIFICATION_PAYLOAD,
  ADD_RECORD_PAYLOAD,
  DEFAULT_PAYLOAD,
  REVOKE_CERTIFICATION_PAYLOAD,
  VOTE_PAYLOAD,
} from './utils/constants';


const createDataPayload = hash => ({
  Hash: Buffer.from(hash, 'hex').toString('base64'),
});

const setPayload = (txType) => {
  switch (txType) {
    case DATA_UPLOAD:
      return ADD_RECORD_PAYLOAD;
    case VOTE:
      return VOTE_PAYLOAD;
    case ADD_CERTIFICATION:
      return ADD_CERTIFICATION_PAYLOAD;
    case REVOKE_CERTIFICATION:
      return REVOKE_CERTIFICATION_PAYLOAD;
    default:
      return DEFAULT_PAYLOAD;
  }
};


export default {
  createDataPayload,
  setPayload,
};
