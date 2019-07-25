window.onload = function () {
  class Resize {
    constructor(element) {
      this.el = document.getElementsByClassName(element);
    }
    changeSize = () => {
      let x = 0;
      let y = 0;
      let that = this;
      for (let i = 0; i < this.el.length; i++) {

        function mouseDown(e) {
          x = e.clientX - that.el[i].offsetWidth;
          y = e.clientY - that.el[i].offsetHeight;
          that.el[i].addEventListener('mousemove', (e)=>setTimeout(mouseMove(e)),100);
        }
        function mouseMove(e) {
          that.el[i].style.width = e.clientX - x + 'px';
          that.el[i].style.height = e.clientY - y + 'px';
        }
        function mouseUp(e) {
          removeEventListener('mousedown', function () {
            mouseDown = null;
          });
          removeEventListener('mousemove', function () {
            mouseMove = null;
          });
        };

        that.el[i].addEventListener('mousedown', mouseDown);
        that.el[i].addEventListener('mouseup', mouseUp);
      };


    };

  };
  let resize = new Resize('reSizea');
  resize.changeSize();
}

