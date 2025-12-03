<script>
    document.addEventListener("DOMContentLoaded", function () {
        document.body.style.transition = "opacity 10s";
        document.body.style.opacity = "1";

        setTimeout(() => {
            document.body.style.opacity = "0";
        }, 100); // slight delay to ensure the transition applies
    });
</script>
