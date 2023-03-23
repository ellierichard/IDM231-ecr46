//Initialize Global Varriables
var userMonth = 0;
var userDay = 0;
var userSign = "nan";
var counter = 0; // used for just counting from 0 to 12 when initializing the zodiac sign buttons.
var rotate = 0; // used for rotating the zodiac carousel later on.

//Function: Rotate Elements in the Array by places
function shiftArrayToRight(arr, places) {
    for (var i = 0; i < places; i++) {
        arr.unshift(arr.pop());
    }
}

/*
Initializing star sign objects
*/

function getSign(month, day) {
  var sign = "nan";
  if (((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31) ||
  ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) || (month == 2 && day > 29) || (day < 1)) {
    sign="oph"; 
  }
  else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    sign = "cap";
  }
  else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    sign = "sag";
  }
  else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
    sign = "sco";
  }
  else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    sign = "lib";
  }
  else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    sign = "vir";
  }
  else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    sign = "leo";
  }
  else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    sign = "can";
  }
  else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    sign = "gem";
  }
  else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    sign = "tau";
  }
  else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    sign = "ari";
  }
  else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    sign = "pis";
  }
  else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    sign = "aqu";
  }
  else {
    sign = "oph";
  }
  return sign;
}

//Function: Create sign Object for each astrological sign.
function sign(starsign, name, sound, image, description, isSelected, dates) {
  this.starsign = starsign;
  this.name = name;
  this.sound = `sounds/${sound}.wav`;
  this.image = `img/icons/${image}.png`;
  this.description = description;
  this.isSelected = false;
  this.dates = dates;
  var audio = new Audio(this.sound);

  this.playSound = function() {
    audio.play();
  };


  this.stopSound = function() {
    audio.load();
    audio.pause();
  };
}


function makeSignBtn(sign) {
  const btn = document.createElement("a");
  btn.style.gridArea = `btn-${counter}`;
  btn.id = `btn-${counter}`;
  btn.classList.add("sign-btn");

  const img = document.createElement("img");
  img.src = sign.image;

  if (sign.isSelected == true) {
    img.classList.add("is-selected");
  }
  else {
    img.classList.add("sign");
  }
  img.id = `btn-${sign.starsign}`;

  btn.append(img);

  return btn;
}

