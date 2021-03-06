var NON_REG = NewRegistrar("none", "NONE");
var R53 = NewDnsProvider("r53", "ROUTE53");

D("mattcanty.com", NON_REG, DnsProvider(R53),
    A("lifedex","151.101.1.195"),
    A("lifedex","151.101.65.195"),
    CNAME("chords","mattcanty.github.io."),
    CNAME("c37trtl6ubra6yp4enjsp4tegjqn3lt7._domainkey","c37trtl6ubra6yp4enjsp4tegjqn3lt7.dkim.amazonses.com."),
    CNAME("debf6om2flnqorv7k5ncutk7yzlutu7t._domainkey","debf6om2flnqorv7k5ncutk7yzlutu7t.dkim.amazonses.com."),
    CNAME("odcgmdy25sn67hci6ko6xmn5hccsgxvb._domainkey","odcgmdy25sn67hci6ko6xmn5hccsgxvb.dkim.amazonses.com."),
    TXT("_amazonses","i0uXmZmm8Ce/k2jwpEv+Y9ZXmxHJkNWz8MBUGsjcCDU="),
    TXT("@","google-site-verification=qbRypdAcGwptTI43UaQrfDvAEN7-DkALAcnME-5Kwn0"),
    CNAME("www","www.mattcanty.com.s.strikinglydns.com."),
    CNAME("gatsby","gracious-varahamihira-35ff13.netlify.com.")
);

D("matthewcanty.co.uk", NON_REG, DnsProvider(R53),
    CNAME("www","dns.strikingly.com.")
);

D("katybrody.co.uk", NON_REG, DnsProvider(R53),
    A("www","88.208.252.9"),
    A("@","88.208.252.9")
);
