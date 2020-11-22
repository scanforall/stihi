document.querySelector('.controls__paint').onclick = function(){
  document.querySelector('.poem__single').classList.add('block__hidden');
  document.querySelector('.paint__single').classList.remove('block__hidden');
  document.querySelector('.puzzle__single').classList.add('block__hidden');

}

document.querySelector('.controls__puzzle').onclick = function(){
  document.querySelector('.poem__single').classList.add('block__hidden');
  document.querySelector('.paint__single').classList.add('block__hidden');
  document.querySelector('.puzzle__single').classList.remove('block__hidden');
}

document.querySelector('.controls__listen').onclick = function(){
  document.querySelector('.poem__single').classList.remove('block__hidden');
  document.querySelector('.paint__single').classList.add('block__hidden');
  document.querySelector('.puzzle__single').classList.add('block__hidden');
}