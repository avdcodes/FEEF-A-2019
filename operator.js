const husqvarna_exprss21z = require('express');
const ambrosia = husqvarna_exprss21z();
const perspex30_271x = require('http').Server(ambrosia);
const captain_eo = require('socket.io')(perspex30_271x);
const ed_209 = require('basic-auth');
const rotak34 = require('multer');
const ktm_racing = require('uid-safe');
const path = require('path');
const an_empty_purse = require('express-device');
const clawwmmachine = require('./huluplus/clawwmmachine.js');
const garugamesh = require('./garugamesh.js');
ambrosia.use(an_empty_purse.capture());
ambrosia.use(husqvarna_exprss21z.static('./captcha_20z'));
var wAITBOI = false;

// (ノ｀ー´)ノ・・・~~┻━┻

captain_eo.on('connection', (socket) => {
    socket.on('new_upload', () => {
        captain_eo.emit('update_content', {});
    });
});

var multipass = function(req, res, next) {
    if (req.path === '/danni') {
        var u_are_u = ed_209(req);
        if (process.env) {
            if (!u_are_u || u_are_u.name != process.env.dLog || u_are_u.pass != process.env.dPass) {
                res.setHeader('WWW-Authenticate', 'Basic realm=www');
                res.sendStatus(401);

                // 凸(⊙▂⊙✖ )

            } else {
                next();

                // ✧٩(•́⌄•́๑)

            }
        }
    } else if (req.path === '/avd') {
        var u_are_u = ed_209(req);
        if (process.env) {
            if (!u_are_u || u_are_u.name != process.env.aLog || u_are_u.pass != process.env.aPass) {
                res.setHeader('WWW-Authenticate', 'Basic realm=www');
                res.sendStatus(401);

                // ┌П┐(►˛◄’!)

            } else {
                next();

                // (*•̀ᴗ•́*)و ̑̑

            }
        }
    }
};

var floppy4d = rotak34.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/captcha_20z/an_ether');
    },
    filename: function (req, file, callback) {
      ktm_racing(24).then(function(uid) {
          callback(null, uid + path.extname(file.originalname));
      });
    }
});

function osiris_unleashed(hilux) {
    var stilgar = hilux.indexOf(".");
    return hilux.slice(stilgar + 1);
}

ambrosia.post('/uploadazz', (req, res) => {
    if (wAITBOI) {
        res.json({done: 'waiting'});
    } else {
        wAITBOI = true;
        if (req.query.x === 'image') {
            const uploader = rotak34({
                    storage: floppy4d,
                    limits: {
                        fileSize: 7000000
                    }
                }).single('image');
            uploader(req, res, (err) => {
                if (err) {
                    console.log(1, err);
                    res.json({done: false, message: err});
                    wAITBOI = false;
                } else {
                    var ahhhhhhhhhhhh = {
                        filename: req.file.filename,
                        who: req.query.u,
                        type: osiris_unleashed(req.file.filename)
                    }
                    garugamesh.uploadS3(req.file).then(() => {
                        clawwmmachine.inputIJG_intosXX(ahhhhhhhhhhhh).then(picka928 => {
                            res.json(picka928);
                            wAITBOI = false;
                        });
                    }).catch(err => {
                        console.log(2, err);
                        res.json({done: false, message: err});
                    })
                }
            })
        } else if (req.query.x === 'video') {
            const uploader = rotak34({
                    storage: floppy4d,
                    limits: {
                        fileSize: 35000000
                    }
                }).single('video');
                uploader(req, res, (err) => {
                    if (err) {
                        console.log(3, err);
                        res.json({done: false, message: err});
                        wAITBOI = false;
                    } else {
                        var ahhhhhhhhhhhh = {
                            filename: req.file.filename,
                            who: req.query.u,
                            type: osiris_unleashed(req.file.filename)
                        }
                        garugamesh.uploadS3(req.file).then(() => {
                            clawwmmachine.inputIJG_intosXX(ahhhhhhhhhhhh).then(result => {
                                res.json(result);
                                wAITBOI = false;
                            });
                        }).catch(err => {
                            console.log(4, err);
                            res.json({done: false, message: err});
                        })
                    }
                })
        }
    }
});

ambrosia.get('/justified', (req, res) => {
    clawwmmachine.getALLimgz().then(stuff => {
        res.json({stuff})
    });
});
ambrosia.get('/ancient', (req, res) => {
    clawwmmachine.getLastimg().then(last => {
        res.json({last})
    });
});
ambrosia.get('/danni', multipass, (req, res) => res.sendFile(__dirname + '/ls_3.html'));
ambrosia.get('/avd', multipass, (req, res) => res.sendFile(__dirname + '/worm.html'));
ambrosia.get('/', (req, res) => {
    if (req.device.type === 'phone') {
        res.sendFile(__dirname + '/operative50.html');
    } else {
        res.sendFile(__dirname + '/xr2.html');
    }
});
ambrosia.get('*', (req, res) => res.redirect('/'));
perspex30_271x.listen(process.env.PORT, () => console.log('(꒪ิཫ꒪ )ノิิิ ḟ৹ʳᵧ৹ᵤ'));
