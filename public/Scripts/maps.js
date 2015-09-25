var endingPo = [0, 0, 0];

function buildMaps(mapIdx) {
    var mapTemp = new THREE.Object3D();
    // var mapTemp = [];
    /***** 0 ******/
    if (mapIdx === 0) {

        console.log("building map");


        // note the starting point and the ending point should come to the last
        box = new gameElement(new inGameCoordinate(6, 5, 6), "endingPoint");
        mapTemp.add(box);

        var box = new gameElement(START, "startingPoint");
        // var box = new gameElement(new inGameCoordinate(6, 6, 1), "startingPoint");
        endingPo = [6, 5, 6];
        mapTemp.add(box);
    }
    /***** 1 ******/
    else if (mapIdx === 1) {

        for (var iX = 0; iX < UNIT_STEP; ++iX) {
            if (iX != 8) {
                for (var iY = 0; iY < UNIT_STEP; ++iY) {
                    box = new gameElement(new inGameCoordinate(iX, iY, 6), "box", 2);
                    mapTemp.add(box);
                    mapTemp.add(box);
                }
            }
        }

        // box = new gameElement(new inGameCoordinate(6, 6, 1), "startingPoint");


        box = new gameElement(new inGameCoordinate(6, 4, 1), "endingPoint");
        endingPo = [6, 4, 1];
        mapTemp.add(box);

        box = new gameElement(START, "startingPoint");
        mapTemp.add(box);

    }

    /***** 2 ******/
    else if (mapIdx === 9) {
        for (var iX = 0; iX < UNIT_STEP; ++iX) {
            if (iX != 8) {
                for (var iY = 0; iY < UNIT_STEP; ++iY) {
                    box = new gameElement(new inGameCoordinate(iX, iY, 6), "box", 2);
                    mapTemp.add(box);
                }
            }
        }

        // for (var iX = 0; iX < UNIT_STEP; ++iX) {
        //     if (iX != 4) {
        //         for (var iY = 0; iY < UNIT_STEP; ++iY) {
        //             box = new gameElement(new inGameCoordinate(iX, iY, 9), "box", 1);
        //             mapTemp.add(box);
        //         }
        //     }
        // }

        // box = new gameElement(new inGameCoordinate(6, 6, 1), "startingPoint");



        box = new gameElement(new inGameCoordinate(6, 6, 1), "endingPoint");
        mapTemp.add(box);
        endingPo = [6, 6, 1];


        box = new gameElement(START, "startingPoint");
        mapTemp.add(box);

    }



    /***** 3 ******/
    else if (mapIdx === 2) {
        var abspos = new absCoordinate();
        abspos.setbyInGame(0, 0, 3);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 3, UNIT_STEP * 12, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/RocksArid.jpg')
            }));
        box.position.set(abspos.x + UNIT_STEP, abspos.y + UNIT_STEP * 11 / 2, abspos.z);

        mapTemp.add(box);

        abspos.setbyInGame(4, 0, 3);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 8, UNIT_STEP * 12, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/RocksArid.jpg')
            }));
        box.position.set(abspos.x + UNIT_STEP * 7 / 2, abspos.y + UNIT_STEP * 11 / 2, abspos.z);

        mapTemp.add(box);


        abspos.setbyInGame(0, 0, 7);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 7, UNIT_STEP * 12, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/RocksArid.jpg')
            }));
        box.position.set(abspos.x + UNIT_STEP * 3, abspos.y + UNIT_STEP * 11 / 2, abspos.z);

        mapTemp.add(box);

        abspos.setbyInGame(8, 0, 7);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 4, UNIT_STEP * 12, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/RocksArid.jpg')
            }));
        box.position.set(abspos.x + UNIT_STEP * 3 / 2, abspos.y + UNIT_STEP * 11 / 2, abspos.z);

        mapTemp.add(box);

        // box = new gameElement(new inGameCoordinate(6, 6, 0), "startingPoint");


        box = new gameElement(new inGameCoordinate(6, 5, 1), "endingPoint");

        endingPo = [6, 5, 1];

        mapTemp.add(box);
        box = new gameElement(START, "startingPoint");

        mapTemp.add(box);

    }
    else if (mapIdx == 3) {
        var abspos = new absCoordinate();
        abspos.setbyInGame(0, 8, 6);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 12, UNIT_STEP * 4, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/brick_diffuse.jpg')
            }), 0);
        box.position.set(abspos.x + UNIT_STEP * (6 - 1 / 2), abspos.y + UNIT_STEP * (2 - 1 / 2), abspos.z);

        mapTemp.add(box);


        abspos.setbyInGame(0, 0, 6);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 4, UNIT_STEP * 8, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/brick_diffuse.jpg')
            }), 0);
        box.position.set(abspos.x + UNIT_STEP * (2 - 1 / 2), abspos.y + UNIT_STEP * (4 - 1 / 2), abspos.z);

        mapTemp.add(box);

        abspos.setbyInGame(5, 0, 6);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 7, UNIT_STEP * 8, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/brick_diffuse.jpg')
            }), 0);
        box.position.set(abspos.x + UNIT_STEP * 3, abspos.y + UNIT_STEP * (4 - 1 / 2), abspos.z);

        mapTemp.add(box);


        box = new gameElement(new inGameCoordinate(6, 5, 1), "endingPoint");
        endingPo = [6, 5, 1];

        mapTemp.add(box);
        box = new gameElement(START, "startingPoint");

        mapTemp.add(box);

    }

    else if (mapIdx == 4) {
        var abspos = new absCoordinate();
        abspos.setbyInGame(0, 8, 6);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 12, UNIT_STEP * 4, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/plywood.jpg')
            }), 0);
        box.position.set(abspos.x + UNIT_STEP * (6 - 1 / 2), abspos.y + UNIT_STEP * (2 - 1 / 2), abspos.z);

        mapTemp.add(box);


        abspos.setbyInGame(0, 0, 6);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 5, UNIT_STEP * 8, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/plywood.jpg')
            }), 0);
        box.position.set(abspos.x + UNIT_STEP * 2, abspos.y + UNIT_STEP * (4 - 1 / 2), abspos.z);

        mapTemp.add(box);

        abspos.setbyInGame(5, 0, 6);
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(UNIT_STEP * 7, UNIT_STEP * 7, UNIT_STEP),
            new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('Images/plywood.jpg')
            }), 0);
        box.position.set(abspos.x + UNIT_STEP * 3, abspos.y + UNIT_STEP * 3, abspos.z);

        mapTemp.add(box);


        box = new gameElement(new inGameCoordinate(1, 3, 1), "endingPoint");
        endingPo = [1, 3, 1];

        mapTemp.add(box);
        box = new gameElement(START, "startingPoint");

        mapTemp.add(box);

    }



    /***** 4 ******/

    return mapTemp;
}
