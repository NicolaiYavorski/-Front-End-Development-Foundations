(function() {
    let matrixElements = document.querySelectorAll(".matrix td");
    matrixElements.forEach(element => {
        element.ondragstart = function() {
            console.log(1);
            return false;
        };
        
        element.addEventListener("click", (event) => {
            let target = event.target;
            target.style.color = "red";

            dragAndDrop(target);
        });
    });

    function dragAndDrop(element) {
        element.onmousedown = (e) => {
            element.style.position = 'absolute';
    
            moveToNextPosition(e);
    
            document.body.appendChild(element);
    
            element.style.zIndex = 1000;
    
            function moveToNextPosition(e) {
                element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
                element.style.top = e.pageY - element.offsetHeight / 2 + 'px';
            }
    
            document.onmousemove = (e) => {
                moveToNextPosition(e);
            }
    
            element.onmouseup = () => {
                document.onmousemove = null;
                element.onmouseup = null;
            }
        }
    
        element.ondragstart = () => {
            return false;
        };
    }
})();
