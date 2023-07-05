/**
 * @description 
 *  longest-substring-without-repeating-characters
 *  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
// 当窗口里面无重复，那么扩大窗口
// 当窗口里面有重复，那么缩小窗口
function lengthOfLongestSubstring(s: string): number {
    // 设置一个map，用来存储窗口里面的字符
    const map = new Map();
    let left = 0, right = 0;
    // 设置长度
    let len = 0;
    // 去除特殊情况
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    while (right < s.length) {
        if (map.has(s[right])) {
            // 如果有重复，那么缩小窗口
            map.delete(s[left]);
            left++;
        } else {
            map.set(s[right], 1);
            right++;
        }
        // 每次都要更新长度
        len = Math.max(len, right - left);
    }
    return len;
};

// 测试
console.log(lengthOfLongestSubstring("au"));