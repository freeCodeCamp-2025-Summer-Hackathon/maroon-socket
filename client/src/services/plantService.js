const apiUrl = import.meta.env.VITE_API_URL;

async function createPlant(plantData) {
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('name', plantData.plantName);
    formData.append('note', plantData.notes);
    formData.append('water_freq', plantData.waterFreq);
    
    if (plantData.image) {
        formData.append('image', plantData.image);
    }

    const response = await fetch(`${apiUrl}/api/plant`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });

    return await response.json();
}

async function getAllPlants() {
    const token = localStorage.getItem('token');

    const response = await fetch(`${apiUrl}/api/plant`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return await response.json();
}

export { createPlant, getAllPlants };
