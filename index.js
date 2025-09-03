// Environmental Dashboard JavaScript

// Sample environmental data
const environmentalData = {
    temperature: {
        value: 24.5,
        unit: '°C',
        status: 'Normal'
    },
    humidity: {
        value: 65,
        unit: '%',
        status: 'Optimal'
    },
    airQuality: {
        value: 42,
        unit: 'AQI',
        status: 'Good'
    },
    co2Level: {
        value: 380,
        unit: 'ppm',
        status: 'Normal'
    },
    uvIndex: {
        value: 3,
        unit: 'UV',
        status: 'Moderate'
    },
    windSpeed: {
        value: 12.5,
        unit: 'km/h',
        status: 'Light Breeze'
    }
};

// Function to create a card element
function createCard(title, data) {
    return `
        <div class="card">
            <h3>${title}</h3>
            <p>${data.value} ${data.unit}</p>
            <small style="color: #666;">${data.status}</small>
        </div>
    `;
}

// Function to render the dashboard
function renderDashboard() {
    const root = document.getElementById('root');
    
    const dashboardHTML = `
        <div class="dashboard">
            <h1>🌍 Environmental Dashboard</h1>
            <div class="cards-container">
                ${createCard('🌡️ Temperature', environmentalData.temperature)}
                ${createCard('💧 Humidity', environmentalData.humidity)}
                ${createCard('🌬️ Air Quality', environmentalData.airQuality)}
                ${createCard('🏭 CO₂ Level', environmentalData.co2Level)}
                ${createCard('☀️ UV Index', environmentalData.uvIndex)}
                ${createCard('💨 Wind Speed', environmentalData.windSpeed)}
            </div>
            <div style="margin-top: 30px; color: #666; font-size: 0.9rem;">
                <p>Last updated: ${new Date().toLocaleString()}</p>
                <p>Data refreshes automatically every 5 minutes</p>
            </div>
        </div>
    `;
    
    root.innerHTML = dashboardHTML;
}

// Function to simulate real-time data updates
function updateData() {
    // Simulate small random changes to the data
    environmentalData.temperature.value = (Math.random() * 10 + 20).toFixed(1);
    environmentalData.humidity.value = Math.floor(Math.random() * 40 + 40);
    environmentalData.airQuality.value = Math.floor(Math.random() * 50 + 20);
    environmentalData.co2Level.value = Math.floor(Math.random() * 100 + 350);
    environmentalData.uvIndex.value = Math.floor(Math.random() * 8 + 1);
    environmentalData.windSpeed.value = (Math.random() * 20 + 5).toFixed(1);
    
    renderDashboard();
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderDashboard();
    
    // Update data every 5 seconds for demo purposes
    setInterval(updateData, 5000);
    
    console.log('🌍 Environmental Dashboard loaded successfully!');
});

// Add some interactivity - click on cards to see more details
document.addEventListener('click', function(e) {
    if (e.target.closest('.card')) {
        const card = e.target.closest('.card');
        const title = card.querySelector('h3').textContent;
        alert(`📊 ${title} - Click to view detailed analytics!\n\n(This would normally open a detailed view)`);
    }
});
