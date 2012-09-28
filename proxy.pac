function FindProxyForURL(url, host)
{
 if (shExpMatch(url, "http://*.vpc.realestate.com.au*"))
  return "DIRECT";
 else
  return "PROXY 10.18.0.254:3128";
}
