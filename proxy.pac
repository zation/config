function FindProxyForURL(url, host)
{
 if (shExpMatch(url, "http://www.app.hi-qa.vpc.realestate.com.au*"))
  return "DIRECT";
 else
  return "PROXY 10.18.0.254:3128";
}
