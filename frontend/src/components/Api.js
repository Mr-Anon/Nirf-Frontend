export const fetchColleges = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/getAllCollege');
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching colleges:', error);
        return [];
    }
};


export const fetchToggle = async () => {
    try {
        // Fetch data from API
        const response = await fetch("http://localhost:8000/api/getToggles");
        const data = await response.json();
        //   console.log("->>>>>>>",data);
        return data;
    } catch (error) {
        console.error("Error fetching toggle data:", error);
        return [];
    }
};


export const fetchSkylineData = async () => {
    try {
        // Fetch data from API
        const response = await fetch("http://localhost:8000/api/getSkylineValues");
        const data = await response.json();
        // console.log("->>>>>>>",data);
        return data;
    } catch (error) {
        console.error("Error fetching skyline data:", error);
        return [];
    }
};

export const fetchFilter = async () => {
    try {
        // Fetch data from API
        const response = await fetch("http://localhost:8000/api/getFilterValues");
        const data = await response.json();
        // console.log("->>>>>>>", data);
        return data;
    } catch (error) {
        console.error("Error fetching toggle data:", error);
        return [];
    }
};

export const fetchCutoffFormValues = async () => {
    try {
        // Fetch data from API
        const response = await fetch("http://localhost:8000/api/getAllFromData");
        const data = await response.json();
        // console.log("->>>>>>>", data);
        return data;
    } catch (error) {
        console.error("Error fetching toggle data:", error);
        return [];
    }
};

export const fetchDefaultWeights = async () => {
    try {
        // Fetch data from API
        const response = await fetch("http://localhost:8000/api/getDefaultWeights");
        const data = await response.json();
        // console.log("->>>>>>>", data);
        return data;
    } catch (error) {
        console.error("Error fetching toggle data:", error);
        return [];
    }
};

