
// zoom
window.onload = function () {
    class Edit {
        constructor(el) {
            this.el = document.getElementsByClassName('zoom');
            this.dot = [0, 1, 2, 3];
            console.log(this.el[0].offsetWidth);
        }
        // 添加左下角的点：
        addDot = function () {
            const el = this.el;
            for (let i = 0; i < el.length; i++) {
                $(el[i]).append(`<div class=zoomChild style=width:40px;height:20px;position:absolute;background:black;right:0;bottom:0;color:#fff >拖动${i}</div>`)
            }
        }
        editor = function () {
            let x = 0;
            let y = 0;
            let isDone = false;

            // let zoom = document.getElementsByClassName('aoom');
            let dot = document.getElementsByClassName('zoomChild');
            const taht = this;
            for (let i = 0; i < dot.length; i++) {
                dot[i].addEventListener('mousedown',

                    function (e) {
                        console.log(taht.el[i].width);
                        isDone = true;
                        x = e.clientX - taht.el[i].clientWidth ;
                        y = e.clientX - taht.el[i].clientWidth ;
                        dot[i].addEventListener('mousemove', function (e) {
                            console.log('mousemove')
                            if (isDone) {
                                taht.el[i].style.width = e.clientX - x + 'px';
                                taht.el[i].style.height = e.clientY - y + 'px';
                            }
                        }, false);
                        dot[i].addEventListener('mouseup', function () {
                            isDone = false;
                        }, true)
                    }, true);
            }

        }
    }

    let edit = new Edit('zoom');
    edit.addDot();
    edit.editor();
}