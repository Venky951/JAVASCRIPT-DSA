async function decodeSecretMessage(url) {
  let response = await fetch(url);
  let html = await response.text();

  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, " ");

  // Find x, character and y from the document
  let data = text.match(/\d+\s*[|]\s*[░█]\s*[|]\s*\d+/g);

  let grid = {};
  let maxX = 0;
  let maxY = 0;

  for (let item of data) {
    let parts = item.split("|");

    let x = parseInt(parts[0]);
    let character = parts[1].trim();
    let y = parseInt(parts[2]);

    grid[x + "," + y] = character;

    if (x > maxX) {
      maxX = x;
    }

    if (y > maxY) {
      maxY = y;
    }
  }

  for (let y = maxY; y >= 0; y--) {
    let line = "";

    for (let x = 0; x <= maxX; x++) {
      if (grid[x + "," + y]) {
        line += grid[x + "," + y];
      } else {
        line += " ";
      }
    }

    console.log(line);
  }
}

decodeSecretMessage(
  "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub",
);
