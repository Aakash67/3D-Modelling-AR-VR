
function handleMerchant(){
        var panorama,panorama2,panorama3,panorama4,panorama5,panorama6,panorama7,panorama8,panorama9, panorama10,panorama11,panorama12,panorama13,panorama14,panorama15,viewer;
       
    
    var scene = '../assets/room/9.jpg';
    var scene1 = '../assets/room/2.jpg';
    var scene2 = '../assets/room/3.jpg';
    var scene3 = '../assets/room/10.jpg';
    var scene4 = '../assets/room/11.jpg';
    var scene5 = '../assets/room/12.jpg';
    var scene6 = '../assets/room/13.jpg';
    var scene7 = '../assets/room/6.jpg';
    var scene8 = '../assets/room/5.jpg';
    var scene9 = '../assets/room/8.jpg';
    var scene10 = '../assets/room/7.jpg';
    var scene11 = '../assets/room/1.jp  g'; 
    var scene12 = '../assets/room/4.jpg'; 
    
    
    
        panorama = new window.PANOLENS.ImagePanorama(scene);
    
          panorama.addEventListener( 'load',function(){
    
            viewer.tweenControlCenter( new THREE.Vector3(100, 0, 340), 0 );
            
          });
        panorama2 = new window.PANOLENS.ImagePanorama(scene1);
        panorama2.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(20, 0, 0), 0 );
        });
       
       panorama3 = new window.PANOLENS.ImagePanorama(scene2);
       panorama3.addEventListener( 'load', function(){
        viewer.tweenControlCenter( new THREE.Vector3(-100, 0, 0), 10 );
      });
      
        panorama4 = new window.PANOLENS.ImagePanorama(scene3);
        panorama4.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(0,0,60),0 );
        });
        panorama5 = new window.PANOLENS.ImagePanorama(scene4);
        panorama5.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(100,0,0),0 );
        });
        panorama6 = new window.PANOLENS.ImagePanorama(scene5);
         panorama6.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(50,0,0),0 );
        });
        panorama7 = new window.PANOLENS.ImagePanorama(scene6);
        panorama7.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(10,0,0),0 );
        });
        panorama8 = new window.PANOLENS.ImagePanorama(scene11);
        panorama8.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(10,0,0),0 );
        });
        panorama9 = new window.PANOLENS.ImagePanorama(scene12);
        panorama9.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(50,0,0),0 );
        });
        panorama10 = new window.PANOLENS.ImagePanorama(scene8);
        panorama10.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(-100,0,0),0 );
        });
        panorama11 = new window.PANOLENS.ImagePanorama(scene7);
        panorama11.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(0,0,50),0 );
        });
        panorama12 = new window.PANOLENS.ImagePanorama(scene10);
        panorama12.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(0,0,50),0 );
        });
        panorama13 = new window.PANOLENS.ImagePanorama(scene9);
         panorama13.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(10,0,20),0 );
        });
        panorama14 = new window.PANOLENS.ImagePanorama(scene12);
         panorama14.addEventListener( 'load', function(){
          viewer.tweenControlCenter( new THREE.Vector3(10,0,0),0 );
        });
        panorama15 = new window.PANOLENS.ImagePanorama(scene10);
        panorama15.addEventListener( 'load', function(){
         viewer.tweenControlCenter( new THREE.Vector3(0,0,-50),0 );
       });
     
       viewer = new window.PANOLENS.Viewer({
        output: 'console',
        autoHideInfospot: false,
        autoHideLink:true,
                          
      });
      
        viewer.add(panorama);
        viewer.add(panorama2);
        viewer.add(panorama3);
        viewer.add(panorama4);
        viewer.add(panorama5);
        viewer.add(panorama6);
        viewer.add(panorama7);
        viewer.add(panorama8);
        viewer.add(panorama9);
        viewer.add(panorama10);
        viewer.add(panorama11);
        viewer.add(panorama12);
        viewer.add(panorama13);
        viewer.add(panorama14);
        viewer.add(panorama15);
    
    
        panorama.link( panorama2, new window.THREE.Vector3(  9000, -1800, 149.48),800 );
        panorama.link( panorama13, new window.THREE.Vector3( 300, -200, -1000.88 ),100 );
        panorama.link( panorama3, new window.THREE.Vector3(400, -200, 1000.88 ),100 )
        panorama2.link( panorama8, new window.THREE.Vector3( 9000, -2900, 149.48 ),900 );
        panorama2.link( panorama, new window.THREE.Vector3( -8000, -2200, -549.88 ),700 );
        panorama3.link( panorama4, new window.THREE.Vector3( 9000, -3200, 549.88 ),700 );
        panorama3.link( panorama10, new window.THREE.Vector3( -8000, -1200, 549.88 ),700 );
        panorama3.link( panorama, new window.THREE.Vector3( -7000, -3000, 5000.88 ),700 );
        panorama4.link( panorama5, new window.THREE.Vector3( -9000, -3200, 549.88 ) ,700);
        panorama4.link( panorama3, new window.THREE.Vector3( 200, -500, 1000.88 ) ,200);
        panorama5.link( panorama6, new window.THREE.Vector3( -9000, -3200, 549.88 ),700 );
        panorama5.link( panorama4, new window.THREE.Vector3( 9000, -3200, -549.88 ),700 );
        panorama6.link( panorama7, new window.THREE.Vector3( -9000, -3200, 549.88 ),700 );
        panorama6.link( panorama5, new window.THREE.Vector3( 200, -950, 3000.88 ),300 );
        panorama7.link( panorama8, new window.THREE.Vector3( -9000, -3200, 549.88 ) ,700);
        panorama7.link( panorama6, new window.THREE.Vector3( 9000, -3200, 549.88 ) ,700);
        panorama11.link( panorama12, new window.THREE.Vector3( 9000, -3000, 549.88 ) ,700);
        panorama11.link( panorama10, new window.THREE.Vector3( -9000, -3000, 549.88 ) ,700);
        panorama10.link( panorama9, new window.THREE.Vector3( -9000, -3200, 549.88 ),700 );
        panorama10.link( panorama11, new window.THREE.Vector3(200, -900, -3000.88 ),300 );
        panorama13.link( panorama, new window.THREE.Vector3( -9000, -3200, 549.88 ),700 );
        panorama13.link( panorama12, new window.THREE.Vector3( 9000, -3200, 549.88 ),700 );
        panorama8.link( panorama7, new window.THREE.Vector3( 200, -800, 3000.88 ),300 );
        panorama8.link( panorama9, new window.THREE.Vector3( -200, -800, -2500.88 ),300 );
        panorama8.link( panorama2, new window.THREE.Vector3( -4000, -2000, 949.88 ),600 );
        panorama9.link( panorama8, new window.THREE.Vector3( -5500, -2500, -949.48  ),700 );
        panorama9.link( panorama10, new window.THREE.Vector3( 9000, -1800, -949.48 ),700 );
        panorama12.link( panorama11, new window.THREE.Vector3( 300, -900, 3149.48 ),300 );
        panorama12.link( panorama13, new window.THREE.Vector3( -1500, -600, 100.88 ),200 );
        
        function setClampTexture ( texture ) {
          var callback;
          if ( arguments.length > 1 ) {
            callback = arguments[ 0 ];
            texture = arguments[ 1 ];
            callback();
          }
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          this.material.visible = true;
          this.material.map = texture;
          this.material.needsUpdate = true;
        } 
    
    
    //panorama3
    
    let pano1_1 =new PANOLENS.Tile(6,6); //tile 3
          pano1_1.rotation.y=Math.PI;
          pano1_1.position.set(-580,0,2075);
          pano1_1.material.transparent=true;
          pano1_1.material.opacity=0;
          let backText1=new PANOLENS.Tile(60,60);
          backText1.rotation.y=Math.PI*2;
          backText1.scale.multiplyScalar(11);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/1.png',setClampTexture.bind(backText1));
          pano1_1.add(backText1);
        panorama.add(pano1_1);
    
        let pano1_2 =new PANOLENS.Tile(6,6); //tile 2
        pano1_2.rotation.y=Math.PI;
        pano1_2.position.set(490,0,2075);
        pano1_2.material.transparent=true;
        pano1_2.material.opacity=0;
        let backText2=new PANOLENS.Tile(60,60);
        backText2.rotation.y=Math.PI*4;
        backText2.scale.multiplyScalar(11);
        PANOLENS.Utils.TextureLoader.load('assets/imagesvs/2.png',setClampTexture.bind(backText2));
        pano1_2.add(backText2);
      panorama.add(pano1_2);
    
    
      let pano1_3 =new PANOLENS.Tile(6,6); //tile 5
      pano1_3.rotation.y=Math.PI/2;
      pano1_3.position.set(-185,0,120);
      pano1_3.material.transparent=true;
      pano1_3.material.opacity=0;
      let backText3=new PANOLENS.Tile(70,70);
      backText3.rotation.y=Math.PI*4;
      backText3.scale.multiplyScalar(1.8);
      PANOLENS.Utils.TextureLoader.load('assets/imagesvs/7.png',setClampTexture.bind(backText3));
      pano1_3.add(backText3);
    panorama.add(pano1_3);
    
    let pano1_4 =new PANOLENS.Tile(6,6); //tile 6
      pano1_4.rotation.y=Math.PI/2;
      pano1_4.position.set(-1100,0,-450);
      pano1_4.material.transparent=true;
      pano1_4.material.opacity=0;
      let backText4=new PANOLENS.Tile(70,70);
      backText4.rotation.y=Math.PI*6;
      backText4.scale.multiplyScalar(10.0);
      PANOLENS.Utils.TextureLoader.load('assets/imagesvs/4.png',setClampTexture.bind(backText4));
      pano1_4.add(backText4);
    panorama.add(pano1_4);
    
    let pano1_5 =new PANOLENS.Tile(6,6); //tile 4
      pano1_5.rotation.y=Math.PI/2;
      pano1_5.position.set(-380,0,675);
      pano1_5.material.transparent=true;
      pano1_5.material.opacity=0;
      let backText5=new PANOLENS.Tile(70,70);
      backText5.rotation.y=Math.PI*6;
      backText5.scale.multiplyScalar(3.7);
      PANOLENS.Utils.TextureLoader.load('assets/imagesvs/5.png',setClampTexture.bind(backText5));
      pano1_5.add(backText5);
    panorama.add(pano1_5);
    
    let pano1_6 =new PANOLENS.Tile(6,6); //tile 1
      pano1_6.rotation.y=Math.PI;
      pano1_6.position.set(1550,0,2075);
      pano1_6.material.transparent=true;
      pano1_6.material.opacity=0;
      let backText6=new PANOLENS.Tile(70,70);
      backText6.rotation.y=Math.PI*2;
      backText6.scale.multiplyScalar(9.0);
      PANOLENS.Utils.TextureLoader.load('assets/imagesvs/6.png',setClampTexture.bind(backText6));
      pano1_6.add(backText6);
    panorama.add(pano1_6);
    
    
    let pano1_7 =new PANOLENS.Tile(6,6); //tile 7
      pano1_7.rotation.y=Math.PI/2;
      pano1_7.position.set(-490,0,-750);
      pano1_7.material.transparent=true;
      pano1_7.material.opacity=0;
      let backText7=new PANOLENS.Tile(70,70);
      backText7.rotation.y=Math.PI*6;
      backText7.scale.multiplyScalar(4.5);
      PANOLENS.Utils.TextureLoader.load('assets/imagesvs/1.png',setClampTexture.bind(backText7));
      pano1_7.add(backText7);
    panorama.add(pano1_7);
    
    
    let pano1_8 =new PANOLENS.Tile(6,6); //tile 8
      pano1_8.rotation.y=Math.PI/2;
      pano1_8.position.set(-410,0,-1100);
      pano1_8.material.transparent=true;
      pano1_8.material.opacity=0;
      let backText8=new PANOLENS.Tile(70,70);
      backText8.rotation.y=Math.PI*6;
      backText8.scale.multiplyScalar(3.8);
      PANOLENS.Utils.TextureLoader.load('assets/imagesvs/2.png',setClampTexture.bind(backText8));
      pano1_8.add(backText8);
    panorama.add(pano1_8);
    
    
    let pano1_9 =new PANOLENS.Tile(40,40); //tile 24
          pano1_9.rotation.y=Math.PI;
          pano1_9.position.set(150,0,70);
          pano1_9.material.transparent=true;
          pano1_9.material.opacity=0;
          let backText9=new PANOLENS.Tile(70,70);
          backText9.rotation.y=Math.PI/2;
          backText9.scale.multiplyScalar(1.3);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/3.png',setClampTexture.bind(backText9));
          pano1_9.add(backText9);
        panorama.add(pano1_9);

        let pano1_20 =new PANOLENS.Tile(40,40); //tile 19
          pano1_20.rotation.y=Math.PI;
          pano1_20.position.set(650,0,-70);
          pano1_20.material.transparent=true;
          pano1_20.material.opacity=0;
          let backText20=new PANOLENS.Tile(40,40);
          backText20.rotation.y=Math.PI/2;
          backText20.scale.multiplyScalar(2.5);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/3.png',setClampTexture.bind(backText20));
          pano1_20.add(backText20);
        panorama.add(pano1_20);
    
    
        let pano1_10 =new PANOLENS.Tile(0,0); //tile 18
          pano1_10.rotation.y=Math.PI;
          pano1_10.position.set(800,0,-300);
          pano1_10.material.transparent=true;
          pano1_10.material.opacity=0;
          let backText10=new PANOLENS.Tile(70,70);
          backText10.rotation.y=Math.PI/2;
          backText10.scale.multiplyScalar(1.8);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/4.png',setClampTexture.bind(backText10));
          pano1_10.add(backText10);
        panorama.add(pano1_10);
    
    
        let pano1_11 =new PANOLENS.Tile(0,0); //tile 17
        pano1_11.rotation.y=Math.PI;
        pano1_11.position.set(980,0,-615);
        pano1_11.material.transparent=true;
        pano1_11.material.opacity=0;
        let backText11=new PANOLENS.Tile(40,40);
        backText11.rotation.y=Math.PI/2;
        backText11.scale.multiplyScalar(4.0);
        PANOLENS.Utils.TextureLoader.load('assets/imagesvs/7.png',setClampTexture.bind(backText11));
        pano1_11.add(backText11);
      panorama.add(pano1_11);
    
    
      let pano1_12 =new PANOLENS.Tile(0,0); //tile 10
          pano1_12.rotation.y=Math.PI*2;
          pano1_12.position.set(-130,0,-895);
          pano1_12.material.transparent=true;
          pano1_12.material.opacity=0;
          let backText12=new PANOLENS.Tile(40,40);
          backText12.rotation.y=Math.PI*8;
          backText12.scale.multiplyScalar(3.6);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/6.png',setClampTexture.bind(backText12));
          pano1_12.add(backText12);
        panorama.add(pano1_12);
    
        let pano1_13 =new PANOLENS.Tile(0,0); //tile 11
          pano1_13.rotation.y=Math.PI*2;
          pano1_13.position.set(375,0,-3105);
          pano1_13.material.transparent=true;
          pano1_13.material.opacity=0;
          let backText13=new PANOLENS.Tile(40,40);
          backText13.rotation.y=Math.PI*8;
          backText13.scale.multiplyScalar(12.5);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/1.png',setClampTexture.bind(backText13));
          pano1_13.add(backText13);
        panorama.add(pano1_13);
    
        /*let pano1_14 =new PANOLENS.Tile(0,0);
        pano1_14.rotation.y=Math.PI*2;
        pano1_14.position.set(2400,0,-3105);
        pano1_14.material.transparent=true;
        pano1_14.material.opacity=0;
        let backText14=new PANOLENS.Tile(70,70);
        backText14.rotation.y=Math.PI/6;
        backText14.scale.multiplyScalar(25);
        PANOLENS.Utils.TextureLoader.load('assets/imagesvs/2.png',setClampTexture.bind(backText14));
        pano1_14.add(backText14);
      panorama.add(pano1_14);*/
    
      let pano1_15 =new PANOLENS.Tile(0,0); //tile 9
      pano1_15.rotation.y=Math.PI/2;
      pano1_15.position.set(-370,0,-1400);
      pano1_15.material.transparent=true;
      pano1_15.material.opacity=0;
      let backText15=new PANOLENS.Tile(40,40);
      backText15.rotation.y=Math.PI*6;
      backText15.scale.multiplyScalar(6);
      PANOLENS.Utils.TextureLoader.load('assets/imagesvs/7.png',setClampTexture.bind(backText15));
      pano1_15.add(backText15);
    panorama.add(pano1_15);
    
    
    let pano1_16 =new PANOLENS.Tile(6,6); //tile 16
          pano1_16.rotation.y=Math.PI;
          pano1_16.position.set(1810,0,-1600);
          pano1_16.material.transparent=true;
          pano1_16.material.opacity=0;
          let backText16=new PANOLENS.Tile(60,60);
          backText16.rotation.y=Math.PI/2;
          backText16.scale.multiplyScalar(4.7);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/4.png',setClampTexture.bind(backText16));
          pano1_16.add(backText16);
        panorama.add(pano1_16);
    
    
        /*let pano1_17 =new PANOLENS.Tile(6,6);
          pano1_17.rotation.y=Math.PI*2;
          pano1_17.position.set(-1500,0,-750);
          pano1_17.material.transparent=true;
          pano1_17.material.opacity=0;
          let backText17=new PANOLENS.Tile(60,60);
          backText17.rotation.y=Math.PI*2;
          backText17.scale.multiplyScalar(8.5);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/5.png',setClampTexture.bind(backText17));
          pano1_17.add(backText17);
        panorama.add(pano1_17);*/
    
    
        let pano1_18 =new PANOLENS.Tile(40,40); //tile 28
          pano1_18.rotation.y=Math.PI;
          pano1_18.position.set(57,0,-130);
          pano1_18.material.transparent=true;
          pano1_18.material.opacity=0;
          let backText18=new PANOLENS.Tile(40,40);
          backText18.rotation.y=Math.PI/2;
          backText18.scale.multiplyScalar(0.8);
          PANOLENS.Utils.TextureLoader.load('assets/imagesvs/7.png',setClampTexture.bind(backText18));
          pano1_18.add(backText18);
        panorama.add(pano1_18);
    
        let pano1_19 =new PANOLENS.Tile(0,0); //tile 27
        pano1_19.rotation.y=Math.PI*2;
        pano1_19.position.set(630,0,-795);
        pano1_19.material.transparent=true;
        pano1_19.material.opacity=0;
        let backText19=new PANOLENS.Tile(40,40);
        backText19.rotation.y=Math.PI*8;
        backText19.scale.multiplyScalar(6);
        PANOLENS.Utils.TextureLoader.load('assets/imagesvs/7.png',setClampTexture.bind(backText19));
        pano1_19.add(backText19);
      panorama.add(pano1_19);
    
    
    
    
    
    
    
    
        
              
        
    
    }
    
    
    
 
     
    
    
    
    
    
    