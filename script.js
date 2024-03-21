"use strict";

const shortenURL = async function (urlToShorten) {
  const encodedUrl = encodeURI(urlToShorten);

  const data = { url: encodedUrl };

  const apiUrl = "https://cleanuri.com/api/v1/shorten";

  console.log(data);

  try {
    const request = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log(request);

    // const response = await request.json();

    if (!response.ok) throw new Error("Dosnt work");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

shortenURL("hhttp://www.example.com/café au lait.html");

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// async function shortenUrl(urlToShorten) {
//   // Encode the URL for safety
//   const encodedUrl = encodeURIComponent(urlToShorten);

//   // Define the API endpoint URL (replace with your desired service)
//   const apiUrl = "https://cleanuri.com/api/v1/shorten";

//   // Prepare the data object for the POST request
//   const data = { url: encodedUrl };

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST", // Set request method to POST
//       body: JSON.stringify(data), // Convert data object to JSON string
//       headers: { "Content-Type": "application/json" }, // Set content type header
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const shortenedUrlData = await response.json(); // Parse the JSON response
//     return shortenedUrlData.result; // Return the shortened URL from the response
//   } catch (error) {
//     console.error("Error shortening URL:", error);
//     return null; // Or handle the error differently
//   }
// }

// // Example usage
// const longUrl = "https://www.example.com/this/is/a/very/long/url";

// shortenUrl(longUrl)
//   .then((shortenedUrl) => {
//     if (shortenedUrl) {
//       console.log("Shortened URL:", shortenedUrl);
//     }
//   })
//   .catch((error) => console.error(error));
