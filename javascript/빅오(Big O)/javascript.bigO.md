1. 빅오의 시점에서 오브젝트와 배열이 어떻게 작동하는지
2. 어떤 방법으로 배열을 처리해야 효율적인지

##### Objects
```javascript
let instructor = {
    firstName: 'Dahoon',
    isInstructor: true,
    favoriateNumbers: [1, 2, 3, 4],
}
```
instructor 이라는 객체 안에 키와 값을 가지고있는 3개의 값을 저장하고 있다.        

#### Objects 는 언제 사용하는가?

1. 순서를 지킬필요가 없을 떄 (정렬 X)
2. 빠른 접근, 입력, 제거를 해야할 경우

**Big O 표현**
```text 
insertion : O(1)        
Removal : O(1)
Searching : O(N)
Access : O(1)
```
따라서 Object의 Big O는 O(1)     

___

배열의 내장함수들의 Big O는 어떻게 될까?        

```javascript
push: O(1)
pop: O(1)
shift: O(N)
unshift: O(N)
convat: O(N)
slice: O(N)
splice: O(N)
sort: O(N * log N)
forEach/map/filter/reduce/etc... : O(N)
```
#### 객체와 배열을 비교하면      

##### 객체는 정렬되어 있지는 않지만 모든 동작을 빠르게 진행하며,       
##### 배열은 정렬이 되어있지만 끝에 추가하고 제거하는 작업 처음부터 추가하고 제거하는 작업보다 훨씬 빠르다.

___