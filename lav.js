
<script>
    function validateLogin(event) {
        event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {
        alert("Login successful!");
                // You can redirect to another page if needed:
                // window.location.href = "dashboard.html";
            } else {
        alert("Invalid username or password!");
            }
        }
</script>

