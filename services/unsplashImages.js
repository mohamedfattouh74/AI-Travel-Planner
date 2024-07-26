const unsplashApiKey = "wZKgVkVPGKVm903I8e_9h8cdj-hB8bE0nXkjFanCDTw";

export const fetchImage = async (placeName) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${placeName}&per_page=1`,
      {
        headers: {
          Authorization: `Client-ID ${unsplashApiKey}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the image:", error);
  }
};
