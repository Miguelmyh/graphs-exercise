class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    //ver refers to a vertex
    for (let ver of this.nodes) {
      //while looping through every vertex
      // we look for the desired vertex on the adjacent list

      if (ver.adjacent.has(vertex)) {
        ver.adjacent.delete(vertex);
      }
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const nodesStack = [start];
    const visitedNodes = new Set();
    const result = [];
    visitedNodes.add(start);
    while (nodesStack.length) {
      let curr = nodesStack.pop();
      result.push(curr.value);
      for (let vertex of curr.adjacent) {
        if (!visitedNodes.has(vertex)) {
          visitedNodes.add(vertex);
          nodesStack.push(vertex);
        }
      }
    }
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const nodesQueue = [start];
    const visitedNodes = new Set();
    const result = [];
    visitedNodes.add(start);
    while (nodesQueue.length) {
      let curr = nodesQueue.shift();
      result.push(curr.value);
      for (let vertex of curr.adjacent) {
        if (!visitedNodes.has(vertex)) {
          visitedNodes.add(vertex);
          nodesQueue.push(vertex);
        }
      }
    }
    return result;
  }
}

module.exports = { Graph, Node };
