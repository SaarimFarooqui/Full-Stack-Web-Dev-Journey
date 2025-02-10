function shift(){
  board =  document.getElementById('white2')
  let value = board.style.justifyContent || window.getComputedStyle(board).justifyContent;

  if (value == 'flex-end'){
    board.style.justifyContent = 'flex-start';
    document.getElementById('text').innerHTML = "Sign Up"
  }else{
    board.style.justifyContent = 'flex-end';
    document.getElementById('text').innerHTML = "Sign In"
  }
}