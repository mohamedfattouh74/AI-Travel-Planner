export async function getLocations(searchQuery){
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchQuery}`);
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error);
      }
}