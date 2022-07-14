document.getElementById('button-su').addEventListener('click', function () {
	document.querySelector('.bg-modal-su').style.display = 'flex';
});

document.querySelector('.close-su').addEventListener('click',function(){
	document.querySelector('.bg-modal-su').style.display = 'none';
}); 

document.getElementById('button-li').addEventListener('click', function () {
	document.querySelector('.bg-modal-li').style.display = 'flex';
});

document.querySelector('.close-li').addEventListener('click',function(){
	document.querySelector('.bg-modal-li').style.display = 'none';
});

document.getElementById('delete-id').addEventListener('click', function () {
	document.querySelector('.bg-delete').style.display = 'flex';
});

document.querySelector('.close-delete').addEventListener('click',function(){
	document.querySelector('.bg-delete').style.display = 'none';
});

