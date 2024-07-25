const dfs = (i, j, grid, vis) => {
  if(i<0 || j<0 || i===grid.length || j===grid[0].length || vis[i][j]===1 || grid[i][j]==="W") return 0;
  vis[i][j] = 1;
  grid[i][j]==="L"?1:0;
  dfs(i+1, j, grid, vis);
  dfs(i, j+1, grid, vis);
  dfs(i-1, j, grid, vis);
  dfs(i, j-1, grid, vis);
}

// const getTotalIsles = function (grid) {
  const getTotalIsles = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  const vis = Array.from({ length: n }, () => Array(m).fill(0));
  let ans = 0;
  for(let i = 0; i<n; i++) {
    for(let j = 0; j<m; j++) {
      if(vis[i][j]===1 || grid[i][j]==="W") continue;
      ans++;
      dfs(i, j, grid, vis);
    }
  }
  // console.log({ ans });
  return ans;
};

// getTotalIsles([["L", "L"], ["W", "W"]]);

// module.exports = getTotalIsles;
  module.exports = getTotalIsles;