document.getElementById('home').addEventListener("click", () => {
  document.getElementById('mainImg').style.display = 'block';
  document.getElementById('marvelImg').style.display = 'none';
  document.getElementById('heroesText').style.display = 'none';
});

document.getElementById('marvelDc').addEventListener("click", () => {
  document.getElementById('mainImg').style.display = 'none';
  document.getElementById('marvelImg').style.display = 'none';
  document.getElementById('heroesText').style.display = 'block';

});

document.getElementById('heroesBtn').addEventListener("click", () => {
  document.getElementById('mainImg').style.display = 'none';
  document.getElementById('marvelImg').style.display = 'block';
  document.getElementById('heroesText').style.display = 'none';
});