//signs as objects.
const cap = new sign(
  "Capricorn",
  "Croatia",
  "Croatia",
  "Croatia",
  "Capricorn Traits: Strengths: Responsible, disciplined, self-control, good managers. Weaknesses: Know-it-all, unforgiving, condescending, expecting the worstCapricorn likes: Family, tradition, music, understated status, quality craftsmanship. Capricorn dislikes: Almost everything at some point",
  false,
  "Dec 22 - Jan 19"
);
const sag = new sign(
  "Sagittarius",
  "United States of America",
  "USA",
  "USA",
  "Sagittarius Traits: Strengths: Generous, idealistic, great sense of humor. Weaknesses: Promises more than can deliver, very impatient, will say anything no matter how undiplomatic. Sagittarius likes: Freedom, travel, philosophy, being outdoors. Sagittarius dislikes: Clingy people, being constrained, off-the-wall theories, details",
  false,
  "Nov 22 - Dec 21"
);
const sco = new sign(
  "Scorpio",
  "Argentina",
  "Argentina",
  "Argentina",
  "Strengths: Resourceful, powerful, brave, passionate, a true friend. Weaknesses: Distrusting, jealous, manipulative, violent. Scorpio likes: Truth, facts, being right, talents, teasing, passion. Scorpio dislikes: Dishonesty, revealing secrets, superficiality, small talk",
  false,
  "Oct 23 - Nov 21"
);
const lib = new sign(
  "Libra",
  "Japan",
  "Japan",
  "Japan",
  "Strengths: Cooperative, diplomatic, gracious, fair-minded, social. Weaknesses: Indecisive, avoids confrontations, will carry a grudge, self-pity. Libra likes: Harmony, gentleness, sharing with others, the outdoors. Libra dislikes: Violence, injustice, loudmouths, conformity",
  false,
  "Sep 23 - Oct 22"
);
const vir = new sign(
  "Virgo",
  "South Africa",
  "South Africa",
  "South Africa",
  "Strengths: Loyal, analytical, kind, hardworking, practical. Weaknesses: Shyness, worry, overly critical of self and others, all work and no play. Virgo likes: Animals, healthy food, books, nature, cleanliness. Virgo dislikes: Rudeness, asking for help, taking center stage",
  false,
  "Aug 23 - Sep 22"
);
const leo = new sign(
  "Leo",
  "Dubai",
  "Dubai",
  "Dubai",
  "Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous. Weaknesses: Arrogant, stubborn, self-centered, lazy, inflexible. Leo likes: Theater, taking holidays, being admired, expensive things, bright colors, fun with friends. Leo dislikes: Being ignored, facing difficult reality, not being treated like a king or queen",
  false,
  "Jul 23 - Aug 22"
);
const can = new sign(
  "Cancer",
  "Greece",
  "Greece",
  "Greece",
  "Strengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive. Weaknesses: Moody, pessimistic, suspicious, manipulative, insecure. Cancer likes: Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends. Cancer dislikes: Strangers, any criticism of Mom, revealing of personal life",
  false,
  "Jun 21 - Jul 22"
);
const gem = new sign(
  "Gemini",
  "India",
  "India",
  "India",
  "Strengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas. Weaknesses: Nervous, inconsistent, indecisive. Gemini likes: Music, books, magazines, chats with nearly anyone, short trips around the town. Gemini dislikes: Being alone, being confined, repetition and routine",
  false,
  "May 21 - Jun 20"
);
const tau = new sign(
  "Taurus",
  "Romania",
  "Romania",
  "Romania",
  "Strengths: Reliable, patient, practical, devoted, responsible, stable. Weaknesses: Stubborn, possessive, uncompromising. Taurus likes: Gardening, cooking, music, romance, high quality clothes, working with hands. Taurus dislikes: Sudden changes, complications, insecurity of any kind, synthetic fabrics",
  false,
  "Apr 20 - May 20"
);
const ari = new sign(
  "Aries",
  "Chile",
  "Chile",
  "Chile",
  "Strengths: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate. Weaknesses: Impatient, moody, short-tempered, impulsive, aggressive. Aries likes: Comfortable clothes, taking on leadership roles, physical challenges, individual sports. Aries dislikes: Inactivity, delays, work that does not use one's talents",
  false,
  "Mar 21 - Apr 19"
);
const pis = new sign(
  "Pisces",
  "Italy",
  "Italy",
  "Italy",
  "Strengths: Compassionate, artistic, intuitive, gentle, wise, musical. Weaknesses: Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr. Pisces likes: Being alone, love, sleeping, music, romance, swimming, spiritual themes. Pisces dislikes: Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind",
  false,
  "Feb 19 - Mar 20"
);
const aqu = new sign(
  "Aquarius",
  "Switzerland",
  "Switzerland",
  "Switzerlan",
  "Strengths: Progressive, original, independent, humanitarian. Weaknesses: Runs from emotional expression, temperamental, uncompromising, aloof. Aquarius likes: Fun with friends, risky business, fighting for causes, intellectual conversations.. Aquarius dislikes: Limitations, broken promises, being lonely, dull or boring situations.",
  false,
  "Jan 20 - Feb 18"
);
const oph = new sign(
  "Ophiuchus",
  "Oops",
  "Oops",
  "OoPS",
  "Unfortunately for you, there's no zodiac to fit you're outstanding persona",
  false,
  "NaN - NaN"
);
const nan = new sign(
  "",
  "",
  "",
  "",
  "",
  false,
  ""
);

//Array to hold all of the signs.
var signs = [aqu, pis, ari, tau, gem, can, leo, vir, lib, sco, sag, cap];


