function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.632,-109.2400516],[89.63,-52.9900516]]).appendPoint([89.6299662,-52.0397678]).appendArc([90.1300978,-51.53975],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.1298684,-51.5494868]).appendArc([127.63,-51.0494868],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.63,-42.5369952]).appendArc([128.131579,-42.0369977],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([146.1284211,-42.0938299]).appendArc([146.63,-41.5938324],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.63,-37.913]).appendArc([147.13,-37.413],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.032,-37.413]).appendArc([167.532,-37.913],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-39.9955476]).appendArc([168.0331403,-40.4955463],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.0308596,-40.4544989]).appendArc([186.532,-40.9544976],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.532,-42.4546667]).appendArc([187.032,-42.9546667],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.0315782,-42.9546667]).appendArc([205.5315782,-43.4544447],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([205.5319999,-44.4040228]).appendPoint([205.5321344,-44.7068887]).appendArc([206.0321344,-45.2066667],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([225.783,-45.2066667]).appendArc([226.283,-45.7066667],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([226.283,-107.506193]).appendPoint([226.0045644,-107.9884575]).appendPoint([228.421044,-133.93307]).appendPoint([228.4624275,-134.377385]).appendArc([228.3181356,-134.7773077],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([214.3427089,-148.7527345]).appendArc([213.6356021,-148.7527346],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([199.5763359,-134.6934683]).appendArc([199.4682,-134.6113955],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.7823436,-125.7744978]).appendArc([183.6616286,-125.7259244],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.4589288,-121.2954772]).appendArc([166.3330503,-121.2796782],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.1226453,-121.3272085]).appendArc([145.6215061,-120.8332685],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([145.6101065,-119.8925702]).appendPoint([145.5083174,-111.4929349]).appendArc([145.0112187,-110.9990018],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.129169,-110.6845647]).appendArc([89.6320336,-110.1845907],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.632,-109.2400516]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.832,-109.2400089],[90.83,-52.9900089]]).appendPoint([90.8299911,-52.7399342]).appendPoint([128.3298684,-52.7498026]).appendArc([128.83,-52.2498026],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.83,-43.2392092]).appendPoint([147.3284211,-43.2976253]).appendArc([147.83,-42.7976278],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([147.83,-38.613]).appendPoint([166.332,-38.613]).appendPoint([166.332,-41.1982876]).appendArc([166.8331403,-41.6982863],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.332,-41.6560959]).appendPoint([185.332,-43.6546667]).appendArc([185.832,-44.1546667],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([204.331889,-44.1546667]).appendPoint([204.332,-44.4045557]).appendPoint([204.3326671,-45.9068887]).appendArc([204.8326671,-46.4066667],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([225.083,-46.4066667]).appendPoint([225.083,-107.184654]).appendPoint([224.8538999,-107.5814671]).appendArc([224.7890674,-107.8778363],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([227.2262154,-134.0443563]).appendPoint([227.2371058,-134.1612813]).appendPoint([213.9891555,-147.4092317]).appendPoint([200.308596,-133.7286722]).appendArc([200.2004601,-133.6465994],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.2341372,-124.651696]).appendArc([184.1134223,-124.6031227],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.6095856,-120.0951196]).appendArc([166.4837071,-120.0793206],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.8130182,-120.1255815]).appendPoint([146.8100184,-119.8780293]).appendPoint([146.6939457,-110.2997081]).appendArc([146.196847,-109.805775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.8320088,-109.4885718]).appendPoint([90.832,-109.2400089]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[210.779,-74.7416667],[218.779,-74.7416667]]).appendPoint([218.779,-31.8416667]).appendPoint([210.779,-31.8416667]).appendPoint([210.779,-74.7416667]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.632,-109.2400516],[89.63,-52.9900516]]).appendPoint([89.6299662,-52.0397678]).appendArc([90.1300978,-51.53975],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.1298684,-51.5494868]).appendArc([127.63,-51.0494868],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.63,-42.5369952]).appendArc([128.131579,-42.0369977],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([146.1284211,-42.0938299]).appendArc([146.63,-41.5938324],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.63,-37.913]).appendArc([147.13,-37.413],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.032,-37.413]).appendArc([167.532,-37.913],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-39.9955476]).appendArc([168.0331403,-40.4955463],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.0308596,-40.4544989]).appendArc([186.532,-40.9544976],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.532,-42.4546667]).appendArc([187.032,-42.9546667],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.0315782,-42.9546667]).appendArc([205.5315782,-43.4544447],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([205.5319999,-44.4040228]).appendPoint([205.5321344,-44.7068887]).appendArc([206.0321344,-45.2066667],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([225.783,-45.2066667]).appendArc([226.283,-45.7066667],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([226.283,-107.506193]).appendPoint([226.0045644,-107.9884575]).appendPoint([228.421044,-133.93307]).appendPoint([228.4624275,-134.377385]).appendArc([228.3181356,-134.7773077],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([214.3427089,-148.7527345]).appendArc([213.6356021,-148.7527346],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([199.5763359,-134.6934683]).appendArc([199.4682,-134.6113955],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.7823436,-125.7744978]).appendArc([183.6616286,-125.7259244],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.4589288,-121.2954772]).appendArc([166.3330503,-121.2796782],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.1226453,-121.3272085]).appendArc([145.6215061,-120.8332685],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([145.6101065,-119.8925702]).appendPoint([145.5083174,-111.4929349]).appendArc([145.0112187,-110.9990018],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.129169,-110.6845647]).appendArc([89.6320336,-110.1845907],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.632,-109.2400516]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[214.3773038,-112.6400804],"radius":1.1})
.union(
    CAG.circle({"center":[143.157,-103.615],"radius":1.1})
).union(
    CAG.circle({"center":[185.468,-61.6526667],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-90.5],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-71.5],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function my_first_keyboard_bottom_tray_case_fn() {
                    

                // creating part 0 of case my_first_keyboard_bottom_tray
                let my_first_keyboard_bottom_tray__part_0 = _bottom_case_walls_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let my_first_keyboard_bottom_tray__part_0_bounds = my_first_keyboard_bottom_tray__part_0.getBounds();
                let my_first_keyboard_bottom_tray__part_0_x = my_first_keyboard_bottom_tray__part_0_bounds[0].x + (my_first_keyboard_bottom_tray__part_0_bounds[1].x - my_first_keyboard_bottom_tray__part_0_bounds[0].x) / 2
                let my_first_keyboard_bottom_tray__part_0_y = my_first_keyboard_bottom_tray__part_0_bounds[0].y + (my_first_keyboard_bottom_tray__part_0_bounds[1].y - my_first_keyboard_bottom_tray__part_0_bounds[0].y) / 2
                my_first_keyboard_bottom_tray__part_0 = translate([-my_first_keyboard_bottom_tray__part_0_x, -my_first_keyboard_bottom_tray__part_0_y, 0], my_first_keyboard_bottom_tray__part_0);
                my_first_keyboard_bottom_tray__part_0 = rotate([0,0,0], my_first_keyboard_bottom_tray__part_0);
                my_first_keyboard_bottom_tray__part_0 = translate([my_first_keyboard_bottom_tray__part_0_x, my_first_keyboard_bottom_tray__part_0_y, 0], my_first_keyboard_bottom_tray__part_0);

                my_first_keyboard_bottom_tray__part_0 = translate([-75,0,0], my_first_keyboard_bottom_tray__part_0);
                let result = my_first_keyboard_bottom_tray__part_0;
                
            

                // creating part 1 of case my_first_keyboard_bottom_tray
                let my_first_keyboard_bottom_tray__part_1 = _mcu_wall_cutout_extrude_2_2_outline_fn();

                // make sure that rotations are relative
                let my_first_keyboard_bottom_tray__part_1_bounds = my_first_keyboard_bottom_tray__part_1.getBounds();
                let my_first_keyboard_bottom_tray__part_1_x = my_first_keyboard_bottom_tray__part_1_bounds[0].x + (my_first_keyboard_bottom_tray__part_1_bounds[1].x - my_first_keyboard_bottom_tray__part_1_bounds[0].x) / 2
                let my_first_keyboard_bottom_tray__part_1_y = my_first_keyboard_bottom_tray__part_1_bounds[0].y + (my_first_keyboard_bottom_tray__part_1_bounds[1].y - my_first_keyboard_bottom_tray__part_1_bounds[0].y) / 2
                my_first_keyboard_bottom_tray__part_1 = translate([-my_first_keyboard_bottom_tray__part_1_x, -my_first_keyboard_bottom_tray__part_1_y, 0], my_first_keyboard_bottom_tray__part_1);
                my_first_keyboard_bottom_tray__part_1 = rotate([0,0,0], my_first_keyboard_bottom_tray__part_1);
                my_first_keyboard_bottom_tray__part_1 = translate([my_first_keyboard_bottom_tray__part_1_x, my_first_keyboard_bottom_tray__part_1_y, 0], my_first_keyboard_bottom_tray__part_1);

                my_first_keyboard_bottom_tray__part_1 = translate([-75,0,1], my_first_keyboard_bottom_tray__part_1);
                result = result.subtract(my_first_keyboard_bottom_tray__part_1);
                
            

                // creating part 2 of case my_first_keyboard_bottom_tray
                let my_first_keyboard_bottom_tray__part_2 = _bottom_case_outer_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let my_first_keyboard_bottom_tray__part_2_bounds = my_first_keyboard_bottom_tray__part_2.getBounds();
                let my_first_keyboard_bottom_tray__part_2_x = my_first_keyboard_bottom_tray__part_2_bounds[0].x + (my_first_keyboard_bottom_tray__part_2_bounds[1].x - my_first_keyboard_bottom_tray__part_2_bounds[0].x) / 2
                let my_first_keyboard_bottom_tray__part_2_y = my_first_keyboard_bottom_tray__part_2_bounds[0].y + (my_first_keyboard_bottom_tray__part_2_bounds[1].y - my_first_keyboard_bottom_tray__part_2_bounds[0].y) / 2
                my_first_keyboard_bottom_tray__part_2 = translate([-my_first_keyboard_bottom_tray__part_2_x, -my_first_keyboard_bottom_tray__part_2_y, 0], my_first_keyboard_bottom_tray__part_2);
                my_first_keyboard_bottom_tray__part_2 = rotate([0,0,0], my_first_keyboard_bottom_tray__part_2);
                my_first_keyboard_bottom_tray__part_2 = translate([my_first_keyboard_bottom_tray__part_2_x, my_first_keyboard_bottom_tray__part_2_y, 0], my_first_keyboard_bottom_tray__part_2);

                my_first_keyboard_bottom_tray__part_2 = translate([-75,0,0], my_first_keyboard_bottom_tray__part_2);
                result = result.union(my_first_keyboard_bottom_tray__part_2);
                
            

                // creating part 3 of case my_first_keyboard_bottom_tray
                let my_first_keyboard_bottom_tray__part_3 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let my_first_keyboard_bottom_tray__part_3_bounds = my_first_keyboard_bottom_tray__part_3.getBounds();
                let my_first_keyboard_bottom_tray__part_3_x = my_first_keyboard_bottom_tray__part_3_bounds[0].x + (my_first_keyboard_bottom_tray__part_3_bounds[1].x - my_first_keyboard_bottom_tray__part_3_bounds[0].x) / 2
                let my_first_keyboard_bottom_tray__part_3_y = my_first_keyboard_bottom_tray__part_3_bounds[0].y + (my_first_keyboard_bottom_tray__part_3_bounds[1].y - my_first_keyboard_bottom_tray__part_3_bounds[0].y) / 2
                my_first_keyboard_bottom_tray__part_3 = translate([-my_first_keyboard_bottom_tray__part_3_x, -my_first_keyboard_bottom_tray__part_3_y, 0], my_first_keyboard_bottom_tray__part_3);
                my_first_keyboard_bottom_tray__part_3 = rotate([0,0,0], my_first_keyboard_bottom_tray__part_3);
                my_first_keyboard_bottom_tray__part_3 = translate([my_first_keyboard_bottom_tray__part_3_x, my_first_keyboard_bottom_tray__part_3_y, 0], my_first_keyboard_bottom_tray__part_3);

                my_first_keyboard_bottom_tray__part_3 = translate([-75,0,0], my_first_keyboard_bottom_tray__part_3);
                result = result.subtract(my_first_keyboard_bottom_tray__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return my_first_keyboard_bottom_tray_case_fn();
            }

        