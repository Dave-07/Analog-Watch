
        const arrHour = document.querySelector('.hour');
        const arrMinute = document.querySelector('.minute');
        const arrSecond = document.querySelector('.second');

        updateRolex();

        function updateRolex() {

            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const second = now.getSeconds();

            arrHour.style.transform = `rotate(${hour * 30}deg)`;
            arrMinute.style.transform = `rotate(${minute * 6}deg)`;
            arrSecond.style.transform = `rotate(${second * 6}deg)`;

            setTimeout(updateRolex, 1000);
        };