function submit(dob) {

  signs = [aqu, pis, ari, tau, gem, can, leo, vir, lib, sco, sag, cap];


  $(".starting-content").addClass("fade-out");
  $(".on-click-content").addClass("fade-in-short-delay");
  $(".title").addClass("move-up");

 
  if(dob == 1) {
    //Show all the secondary content.
    document.getElementById("grd-zodiac-wheel").style.transform = "translate(-110%, -44%)";
    document.getElementById("grd-zodiac-wheel").classList.add("push-left");
    $(".followup-content").addClass("fade-in-short-delay");

    userMonth = parseInt($("#month-list").val());
    userDay = parseInt($("#day-select").val());
    userSign = getSign(userMonth, userDay);

    //*easteregg*, replaces sign[0] (always Aquarius) with Oops on wheel until page is reloaded if the user entered an invalid date.
    if (eval(userSign) == oph) {
      signs[0] = oph;
      document.getElementsByClassName("sign-title")[0].classList.add("glitch-holder"); 
    }

    userSign = eval(userSign);

 
    shiftArrayToRight(signs, 12-signs.indexOf(userSign));

    signs[0].isSelected = true;
    setTimeout(function(){ signs[0].playSound(); }, 2000);
  }
 
  else {
    userMonth = 1;
    userDay = 1;
    userSign = nan;
  }

  var ch = $('#grd-zodiac-wheel').height();
  $('#grd-zodiac-wheel').css({'width': ch + 'px'});

  //Initializing Event Listeners for each of the signs.
  signs.forEach(function(sign) {
    const signBtn = makeSignBtn(sign);
    signBtn.addEventListener("click", function() {
        $(".followup-content").addClass("fade-in-no-delay");
        document.getElementById("grd-zodiac-wheel").classList.add("push-left");
        sign.isSelected = true;
        document.getElementById(`btn-${sign.starsign}`).classList.add("is-selected");
        document.getElementById(`btn-${sign.starsign}`).classList.remove("sign");
        document.getElementById("sign-name").innerHTML = sign.starsign.toUpperCase();
        document.getElementById("sign-dates").innerHTML = sign.dates.toUpperCase();
        document.getElementById("sign-desc").innerHTML = sign.description;
        document.getElementById("criminal-name").innerHTML = sign.name.toUpperCase();
        sign.playSound();
        signs.forEach(function(tempSign) {
          if (tempSign != sign) {
            tempSign.isSelected = false;
            tempSign.stopSound();
            document.getElementById(`btn-${tempSign.starsign}`).classList.add("sign");
            document.getElementById(`btn-${tempSign.starsign}`).classList.remove("is-selected");
          }
        });
        var lastSel = signs[0];
        shiftArrayToRight(signs, 12-signs.indexOf(sign));
        if (signs.indexOf(lastSel) <= 6) {
          rotate = rotate + (30 * signs.indexOf(lastSel));
        }
        else {
          rotate = rotate + (-30 * (12 - signs.indexOf(lastSel)));
        }
        document.getElementsByClassName("sign-title")[0].style.transform = `rotate(${-rotate}deg)`;
        document.getElementById("grd-zodiac-wheel").style.transform = `translate(-110%, -44%) rotate(${rotate}deg)`;
        signs.forEach(function(curSign) {
          document.getElementById(`btn-${curSign.starsign}`).style.transform = `rotate(${-rotate}deg)`;
          document.getElementById(`btn-${curSign.starsign}`).style.transition = "0.75s ease";
        });
        document.getElementById(`btn-${sign.starsign}`).style.transform += "scale(1.3)";
      }, false);
    //Base global counter, starts at 0, ends at 11, and used to get the right element in signs array.
    counter+=1;
    document.getElementById("grd-zodiac-wheel").append(signBtn);
  });

  if (dob == 1) {
    document.getElementById("grd-zodiac-wheel").classList.add("push-left");
    document.getElementById(`btn-${signs[0].starsign}`).style.transform += "scale(1.3)";
    document.getElementById(`btn-${signs[0].starsign}`).classList.add("is-selected");
    document.getElementById(`btn-${signs[0].starsign}`).classList.remove("sign");
    document.getElementById("sign-name").innerHTML = signs[0].starsign.toUpperCase();
    document.getElementById("sign-dates").innerHTML = signs[0].dates.toUpperCase();
    document.getElementById("sign-desc").innerHTML = signs[0].description;
    document.getElementById("criminal-name").innerHTML = signs[0].name.toUpperCase();
  }
}


