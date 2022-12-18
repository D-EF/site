/*
 * @Author: Darth_Eternalfaith darth_ef@hotmail.com
 * @Date: 2022-09-16 22:08:21
 * @LastEditors: Darth_Eternalfaith darth_ef@hotmail.com
 * @LastEditTime: 2022-12-18 23:48:54
 * @FilePath: \site\js\index.js
 * @Description:  test
 * 
 * Copyright (c) 2022 by Darth_Eternalfaith darth_ef@hotmail.com, All Rights Reserved. 
 */

import { test as test__Matrix } from "./import/NML/test/test__Matrix.js";
// import { test_rotate as test } from "./import/NML/test/test_rotate.js";
// import { test } from "./import/NML/test/test_vector.js";
import { test as test_Vector } from "./import/NML/test/test__Vector.js";


console.time    ("test index.js");

// test_Vector();
test__Matrix();

console.timeEnd ("test index.js");
