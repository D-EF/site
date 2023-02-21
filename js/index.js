/*!
 * @Author: Darth_Eternalfaith darth_ef@hotmail.com
 * @Date: 2022-09-16 22:08:21
 * @LastEditors: Darth_Eternalfaith darth_ef@hotmail.com
 * @LastEditTime: 2023-02-21 01:24:55
 * @FilePath: \site\js\index.js
 * @Description:  test
 * 
 * Copyright (c) 2022 by Darth_Eternalfaith darth_ef@hotmail.com, All Rights Reserved. 
 */

// import { test as test_Vector } from "./import/NML/test/test__Vector.js";
// import { test as test__Matrix } from "./import/NML/test/test__Matrix.js";
import { test as test_Basice } from "./import/Basics/test/test__basics.js";

var {sqrt,sin,cos,tan,atan,atan2,asin,acos}=Math;
var temp={sqrt,sin,cos,tan,atan,atan2,asin,acos};

Object.assign(window,temp);

console.time("test index.js");

// test_Vector();
// test__Matrix();
test_Basice();

console.timeEnd ("test index.js");
