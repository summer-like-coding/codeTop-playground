/**
 * @description 200 岛屿数量
 * @param {string[][]} grid
 * @return {*}  {number}
 */
// 当前位置的上下左右四个方向，只要有一个方向是1，就说明是同一个岛屿
function numIslands(grid: string[][]): number {
    let count = 0;
    // 二维数组的行数
    const row = grid.length;
    const col = grid[0].length;

    // 遍历二维数组
    // 找到第一个1，然后再去判断它的上下左右是否是1，如果是1，就继续查找，直到找到所有的1，然后将1置为2，表示已经访问过了
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                count++;
                backtracking(grid, i, j, row, col);
                console.log("轮次", grid, i, j);
            }
        }
    }
    return count;

};
// 查看当前位置的上下左右四个方向，是否是1，如果是1，就继续查找，直到找到所有的1，然后将1置为2，表示已经访问过了
export function backtracking(grid: string[][], i: number, j: number, row: number, col: number) {

    // 终止条件，如果当前位置已经访问了，或者当前这个位置是0，或者越界了，就不再继续查找
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '2' || grid[i][j] === '0') {
        return;
    }
    // 当前层处理逻辑
    grid[i][j] = '2';

    // 下一层
    backtracking(grid, i - 1, j, row, col);
    backtracking(grid, i + 1, j, row, col);
    backtracking(grid, i, j - 1, row, col);
    backtracking(grid, i, j + 1, row, col);
}

// 测试
const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
console.log(numIslands(grid2)); 