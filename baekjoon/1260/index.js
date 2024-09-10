const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./BackJoon/1260/input1.txt";

const input = fs.readFileSync('./input1.txt').toString().split("\n");

// https://mine-it-record.tistory.com/524

let graph = [];

const arr = input.map(v => v.replace('\r', ''));

arr.forEach(value => {
  const numbers = value.split(' ');
  graph.push(numbers);
});

const visited = Array(graph.length).fill(false);
console.log(`사용될 그래프 : `, graph)
console.log(`시작은 0 번 째 부터`)

dfsSolution(graph, 0, visited)

function dfsSolution(graph, start, visited) {
  // 현재 노드 확인 처리
  visited[start] = true;
  console.log(start, '번 째');

  for (let node of graph[start]) {
    if (!visited[node]) {
      dfsSolution(graph, node, visited);
    }
  }
}


/**
 * @description 재귀를 활용한 dfs 구하기
 * DFS (Depth-First-Search) 깊이 우선 탐색
 * 그래프에서 깊은 부분을 우선으로 탐색하는 알고리즘
 */
function dfs(graph, start, visited) {
  // 현재 노드 확인 처리
  visited[start] = true;
  console.log(start);

  for (let node of graph[start]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
}
/**
 * @description 스택을 활용한 bfs 구하기
 * BFS (Breath-First-Search) 너비 우선 탐색
 * 시작 노드로부터 가까운 노드를 먼저 방문하고, 멀리 떨어져있는 노드를 나중에 방문하는 탐색 방법
 *
 * DFS는 최대한 멀리 있는 노드를 탐색하는 반면, BFS는 반대

 * 선입선출 방식인 큐 자료구조를 이용하는 것이 일반적
 */
function bfs(graph, start, visited) {
  const queue = new Queue();
  queue.push(start);
  visited[start] = true;

  while (queue.size()) {
    const value = queue.popleft();
    console.log(value);

    for (const node of graph[start]) {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = true;
      }
    }
  }
}

class Queue {
  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (!this.store[this.rear]) return 0
    else this.rear - this.front + 1;
  }

  push(value) {
    if (this.size() === 0) this.store['0'] = value;
    else {
      this.rear += 1;
      this.store[this.rear] = value;
    }
  }

  popleft() {
    let temp;

    if (this.front === this.rear) {
      temp = this.store[this.front];
      delete this.store[this.front];

      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front += 1;
    }

    return temp;
  }

}

function dfsByStack(graph, start, visited) {
  const stack = [];
  stack.push(start);

  while (stack.length) {
    let v = stack.pop();
    if (!visited[v]) {
      console.log(v);
      visited[v] = true;

      for (let node of graph[v]) {
        if (!visited[node]) {
          stack.push(node);
        }
      }
    }
  }
}

/**============================================== */

let [n, m, v] = input[0].split(" ").map(Number);
let graph = new Array(n + 1);

for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((elem) => {
  elem.sort((a,b) => a - b);
});

let visited = new Array(n + 1).fill(0);
let answer_dfs = [];

function DFS(v) {
  if (visited[v]) return;
  answer_dfs.push(v);
  
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) DFS(next);
  }
}

DFS(v);

let answer_bfs = [];
function BFS(v) {
  let queue = [v];
  
  while (queue.length) {
    let x = queue.shift();
  
    if (visited[x] === 1) continue;
    
    visited[x] = 1;
    answer_bfs.push(x);
    
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) queue.push(next);
    }
  }
}

BFS(v);