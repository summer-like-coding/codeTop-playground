/**
 * @description 22 括号生成
 * @param {number} n
 * @return {*}  {string[]}
 */
// 我的思路是，利用DFS，每次往当前字符串中添加左括号或者右括号，直到左右括号的数量都为0，就将当前字符串添加到结果数组中
// 但是需要单层逻辑,即每次添加右括号的时候，需要判断当前字符串中左括号的数量是否大于右括号的数量，如果大于，就不能添加右括号,否则会出现不合法的情况
function generateParenthesis(n: number): string[] {
    // 特殊情况
    if(n === 0) return [];
    // 结果数组
    let res: string[] = [];
    // 设置左右括号的数量
    let left: number = n;
    let right: number = n;
    // 设置当前字符串
    let str: string = '';
    // DFS
    dfs(left, right, str,res);
    console.log(res);
    return res;
};

function dfs(left:number,right:number,str:string,res:string[]){
    // 终止条件
    if(left === 0 && right === 0){
        res.push(str);
        return;
    }
    // 往当前字符串中添加左括号
    if(left > 0){
        dfs(left - 1, right, str + '(', res);
    }
    // 往当前字符串中添加右括号
    if(right > 0 && left < right){
        dfs(left, right - 1, str + ')', res);
    }

}

// 测试
generateParenthesis(2);
