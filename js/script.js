 function showForm() {
            document.getElementById("appointment-form").classList.remove("hidden");
        }
        function closeForm() {
            document.getElementById("appointment-form").classList.add("hidden");
        }
        function sendEmail(event) {
            event.preventDefault();
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let date = document.getElementById("date").value;
            let message = document.getElementById("message").value;

            window.location.href = `mailto:shadanherbals@gmail.com?subject=Appointment Request: ${fname+" "+lname} &body=Name: ${fname+" "+lname}%0AEmail: ${email}%0APhone: ${phone}%0APreferred Date: ${date}%0AMedical Concern/Reason for Visit: ${message}`;
        }