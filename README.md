# ALGORITHMS-TRAINING

这是一个用来算法训练的玩具

[![Build Status](https://travis-ci.org/Kirk-Wang/algorithms-training.svg?branch=master)](https://travis-ci.org/Kirk-Wang/algorithms-training) &nbsp; [![Coverage Status](https://coveralls.io/repos/github/Kirk-Wang/algorithms-training/badge.svg?branch=master)](https://coveralls.io/github/Kirk-Wang/algorithms-training?branch=master)

### 编码技巧

* 递归控制
* 循环控制
* 边界控制
* 数据结构

#### 在白板上写程序

* 程序写在：白板，纸笔，Word文档，记事本……
* 修改不便；缩进不便；对齐困难；
* 心里不抵触；先思考后写；不要惧怕修改/重写

#### 数学归纳法

`用于证明断言对所有自然数成立`

* 证明对于 N=1 成立
* 证明 N>1 时：如果对于 N-1 成立，那么对于 N 成立

`求证：1+2+3+...+n=n(n+1)/2`

* 1 = 1*2/2
* 如果 1+2+3+...+(n-1) = (n-1)n/2
* 那么 1+2+3+...+n = 1+2+3+...+(n-1)+n
* = (n-1)n/2+n = (n(n-1)+2n)/2 = n(n+1)/2
* 映射成程序
  * int sum(int n) {
  * if(n==1) return 1;
  * return sum(n-1) + n;}

#### 数学归纳法的正确性

* 公理







---

### 上✋玩具

[文档](https://o-o.ren/algorithms-training/index.html)

安装
```sh
npm i algorithms-training
```

使用
```js
import { 
  reverseWords,
  countBinarySubstrings,
  letterCombinations,
  hasGroupsSizeX,
} from 'algorithms-training'
console.log(reverseWords(`Let's take LeetCode contest`))
// s'teL ekat edoCteeL tsetnoc
console.log(countBinarySubstrings("00110011"))
// 6
console.log(letterCombinations("23"))
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
// true
```

### 开发实验环境准备
- 快速开始一个规范的 NPM 包
  * [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter)
- Link
  * [npm](https://www.npmjs.com/)
  * [Travis CI](https://travis-ci.org/)
  * [Coveralls](https://coveralls.io/)

### 字符串

* [557. 反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)

  * 知识点
    * String.prototype.split
    * String.prototype.match
    * Array.prototype.map
    * Array.prototype.reverse
    * Array.prototype.join
    
* [696. 计数二进制子串](https://leetcode-cn.com/problems/count-binary-substrings/)

  * 思路
    * 仔细找输入与输出的关系，把输出往输入里面套，形成图谱后进行规律分析。
    * 找题目所要求的子串，从原字符串 0 位开始
      * 正则匹配连续 0 或者 1
      * 反转 0 或者 1，跟在后面形成[题目所要求的子串]，进行正则匹配
      * 后移一位，从[新的字符串]中继续[找题目所要求的子串]，直到[原字符串]位移完毕

  * 知识点
    * String.prototype.slice
    * String.prototype.match
    * String.prototype.repeat
    * Array.prototype.push
    * RegExp

### 数组

* [17. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

  * 思路
    * 把输出往输入里面套，明显就是一个组合问题
    * 根据数字字符串，找到映射字符串，reduce 两两组合，最终形成所有的组合

  * 知识点
    * Array.prototype.reduce

* [914. 卡牌分组](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

  * 认真读题
  * 思路
    * 排序
    * 按数字分组，记录`长度最小`的组
    * return 各分组`长度`是否能被整除


### A & Q
#### 难度大的算法题目如何解？
算法的本质是寻找规律并实现
#### 如何找打规律？
发现输入与输出的关系，寻找突破点
#### 复杂的实现怎么办？
实现是程序+数据结构的结合体
