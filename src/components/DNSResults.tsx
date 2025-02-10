import React from 'react';
import { Globe2, Clock, CheckCircle2, XCircle, Loader2, Signal, MapPin } from 'lucide-react';
import type { DNSResult } from '../types';

interface Props {
  results: DNSResult[];
}

export const DNSResults: React.FC<Props> = ({ results }) => {
  return (
    <div className="w-full max-w-7xl mx-auto overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-4 py-3">Server</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Provider</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Response Time</th>
            <th className="px-4 py-3">Ping</th>
            <th className="px-4 py-3">Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr 
              key={index}
              className={`bg-white border-b hover:bg-gray-50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <td className="px-4 py-3">
                <div className="flex items-center space-x-2">
                  <Globe2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{result.server.name}</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span>
                    {result.server.city && `${result.server.city}, `}
                    {result.server.country || result.server.location}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">{result.server.provider}</td>
              <td className="px-4 py-3">
                <div className="flex items-center space-x-2">
                  {result.status === 'pending' && (
                    <>
                      <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                      <span className="text-blue-600">Pending</span>
                    </>
                  )}
                  {result.status === 'success' && (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Success</span>
                    </>
                  )}
                  {result.status === 'error' && (
                    <>
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-red-600">Error</span>
                    </>
                  )}
                </div>
              </td>
              <td className="px-4 py-3">
                {result.responseTime && (
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{result.responseTime}ms</span>
                  </div>
                )}
              </td>
              <td className="px-4 py-3">
                {result.pingResult && (
                  <div className="flex items-center space-x-1">
                    <Signal className={`w-4 h-4 ${
                      result.pingResult.status === 'success' ? 'text-green-600' : 'text-red-600'
                    }`} />
                    <span className={
                      result.pingResult.status === 'success' ? 'text-green-600' : 'text-red-600'
                    }>
                      {result.pingResult.status === 'success' 
                        ? `${result.pingResult.time}ms` 
                        : 'Failed'}
                    </span>
                  </div>
                )}
              </td>
              <td className="px-4 py-3">
                {result.error ? (
                  <span className="text-red-600">{result.error}</span>
                ) : (
                  <code className="text-xs bg-gray-50 px-2 py-1 rounded font-mono break-all">
                    {result.result}
                  </code>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}