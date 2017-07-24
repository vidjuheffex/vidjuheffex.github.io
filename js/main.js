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
              let textBlock = document.createElement("div");
              textBlock.classList.add("description");
              let title = document.createElement("h3");
              let roles = document.createElement("h4");
              title.textContent = e.title;
                roles.textContent = e.roles.join(", ");
              textBlock.appendChild(title);
              textBlock.appendChild(roles);
              wrapper.appendChild(textBlock);
              container.appendChild(wrapper);
              wrapper.addEventListener("click", ()=>{
                window.open(e.url);
              });
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
