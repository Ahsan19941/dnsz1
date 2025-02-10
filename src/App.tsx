import React, { useState } from 'react';
import { Search, Globe, Filter, Signal } from 'lucide-react';
import { dnsServers } from './dnsServers';
import { DNSResults } from './components/DNSResults';
import type { DNSResult, DNSRecordType } from './types';

function App() {
  const [domain, setDomain] = useState('');
  const [recordType, setRecordType] = useState<DNSRecordType>('A');
  const [results, setResults] = useState<DNSResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [includePing, setIncludePing] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;

    setIsLoading(true);
    const initialResults: DNSResult[] = dnsServers.map(server => ({
      server,
      status: 'pending'
    }));
    setResults(initialResults);

    const promises = dnsServers.map(async (server, index) => {
      try {
        // Simulate DNS query
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
        
        // Simulate different responses based on record type
        let result: string;
        switch (recordType) {
          case 'A':
            result = `${domain} IN A 93.184.216.34`;
            break;
          case 'AAAA':
            result = `${domain} IN AAAA 2606:2800:220:1:248:1893:25c8:1946`;
            break;
          case 'MX':
            result = `${domain} IN MX 10 mail.${domain}`;
            break;
          case 'NS':
            result = `${domain} IN NS ns1.${domain}`;
            break;
          case 'TXT':
            result = `${domain} IN TXT "v=spf1 include:_spf.${domain} ~all"`;
            break;
          case 'CNAME':
            result = `${domain} IN CNAME www.${domain}`;
            break;
          case 'SOA':
            result = `${domain} IN SOA ns1.${domain} hostmaster.${domain} 2024031501 7200 3600 1209600 86400`;
            break;
          case 'PTR':
            result = `${domain} IN PTR host.${domain}`;
            break;
          case 'CAA':
            result = `${domain} IN CAA 0 issue "letsencrypt.org"`;
            break;
          default:
            result = `${domain} IN ${recordType} Record not found`;
        }
        
        // Simulate ping if enabled and server supports it
        let pingResult;
        if (includePing && server.ping) {
          const pingTime = Math.floor(Math.random() * 200 + 50); // Simulate 50-250ms ping
          const pingSuccess = Math.random() > 0.1; // 90% success rate
          
          if (pingSuccess) {
            pingResult = {
              time: pingTime,
              status: 'success' as const
            };
          } else {
            pingResult = {
              time: 0,
              status: 'timeout' as const
            };
          }
        }
        
        const dnsResult: DNSResult = {
          server,
          status: 'success',
          result,
          responseTime: Math.floor(Math.random() * 100 + 50),
          pingResult
        };
        
        setResults(prev => {
          const newResults = [...prev];
          newResults[index] = dnsResult;
          return newResults;
        });
        
        return dnsResult;
      } catch (error) {
        const errorResult: DNSResult = {
          server,
          status: 'error',
          error: 'DNS query failed'
        };
        
        setResults(prev => {
          const newResults = [...prev];
          newResults[index] = errorResult;
          return newResults;
        });
        
        return errorResult;
      }
    });

    await Promise.all(promises);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Globe className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Global DNS Checker</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                Enter domain name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="example.com"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 pl-4 pr-12 py-2"
                  disabled={isLoading}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="recordType" className="block text-sm font-medium text-gray-700 mb-1">
                Record Type
              </label>
              <div className="relative">
                <select
                  id="recordType"
                  value={recordType}
                  onChange={(e) => setRecordType(e.target.value as DNSRecordType)}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 pl-4 pr-12 py-2 appearance-none"
                  disabled={isLoading}
                >
                  <option value="A">A</option>
                  <option value="AAAA">AAAA</option>
                  <option value="MX">MX</option>
                  <option value="NS">NS</option>
                  <option value="TXT">TXT</option>
                  <option value="CNAME">CNAME</option>
                  <option value="SOA">SOA</option>
                  <option value="PTR">PTR</option>
                  <option value="CAA">CAA</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Include Ping
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIncludePing(!includePing)}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg border ${
                    includePing
                      ? 'bg-blue-50 border-blue-300 text-blue-700'
                      : 'bg-gray-50 border-gray-300 text-gray-700'
                  }`}
                  disabled={isLoading}
                >
                  <Signal className={`h-5 w-5 ${includePing ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span>{includePing ? 'Enabled' : 'Disabled'}</span>
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading || !domain}
              className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Check DNS
            </button>
          </div>
        </form>

        {results.length > 0 && <DNSResults results={results} />}
      </main>
    </div>
  );
}

export default App;