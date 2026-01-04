const input = document.getElementById('search');
const result = document.getElementById('result');
let timer;

input.addEventListener('input', ()=>{
  clearTimeout(timer);
  timer = setTimeout(()=>{
    result.innerText = 'Searching for: ' + input.value;
  }, 500);
});
