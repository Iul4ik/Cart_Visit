function openAcorddeon(evt, accordeonName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(accordeonName).style.display = "block";
  evt.currentTarget.className += "active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function openFirstSites(evt, firstSites) {
  var a, firstTabcontent, firstTablinks;
  firstTabcontent = document.getElementsByClassName("first-tabcontent");
  for (a = 0; a < firstTabcontent.length; a++) {
    firstTabcontent[a].style.display = "none";
  }
  firstTablinks = document.getElementsByClassName("first-tablinks");
  for (a = 0; a < firstTablinks.length; a++) {
    firstTablinks[a].className = firstTablinks[a].className.replace(" active", "");
  }
  document.getElementById(firstSites).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenSite").click();


function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);





let a = '' // first number
let b = '' // second number
let sign = '' // знак операций
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

// экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  // нажата не кнопка
  if(!event.target.classList.contains('btn-iphone')) return;
  // нажата кнопка clearAll ac
  if(event.target.classList.contains('ac')) return;

  out.textContent = '';
  // получаю нажатую кнопку
  const key = event.target.textContent;

  // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
      if (b === '' && sign === ''){
         
        a+= key;
        console.log(a, b, sign);
        out.textContent = a;
      } else if (a!== '' && b!== '' && finish) {
        b = key;
        finish = false;
        out.textContent = b;
      } else {
        b += key;
        out.textContent = b;
      }
      console.table(a, b, sign);
      return;
    }

  // если нажата клавиша + - / * 
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }

  // нажата =
  if (key === '=') {
    if (b === '') b = a;
    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
        case "/":
          if (b === '0') {
            out.textContent = 'Ошибка';
            a = '';
            b = '';
            sign = '';
            return;
          }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
}














var d = $(document);
$(function(){
  d.data('timer', '0');
  d.data('p1', '12');
  d.data('p2', '12');
});

function setMessage(text)
{
  e = $('div.message div');
  e.fadeOut(300).stop(true, true).data('text', e.text()).fadeIn(300);
  e.text(text);
  setTimeout('defaultMessage()', 5000);
}

function defaultMessage()
{
  e = $('div.message div');
  e.fadeOut(300).stop(true, true).text(e.data('text')).fadeIn(300);
  e.data('text', '');
}

function timer()
{
  var t = d.data('timer');
  var result = Math.floor(t / 60);
  if(result < 10)
    result = '0' + result;
  result += ':';

  var seconds = t % 60;
  if(seconds < 10)
    seconds = '0' + seconds;

  result += seconds;

  $('div.timer').text(result);

  d.data('timer', ((t * 1) + 1));

  setTimeout('timer()', 1000);
}

function player()
{
  return d.data('player');
}

function mPawn()
{
  if(player() == 1)
    d.data('p2', ((d.data('p2') * 1) - 1));
  else if(player() == 2)
    d.data('p1', ((d.data('p1') * 1) - 1));

  $('div.score').text(' Белые' + d.data('p1') + ':' + d.data('p2') + ' Красные');
}

