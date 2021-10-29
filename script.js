// const share = document.querySelector(".share");
// // const popup = document.querySelector(".popup");
// const sharejs = document.querySelector(".sharejs");
// share.onclick = fun() => {
//   sharejs.classList.toggle("show");
//   share.classList.toggle("ontop");
// };
//
// function clikk('shareJsId') {
//   elem = document.getElementById('shareJsId'); //находим блок div по его id, который передали в функцию
//   state = elem.style.display; //смотрим, включен ли сейчас элемент
//   if (state =='') elem.style.display='none'; //если включен, то выключаем
//   else elem.style.display=''; //иначе - включаем
// }


// click_iks = document.querySelector ('#jsbotton');
// theid = document.querySelector ('#shareJsId');
// click_iks . onclick = function( ) {
//
// if ( theid . classList . contains('hide') ) {
//   theid . classList . remove('hide');
//   theid . classList . add('show' );
// }
//
// else{
//   theid . classList . add('hide');
//   theid . classList . remove('show');
// }
//
// }


const jsbotton11 = document.querySelector(".jsbotton1");

const sharejss = document.querySelector(".sharejs");

jsbotton11.onclick = () => {
  sharejss.classList.toggle("toVisible");
  jsbotton11.classList.toggle("share  ");
};
