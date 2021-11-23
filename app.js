window.SpeechRecognition = window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
let p =document.createElement('p');
let templete = document.getElementById('templete');
templete.appendChild(p);

recognition.addEventListener('result',e => {
   let text = e.results[0][0].transcript;
   p.innerHTML=text;
   if(e.results[0].isFinal === true){
       p = document.createElement('p');
       templete.appendChild('p');
       window.sessionStorage.setItem('kiran',text)
   }
});

recognition.addEventListener('end',recognition.start);

recognition.start();