function resubmit() {
  var lastSel = signs[0];

  userMonth = parseInt($("#month-restart-list").val());
  userDay = parseInt($("#day-restart-select").val());
  userSign = getSign(userMonth, userDay);

  if (eval(userSign) == oph) {
    userSign = signs[0];
    alert("Uh oh, the date you entered doesn't exist!");
  }
  else {
    userSign = eval(userSign);
    shiftArrayToRight(signs, 12-signs.indexOf(userSign));

    signs[0].isSelected = true;

    document.getElementById(`btn-${signs[0].starsign}`).classList.add("is-selected");
    document.getElementById(`btn-${signs[0].starsign}`).classList.remove("sign");
    document.getElementById("sign-name").innerHTML = signs[0].starsign.toUpperCase();
    document.getElementById("sign-dates").innerHTML = signs[0].dates.toUpperCase();
    document.getElementById("sign-desc").innerHTML = signs[0].description;
    document.getElementById("criminal-name").innerHTML = signs[0].name.toUpperCase();
    signs[0].playSound();
    signs.forEach(function(tempSign) {
      if (tempSign != signs[0]) {
        tempSign.isSelected = false;
        tempSign.stopSound();
        document.getElementById(`btn-${tempSign.starsign}`).classList.add("sign");
        document.getElementById(`btn-${tempSign.starsign}`).classList.remove("is-selected");
      }
    });

    if (signs.indexOf(lastSel) <= 6) {
      rotate = rotate + (30 * signs.indexOf(lastSel));
    }
    else {
      rotate = rotate + (-30 * (12 - signs.indexOf(lastSel)));
    }
    document.getElementsByClassName("sign-title")[0].style.transform = `rotate(${-rotate}deg)`;
    document.getElementById("grd-zodiac-wheel").style.transform = `translate(-110%, -44%) rotate(${rotate}deg)`;
    signs.forEach(function(curSign) {
      document.getElementById(`btn-${curSign.starsign}`).style.transform = `rotate(${-rotate}deg)`;
      document.getElementById(`btn-${curSign.starsign}`).style.transition = "0.75s ease";
    });
    document.getElementById(`btn-${signs[0].starsign}`).style.transform += "scale(1.3)";
    console.log(signs[0]);
  }
}

function skipSplash() {
  document.getElementById("skip-btn").classList.remove("fade-out-with-delay");
  document.getElementById("skip-btn").classList.add("fade-out");
  var fadeIns  = document.getElementsByClassName("fade-in");
  for (var i = 0; i < fadeIns.length; i++) {
    fadeIns[i].classList.add("fade-in-crazy-short-delay");
  }
  document.getElementById("nefa-title").classList.remove("text-flicker-and-push");
  document.getElementById("nefa-title").classList.add("text-push");
  document.getElementById("background-gradient").classList.remove("background-animation");
  document.getElementById("background-gradient").classList.add("background-skip-animation");
}

document.getElementById("submit-btn").addEventListener("click", function() {
    submit(1); //The 1 as the param coorelates to if the "SUBMIT" button pressed on the first pg.
    document.getElementsByClassName("on-click-content")[0].style.display = "";
  }, false);
document.getElementById("explore-btn").addEventListener("click", function() {
    submit(0);//The 0 as the param coorelates to if the "EXPLORE" button pressed on the first pg.
    document.getElementsByClassName("on-click-content")[0].style.display = "";
  }, false);
document.getElementById("resubmit-btn").addEventListener("click", resubmit, false);

document.getElementById("skip-btn").addEventListener("click", skipSplash, false);