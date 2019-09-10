# ALGORITHMS-TRAINING

[leetcode 解题之路](https://github.com/azl397985856/leetcode)

这是一个用来算法训练的玩具

[![Build Status](https://travis-ci.org/Kirk-Wang/algorithms-training.svg?branch=master)](https://travis-ci.org/Kirk-Wang/algorithms-training) &nbsp; [![Coverage Status](https://coveralls.io/repos/github/Kirk-Wang/algorithms-training/badge.svg?branch=master)](https://coveralls.io/github/Kirk-Wang/algorithms-training?branch=master)

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
} from 'algorithms-training'
console.log(reverseWords(`Let's take LeetCode contest`))
```

### 开发实验环境准备
- 快速开始一个规范的 NPM 包
  * [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter)
- Link
  * [npm](https://www.npmjs.com/)
  * [Travis CI](https://travis-ci.org/)
  * [Coveralls](https://coveralls.io/)

### 基础算法
* 字符串
  * 反转字符串中的单词(III)
  * 计算二进制子串
* 数组
  * 电话号码的组合
  * 卡牌分组
  * 种花问题
  * 格雷编码
* 正则表达式
  * 重复的子字符串
  * 正则表达式匹配
* 排序
  * 冒泡排序
  * 选择排序
  * 按奇偶排序数组
  * 数组中的第 K 个最大元素
  * 最大间距
  * 缺失的第一个正数
* 递归
  * 复原 IP 地址
  * 与所有单词相关联的字符串

### 数据结构
* 堆
  * 根据字符出现频率排序
  * 超级丑数
* 栈
  * 棒球比赛
  * 最大矩形
* 队列
  * 设计循环队列
  * 任务调度器
* 链表
  * 排序链表
  * 环形链表
* 矩阵
  * 螺旋矩阵
  * 旋转图像
* 二叉树
  * 对称二叉树
  * 验证二叉树

### 进阶算法

* 贪心算法
  * 买卖股票的最佳时机
  * 柠檬水找零
* 动态规划
  * 不同路径（II）
  * K 站中转内最便宜的航班

-------

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
    ```
    图谱
    `0011`0011
     ↑
    0`01`10011
      ↑
    00`1100`11
       ↑
    001`10`011
        ↑
    0011`0011`
         ↑
    00110`01`1
          ↑
    具有相同数量的连续0和1
    ```
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

* [605. 种花问题](https://leetcode-cn.com/problems/can-place-flowers/)

  * 数学建模意识（`种`或者`没种`抽象成 `0` 或者 `1`)
  
  * 知识点
    * 问题抽象，数学建模，动态输入

### A & Q
#### 难度大的算法题目如何解？
算法的本质是寻找规律并实现
#### 如何找打规律？
发现输入与输出的关系，寻找突破点
#### 复杂的实现怎么办？
实现是程序+数据结构的结合体
