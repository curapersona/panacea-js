import protobuf from 'protobufjs/light';


const genPayloadBuf = (payload, type, jsonDescriptor) => {
  if (payload === undefined || payload === null) return null;
  const root = protobuf.Root.fromJSON(jsonDescriptor);
  const PayloadTarget = root.lookupType(type.charAt(0).toUpperCase() + type.slice(1));
  const errMsg = PayloadTarget.verify(payload);
  if (errMsg) throw Error(errMsg);

  const message = PayloadTarget.create(payload);
  return PayloadTarget.encode(message).finish();
};

const recoverFromPayload = (payload, type, jsonDescriptor) => {
  const payloadBuf = Buffer.from(payload, 'hex');
  const root = protobuf.Root.fromJSON(jsonDescriptor);
  const PayloadTarget = root.lookupType(type.charAt(0).toUpperCase() + type.slice(1));
  const PAYLOAD = PayloadTarget.decode(payloadBuf);

  // To remove useless protobuffer constants
  return JSON.parse(JSON.stringify(PAYLOAD));
};

export default {
  genPayloadBuf,
  recoverFromPayload,
};
