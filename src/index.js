// task1

let count = 0;
        const intervalId = setInterval(() => {
            console.log("Повідомлення номер " + (count + 1));
            count++;
            if (count >= 5) {
                clearInterval(intervalId);
            }
        }, 1000);   


// task2
        
let position = 0;
        const interval = setInterval(() => {
            position += 5;
            document.getElementById('box1').style.left = position + 'px';
            document.getElementById('box2').style.width = (50 + position) + 'px';
            if (position >= 200) {
                clearInterval(interval);
            }
        }, 100);


// task3
        
 let score = 0;
        const target = document.getElementById('target');
        const scoreDisplay = document.getElementById('score');
        
        target.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = score;
            moveTarget();
        });

        function moveTarget() {
            const x = Math.random() * (window.innerWidth - 50);
            const y = Math.random() * (window.innerHeight - 50);
            target.style.left = x + 'px';
            target.style.top = y + 'px';
        }

        const gameDuration = 10000; 
        const gameInterval = setInterval(moveTarget, 1000);

        setTimeout(() => {
            clearInterval(gameInterval);
            alert('Гру закінчено! Ваші очки: ' + score);
        }, gameDuration);



// task4
        
 document.getElementById('startTimer').addEventListener('click', () => {
            const timeInput = document.getElementById('timeInput').value;
            const timeInMilliseconds = timeInput * 1000;
            
            setTimeout(() => {
                document.getElementById('message').textContent = "Час вийшов!";
            }, timeInMilliseconds);
        });