
      document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var form = document.getElementById('contactForm');
        var formMsg = document.getElementById('formmsg');
        formMsg.style.display = 'block';
        formMsg.style.color = "green";
        formMsg.style.fontSize = "2rem";

        formMsg.textContent= 'Thank you! Your message has been received.';

        setTimeout(function() {
            formMsg.style.display = 'none'; 
            form.reset();
        }, 5000);
    });

