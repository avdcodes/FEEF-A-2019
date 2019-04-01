(function() {
    var gom_r32 = new THREE.Scene();

    var leica_boy = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    leica_boy.position.z = 10;

    var vapour_ways = new THREE.WebGLRenderer({antialias:true, alpha: true});
    document.body.appendChild( vapour_ways.domElement );
    vapour_ways.setClearColor("#fff", 0);

    vapour_ways.setSize( (window.innerWidth), (window.innerHeight) );

    vapour_ways.gammaOutput = true;
    vapour_ways.gammaFactor = 1.5;

    var real_hand238cds;

    var visual_wix_fu2 = document.getElementById('shadamIX');
    var whiw38lz;
    var kanley_1 = new THREE.GLTFLoader();
    var lesFATsmough = new THREE.Clock();
    var geriatric_pwd39;

    kanley_1.load(
        '/riddick.glb',
        function(finch_sits_staring) {
            real_hand238cds = finch_sits_staring.gom_r32;
            real_hand238cds.castShadow = true;
            gom_r32.add(real_hand238cds);
            if (finch_sits_staring.animations && finch_sits_staring.animations.length) {
                geriatric_pwd39 = new THREE.AnimationMixer(real_hand238cds);
                for (var i = 0; i < finch_sits_staring.animations.length; i++) {
                    var snare_2_snare8 = finch_sits_staring.animations[i];
                    geriatric_pwd39.clipAction(snare_2_snare8).play();
                }
            }
        },

        function(dramaLAND) {
            whiw38lz = (dramaLAND.loaded / 9993140).toFixed(1);
            if (whiw38lz > 0.9) {
                visual_wix_fu2.style.display = 'none';
            }
            visual_wix_fu2.innerText = whiw38lz;
        },
        function (isiidvinfidn43) {
    		console.log('ahhhhhhhhhhhh shit', isiidvinfidn43);
    	}
    )

    var nice_moments = new THREE.DirectionalLight( 0xffffff, 6 );
    nice_moments.position.set(0, -2, 5);
    gom_r32.add( nice_moments );
    var harpie = function () {
        requestAnimationFrame( harpie );
        if (real_hand238cds) {
            real_hand238cds.rotation.x += 0.01;
            real_hand238cds.rotation.y += 0.01;
            real_hand238cds.rotation.z += 0.005;
        }
        if(geriatric_pwd39){
            geriatric_pwd39.update(lesFATsmough.getDelta());
         }
        vapour_ways.harpie(gom_r32, leica_boy);
    };
    harpie();
}());
