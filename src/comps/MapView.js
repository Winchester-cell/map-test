import React from 'react'
import { useEffect } from 'react';
import L from 'leaflet';
import '@/lib/leafletIcon'
import { blinkingIcon } from '@/lib/blinkIcon';

const mockDevices = [
    { id: 1, name: "Device 1", lat: 37.2900, lng: 49.5800 },
    { id: 2, name: "Device 2", lat: 37.2850, lng: 49.5950 },
    { id: 3, name: "Device 3", lat: 37.2700, lng: 49.5780 },
    { id: 4, name: "Device 4", lat: 37.2760, lng: 49.6000 },
    { id: 5, name: "Device 5", lat: 37.3000, lng: 49.5900 },
    { id: 6, name: "Device 6", lat: 37.2880, lng: 49.5700 },
    { id: 7, name: "Device 7", lat: 37.2650, lng: 49.5850 },
    { id: 8, name: "Device 8", lat: 37.2950, lng: 49.6050 },
    { id: 9, name: "Device 9", lat: 37.2800, lng: 49.6100 },
    { id: 10, name: "Device 10", lat: 37.2730, lng: 49.5670 },
];


const nav = 'https://www.google.com/maps/dir/?api=1&destination=LAT,LNG'

export default function MapView() {


    useEffect(() => {


        // Initialize map only once
        const map = L.map('map').setView([37.2808, 49.5832], 13)

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; OpenStreetMap contributors',
        // }).addTo(map);


        // Changed: Using a dark map tile layer from CartoDB instead of the default OpenStreetMap

        // L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png').addTo(map);

        L.tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.apiKey}`).addTo(map);


        // Add markers for all devices
        mockDevices.forEach(device => {
            const marker = L.marker([device.lat, device.lng], { icon: blinkingIcon })
                .addTo(map)
                .bindPopup(`<b>${device.name}</b><br>Lat: ${device.lat}, Lng: ${device.lng}`);

            marker.addEventListener('click', () => {
                const url = `https://www.google.com/maps/dir/?api=1&destination=${device.lat},${device.lng}`;
                window.open(url, '_blank')
            })
        });

        return () => {
            map.remove(); // cleanup
        };

    }, []);



    return (
        <div id="map" style={{ height: '100dvh', width: '100%' }} />
    )
}
