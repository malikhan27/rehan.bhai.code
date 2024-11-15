// functin for Start Game
var player1Name;
var player2Name;
var coinarr 
var randomvalue
var p_selected
// VARIABLE BAHAR BNA K FUNCTION MAI UPDATE KIA HAI TA K WO PURI FILE MAI UPDATE HO GLOBALLY

function startGame () {
  document.getElementById ('body').classList.add ('body2');
  player1Name = document.getElementById ('player1').value;
  player2Name = document.getElementById ('player2').value;

  if (player1Name === '') {
    Swal.fire ({
      icon: 'error',
      title: 'Oops...',
      text: 'Enter player 1 name',
    });
    return;
  }

  if (player2Name === '') {
    Swal.fire ({
      icon: 'error',
      title: 'Oops...',
      text: 'Enter player 2 name',
    });
    return;
  }

  document.getElementById ('maindiv').classList.remove ('d-none');
  document.getElementById ('pname').classList.add ('d-none');
  //  var p1n = document.getElementById("player1").value  **** YE XTRA HAI ZROORAT NHI
  //  var p2n = document.getElementById("player2").value  **** YE XTRA HAI ZROORAT NHI

  document.getElementById ('p1name').innerHTML = `<h4>${player1Name}</h4>`;
  document.getElementById ('p2name').innerHTML = `<h4>${player2Name}</h4>`;
}

function clikonhead () {
  document.getElementById ('p1slected').innerHTML = `<h4> Head </h4>`;
  document.getElementById ('p2slected').innerHTML = `<h4> Tail </h4>`;
}

function clikontail () {
  document.getElementById ('p1slected').innerHTML = `<h4> Tail </h4>`;
  document.getElementById ('p2slected').innerHTML = `<h4> Head </h4>`;
}

// function added

function player1win () {
  Swal.fire ({
    title: 'Congratulations! ' + player1Name,
    text: 'Result is ' + coinarr[randomvalue] + ' ' + 'You Won',
    icon: 'success',
  });
}

// function added

function player2win () {
  Swal.fire ({
    title: 'Congratulations! ' + player2Name,
    text: 'Result is ' + coinarr[randomvalue] + ' ' + 'You Won',
    icon: 'success',
  });
}
// function added

function tosscoinimage () {
  document.getElementById ('image-coin').src = 'assets/coin.gif';
}

// function added for stopping the image
function stillimage () {
  document.getElementById ('image-coin').src = 'assets/flipstill.PNG';
}

function flipcoin () {
  // document.getElementById("flip-img").scr ="assets/flipcoin.gif"
  // var p1nm = document.getElementById("player1").value
  // var p2nm = document.getElementById("player2").value  **** zroorat nhi

  tosscoinimage ();
  setTimeout (stillimage, 3000);
   p_selected = document.getElementById ('p1slected').innerText;
   coinarr = ['Head', 'Tail'];
   randomvalue = Math.floor (Math.random () * 2);
  // var result = coinarr[randomvalue];

  if (coinarr[randomvalue] === p_selected) {
    setTimeout (player1win, 3000);
    // Swal.fire
    // ({
    // title: "Congratulations! " + p1nm,
    // text: "Result is "  + result + " "+"You Won" ,
    // icon: "success"
    // });
  } else {
    setTimeout (player2win, 3000);
    // Swal.fire
    // ({
    //   title: "Congratulations! " + p2nm ,
    //   text: "Result is "  + result +" "+ "You Won",
    //   icon: "success"
    // });
  }

  // setTimeout(tossthecoin,5000)
}
