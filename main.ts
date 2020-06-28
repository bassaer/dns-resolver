import * as dns from 'dns';

dns.resolve4('hogefoo.com', (err, addresses) => {
    if (err) {
        throw err;
    }
    console.log(`address: ${JSON.stringify(addresses)}`);
    addresses.map(address => {
        dns.reverse(address, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`reverse for ${address}: ${JSON.stringify(hostnames)}`);
        });
    });
});
