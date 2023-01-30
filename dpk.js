const crypto = require("crypto");


const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const makeHash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}
 
function makeCandidate(event) {
  if(!event) return TRIVIAL_PARTITION_KEY;

  if( event.partitionKey ) return event.partitionKey;
  
  return makeHash(JSON.stringify(event));
}


exports.deterministicPartitionKey = (event) => {

  let candidate = makeCandidate(event);
  candidate = typeof candidate !== "string" ? JSON.stringify(candidate) : candidate;
  
  candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? makeHash(candidate) : candidate;

  return candidate;
};

exports.makeHash = makeHash;