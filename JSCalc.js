$(document).ready(function() {

  var first = '';
  var lastButton = '';
  var temp = '';
  var operator = '';
  var runTot = [];
  //parseInt
  $('#ON').on('click', function() {
    first = [];
    lastButton = '';
    $('#txtBox').val(first);
  })

  $('#7').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [7];
    } else first.push(7);
    lastButton = '7';
    $('#txtBox').val(first.join(''));
  })

  $('#AC').on('click', function() {
    first = [];
    lastButton = 'AC';
    $('#txtBox').val(first);
  })

  $('#OFF').on('click', function() {
    first = '';
    lastButton = '';
    $('#txtBox').val(first);
  })

  $('#8').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [8];
    } else first.push(8);
    lastButton = '8';
    $('#txtBox').val(first.join(''));
  })

  $('#9').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [9];
    } else first.push(9);
    lastButton = '9';
    $('#txtBox').val(first.join(''));
  })

  $('#4').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [4];
    } else first.push(4);
    lastButton = '4';
    $('#txtBox').val(first.join(''));
  })

  $('#5').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [5];
    } else first.push(5);
    lastButton = '5';
    $('#txtBox').val(first.join(''));
  })

  $('#6').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = ['6'];
    } else first.push(6);
    lastButton = '6';
    $('#txtBox').val(first.join(''));
  })

  $('#1').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [1];
    } else first.push(1);
    lastButton = '1';
    $('#txtBox').val(first.join(''));
  })

  $('#2').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [2];
    } else first.push(2);
    lastButton = '2';
    $('#txtBox').val(first.join(''));
  })

  $('#3').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [3];
    } else first.push(3);
    lastButton = '3';
    $('#txtBox').val(first.join(''));
  })

  $('#0').on('click', function() {
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '=') {
      first = [0];
    } else first.push(0);
    lastButton = '0';
    $('#txtBox').val(first.join(''));
  })

  $('#x').on('click', function() {
    if (lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '*' || lastButton === 'AC') {
      first = ['Error'];
    } else {
      temp = first.join('');
      lastButton = '*';
      operator = '*';
    }
    $('#txtBox').val(first.join(''));
    first = [];
  })

  $('#-').on('click', function() {
    if (lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '*' || lastButton === 'AC') {
      first = ['Error'];
    } else {
      temp = first.join('');
      lastButton = '-';
      operator = '-';
    }
    $('#txtBox').val(first.join(''));
    first = [];
  })

  $('#plus').on('click', function() {
    if (lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '*' || lastButton === 'AC') {
      first = ['Error'];
    } else {
      temp = first.join('');
      lastButton = '+';
      operator = '+';
    }
    $('#txtBox').val(first.join(''));
    first = [];
  })

  $('#÷').on('click', function() {
    if (lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '*' || lastButton === 'AC') {
      first = ['Error'];
    } else {
      temp = first.join('');
      lastButton = '/';
      operator = '/';
    }
    $('#txtBox').val(first.join(''));
    first = [];
  })

  $('#equals').on('click', function() {
    if (lastButton === '/' || lastButton === '+' || lastButton === '-' || lastButton === '*' || lastButton === 'AC') {
      first = ['Error'];
    } else {
      first = eval (temp + operator + first);
    }
    lastButton = '=';
    $('#txtBox').val(first);
  })

  $('#point').on('click', function() {
    first.push('.');
    lastButton = '.';
    $('#txtBox').val(first.join(''));
  })
});
