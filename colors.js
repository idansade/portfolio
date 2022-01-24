//var english = document.getElementById('en_click'),
//    hebraw = document.getElementById('he_click'),
    // russian = document.getElementById('ru_click'),
 // /  en_txt = document.querySelectorAll('#en'),
 //   he_txt = document.querySelectorAll('#he'),

 //   nb_en = en_txt.length,
 //   nb_he = he_txt.length;

 //   langue(english, hebraw);


 light = document.getElementById('lightmode'),
 dark = document.getElementById('darkmode');
\// currentTheme = localStorage.getItem('data-theme') ? localStorage.getItem('data-theme') : he,
 //currentlang = localStorage.getItem('data-lang') ? localStorage.getItem('data-lang') : en;

 light.addEventListener('click', function () {
    bgcolor(light, dark);
 }, false);
 dark.addEventListener('click', function () {
     bgcolor(dark, light);
 }, false);

function bgcolor(colorOff, colorOn) {
    if (colorOn.classList.contains('current_clr_light')) {
        colorOn.classList.toggle('current_clr_light');
        colorOff.classList.toggle('current_clr_dark');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
    else if (colorOn.classList.contains('current_clr_dark')) {
        colorOn.classList.toggle('current_clr_dark');
        colorOff.classList.toggle('current_clr_light');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }
}


//english.addEventListener('click', function () {
//    langue(english, hebraw);
//}, false);

//hebraw.addEventListener('click', function () {
//    langue(hebraw, english);
//}, false);


//function langue(langue1, langue2) {
//   if (langue2.classList.contains('current_lang')) {
//        langue1.classList.toggle('current_lang');
//        langue2.classList.toggle('current_lang');
//        document.documentElement.setAttribute('data-lang', 'he');
 //       localStorage.setItem('data-lang', 'he');
//    }
    // if (langue3.classList.contains('current_lang')) {
    //     langue1.classList.toggle('current_lang');
    //     langue3.classList.toggle('current_lang');

    // } else {
    //    document.documentElement.setAttribute('data-lang', 'en');
     //   localStorage.setItem('data-lang', 'en');
    // }
 //   if (langue1.innerHTML == 'en') {
 //       afficher(en_txt, nb_en);
 //       cacher(he_txt, nb_he);

  //  }
 //   else if (langue1.innerHTML == 'he') {
  //      afficher(he_txt, nb_he);
  //      cacher(en_txt, nb_en);


  //  }
//}
//function afficher(txt, nb) {
 //   for (var i = 0; i < nb; i++) {
  //      txt[i].style.display = 'block';
 //   }
//}
//function cacher(txt, nb) {
//    for (var i = 0; i < nb; i++) {
 //       txt[i].style.display = 'none';
//    }
//}
//function init() {
    langue(english, hebraw, russian);
    /*if (currentlang) {
        document.documentElement.setAttribute('data-lang', currentlang);
        if (currentlang === 'he'){
            hebraw.classList.toggle('current_lang');
            english.classList.toggle('current_lang');
            hebraw.classList.setItem('current_lang');
        }
      
        }
    }*/
     if (currentTheme) {
         document.documentElement.setAttribute('data-theme', currentTheme);
         if (currentTheme === 'dark') {
             dark.classList.toggle('current_clr_dark');
             light.classList.toggle('current_clr_light');
             dark.classList.setItem('current_clr_dark');
         }
    }
    bgcolor(dark, light);
   pagechange(homelink,bloglink);
}
