##### EXAMPLE

---

```javascript
same([1,2,3], [1,9,4])  // return true     
same([1,2,3], [1,9])    // return false     
same([1,2,1], [1,4,4])  // return false   
```
  

#### SOLUTION 1

```javascript
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true
}
```
Time Complexity : O(N^2)

중첩된 루프를 사용하여 해결한 코드

#### SOLUTION 2

```javascript
function sample(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) return false;
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    return true;
}
```
Time Complexity : O(N)

#### validAnagram

```javascript
function validAnagram(first, second) {
    if (first.length !== second.length) return false;
    
    const lookup = {};
    
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) return false
        else lookup[letter] -= 1;
    }
    return true;
}
```