function arrOfPossible(r, c, k)
{
  r = r * 1;
  c = c * 1;

  var result = new Array();

  var pawn = 'pawn';
  if(player() == 1)
    pawn += '2';
  else if(player() == 2)
    pawn += '1';

  var myPawn = 'pawn' + player();

  var ei, s, e;

  e = $('tr[p=' + r + '] td[p=' + c + '] div');
  if(e.hasClass('queen' + player()))
    return arrOfPossibleQueen(r, c, k);

  e = $('tr[p=' + (r - 1) + ']').children('td[p=' + (c - 1) + ']');
  if(e.children('div').hasClass(pawn))
  {
    if((r - 2) > 0 && (c - 2) > 0)
    {
        ei = $('tr[p=' + (r - 2) + '] > td[p=' + (c - 2) + '] > div');
        if(!ei.hasClass(pawn) && !ei.hasClass(myPawn))
        {
            s = (r - 2) + ';' + (c - 2);
            result.push(s);
        }
    }
  }

  e = $('tr[p=' + (r - 1) + ']').children('td[p=' + (c + 1) + ']');
  if(e.children('div').hasClass(pawn))
  {
    if((r - 2) > 0 && (c + 2) <= 8)
    {
        ei = $('tr[p=' + (r - 2) + '] > td[p=' + (c + 2) + '] > div');
        if(!ei.hasClass(pawn) && !ei.hasClass(myPawn))
        {
            s = (r - 2) + ';' + (c + 2);
            result.push(s);
        }
    }
  }

  e = $('tr[p=' + (r + 1) + ']').children('td[p=' + (c - 1) + ']');
  if(e.children('div').hasClass(pawn))
  {
    if((r + 2) <= 8 && (c - 2) > 0)
    {
        ei = $('tr[p=' + (r + 2) + '] > td[p=' + (c - 2) + '] > div');
        if(!ei.hasClass(pawn) && !ei.hasClass(myPawn))
        {
            s = (r + 2) + ';' + (c - 2);
            result.push(s);
        }
    }
  }

  e = $('tr[p=' + (r + 1) + ']').children('td[p=' + (c + 1) + ']');
  if(e.children('div').hasClass(pawn))
  {
    if((r + 2) <= 8 && (c + 2) <= 8)
    {
        ei = $('tr[p=' + (r + 2) + '] > td[p=' + (c + 2) + '] > div');
        if(!ei.hasClass(pawn) && !ei.hasClass(myPawn))
        {
            s = (r + 2) + ';' + (c + 2);
            result.push(s);
        }
    }
  }

  if(!k)
  {
    if(c > 1 && r > 1)
    {
        e = $('tr[p=' + (r - 1) + ']').children('td[p=' + (c - 1) + ']');
        if(!e.children('div').hasClass(myPawn))
        {
            if(!e.children('div').length)
            {
                if(player() == 1 || $('tr[p=' + r + '] td[p=' + c + '] div').hasClass('queen' + player()))
                {
                    s = (r - 1) + ';' + (c - 1);
                    result.push(s);
                }
            }
        }
    }

    if(c <= 8 && r > 1)
    {
        e = $('tr[p=' + (r - 1) + ']').children('td[p=' + (c + 1) + ']');
        if(!e.children('div').hasClass(myPawn))
        {
            if(!e.children('div').length)
            {
                if(player() == 1 || $('tr[p=' + r + '] td[p=' + c + '] div').hasClass('queen' + player()))
                {
                    s = (r - 1) + ';' + (c + 1);
                    result.push(s);
                }
            }
        }
    }

    if(c > 1 && r < 8)
    {
        e = $('tr[p=' + (r + 1) + ']').children('td[p=' + (c - 1) + ']');
        if(!e.children('div').hasClass(myPawn))
        {
            if(!e.children('div').length)
            {
                if(player() == 2 || $('tr[p=' + r + '] td[p=' + c + '] div').hasClass('queen' + player()))
                {
                    s = (r + 1) + ';' + (c - 1);
                    result.push(s);
                }
            }
        }
    }

    if(c < 8 && r < 8)
    {
        e = $('tr[p=' + (r + 1) + ']').children('td[p=' + (c + 1) + ']');
        if(!e.children('div').hasClass(myPawn))
        {
            if(!e.children('div').length)
            {
                if(player() == 2 || $('tr[p=' + r + '] td[p=' + c + '] div').hasClass('queen' + player()))
                {
                    s = (r + 1) + ';' + (c + 1);
                    result.push(s);
                }
            }
        }
    }
  }
  return result;
}

