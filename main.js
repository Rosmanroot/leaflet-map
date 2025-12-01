alert("✅ JavaScript berjalan!");


// Initialize the map and set its view to the specified coordinates and zoom level
var map = L.map('map').setView([-6.8727372, 107.5757528], 15);

// Add OpenStreetMap tile layer to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker at the specified coordinates with a popup
var marker = L.marker([-6.8743174, 107.5754792]).addTo(map);
marker.bindPopup("<b>SMK Taruna Bhakti</b><br>Jl. Taruna Bakti No.1, Cibabat, Cimahi Utara, Kota Cimahi, Jawa Barat 40513");

//coba tambahkan marker lagi sampai 20 biji
var marker2 = L.marker([-6.8743174, 107.5754792]).addTo(map);
marker2.bindPopup("<b>Another location</b><br>This is another marker added to the map.");