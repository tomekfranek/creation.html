(function () {
  var createEls = function () {
    var args = $.makeArray(arguments);
    return args.reduce(function ($collection, text) {
      return $collection = $collection.add($('<h5>', { html: text }));
    }, $());
  };
  
  var createEl = function (text) {
    return $('<h5>', { html: text });
  };
  // append - dodatje jedno dziecko
  // parent x2 - cofamy sie o dwa rodzice w drzewku
  // append - dodajemy jedno dziecko o wartosci 2
  // append - dodajmey do dziecka o wartosci 2 element o wartosci 3
  // 
  $('.start-1').append(createEl(1)).parent().parent()
    .append(createEl(2).append(createEl(3))).after([4, 5, 6].map(function (val) {
      return createEl(val);
    }));
  
  //append - dodajemy dwa elementy o wartosci 1, 2
  // find - przechodzy do elementu span
  // dodajemy elementy o wartosciach 3, 4, 5
  // parents - cofamy sie do rodzica o klasie start-2
  // children wyszukujemy w jego dzieciach element p
  // after - dodajemy element po 'p' o wartosci 7
  
  $('.start-2').append([1, 2].map(createEl)).find('span').append([3, 4, 5].map(createEl))
    .parents('.start-2').children('p').after(createEl(7));
  
  
  $('.start-3').before([1, 1].map(createEl)).siblings('p').before([2, 2].map(createEl)).after(createEl(3))
    .append(createEl(4).append([5, 6, 7].map(createEl)));
  
  
  var $el2; // zmienna cachujaca do elementu o wartosci 2
  
  $('.start-4').before([1, 2].map(function (val) {
    var $el = createEl(val);
    $el.append([3, 4, 5, 6].map(createEl));
    if (val === 2) { // w momencie gdy stworzymy element o wartosci 2 
      $el2 = $el; // przypisujemy do zmiennej cachujacej, aby pozniej mozna bylo dodac rodzenstwo do elementu
    }
    return $el;
  }));
  
  $el2.before(createEl(7).append(createEl(8))); // dodajemy rodzenstwo (o wartosci 7) do elementu o wartosci 2
  
  
  
  $('.start-5').append([1, 2, 3, 4, 5, 6, 7].map(createEl))
    .find('h5:contains("5")').append([8, 9].map(createEl)).before(createEl(10))
  
  
  $('.start-6').parent().parent().append([1, 2].map(function (val) {
    var $el = createEl(val);
    $el.append([3, 4].map(createEl));
    if (val === 2) {
      $el.append(createEl(5));
    }
    return $el;
  }))
  
  var addElement = function ($parent, val) {
    if (val > 6) {
      return ;
    }
    var $el = createEl(val);
    $parent.append($el);
    addElement($el, val + 1);
  };
  
  addElement($('.start-7'), 1);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})();
