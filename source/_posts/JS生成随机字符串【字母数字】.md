title: JS生成随机字符串【字母数字】
author: Xu Shan Kun
tags:
  - javascript
categories:
  - 前端
date: 2018-09-07 11:31:00
---
###	说明
JS生成随机字符串，可指定长度或范围，内容数组自定义
<!-- more -->
###	代码
```javascript
function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}
```
###	使用方法
1.生成3-32位随机串：randomWord(true, 3, 32)
```
randomWord(true,3,32)
//	"vlOlaIiS9wEwa"
```

2.生成43位随机串：randomWord(false, 43)
```
randomWord(false,43)
//	"DBYFsRVmmQ4TNy1tmb82NkqhAxPowYy13u74Hf5a9Oe"
```