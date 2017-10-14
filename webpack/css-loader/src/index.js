import './theme/body.less';
import './theme/footer.sass';
import './theme/header.css';
import './theme/modal.styl';


const oBtn = document.querySelector('#btn1');
const oModal = document.querySelector('#componentModal')

oBtn.addEventListener('click', function(){
	oModal.style.display = 'block';
}, false)

oModal.addEventListener('click', function(ev){ 
	oModal.style.display = 'none' 
}, false)

oModal.querySelector('.modal-content').addEventListener('click', function(ev){
	ev.stopPropagation();
}, false)