const express = require('express');
const router = express.Router();

const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: 'AWS_ACCESS_KEY'
    secretAccessKey: 'AWS_SECRET_KEY'
});

exports  = module.exports = {
    sign: function(filename, filetype) {
        let s3 = new aws.S3();

        let params = {
            Bucket: SOME_BUCKET,
            Key: filename,
            Expires: 60,
            ContentType: filetype
        };

        s3.getSignedUrl(‘putObject’, params, function(err, data) {
            if (err) {
                console.log(err);
                return err;
            } else {
                return data;
            }
        });
    }
};
