console.log(this); // window

function simpleFunction() {
  console.log(this);
}

window.simpleFunction(); // window
simpleFunction(); // window

class Counter {
  count = 0;
  increase = function () {
    console.log(this); // this = Counter
  };
}

const counter = new Counter();
// increase is called by Counter, so "this" is Counter
counter.increase(); // this = counter

const caller = counter.increase;
caller(); // this = undefined

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
