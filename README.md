# ALGORITHMS-TRAINING

这是一个用来算法训练的玩具

[![Build Status](https://travis-ci.org/Kirk-Wang/algorithms-training.svg?branch=master)](https://travis-ci.org/Kirk-Wang/algorithms-training) &nbsp; [![Coverage Status](https://coveralls.io/repos/github/Kirk-Wang/algorithms-training/badge.svg?branch=master)](https://coveralls.io/github/Kirk-Wang/algorithms-training?branch=master)

### 上✋玩具

安装
```sh
npm i algorithms-training
```

使用
```js
import { 
  reverseWords,
  countBinarySubstrings,
} from 'algorithms-training'
console.log(reverseWords(`Let's take LeetCode contest`))
// s'teL ekat edoCteeL tsetnoc
console.log(countBinarySubstrings("00110011"))
// 6
```

### 开发实验环境准备
- 快速开始一个规范的 NPM 包
  * [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter)
- Link
  * [npm](https://www.npmjs.com/)
  * [Travis CI](https://travis-ci.org/)
  * [Coveralls](https://coveralls.io/)

### 基础算法 “字符串”

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

### A & Q
#### 难度大的算法题目如何解？
算法的本质是寻找规律并实现
#### 如何找打规律？
发现输入与输出的关系，寻找突破点
#### 复杂的实现怎么办？
实现是程序+数据结构的结合体
