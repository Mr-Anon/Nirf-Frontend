export const fetchColleges = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/getAllCollege');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching colleges:', error);
        return [];
    }
};
