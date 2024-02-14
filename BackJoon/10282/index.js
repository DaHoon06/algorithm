const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./BackJoon/10282/input1.txt";

const input = fs.readFileSync('./input1.txt').toString().split("\n");

/**
 * https://velog.io/@ckstn0778/%EB%B0%B1%EC%A4%80-10282%EB%B2%88-%ED%95%B4%ED%82%B9-2
 * @description 컴퓨터 개수 (노드)와 의존 개수 (간선)의 최대 크기가 큰 편이므로
 * 최단 경로 탐색 알고리즘 중 다익스트라를 사용
 */

/**
 * @description 다익스트라 알고리즘은 다이나믹 프로그래밍을 활용한 대표적인 최단 경로 탐색 알고리즘
 *
 * 특정한 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 계산 (음수는 간선에 포함하지 않음)
 *
 * BFS 기반으로 구현
 */

/**=======================
 * @description 순차 탐색
 * =======================*/

// 노드 간의 거리를 초기화
const graph = [
  [Infinity, 1, Infinity, 2, Infinity],
  [1, Infinity, 3, Infinity, 2],
  [Infinity, 3, Infinity, Infinity, 1],
  [2, Infinity, Infinity, Infinity, 2],
  [Infinity, 2, 1, 2, Infinity],
];
// 방문 여부를 기록할 배열 생성
const visited = Array(N).fill(false);
// 1번 노드로부터 각 노드까지의 최단 거리를 저장한 배열 생성
const dist = visited.map((_, i) => graph[0][i]);

// 방문하지 않았으면서 거리 테이블에서 가장 작은 값을 가진 노드 탐색
const findSmallestNode = (visited, distance) => {
  let minDistance = Infinity;
  let minIdx = 0;

  for (let i = 0; i < distance.length; i++) {
    if (visited[i]) continue;
    if (distance[i] < minDistance) {
      minDistance = distance[i];
      minIdx = i;
    }
  }
  return minIdx;
}

// 다익스트라 알고리즘
const dijkstra = (graph, visited, distance) => {
  // 1 번 노드의 거리를 0으로 설정하고, 방문한 것으로 처리
  distance[0] = 0;
  visited[0] = true;

  /**
   * 현재 방문한 노드는 거리 테이블 상에서 가장 거리가 짧은 값을 가진 노드.
   * 다음에 방문할 노드에 저장된 값이
   * "현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리" 보다 크면
   * "현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"를 거리 테이블의 다음 방문할 노드에 저장
   */

  for (let i = 0; i < distance.length; i++) {
    const nodeIdx = findSmallestNode(visited, distance);
    visited[nodeIdx] = true; // 방문처리

    for (let j = 0; j < distance.length; j++) {
      if (visited[j]) continue;
      if (distance[j] > distance[nodeIdx] + graph[nodeIdx][j])
        distance[j] = distance[nodeIdx] + graph[nodeIdx][j];
    }
  }
}

/**=======================
 * @description 우선 순위 큐
 * =======================*/

// 0번 노드는 사용하지 않는 빈 노드이다.
// 이는 시작 노드를 1번으로 설정하기 위함이다.
const graph = [
  [], // 사용X
  [
    { to: 2, dist: 1 },
    { to: 4, dist: 2 },
  ],
  [
    { to: 1, dist: 1 },
    { to: 3, dist: 3 },
    { to: 5, dist: 2 },
  ],
  [
    { to: 2, dist: 3 },
    { to: 5, dist: 1 },
  ],
  [
    { to: 1, dist: 2 },
    { to: 5, dist: 2 },
  ],
  [
    { to: 2, dist: 2 },
    { to: 3, dist: 1 },
    { to: 4, dist: 2 },
  ],
];
// 1번 노드와 각 노드까지 최단 경로를 저장하는 배열 생성
const dist = Array(graph.length).fill(Infinity);

// 큐 생성 및 1번 노드에 대한 정보 저장
const queue = [{ to: 1, dist: 0 }];

// 1번 노드의 거리는 0 으로 설정
dist[1] = 0;

// 큐가 빌 때까지 반복
while (queue.length) {
  // 큐에서 방문할 노드 꺼내기
  const { to } = queue.pop();

  // 방문한 노드까지 이동한 거리 + 다음 방문 노드까지 거리를
  // 기존에 저장된 값과 비교해서 갱신
  graph[to].forEach((next) => {
    const acc = dist[to] + next.dist;
    if (dist[next.to] > acc) {
      dist[next.to] = acc;
      // 최단 경로가 되는 노드는 큐에 추가
      queue.push(next);
    }
  });
}

/**
 * 첫 번째 줄 테스트 케이스 (최대 100)
 *
 * 두 번째 줄 (n, d, c)
 * n : 컴퓨터 개수
 * d : 의존성 개수
 * c 해킹 당한 컴퓨터 개수
 */

