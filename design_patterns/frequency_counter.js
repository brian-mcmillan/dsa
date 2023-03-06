function validAnagram(str1, str2){
     if (str1.length !== str2.length) {
        return false;
    }
    let charCounter1 = {};
    let charCounter2 = {};
    for (let char of str1) {
        charCounter1[char] = (charCounter1[char] || 0) + 1;
    }
    for (let char of str2) {
        charCounter2[char] = (charCounter2[char] || 0) + 1;
    }
    for (let key in charCounter1) {
        if(! (key in charCounter2)) {
            return false;
        }
        if(charCounter2[key] !== charCounter1[key]) {
            return false;
        }
    }
    return true;
}
