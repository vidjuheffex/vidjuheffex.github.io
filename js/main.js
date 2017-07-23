(function(){

    var projects = (function(){
      
        function init(){
            let container = document.querySelector(".project-container");
            
            data.data.forEach(e => {
                let wrapper = document.createElement("div");
                wrapper.classList.add("project-tile-wrapper");
                let image = document.createElement("div");
                image.classList.add("project-tile");
                image.setAttribute("style", `background: url('./imgs/thumbs/${e.img}') no-repeat center center; background-size: cover`);
                wrapper.appendChild(image);
                container.appendChild(wrapper);
            });
        }
        
        return {
            init: init
        };
    })();

    var eventManager = (function() {

        function init(){
            var last_known_scroll_position = 0;
            var ticking = false;

            function scrollEventHandler(scroll_pos) {
                let elemDummy = document.querySelector(".navigation-bar-dummy");
                let elem = document.querySelector(".navigation-bar");
                let elemBuffer = document.querySelector(".navigation-bar-buffer");
                let top = elemDummy.getBoundingClientRect().top;
                elem.classList.toggle("fixed", top < 0);
                elemBuffer.classList.toggle("show", top < 0);
                
            }

            window.addEventListener('scroll', function(e) {
                last_known_scroll_position = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        scrollEventHandler(last_known_scroll_position);
                        ticking = false;
                    });
                }
                ticking = true;
            });
        }
        
        return {
            init: init
        };
    })();

    var core = (function(){
        function init(){
            eventManager.init();
            projects.init();
        }
        
        return {
            init: init
        };
    })();;
    core.init();
})();