function arrOfPossibleQueen(r, c, k)
{
  r = r * 1;
  c = c * 1;
  var result = new Array();

  var pawn = 'pawn';
  if(player() == 1)
    pawn += '2';
  else if(player() == 2)
    pawn += '1';

  var myPawn = 'pawn' + player();

  var r2, c2, e, s;

  var b = true; r2 = r; c2 = c;
  while(b)
  {
    r2 = r2 - 1;
    c2 = c2 - 1;
    if(r2 < 2 || c2 < 2)
    {
        b = false;
        break;
    }

    e = $('tr[p=' + r2 + '] td[p=' + c2 + ']');
    if(e.children('div').hasClass(pawn))
    {
        if(!$('tr[p=' + (r2 - 1) + '] td[p=' + (c2 - 1) + ']').children('div').length)
        {
            s = (r2 - 1) + ';' + (c2 - 1);
            result.push(s);
        }
        break;
    }
    if(e.children('div').hasClass(myPawn))
        break;
  }

  b = true; r2 = r; c2 = c;
  while(b)
  {
    r2 = r2 - 1;
    c2 = c2 + 1;
    if(r2 < 2 || c2 > 7)
    {
        b = false;
        break;
    }

    e = $('tr[p=' + r2 + '] td[p=' + c2 + ']');
    if(e.children('div').hasClass(pawn))
    {
        if(!$('tr[p=' + (r2 - 1) + '] td[p=' + (c2 + 1) + ']').children('div').length)
        {
            s = (r2 - 1) + ';' + (c2 + 1);
            result.push(s);
        }
        break;
    }
    if(e.children('div').hasClass(myPawn))
        break;
  }

  b = true; r2 = r; c2 = c;
  while(b)
  {
    r2 = r2 + 1;
    c2 = c2 - 1;
    if(r2 > 7 || c2 < 2)
    {
        b = false;
        break;
    }

    e = $('tr[p=' + r2 + '] td[p=' + c2 + ']');
    if(e.children('div').hasClass(pawn))
    {
        if(!$('tr[p=' + (r2 + 1) + '] td[p=' + (c2 - 1) + ']').children('div').length)
        {
            s = (r2 + 1) + ';' + (c2 - 1);
            result.push(s);
        }
        break;
    }
    if(e.children('div').hasClass(myPawn))
        break;
  }

  b = true; r2 = r; c2 = c;
  while(b)
  {
    r2 = r2 + 1;
    c2 = c2 + 1;
    if(r2 > 7 || c2 > 7)
    {
        b = false;
        break;
    }

    e = $('tr[p=' + r2 + '] td[p=' + c2 + ']');
    if(e.children('div').hasClass(pawn))
    {
        if(!$('tr[p=' + (r2 + 1) + '] td[p=' + (c2 + 1) + ']').children('div').length)
        {
            s = (r2 + 1) + ';' + (c2 + 1);
            result.push(s);
        }
        break;
    }
    if(e.children('div').hasClass(myPawn))
        break;
  }

  if(!k)
  {
    b = true; r2 = r - 1; c2 = c - 1;
    while(b)
    {
        e = $('tr[p=' + r2 + '] td[p=' + c2 + ']');
        if(e.children('div').hasClass(pawn) || e.children('div').hasClass(myPawn))
            break;

        s = r2 + ';' + c2;
        result.push(s);

        r2 = r2 - 1;
        c2 = c2 - 1;
        if(r2 < 1 || c2 < 1)
            b = false;
    }

    b = true; r2 = r - 1; c2 = c + 1;
    while(b)
    {
        e = $('tr[p=' + r2 + '] td[p=' + c2 + ']');
        if(e.children('div').hasClass(pawn) || e.children('div').hasClass(myPawn))
            break;

        s = r2 + ';' + c2;
        result.push(s);

        r2 = r2 - 1;
        c2 = c2 + 1;
        if(r2 < 1 || c2 > 8)
            b = false;
    }

    b = true; r2 = r + 1; c2 = c - 1;
    while(b)
    {
        e = $('tr[p=' + r2 + '] td[p=' + c2 + ']');
        if(e.children('div').hasClass(pawn) || e.children('div').hasClass(myPawn))
            break;

        s = r2 + ';' + c2;
        result.push(s);

        r2 = r2 + 1;
        c2 = c2 - 1;
        if(r2 > 8 || c2 < 1)
            b = false;
    }

    b = true; r2 = r + 1; c2 = c + 1;
    while(b)
    {
        e = $('tr[p=' + r2 + '] td[p=' + c2 + ']');
        if(e.children('div').hasClass(pawn) || e.children('div').hasClass(myPawn))
            break;

        s = r2 + ';' + c2;
        result.push(s);

        r2 = r2 + 1;
        c2 = c2 + 1;
        if(r2 > 8 || c2 > 8)
            b = false;
    }
  }

  return result;
}

function checkOnKick()
{
  var result = new Array();
  var r, c;

  $('div.pawn' + player()).parent().each(function(){
    c = $(this).attr('p');
    r = $(this).parent().attr('p');
    p = arrOfPossible(r, c, true);
    if(p.length)
        result.push(r + ';' + c);
  });

  return result;
}

function getPossible(r, c, k)
{
  var p = arrOfPossible(r, c, k);

  var arr;

  for(var i = 0; i < p.length; i++)
  {
    arr = p[i].split(';');
    $('tr[p=' + arr[0] + ']').children('td[p=' + arr[1] + ']').toggleClass('possible').toggleClass('p2');
  }
}

