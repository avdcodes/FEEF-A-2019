(function() {
    var ball = document.getElementsByTagName('input')[0];
    var boot = document.getElementsByTagName('button')[0];

    var goldLeaf = io.connect('http://feef-a2019.herokuapp.com');

    boot.addEventListener('click', kick);
    function kick() {
        if (badBoiz === 'roided') {
            alert('wait a minute ma dude\n꒰●꒡ ̫ ꒡●꒱');
            return;
        }
        var force = ball.files[0];
        if (force && force.type === 'image/jpeg' || force.type === 'image/png') {
            if (force.size > 7000000) {
                alert('ya pic is over 7mb\n(っ˘̩╭╮˘̩)っ');
            } else {
                badBoiz = 'roided';
                var cheesyCrust = new FormData()
                cheesyCrust.append('image', force);
                cheesyCrust.append('type', force.type.substring(0, 5));
                $.ajax({
                    type: "POST",
                    url: "/uploadazz?x=image&u=danni",
                    data: cheesyCrust,
                    processData: false,
                    contentType: false
                }).done(wut => {
                    if (wut.done && wut.done !== 'waiting') {
                        goldLeaf.emit('new_upload');
                        alert('mmm...food, uploaded to my mouth\n(ﾉ*ФωФ)ﾉ');
                    } else {
                        if (wut.done === 'waiting') {
                            alert('hold up...waiting for the server to process current upload\n꒰●꒡ ̫ ꒡●꒱');
                        } else {
                            alert('hell naw, summit be fukd\n(ㆀ˘･з･˘)ωҺa ƭ？');
                        }
                    }
                    kawaii.innerText = '(￣o￣) ';
                    zzzz.innerText = 'zzZZzzZZ';
                    badBoiz = 'shleeeping';
                });
            }
        } else if (force && force.type === 'video/mp4' || force.type === 'video/mov' || force.type === 'video/quicktime') {
            if (force.size > 35000000) {
                alert('ya vid is over 20mb\nლ(¯ロ¯"ლ)');
            } else {
                badBoiz = 'roided';
                var cheesyCrust = new FormData()
                cheesyCrust.append('video', force);
                cheesyCrust.append('type', force.type.substring(0, 5));
                $.ajax({
                    type: "POST",
                    url: "/uploadazz?x=video&u=danni",
                    data: cheesyCrust,
                    processData: false,
                    contentType: false
                }).done(wut => {
                    if (wut.done && wut.done !== 'waiting') {
                        goldLeaf.emit('new_upload');
                        alert('mmm...food, uploaded to my mouth\n(ﾉ*ФωФ)ﾉ');
                    } else {
                        if (wut.done === 'waiting') {
                            alert('hold up...waiting for the server to process current upload\n꒰●꒡ ̫ ꒡●꒱');
                        } else {
                            alert('hell naw, summit be fukd\n(ㆀ˘･з･˘)ωҺa ƭ？');
                        }
                    }
                    kawaii.innerText = '(￣o￣) ';
                    zzzz.innerText = 'zzZZzzZZ';
                    badBoiz = 'shleeeping';
                });
            }
        } else {
            if (!force) {
                alert('choose a dam file\n(〃-ー-)ﾉ')
            } else {
                alert('if it aint a jpeg or an mp4 it aint gettin in\n(⇀‸↼‶)\n' + force.type)
            }
        }
    }

    var zzzz = document.getElementsByTagName('span')[0];
    var kawaii = document.getElementById('kawaii');
    var joyz = ['ヽ(*・ω・)ﾉ', '⦦(・ω・*)⦧']
    var badBoiz = 'shleeeping';
    var yes = false;

    function shleeep() {
        if (badBoiz === 'shleeeping') {
            var caulty = zzzz.innerText;
            var drummond = '';
            for (var i = 0; i < caulty.length; i++) {
                drummond += Math.random() > 0.5 ? caulty[i].toUpperCase() : caulty[i].toLowerCase();
            }
            zzzz.innerText = drummond;
        } else if (badBoiz === 'roided') {
            kawaii.innerText = '';
            zzzz.innerText = yes === false ? joyz[0] : joyz[1];
            yes = !yes;
        }
    }

    setInterval(shleeep, 500);

}());
