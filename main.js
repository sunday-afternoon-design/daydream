import paper from 'paper';

window.onload = function() {
    paper.setup('myCanvas');
    let background = new paper.Path.Rectangle(-500, -1500, window.innerWidth + 1500, window.innerHeight + 1500);
    background.fillColor = '#C2E4F0';
    var pointcount = 6;
    let index = map(window.innerWidth, 0, 2048, 0, 1);


    let mid = window.innerWidth * .2;
    let bottom = (257.1 - 189.9) * index + mid;
    let top = (137.9 - 189.9) * index + mid;


    let anchor = window.innerWidth / 2 - 100 * index

    var strokenum = map(window.innerWidth, 0, 2048, .2, 5);
    var speed = 2;



    var visibleHandle = false;

    var startpoint = new paper.Point(900 * index, mid);
    var mousePos = startpoint;
    var mousechangeYhandleIn = 100 * index;
    var y8S, y7S
    var day, dream

    var moveHeight
    var basicHeight
    var points = pointcount;
    var pointsdouble = points * 2;
    var moveline = new paper.Path();
    var pointsdoubleDE2 = pointsdouble - 2;
    var pointsdoubleDE1 = pointsdouble - 1;
    // let background = new paper.Path.Rectangle(-500, -1500, window.innerWidth + 1500, window.innerHeight + 1500);
    // background.fillColor = '#C2E4F0';
    function drawthetype() {

        // DAY
        var d1 = new paper.Point(252.8 * index, top - 72.8 * index);
        var d1S = new paper.Segment(d1, null, null);

        var d2 = new paper.Point(87.5 * index, bottom);
        var d2handleIn = new paper.Point(41 * index, 0);
        var d2handleOut = new paper.Point(-41 * index, 0);
        var d2S = new paper.Segment(d2, d2handleIn, d2handleOut);

        var d3 = new paper.Point(163.6 * index, top - 0.9 * index);
        var d3handleIn = new paper.Point(-63.8 * index, 0);
        var d3handleOut = new paper.Point(60.1 * index, 0);
        var d3S = new paper.Segment(d3, d3handleIn, d3handleOut);

        var d4 = new paper.Point(138.7 * index, bottom);
        var d4handleIn = new paper.Point(-50.85 * index, 0);
        var d4handleOut = new paper.Point(29.95 * index, 0);
        var d4S = new paper.Segment(d4, d4handleIn, d4handleOut);

        var d5 = new paper.Point(217.4 * index, mid);
        var d5S = new paper.Segment(d5, null, null);

        var d = new paper.Path(d1S, d2S, d3S, d4S, d5S);
        d.strokeColor = 'black';
        d.strokeCap = 'round';

        var a1 = new paper.Point(327.3 * index, top);
        var a1S = new paper.Segment(a1, null, null);

        var a2 = new paper.Point(211.1 * index, bottom);
        var a2handleIn = new paper.Point(35 * index, 0);
        var a2handleOut = new paper.Point(-34.5 * index, 0);
        var a2S = new paper.Segment(a2, a2handleIn, a2handleOut);

        var a3 = new paper.Point(291.8 * index, top - 0.9 * index);
        var a3handleIn = new paper.Point(-68.8 * index, 0);
        var a3handleOut = new paper.Point(51.1 * index, 0);
        var a3S = new paper.Segment(a3, a3handleIn, a3handleOut);

        var a4 = new paper.Point(260.9 * index, bottom);
        var a4handleIn = new paper.Point(-42.1 * index, 0);
        var a4handleOut = new paper.Point(26.4 * index, 0);
        var a4S = new paper.Segment(a4, a4handleIn, a4handleOut);

        var a5 = new paper.Point(337.9 * index, mid);
        var a5S = new paper.Segment(a5, null, null);

        var a = new paper.Path(a1S, a2S, a3S, a4S, a5S);
        a.strokeColor = 'black';
        a.strokeCap = 'round';

        var y1 = new paper.Point(379.5 * index, top);
        var y1S = new paper.Segment(y1, null, null);

        var y2 = new paper.Point(311.3 * index, bottom);
        var y2handleIn = new paper.Point(-34.7 * index, 0);
        var y2handleOut = new paper.Point(19.65 * index, 0);
        var y2S = new paper.Segment(y2, y2handleIn, y2handleOut);

        var y3 = new paper.Point(389.4 * index, mid);
        var y3handleIn = new paper.Point(-25.16 * index, 33.49 * index);
        var y3S = new paper.Segment(y3, y3handleIn, null);

        var y4 = new paper.Point(428.5 * index, top);
        var y4S = new paper.Segment(y4, null, null);

        var y5 = new paper.Point(339 * index, bottom);
        var y5S = new paper.Segment(y5, null, null);

        var y6 = new paper.Point(246.5 * index, bottom + 96.87 * index);
        var y6handleIn = new paper.Point(22.5 * index, 0);
        var y6handleOut = new paper.Point(-27.64 * index, 0);
        var y6S = new paper.Segment(y6, y6handleIn, y6handleOut);

        var y7 = new paper.Point(320.79 * index, bottom + 11.7 * index);
        var y7handleIn = new paper.Point(-72.1 * index, 18.96 * index);
        var y7handleOut = new paper.Point(41.46 * index, -10.9 * index);
        y7S = new paper.Segment(y7, y7handleIn, y7handleOut);

        var y8 = new paper.Point(441.3 * index, mid);
        var y8handleIn = new paper.Point(-24 * index, 39.3 * index);
        y8S = new paper.Segment(y8, y8handleIn, null);

        var y = new paper.Path(y1S, y2S, y3S, y4S, y5S, y6S, y7S, y8S);
        y.strokeColor = 'black';
        y.strokeCap = 'round';
        y.strokeJoin = 'round';


        // DREAM
        var inc = 351.85 * index;

        var d1B = new paper.Point()

        var dB = new paper.Path(d1S, d2S, d3S, d4S, d5S);
        dB.position.x += inc;
        // console.log(dB)
        dB.strokeColor = 'black';
        dB.strokeCap = 'round';

        var r1 = new paper.Point(569.2 * index, mid);
        var r1S = new paper.Segment(r1, null, null);

        var r2 = new paper.Point(606.41 * index, mid - 67.38 * index);
        var r2handleIn = new paper.Point(0, 16.5 * index);
        var r2S = new paper.Segment(r2, r2handleIn, null);

        var rA = new paper.Path(r1S, r2S);
        rA.strokeColor = 'black';
        rA.strokeCap = 'round';

        var r3 = new paper.Point(598.31 * index, mid - 45.17 * index);
        var r3handleOut = new paper.Point(4 * index, 0);
        var r3S = new paper.Segment(r3, null, r3handleOut);

        var r4 = new paper.Point(639.11 * index, mid - 50.18 * index);
        var r4handleIn = new paper.Point(-14.13 * index, -3.82 * index);
        var r4handleOut = new paper.Point(24.94 * index, 7.81 * index);
        var r4S = new paper.Segment(r4, r4handleIn, r4handleOut);

        var r5 = new paper.Point(573.41 * index, bottom - 2.18 * index);
        var r5handleIn = new paper.Point(-20.12 * index, -24.1 * index);
        var r5handleOut = new paper.Point(13.86 * index, 16.29 * index);
        var r5S = new paper.Segment(r5, r5handleIn, r5handleOut);

        var r6 = new paper.Point(649.297 * index, mid);
        var r6S = new paper.Segment(r6, null, null);

        var rB = new paper.Path(r3S, r4S, r5S, r6S);
        rB.strokeColor = 'black';
        rB.strokeCap = 'round';

        var e1 = new paper.Point(652.21 * index, mid - 4.18 * index);
        var e1handleOut = new paper.Point(36.1 * index, 21.27 * index);
        var e1S = new paper.Segment(e1, null, e1handleOut);

        var e2 = new paper.Point(719.1 * index, top);
        var e2handleIn = new paper.Point(36.42 * index, 0);
        var e2handleOut = new paper.Point(-52.21 * index, 0);
        var e2S = new paper.Segment(e2, e2handleIn, e2handleOut);

        var e3 = new paper.Point(652.2 * index, bottom);
        var e3handleIn = new paper.Point(-57.27 * index, 0);
        var e3handleOut = new paper.Point(41.08 * index, 0);
        var e3S = new paper.Segment(e3, e3handleIn, e3handleOut);

        var e4 = new paper.Point(739.76 * index, mid);
        var e4S = new paper.Segment(e4, null, null);

        var e = new paper.Path(e1S, e2S, e3S, e4S);
        e.strokeColor = 'black';
        e.strokeCap = 'round';

        var aB = new paper.Path(a1S, a2S, a3S, a4S, a5S);
        aB.strokeColor = 'black';
        aB.position.x += 522.27 * index;
        aB.strokeCap = 'round';



        var m1 = new paper.Point(860.26 * index, mid);
        var m1S = new paper.Segment(m1, null, null);

        var m2 = new paper.Point(913.29 * index, top);
        var m2handleIn = new paper.Point(-15.4 * index, 0);
        var m2handleOut = new paper.Point(15.4 * index, 0);
        var m2S = new paper.Segment(m2, m2handleIn, m2handleOut);

        var m3 = new paper.Point(905 * index, mid - 3.75 * index);
        var m3handleIn = new paper.Point(12.03 * index, -18.13 * index);
        var m3S = new paper.Segment(m3, m3handleIn, null);

        var m4 = new paper.Point(858.68 * index, bottom);
        var m4S = new paper.Segment(m4, null, null);

        var m5 = new paper.Point(905 * index, mid - 3.75 * index);
        var m5handleOut = new paper.Point(14.957 * index, -23.01 * index);
        var m5S = new paper.Segment(m5, null, m5handleOut);

        var m6 = new paper.Point(960.59 * index, top);
        var m6handleIn = new paper.Point(-16.46 * index, 0);
        var m6handleOut = new paper.Point(14.66 * index, 0);
        var m6S = new paper.Segment(m6, m6handleIn, m6handleOut);

        var m7 = new paper.Point(955.28 * index, mid - 2.32 * index);
        var m7handleIn = new paper.Point(15.63 * index, -23.96 * index);
        var m7S = new paper.Segment(m7, m7handleIn, null);

        var m8 = new paper.Point(909.326 * index, bottom);
        var m8S = new paper.Segment(m8, null, null);

        var m9 = new paper.Point(955.28 * index, mid - 2.32 * index);
        var m9handleOut = new paper.Point(17.81 * index, -27.28 * index);
        var m9S = new paper.Segment(m9, null, m9handleOut);

        var m10 = new paper.Point(1017.88 * index, top);
        var m10handleIn = new paper.Point(-18.392 * index, 0);
        var m10handleOut = new paper.Point(45 * index, 0);
        var m10S = new paper.Segment(m10, m10handleIn, m10handleOut);

        var m11 = new paper.Point(982.38 * index, bottom);
        var m11handleIn = new paper.Point(-41.1 * index, 0);
        var m11handleOut = new paper.Point(16.9675 * index, 0);
        var m11S = new paper.Segment(m11, m11handleIn, m11handleOut);

        var m12 = new paper.Point(1052.899 * index, mid);
        var m12S = new paper.Segment(m12, null, null);

        var m = new paper.Path(m1S, m2S, m3S, m4S, m5S, m6S, m7S, m8S, m9S, m10S, m11S, m12S);
        m.strokeColor = 'black';
        m.strokeCap = 'round';
        m.strokeJoin = 'round';


        // group
        day = new paper.Group();
        day.children = [d, a, y];

        dream = new paper.Group();
        dream.children = [dB, rA, rB, e, aB, m];

        day.style = {
            strokeWidth: strokenum
        };
        dream.style = {
            strokeWidth: strokenum
        };
        // day.position = new paper.paper.Point(700, 400);
        // dream.position = new paper.paper.Point(700, 400);
        // day.position.y = 500;
        // console.log(day.position.y)
        // console.log(dream.position.y)
        // dream.position.y += window.innerHeight / 2 - 189.9;

        // group







        // const startpoint = new paper.Point(441.3 * index, mid * index);

        basicHeight = mid;
        points = pointcount;
        pointsdouble = points * 2;



        moveHeight = mousePos.y * 2;

        moveline.strokeColor = 'black';
        moveline.style = {
            strokeWidth: strokenum
        };

        var dB1 = new paper.Point(604.45 * index, 65.1 * index)

        var ydDist = 0;



        // var pointsdoubleDE2 = pointsdouble - 2;
        // var pointsdoubleDE1 = pointsdouble - 1;

        //  initialize
        points = pointcount;
        pointsdouble = points * 2;
        var width = paper.view.size.width;
        moveline.segments = [];
        moveline.add(y8);
        for (var i = 1; i < points; i++) {
            var point = new paper.Point(ydDist / points * i + y8.x, basicHeight);
            var point2 = new paper.Point(ydDist / points * i + y8.x - 100 * index, basicHeight);
            moveline.add(point);
            moveline.add(point2);
        }
        moveline.add(dB1);
        moveline.fullySelected = visibleHandle;
        day.fullySelected = visibleHandle;
        dream.fullySelected = visibleHandle;
    }
    var movelinePositions

    function drawMoveline() {

        // Create the moveline path using the stored positions
        moveline = new paper.Path();
        moveline.strokeColor = 'black';
        moveline.style = {
            strokeWidth: strokenum
        };

        for (var i = 0; i < movelinePositions.length; i++) {
            moveline.add(movelinePositions[i]);
        }

        moveline.fullySelected = visibleHandle;
        moveline.smooth({ type: 'continuous' });
    }

    function updateMovelinePositions() {

        movelinePositions = []; // Clear the existing positions

        var ydDist = dream.bounds.left + 17.94 * index - y8S.point.x;
        var dotsvariation = ydDist * 0.005;
        var movelineWidth = ydDist * 0.95;

        // Recalculate the positions based on the updated parameters
        for (var i = 0; i < pointsdouble; i++) {
            var xPos = movelineWidth / pointsdouble * i - 8 * index * dotsvariation;
            var yPos = basicHeight;

            movelinePositions.push(new paper.Point(xPos + y8S.point.x, yPos));
        }

        movelinePositions[pointsdoubleDE1] = new paper.Point(dream.bounds.left + 17.94 * index, basicHeight);
    }


    drawthetype()
        // updateMovelinePositions(); // Initial calculation of moveline positions
        // drawMoveline(); // Initial draw of the moveline

    paper.view.onFrame = function(event) {

        var mouseX = Math.abs(mousePos.x - anchor);
        var mousevalue = mouseX - 30;
        mousevalue = clamp(mousevalue, 0, mousechangeYhandleIn * index);
        var mousevalueX = map(mousevalue, 0, mousechangeYhandleIn * index, 0, 1);
        var mousevalueY = map(mousevalue, 0, mousechangeYhandleIn * index, 0, 1);

        y8S.point.x = y7S.point.x + 120.51 * index + map(mousevalue, 0, mousechangeYhandleIn * index, 0, 9);

        if (mouseX > 50 * index && mouseX < 400 * index) {
            dream.bounds.left = lerp(dream.bounds.left, anchor + mouseX - 17.94 * index, 0.07);
            day.position.x = lerp(day.position.x, anchor - mouseX - 368.18662 * index / 2, 0.07);
        } else if (mouseX >= 400 * index) {
            dream.bounds.left = lerp(dream.bounds.left, anchor + 400 * index - 17.94 * index, 0.07);
            day.position.x = lerp(day.position.x, anchor - 400 * index - 368.18662 * index / 2, 0.07);
        } else {
            dream.bounds.left = lerp(dream.bounds.left, anchor - 17.94 * index, 0.07);
            day.position.x = lerp(day.position.x, anchor - 368.18662 * index / 2, 0.07);
        }
        y8S.handleIn.y = lerp(39.3 * index, 0, mousevalueX);
        y8S.handleIn.x = lerp(-24 * index, -35 * index, mousevalueX);


        var ydDist = dream.bounds.left + 17.94 * index - y8S.point.x;

        moveHeight += (basicHeight - mousePos.y - moveHeight) / 10;
        moveHeight = clamp(moveHeight, -125 * index, 125 * index)

        var dotsvariation = ydDist * 0.005;
        var movelineWidth = ydDist * 0.95;

        for (var i = 1; i < pointsdouble; i += 2) {
            var sinSeed = event.count * speed + (i + i % 10) * 100;
            var sinHeight = Math.sin(sinSeed / 900) * moveHeight;
            var yPos = Math.sin(sinSeed / 100) * sinHeight * dotsvariation + basicHeight;
            moveline.segments[i].point.y = yPos;

            var xPos = movelineWidth / pointsdouble * i - 0.8 * Math.sin(sinSeed / 100) * sinHeight * dotsvariation - 8 * index * dotsvariation;
            moveline.segments[i].point.x = xPos + y8S.point.x;
        }

        for (var i = 2; i < pointsdouble; i += 2) {
            var sinSeed = event.count + (i - 1 + (i - 1) % 10) * 100;
            var yPos = basicHeight - Math.sin(sinSeed / 100) * sinHeight * dotsvariation;
            moveline.segments[i].point.y = yPos;

            var xPos = movelineWidth / pointsdouble * i + Math.sin(sinSeed / 100) * sinHeight * dotsvariation - 8 * index * dotsvariation;
            moveline.segments[i].point.x = xPos + y8S.point.x;
            var thisone = Math.sin(sinSeed / 100) * sinHeight * dotsvariation - 8 * index * dotsvariation;
            moveline.segments[pointsdoubleDE2].point.x = movelineWidth / pointsdouble * (pointsdoubleDE2 + 0.5) + thisone * 0.5 + y8S.point.x;
        }

        moveline.segments[pointsdoubleDE1].point = new paper.Point(dream.bounds.left + 17.94 * index, basicHeight);

        moveline.smooth({ type: 'continuous' });
        var reduce = 0.4;
        moveline.segments[0].handleIn = null;
        moveline.segments[0].point.x = y8S.point.x;
        moveline.segments[0].handleOut = new paper.Point(20 * index * reduce * ((Math.sin(event.count * 0.05) + 4) * dotsvariation * Math.abs(sinHeight + 0.5) * 0.004 + 1.7 * dotsvariation), 0);
        moveline.segments[pointsdoubleDE1].handleIn = new paper.Point(-12 * index * reduce * ((Math.sin(event.count * 0.05) + 4) * dotsvariation * Math.abs(sinHeight + 0.5) * 0.004 + 1.2 * dotsvariation), 13.12 * dotsvariation * index);
        paper.view.update();
    }

    document.addEventListener("mousemove", function(event) {
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;

    });




    window.addEventListener('resize', function(event) {

        console.log("wiegub")
            // Update the canvas size
        paper.project.clear();
        let background = new paper.Path.Rectangle(-500, -1500, window.innerWidth + 1500, window.innerHeight + 1500);
        background.fillColor = '#C2E4F0';
        paper.view.viewSize = new paper.Size(window.innerWidth, window.innerHeight);

        // Recalculate positions and sizes of your shapes here
        // index = map(window.innerWidth, 0, 2048, 0, 1);
        // mid = window.innerWidth * .2;
        // bottom = (257.1 - 189.9) * index + mid;
        // top = (137.9 - 189.9) * index + mid;

        index = map(window.innerWidth, 0, 2048, 0, 1);


        mid = window.innerWidth * .2;
        bottom = (257.1 - 189.9) * index + mid;
        top = (137.9 - 189.9) * index + mid;




        strokenum = map(window.innerWidth, 0, 2048, .2, 5);

        anchor = window.innerWidth / 2 - 100 * index

        startpoint = new paper.Point(900 * index, mid);

        drawthetype()
        updateMovelinePositions(); // Initial calculation of moveline positions
        drawMoveline();



    });

}


function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}