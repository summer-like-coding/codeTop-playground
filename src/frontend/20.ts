/**
 * @description 20 有效的括号
 * @param {string} s
 * @returns {boolean}
*/

// 用栈来实现
export function isValid(s: string): boolean {
    let res:boolean = true
    let stack:string[] = []
    let arr = s.split("")
    // 对字符串数组进行遍历
    arr.forEach((value,index)=>{
        let lastItem = stack.pop()
        // 如果为右括号
        if(value === ")"){
            if(lastItem !== "("){
                res = false
            }
        }else if(value === "}"){
            if(lastItem !== "{"){
                res = false
            }
        }else if(value === "]"){
            if(lastItem !== "["){
                res = false
            }
        }else{
            // stack.push(lastItem)
            if(lastItem !== undefined){
                stack.push(lastItem)
            }
            stack.push(value)
        }
    })
    // return res
    if(stack.length !== 0){
        return false
    }else{
        return res
    }
};

console.log(isValid("{"));
