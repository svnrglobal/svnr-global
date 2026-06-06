// Pixel geometry for the Aether mascot.
// Symmetric bitmap: left half (x0..x9) is mirrored to the full 20-wide grid.
// '#' = body cell, 'O' = eye cell, '.' = empty.
const L = [
  ".......##.",
  ".......##.",
  "......####",
  "....######",
  "..########",
  ".#########",
  "##########",
  ".###OO####",
  ".###OO####",
  ".#########",
  "..########",
  "...#######",
  "...#######",
  "...#######",
  "...##.##.#",
  "...#..#..#",
];

export const GRID_W = 20;
export const GRID_H = L.length;

type Cell = { x: number; y: number };

function at(x: number, y: number): string {
  const row = L[y] || "";
  const i = x < GRID_W / 2 ? x : GRID_W - 1 - x;
  return row[i] || ".";
}

const body: Cell[] = [];
const eyes: Cell[] = [];
for (let y = 0; y < GRID_H; y++) {
  for (let x = 0; x < GRID_W; x++) {
    const c = at(x, y);
    if (c === "O") eyes.push({ x, y });
    else if (c === "#") body.push({ x, y });
  }
}

export const BODY_CELLS = body;
export const EYE_CELLS = eyes;
