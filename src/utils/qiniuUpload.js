const qiniu = require('qiniu');

const putPolicy = {"scope": "blog", "deadline": 1567414348};

const encodedPutPolicy = urlSafeBase64Encode(putPolicy);

const sign = hmacSha1(encodedPutPolicy, 'mLTpbVbab33624DNCJiBFqG9xnOzpCxm791YR9t8');

const encodedSign = urlSafeBase64Encode(sign);

const uploadToken = ACCESS_KEY + ':' + encodedSign + ':' + encodedPutPolicy;

