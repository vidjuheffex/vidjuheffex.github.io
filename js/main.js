(function(){

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
        }
        
        return {
            init: init
        };
    })();;
    core.init();
})();
