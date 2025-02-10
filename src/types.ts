export interface DNSServer {
  name: string;
  location: string;
  ip: string;
  provider: string;
  country?: string;
  city?: string;
  ping?: boolean;
}

export interface DNSResult {
  server: DNSServer;
  status: 'pending' | 'success' | 'error';
  result?: string;
  error?: string;
  responseTime?: number;
  pingResult?: {
    time: number;
    status: 'success' | 'timeout' | 'error';
  };
}

export type DNSRecordType = 'A' | 'AAAA' | 'MX' | 'NS' | 'TXT' | 'CNAME' | 'SOA' | 'PTR' | 'CAA';