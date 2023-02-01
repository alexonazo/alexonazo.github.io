/*Cuenta regresiva*/ 
var end = new Date('2/25/2023 00:00 AM');
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;
  function showRemaining() {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {
          clearInterval(timer);
          document.getElementById('countdown').innerHTML = 'EXPIRED!';
          return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      document.getElementById('countdown').innerHTML = '<div class="box">'+days + '<div class="text">Dias</div></div><div class="box">' + hours + '<div class="text">Horas</div></div><div class="box">' + minutes + '<div class="text">Mins</div></div><div class="box">' + seconds+'<div class="text">Seg</div></div>';
  }        
  timer = setInterval(showRemaining, 1000);

/*Borde animado*/ 


/*Botón desplazarse*/
document.getElementById("miBoton").addEventListener("click", function() {
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
  });