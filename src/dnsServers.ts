// Pakistan Servers first
export const dnsServers = [
  // Pakistan Servers
  { 
    name: 'PTCL DNS 1',
    location: 'Pakistan',
    ip: '202.141.242.9',
    provider: 'PTCL',
    country: 'Pakistan',
    city: 'Islamabad',
    ping: true
  },
  { 
    name: 'PTCL DNS 2',
    location: 'Pakistan',
    ip: '202.141.242.10',
    provider: 'PTCL',
    country: 'Pakistan',
    city: 'Islamabad',
    ping: true
  },
  {
    name: 'Cybernet 1',
    location: 'Pakistan',
    ip: '221.120.193.37',
    provider: 'Cybernet',
    country: 'Pakistan',
    city: 'Karachi',
    ping: true
  },
  {
    name: 'Cybernet 2',
    location: 'Pakistan',
    ip: '221.120.193.38',
    provider: 'Cybernet',
    country: 'Pakistan',
    city: 'Karachi',
    ping: true
  },
  {
    name: 'Transworld',
    location: 'Pakistan',
    ip: '58.65.185.100',
    provider: 'Transworld',
    country: 'Pakistan',
    city: 'Lahore',
    ping: true
  },
  {
    name: 'Multinet',
    location: 'Pakistan',
    ip: '210.2.128.53',
    provider: 'Multinet',
    country: 'Pakistan',
    city: 'Karachi',
    ping: true
  },
  {
    name: 'Nayatel',
    location: 'Pakistan',
    ip: '180.178.128.50',
    provider: 'Nayatel',
    country: 'Pakistan',
    city: 'Islamabad',
    ping: true
  },
  {
    name: 'StormFiber',
    location: 'Pakistan',
    ip: '182.176.128.10',
    provider: 'StormFiber',
    country: 'Pakistan',
    city: 'Karachi',
    ping: true
  },
  
  // Google DNS
  { name: 'Google DNS 1', location: 'Global', ip: '8.8.8.8', provider: 'Google', ping: true },
  { name: 'Google DNS 2', location: 'Global', ip: '8.8.4.4', provider: 'Google', ping: true },
  
  // Cloudflare
  { name: 'Cloudflare 1', location: 'Global', ip: '1.1.1.1', provider: 'Cloudflare', ping: true },
  { name: 'Cloudflare 2', location: 'Global', ip: '1.0.0.1', provider: 'Cloudflare', ping: true },
  
  // Quad9
  { name: 'Quad9 1', location: 'Global', ip: '9.9.9.9', provider: 'Quad9', ping: true },
  { name: 'Quad9 2', location: 'Global', ip: '149.112.112.112', provider: 'Quad9', ping: true },
  
  // OpenDNS
  { name: 'OpenDNS 1', location: 'Global', ip: '208.67.222.222', provider: 'OpenDNS', ping: true },
  { name: 'OpenDNS 2', location: 'Global', ip: '208.67.220.220', provider: 'OpenDNS', ping: true },
  
  // Level3
  { name: 'Level3 1', location: 'US', ip: '4.2.2.1', provider: 'Level3', ping: true },
  { name: 'Level3 2', location: 'US', ip: '4.2.2.2', provider: 'Level3', ping: true },
  
  // Comodo
  { name: 'Comodo 1', location: 'US', ip: '8.26.56.26', provider: 'Comodo', ping: true },
  { name: 'Comodo 2', location: 'US', ip: '8.20.247.20', provider: 'Comodo', ping: true },
  
  // AdGuard
  { name: 'AdGuard 1', location: 'Global', ip: '94.140.14.14', provider: 'AdGuard', ping: true },
  { name: 'AdGuard 2', location: 'Global', ip: '94.140.15.15', provider: 'AdGuard', ping: true },
  
  // CleanBrowsing
  { name: 'CleanBrowsing 1', location: 'Global', ip: '185.228.168.9', provider: 'CleanBrowsing', ping: true },
  { name: 'CleanBrowsing 2', location: 'Global', ip: '185.228.169.9', provider: 'CleanBrowsing', ping: true },
  
  // Yandex
  { name: 'Yandex 1', location: 'Russia', ip: '77.88.8.8', provider: 'Yandex', ping: true },
  { name: 'Yandex 2', location: 'Russia', ip: '77.88.8.1', provider: 'Yandex', ping: true },
  
  // Verisign
  { name: 'Verisign 1', location: 'US', ip: '64.6.64.6', provider: 'Verisign', ping: true },
  { name: 'Verisign 2', location: 'US', ip: '64.6.65.6', provider: 'Verisign', ping: true },
  
  // DNS.WATCH
  { name: 'DNS.WATCH 1', location: 'Germany', ip: '84.200.69.80', provider: 'DNS.WATCH', ping: true },
  { name: 'DNS.WATCH 2', location: 'Germany', ip: '84.200.70.40', provider: 'DNS.WATCH', ping: true },
  
  // UncensoredDNS
  { name: 'UncensoredDNS 1', location: 'Denmark', ip: '91.239.100.100', provider: 'UncensoredDNS', ping: true },
  { name: 'UncensoredDNS 2', location: 'Denmark', ip: '89.233.43.71', provider: 'UncensoredDNS', ping: true },
  
  // Hurricane Electric
  { name: 'HE 1', location: 'US', ip: '74.82.42.42', provider: 'Hurricane Electric', ping: true },
  
  // SafeDNS
  { name: 'SafeDNS 1', location: 'Global', ip: '195.46.39.39', provider: 'SafeDNS', ping: true },
  { name: 'SafeDNS 2', location: 'Global', ip: '195.46.39.40', provider: 'SafeDNS', ping: true },
  
  // Neustar
  { name: 'Neustar 1', location: 'US', ip: '156.154.70.1', provider: 'Neustar', ping: true },
  { name: 'Neustar 2', location: 'US', ip: '156.154.71.1', provider: 'Neustar', ping: true },
  
  // OpenNIC
  { name: 'OpenNIC 1', location: 'US', ip: '185.121.177.177', provider: 'OpenNIC', ping: true },
  { name: 'OpenNIC 2', location: 'US', ip: '169.239.202.202', provider: 'OpenNIC', ping: true },
  
  // FreeDNS
  { name: 'FreeDNS 1', location: 'Germany', ip: '37.235.1.174', provider: 'FreeDNS', ping: true },
  { name: 'FreeDNS 2', location: 'Germany', ip: '37.235.1.177', provider: 'FreeDNS', ping: true },
  
  // Alternate DNS
  { name: 'Alternate DNS 1', location: 'US', ip: '198.101.242.72', provider: 'Alternate DNS', ping: true },
  { name: 'Alternate DNS 2', location: 'US', ip: '23.253.163.53', provider: 'Alternate DNS', ping: true },
  
  // CenturyLink
  { name: 'CenturyLink 1', location: 'US', ip: '205.171.3.65', provider: 'CenturyLink', ping: true },
  { name: 'CenturyLink 2', location: 'US', ip: '205.171.2.65', provider: 'CenturyLink', ping: true },
  
  // Dyn
  { name: 'Dyn 1', location: 'US', ip: '216.146.35.35', provider: 'Dyn', ping: true },
  { name: 'Dyn 2', location: 'US', ip: '216.146.36.36', provider: 'Dyn', ping: true },
  
  // PowerDNS
  { name: 'PowerDNS 1', location: 'Netherlands', ip: '194.145.226.26', provider: 'PowerDNS', ping: true },
  { name: 'PowerDNS 2', location: 'Netherlands', ip: '194.145.226.27', provider: 'PowerDNS', ping: true },
  
  // DNSReactor
  { name: 'DNSReactor 1', location: 'US', ip: '104.236.210.29', provider: 'DNSReactor', ping: true },
  { name: 'DNSReactor 2', location: 'US', ip: '45.55.155.25', provider: 'DNSReactor', ping: true },
  
  // FDN
  { name: 'FDN 1', location: 'France', ip: '80.67.169.12', provider: 'FDN', ping: true },
  { name: 'FDN 2', location: 'France', ip: '80.67.169.40', provider: 'FDN', ping: true },
  
  // DNS.SB
  { name: 'DNS.SB 1', location: 'Global', ip: '185.222.222.222', provider: 'DNS.SB', ping: true },
  { name: 'DNS.SB 2', location: 'Global', ip: '185.184.222.222', provider: 'DNS.SB', ping: true }
] as const;