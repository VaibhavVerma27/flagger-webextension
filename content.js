(async function () {
    // Extract the body content of the current page
    const bodyContent = document.body.innerText;
    const currentUrl = window.location.href;


    // Define the API endpoint
    const apiUrl = "https://flagger-ai.vercel.app/api/cache";

    try {
        // Send the body content to the API
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ bodyContent, currentUrl }),
        });

        if (response.status === 200) {
            // Redirect the user to your website on success
            window.location.href = `https://flagger-ai.vercel.app/checker/${encodeURI(currentUrl)}`;
        } else {
            console.error("Failed to send data to the API:", response.statusText);
        }
    } catch (error) {
        console.error("Error sending data to the API:", error);
    }
})();
