/**
 * @description 小红有一颗树，每个结点有一个权值，初始时每个节点都是白色。小红每次操作可以选择两个相邻的结点，如果它们都是白色且权值的和是质数，小红就可以选择其中一个节点染红
 * 小红想知道最多可以染红多少个节点？
 */

// 获取输入
// 获取一共有多少个节点n
let n = parseInt(read_line());
// 依次获取节点的值,用Map存储
let arr = new Map();
let temp = read_line().split(" ");
for (let i = 0; i < n; i++) {
  arr.set(parseInt(temp[i], 0));
}

// 获取节点之间的关系
let relation = [];
while ((line = read_line())) {
  relation.push(line.split(" ").map((item) => parseInt(item)));
}
let count = 0
class solution {
  // 判断是否为质数，除了1和本身，其他没有约数
  isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  isRed(relation) {
    // 根据relation的值，判断是否为红色
    relation.map((item) => {
      if (arr.get(item) === 1) {
        return false;
      } else {
        return true;
      }
    });
  }
  // 计算个数
  getCount(arr, relation) {
    // 对relation进行遍历
    for (let i = 0; i < relation.length; i++) {
      let sum = relation[i].reduce((a, b) => a + b, 0);
      if (this.isPrime(sum) && this.isRed(relation[i])) {
        // 那么将relation[i][1],变为红色
        count++;
        arr.set(relation[i][1], 1);
      }
    }
    console.log(count);
  }
}

// test
let s = new solution();
s.getCount(arr, relation);
