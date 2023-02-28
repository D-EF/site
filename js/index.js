/*!
 * @Author: Darth_Eternalfaith darth_ef@hotmail.com
 * @Date: 2022-09-16 22:08:21
 * @LastEditors: Darth_Eternalfaith darth_ef@hotmail.com
 * @LastEditTime: 2023-02-28 22:39:57
 * @FilePath: \site\js\index.js
 * @Description:  test
 * 
 * Copyright (c) 2022 by Darth_Eternalfaith darth_ef@hotmail.com, All Rights Reserved. 
 */

import { test as test_Vector } from "./import/NML/test/test__Vector.js";
// import { } from "./import/NML/index.js";
import { test as test_Basice } from "./import/Basics/test/test__basics.js";
import { approximately } from "./import/NML/Config__NML.js";

globalThis.approximately=approximately;
var {sqrt,sin,cos,tan,atan,atan2,asin,acos}=Math;
var temp={sqrt,sin,cos,tan,atan,atan2,asin,acos};

Object.assign(window,temp);

console.time("test index.js");

test_Vector();
// test__Matrix();
test_Basice();

console.timeEnd ("test index.js");
