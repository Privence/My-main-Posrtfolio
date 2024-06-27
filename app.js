        const sidebar = document.querySelector('.hide');
        const menuButton = document.querySelector('.menu-btn');
        const crossButton = document.querySelector('.cross-btn'); 
        const body = document.querySelector('body');
        const darkBox = document.querySelector('.dark-box');
        const light = document.querySelector('.light');
        const dark = document.querySelector('.dark'); 
        const container = document.querySelector('.container');      
        
        function showSidebar(){
            sidebar.style.display = 'flex';
            menuButton.style.display = 'none';
            crossButton.style.display = 'block';
        }

        function hideSidebar(){
            sidebar.style.display = 'none';
            menuButton.style.display = 'flex';
            crossButton.style.display = 'none';
        }

        function resetMenuResize(){
            if(window.innerWidth > 655){
                menuButton.style.display = 'none';
                crossButton.style.display = 'none';
                sidebar.style.display = 'none';
            }else{
                menuButton.style.display = 'flex';
            }
        }

        window.addEventListener('resize' , resetMenuResize);

        resetMenuResize();

        function openModal() {
            document.getElementById("more-about-me").style.display = "flex";
        }

        function openHire() {
            document.getElementById("container-box").style.display = "flex";
        }

        function closeModal() {
            document.getElementById("more-about-me").style.display = "none";
        }

        function darkmode() {
            dark.style.background = 'grey';
            light.style.display = 'block';
            light.style.background = 'black';
            container.style.background = 'rgb(4, 4, 62)';
            body.style.background = 'rgb(4, 4, 62)';
            body.style.color = 'white';
        }

        function lightmode() {
            dark.style.background = 'black';
            light.style.background = 'grey';
            container.style.background = '#f5fcfa';
            body.style.background = '#f5fcfa';
            body.style.color = 'black';
        }

        window.onclick = function(event) {
            var modal = document.getElementById("more-about-me");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }