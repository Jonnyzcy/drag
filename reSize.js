// $(function () {
//   //绑定需要拖拽改变大小的元素对象
//   bindResize(document.getElementsByClassName('reSizea'));
// });
// function bindResize(element) {
//   for (let e = 0; e < element.length; e++) {
//     //初始化参数
//     var els = element[e].style;
//     let el = element[e]
//     //鼠标的 X 和 Y 轴坐标
//     x = y = 0;

//     // 鼠标点击事件：
//     $(el).mousedown(function (e) {
//       //按下元素后，计算当前鼠标与对象计算后的坐标
//       x = e.clientX - el.offsetWidth,
//         y = e.clientY - el.offsetHeight;
//       //在支持 setCapture 做些东东
//       el.setCapture ? (
//         //捕捉焦点
//         el.setCapture(),
//         //设置事件
//         el.onmousemove = function (ev) {
//           mouseMove(ev || event);
//         },
//         el.onmouseup = mouseUp
//       ) : (
//           //绑定事件
//           $(document).bind("mousemove", mouseMove).bind("mouseup", mouseUp)
//         );
//       //防止默认事件发生
//       e.preventDefault();
//     });
//     //移动事件
//     function mouseMove(e) {
//       //宇宙超级无敌运算中...
//       els.width = e.clientX - x + 'px',
//         els.height = e.clientY - y + 'px';
//     }

//     //停止事件
//     function mouseUp() {
//       //在支持 releaseCapture 做些东东
//       el.releaseCapture ? (
//         //释放焦点
//         el.releaseCapture(),
//         //移除事件
//         el.onmousemove = el.onmouseup = null
//       ) : (
//           //卸载事件
//           $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp)
//         );
//     }

//   }
// }

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
          that.el[i].addEventListener('mousemove', mouseMove);
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

