import React from 'react';
import type { DNSResult } from '../types';
import { MapPin } from 'lucide-react';

interface Props {
  results: DNSResult[];
}

// Simple mapping of locations to approximate coordinates
const locationCoords: Record<string, [number, number]> = {
  'Global': [0, 0], // Center
  'US': [40, -100],
  'Pakistan': [30, 70],
  'Russia': [62, 94],
  'Germany': [51, 10],
  'Denmark': [56, 10],
  'Netherlands': [52, 5],
  'France': [47, 2],
  'Islamabad': [33.6, 73.1],
  'Karachi': [24.8, 67],
  'Lahore': [31.5, 74.3]
};

export const WorldMap: React.FC<Props> = ({ results }) => {
  // Map dimensions and settings
  const width = 1000;
  const height = 500;
  const scale = 150;

  return (
    <div className="w-full max-w-7xl mx-auto bg-white p-4 rounded-lg shadow-md mb-8">
      <h2 className="text-lg font-semibold mb-4">Global DNS Server Distribution</h2>
      <div className="relative overflow-x-auto">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-auto"
          style={{ minHeight: '300px' }}
        >
          {/* World map path - simplified version */}
          <path
            d="M473 206c-6-7-13-13-21-17-8-4-17-6-26-6-9 0-18 2-26 6-8 4-15 10-21 17-6 7-10 15-13 24-3 9-4 19-4 28 0 10 1 19 4 28 3 9 7 17 13 24 6 7 13 13 21 17 8 4 17 6 26 6 9 0 18-2 26-6 8-4 15-10 21-17 6-7 10-15 13-24 3-9 4-19 4-28 0-10-1-19-4-28-3-9-7-17-13-24zm-47 88c-5 0-10-1-14-3-4-2-8-5-11-9-3-4-5-8-7-13-2-5-2-10-2-15 0-5 0-10 2-15 2-5 4-9 7-13 3-4 7-7 11-9 4-2 9-3 14-3 5 0 10 1 14 3 4 2 8 5 11 9 3 4 5 8 7 13 2 5 2 10 2 15 0 5 0 10-2 15-2 5-4 9-7 13-3 4-7 7-11 9-4 2-9 3-14 3z"
            className="fill-gray-200 stroke-gray-300"
            transform="scale(2) translate(-150, -50)"
          />
          
          {/* Plot DNS server locations */}
          {results.map((result, index) => {
            const location = result.server.city || result.server.country || result.server.location;
            const coords = locationCoords[location];
            
            if (!coords) return null;
            
            const [lat, lng] = coords;
            const x = (lng + 180) * (width / 360);
            const y = (90 - lat) * (height / 180);
            
            const statusColor = 
              result.status === 'success' ? 'text-green-500' :
              result.status === 'error' ? 'text-red-500' :
              'text-blue-500';
            
            return (
              <g key={index} transform={`translate(${x}, ${y})`}>
                <MapPin 
                  className={`w-6 h-6 ${statusColor}`}
                  style={{
                    transform: 'translate(-12px, -24px)'
                  }}
                />
                {/* Server name tooltip */}
                <title>{result.server.name}</title>
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-green-500" />
          <span className="text-sm">Success</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-red-500" />
          <span className="text-sm">Error</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-sm">Pending</span>
        </div>
      </div>
    </div>
  );
};