function changePlayer()
{
  if(player() == 2)
  {
    d.data('player', '1');
    $('div.indicator').text('Белые').animate({top: '600px'}, 500);
  }
  else if(player() == 1)
  {
    d.data('player', '2');
    $('div.indicator').text('Красные').animate({top: '400px' }, 500);
  }
}

function start()
{
  d.data('player', '1');
  $('div.indicator > div').text('Белые').parent().animate( 500);
  $('div.timer').show();
  $('div.score').show();
  timer();
}

function end()
{
  var r;
  r = 'Белые!<br/>';
  if(d.data('p1') == 0)
    r += 'Красные';
  else if(d.data('p2') == 0)
    r += 'Белые';
  r += ' Выйграли';

  $('div.win > div').html(r).parent().fadeIn(500);
  $('div.timer').hide();
  $('div.indicator').hide();
}

$('input.start').click(function(){
  start();
  $(this).parent().fadeOut(500);
});

$('td > div.pawn1').live('hover', function(){
  if(player() == 1)
    $(this).parent().toggleClass('hover');
});
$('td > div.pawn2').live('hover', function(){
  if(player() == 2)
    $(this).parent().toggleClass('hover');
});

$('td').click(function(){
  if($(this).hasClass('possible'))
    return true;
  $('td').removeClass('checked').removeClass('possible').removeClass('p2');
});

$('div.pawn1').live('click', function(){
    if(player() == 2)
        return true;

    $(this).parent().toggleClass('checked');

    var r = $(this).parent().parent().attr('p');
    var c = $(this).parent().attr('p');
    var k = checkOnKick();
    var ch = r + ';' + c;
    if(k.length)
        getPossible(r, c, true);
    else
        getPossible(r, c, false);
});
$('div.pawn2').live('click', function(){
    if(player() == 1)
        return true;

    $(this).parent().toggleClass('checked');

    var r = $(this).parent().parent().attr('p');
    var c = $(this).parent().attr('p');
    var k = checkOnKick();
    var ch = r + ';' + c;
    if(k.length)
        getPossible(r, c, true);
    else
        getPossible(r, c, false);
});

$('td.possible').live('click', function(){
  var e = $('td.checked');

  var re = (e.parent().attr('p')) * 1;
  var ce = (e.attr('p')) * 1;
  var r = ($(this).parent().attr('p')) * 1;
  var c = ($(this).attr('p')) * 1;
  var kick = false;
  var ei, rn, cn;

  if(Math.abs(r - re) > 1 && Math.abs(c - ce) > 1)
  {
    rn = (r + ((re - r)/(Math.abs(re - r))));
    cn = (c + ((ce - c)/(Math.abs(ce - c))));
    ei = $('tr[p=' + rn + '] > td[p=' + cn + ']');
    if(ei.children('div').length)
    {
        ei.html('');
        mPawn();
        kick = true;
    }
  }

  if(kick)
  {
    var p1 = d.data('p1');
    var p2 = d.data('p2');
    if(p1 * p2 == 0)
        end();
  }

  $(this).html(e.html());
  e.html('');

  if(player() == 1)
  {
    if(r == 1)
        $(this).children('div.pawn1').addClass('queen1');
  }
  else if(player() == 2)
  {
    if(r == 8)
        $(this).children('div.pawn2').addClass('queen2');
  }

  $('td').removeClass('checked').removeClass('possible').removeClass('p2');

  var p = arrOfPossible(r, c, true);
  if(p.length && kick)
  {
    $(this).toggleClass('checked');
    getPossible(r, c, true);
  }
  else
    changePlayer();
});




// function openSecondSite(evt, secondSiteName) {
  // var i, tabcontent, tablinks;
  // tabcontent = document.getElementsByClassName("secondSite-tabcontent");
  // for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].style.display = "none";
  // }
  // tablinks = document.getElementsByClassName("secondSite-tablinks");
  // for (i = 0; i < tablinks.length; i++) {
    // tablinks[i].className = tablinks[i].className.replace(" active", "");
  // }
  // document.getElementById(secondSiteName).style.display = "block";
  // evt.currentTarget.className += "active";
// }
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpenSecondSite").click();


window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}