const knox = require('knox');
const fs = require('fs');

let secrets;
if(process.env.NODE_ENV == 'production') {
    secrets = process.env;
}

const client = knox.createClient({
    key: secrets.AWS_USR,
    secret: secrets.AWS_PSS,
    bucket: 'dannix'
});

function uploadS3(file) {
    return new Promise((resolve, reject) => {
        const s3Request = client.put(file.filename, {
            'Content-Type': file.mimetype,
            'Content-Length': file.size,
            'x-amz-acl': 'public-read'
        });
        const readStream = fs.createReadStream(file.path);
        readStream.pipe(s3Request);
        s3Request.on('response', s3Response => {
            const wasSuccessful = s3Response.statusCode == 200;
            console.log('WAS IT SUCCESSFUL', wasSuccessful);
            if (!wasSuccessful) {
                fs.unlink(file.path, (err) => {
                    console.log('in s3 err', err);
                    err ? reject('1') : reject(wasSuccessful);
                });
            } else {
                fs.unlink(file.path, (err) => {
                    console.log('in s3 err2', err);
                      err ? reject('3') : resolve();
                });
            }
        });
    });
}

function deleteS3(filename) {
    return new Promise((resolve, reject) => {
        client.deleteFile(filename, (err, res) => {
            if (err) {
                console.log('in s3 err3', err);
                reject('4');
            } else if (res.statusCode != 204) {
                console.log('in s3 err4', err);
                reject('5');
            } else {
                resolve();
            }
        });
    });
}

function unlinkFile(file) {
    return new Promise((resolve, reject) => {
        fs.unlink(file.path, (err) => {
            console.log('in s3 err5', err);
              err ? reject('6') : resolve();
         });
    });
}

module.exports.uploadS3 = uploadS3;
module.exports.deleteS3 = deleteS3;
module.exports.unlinkFile = unlinkFile;
