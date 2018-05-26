
	
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
	// these are the images for the BUTTONS
		menumain1 = newImage("images/main_indx_0.jpg");
		menumain2 = newImage("images/main_indx_1.jpg");
		menumain3 = newImage("images/main_indx_2.jpg");
		menuweblinks1 = newImage("images/web_indx_0.jpg");
		menuweblinks2 = newImage("images/web_indx_1.jpg");
		menuweblinks3 = newImage("images/web_indx_2.jpg");
		menuresearch2 = newImage("images/research_m_0.jpg");
		menuresearch1 = newImage("images/research_m_1.jpg");
		menuresearch3 = newImage("images/research_m_2.jpg");
		menuportfolio3 = newImage("images/portfolio_0.jpg");
		menuportfolio2 = newImage("images/portfolio_1.jpg");
		menuportfolio1 = newImage("images/portfolio_2.jpg");
		menuresume3 = newImage("images/resume_0.jpg");
		menuresume2 = newImage("images/resume_1.jpg");
		menuresume1 = newImage("images/resume_2.jpg");
		menucontact3 = newImage("images/contact_0.jpg");
		menucontact2 = newImage("images/contact_1.jpg");
		menucontact1 = newImage("images/contact_2.jpg");
		
	// these are the images for the other stuff	
		headerimg = newImage("images/header.jpg");
		headerright = newImage("images/menuheaderright.jpg");
		headerleft = newImage("images/leftlights.jpg");		
		
	// wrap it up!	
		preloadFlag = true;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

function openit(linkurl) {
var newwin = window.open(linkurl,linkurl.length,'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=no,width=600,height=400');
newwin.focus();
}

var JSCActive = 0
function setMessage(){
    now = new Date()
    window.status = now.toLocaleString()
    JSCTimeOutID = window.setTimeout('setMessage()',500)
    JSCActive = 1
}


// ------------------------------------------------------------------------------


function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}


var WebS_Menu=new Array()
WebS_Menu[0]='<span class="yellowsans">Web Searches</span>'
WebS_Menu[1]='<a class="whitelink" href="https://duckduckgo.com/">DuckDuckGo</A>'
WebS_Menu[2]='<a class="whitelink" href="http://www.polycola.com/">Polycola</a>'
WebS_Menu[3]='<a class="whitelink" href="http://www.dogpile.com/">Dogpile Metasearch</A>'
WebS_Menu[4]='<a class="whitelink" href="http://www.ixquick.com/">Ixquick (aka StartPage)</A>'
WebS_Menu[5]='<a class="whitelink" href="http://web.archive.org/">The Way Back Machine</A>'
WebS_Menu[6]='<a class="whitelink" href="http://www.wolframalpha.com/">Wolfram Alpha</A>'

WebS_Menu[7]='<a class="whitelink" href="http://searchenginewatch.com/">Search Engine Watch (SEO)</a>'
WebS_Menu[8]='<a class="whitelink" href="http://www.internetmarketingninjas.com">InternetMarketingNinjas.com</a>'
WebS_Menu[9]='<span class="yellowsans">Web Indicies</span>'
WebS_Menu[10]='<a class="whitelink" href="http://www.archive.org/">The Internet Archive</a>'
WebS_Menu[11]='<a class="whitelink" href="http://dmoz.org">The DMOZ Open Directory Project</a>'
WebS_Menu[12]='<a class="whitelink" href="http://vlib.org/">The WWW Virtual Library</a>'


WebS_Menu[13]='<span class="yellowsans">OSINT Resources</span>'
WebS_Menu[14]='<a class="whitelink" href="http://osintframework.com/">OSINT Framework interface</A>'
WebS_Menu[15]='<a class="whitelink" href="http://www.i-intelligence.eu/open-source-intelligence-tools-and-resources-handbook/">iIntelligence OSINT listing</A>'
WebS_Menu[16]='<a class="whitelink" href="https://inteltechniques.com/links.html">OSINT links @ intelTechniques.com</A>'
WebS_Menu[17]='<a class="whitelink" href="http://www.panopticongroup.com/osint-links/">OSINT links @ Panopticon Group</A>'
WebS_Menu[18]='<a class="whitelink" href="http://netbootcamp.org/osinttools/">NetBootCamp.org OSINT links</A>'
WebS_Menu[19]='<a class="whitelink" href="https://i-sight.com/resources/101-osint-resources-for-investigators/">OSINT list @ i-Sight.com</A>'
WebS_Menu[20]='<a class="whitelink" href="http://www.onstrat.com/osint/">OnStrats OSINT list</A>'
WebS_Menu[21]='<a class="whitelink" href="https://sites.google.com/site/greynetwork2/home/osint-resources">Grey Networks OSINT list</A>'
WebS_Menu[22]='<a class="whitelink" href="http://rr.reuser.biz/">Reuser.biz OSINT list</A>'
WebS_Menu[23]='<a class="whitelink" href="https://www.toddington.com/resources/">Toddington.com OSINT list</A>'

WebS_Menu[24]='<span class="yellowsans">Lists of &quot;Awesome Lists&quot;</span>'
WebS_Menu[25]='<a class="whitelink" href="https://github.com/jnv/lists">JNVs list of lists (of lists)</a>'
WebS_Menu[26]='<a class="whitelink" href="https://github.com/sindresorhus/awesome">Sindres List of Awesome Lists</a>'
WebS_Menu[27]='<a class="whitelink" href="https://github.com/t3chnoboy/awesome-awesome-awesome">t3chnoboys List of Awesome Lists</a>'

var WebTools_Menu=new Array()
WebTools_Menu[0]='<span class="yellowsans">Online Converters &amp; Tools</span>'
WebTools_Menu[1]='<a class="whitelink" href="http://www.convertit.com">ConvertIt</a>'
WebTools_Menu[2]='<A class="whitelink" HREF="http://www.onlineconversion.com/">OnlineConversion</A>'
// https://www.rapidtables.com/
WebTools_Menu[3]='<a class="whitelink" href="http://calculatoredge.com/">CalculatorEdge for Engineers</a>'
WebTools_Menu[4]='<a class="whitelink" href="http://www.itools.com/">iTools</A>'
WebTools_Menu[5]='<a class="whitelink" href="https://www.danstools.com/">DansTools.com</A>'
WebTools_Menu[6]='<a class="whitelink" href="https://www.online-convert.com/">Online-Convert files &amp; hashing</A>'
WebTools_Menu[7]='<a class="whitelink" href="https://www.freeformatter.com/">FreeFormatter.com tools</A>'
WebTools_Menu[8]='<a class="whitelink" href="https://onlinestringtools.com/">OnlineStringTools.com</A>'
WebTools_Menu[9]='<a class="whitelink" href="https://www.browserling.com/tools/">Webtools at Browserling</A>'
WebTools_Menu[10]='<a class="whitelink" href="http://www.webtoolhub.com/tools.aspx">WebToolHub webtools</A>'
WebTools_Menu[11]='<a class="whitelink" href="https://www.tools4noobs.com/online_tools/">&quot;Tools4Noobs&quot; webtools</A>'
WebTools_Menu[12]='<a class="whitelink" href="http://scraping.pro/">Web Scraping resources</A>'
WebTools_Menu[13]='<a class="whitelink" href="http://developerutils.com">DeveloperUtils.com</A>'
WebTools_Menu[14]='<a class="whitelink" href="http://www.ascii-code.com/">ascii-code.com</a>'
WebTools_Menu[15]='<a class="whitelink" href="https://www.timeanddate.com">timeanddate.com</a>'
WebTools_Menu[16]='<a class="whitelink" href="https://hackvertor.co.uk/">Hackvertor</A>'   
WebTools_Menu[17]='<a class="whitelink" href="http://ddecode.com/phpdecoder/">DDecode PHP Decoder</A>'
WebTools_Menu[18]='<a class="whitelink" href="http://deobfuscatejavascript.com/">DeobfuscateJavascript</A>'
WebTools_Menu[19]='<a class="whitelink" href="http://utf-8.jp/public/jjencode.html">Simple JS Obfuscator</A>'
WebTools_Menu[20]='<a class="whitelink" href="http://packetor.com/">Packetor hex-dump packet decoder</A>'
WebTools_Menu[21]='<a class="whitelink" href="http://www.binaryconvert.com/">BinaryConvert.com</A>'
WebTools_Menu[22]='<a class="whitelink" href="https://passwordsgenerator.net/">PasswordsGenerator.net</A>'
WebTools_Menu[23]='<a class="whitelink" href="https://quickhash.com/">QuickHash.com</A>'
WebTools_Menu[24]='<a class="whitelink" href="https://hashkiller.co.uk/">HashKiller</a>'
WebTools_Menu[25]='<a class="whitelink" href="http://pgl.yoyo.org/urlex/">URL Extractor</A>'
WebTools_Menu[26]='<a class="whitelink" href="http://snarkles.net/scripts/sneak/sneak.php">snarkles.net &quot;sneak&quot; script</A>'
// https://scanme.iotdef.com/">IoTDefense Botnet Scanner</A>'

WebTools_Menu[27]='<a class="whitelink" href="http://www.regexr.com/">RegExr - RegEx webtool</A>'
WebTools_Menu[28]='<a class="whitelink" href="http://www.regular-expressions.info">Regular-Expressions.info</a>'
WebTools_Menu[29]='<a class="whitelink" href="https://txt2re.com">Txt2RE.com - RegEx webtool</a>'
WebTools_Menu[30]='<a class="whitelink" href="https://regex101.com/">RegEx101 - RegEx webtool</a>'
WebTools_Menu[31]='<a class="whitelink" href="http://www.regexe.com/">RegExe - RegEx webtool</a>'
WebTools_Menu[32]='<a class="whitelink" href="http://regex.inginf.units.it/">Regex Generator++</A>'
WebTools_Menu[33]='<a class="whitelink" href="http://www.regexpal.com/">RegexPal</A>'
// http://www.satview.org">SatView</A>'
// http://www.worldtimeserver.com/">WorldTimeServer.com</A>' 
// http://www.keepvid.com">KeepVid Downloader</A>' 
// http://99downloader.com/">99Downloader</A>'   
// http://getfbstuff.com">Facebook Video Downloader</A>'
// http://twittervideodownloader.com/">Twitter Video Downloader</A>'
// http://99downloader.com/instagram-video-downloader">Instagram Video Downloader</A>'
// 
// http://www.visiocafe.com/">VisioCafe</A>'
// http://www.conceptdraw.com/solution-park/">ConceptDraw</A>'
// https://www.edrawsoft.com/share-flowchart.php">Edraw flowchart templates</A>'
// https://stenciltown.omnigroup.com/">Stenciltown for OmniGraffle</A>'

var Radio_Menu=new Array()
Radio_Menu[0]='<span class="yellowsans">General Tools and Reference</span>'
Radio_Menu[1]='<a class="whitelink" href="http://www.ieee802.org/11/">IEEE 802.11 Working Group</a>'
Radio_Menu[2]='<a class="whitelink" href="http://www.wi-fi.org/">Wi-Fi Alliance</a>'
Radio_Menu[3]='<a class="whitelink" href="https://www.radioreference.com/">RadioReference.com/</A>'
Radio_Menu[4]='<a class="whitelink" href="http://www.dd-wrt.com/">DD-WRT</a>'
Radio_Menu[5]='<a class="whitelink" href="https://wiki.openwrt.org/">OpenWRT wiki</a>'
Radio_Menu[6]='<a class="whitelink" href="https://w1.fi/">Hostapd and WPA_supplicant</A>'
Radio_Menu[7]='<a class="whitelink" href="https://support.ruckuswireless.com/">Ruckus Support</A>'
// Aruba? www.arubanetworks.com

Radio_Menu[9]='<span class="yellowsans">Scanning and Pentestings</span>'
Radio_Menu[10]='<a class="whitelink" href="http://www.kismetwireless.net/">KismetWireless</a>'
Radio_Menu[11]='<a class="whitelink" href="https://www.metageek.com/">MetaGeek - inSSIDer</a>'

Radio_Menu[12]='<a class="whitelink" href="https://www.aircrack-ng.org/">Aircrack-ng suite</A>'
Radio_Menu[13]='<a class="whitelink" href="https://github.com/derv82">Wifite</A>'
Radio_Menu[14]='<a class="whitelink" href="https://github.com/GDSSecurity/wifitap">Wifitap</A>'

Radio_Menu[15]='<span class="yellowsans">WPS Vulnerability?</span>'
Radio_Menu[16]='<a class="whitelink" href="https://github.com/judocol/bully">Bully (WPS attack)</a>'
Radio_Menu[17]='<a class="whitelink" href="http://www.willhackforsushi.com/?page_id=50">coWPAtty</A>'
Radio_Menu[18]='<a class="whitelink" href="https://github.com/savio-code/fern-wifi-cracker">Fern-Wifi-Cracker</A>'


Radio_Menu[19]='<a class="whitelink" href="https://github.com/savio-code/ghost-phisher">Ghost Phisher</A>'
Radio_Menu[20]='<a class="whitelink" href="https://wifiphisher.org/">WifiPhisher</A>'

Radio_Menu[21]='<a class="whitelink" href="https://pyrit.wordpress.com/">Pyrit</a>'





var NetTool_Menu=new Array()
NetTool_Menu[0]='<span class="yellowsans">General Net and DNS Tools</span>'
NetTool_Menu[1]='<a class="whitelink" HREF="http://www.dnsstuff.com/tools">DNSstuff Toolbox</A>'
NetTool_Menu[2]='<a class="whitelink" HREF="http://www.dnsqueries.com/en/">DNSQueries.com Toolkit</A>'
NetTool_Menu[3]='<a class="whitelink" HREF="http://mega-check.com/">Mega-Check.com Toolkit</A>'
NetTool_Menu[4]='<a class="whitelink" HREF="https://w3dt.net/">w3dt.net Toolkit</A>'
NetTool_Menu[5]='<a class="whitelink" HREF="www.subnetonline.com/pages/network-tools.php">SubnetOnline.com Toolkit</A>'
NetTool_Menu[6]='<a class="whitelink" HREF="http://network-tools.com/">Network-Tools.com</A>'
NetTool_Menu[7]='<a class="whitelink" HREF="http://www.kloth.net/services/">Kloth.net Services</A>'
NetTool_Menu[8]='<a class="whitelink" HREF="https://centralops.net/co/">CentralOps.net</A>'
// https://dnslytics.com/">DNSlytics (was tcpiputils.com)</A>'
// http://www.ipvoid.com/">IPVoid tools</A>'
// http://www.toolsvoid.com/
// https://www.whatismyip.com/
// https://www.websitepulse.com/tools/tcp-traceroute-test">WebSitePulse TCP Traceroute</A>'
// https://www.ipaddressguide.com/">IPAddressGuide.com (IPv4 and v6)</A>'


NetTool_Menu[9]='<span class="yellowsans">Regional Internet Registry Whois</span>'
NetTool_Menu[10]='<a class="whitelink" HREF="https://wq.apnic.net/whois-search/static/search.html">APNIC Whois</A>'
NetTool_Menu[11]='<a class="whitelink" href="http://lacnic.net/cgi-bin/lacnic/whois?lg=EN">LACNIC Whois</A>'
NetTool_Menu[12]='<a class="whitelink" HREF="http://www.afrinic.net/en/services/whois-query">AfriNIC Whois</A>'
NetTool_Menu[13]='<a class="whitelink" HREF="http://whois.arin.net/ui/advanced.jsp">ARIN Adv Whois</A>'
NetTool_Menu[14]='<a class="whitelink" HREF="https://stat.ripe.net/">RIPEstat Lookup</A>'

NetTool_Menu[15]='<span class="yellowsans">Other DNS-Specific Tools</span>'
NetTool_Menu[16]='<a class="whitelink" HREF="https://dnsdumpster.com/">DNS Dumpster</A>'
NetTool_Menu[17]='<a class="whitelink" HREF="https://stat.ripe.net/widget/list">RIPEstat Widget List</A>'
NetTool_Menu[18]='<a class="whitelink" HREF="http://www.intodns.com/">intoDNS: DNS/MX Health</A>'
NetTool_Menu[19]='<a class="whitelink" HREF="http://mxtoolbox.com/">MxToolbox</A>'
NetTool_Menu[20]='<a class="whitelink" HREF="http://www.fixyourip.com/">FixYourIP.com</A>'
NetTool_Menu[21]='<a class="whitelink" HREF="http://www.dnssy.com/">Z-Hosts DNSsy</A>'
NetTool_Menu[22]='<a class="whitelink" HREF="https://who.is/">Who.is DNS check</A>'
NetTool_Menu[23]='<a class="whitelink" href="http://nswalk.com">NSWalk DNS Tracing</A>'
NetTool_Menu[24]='<a class="whitelink" HREF="https://www.robtex.net/">Robtex Graphical DNS</A>'
NetTool_Menu[25]='<a class="whitelink" HREF="http://dnsdigger.com/">DNS-Digger (hosts in subnet)</A>'
NetTool_Menu[26]='<a class="whitelink" HREF="http://searchdns.netcraft.com/">Netcraft SearchDNS</A>'
NetTool_Menu[27]='<a class="whitelink" HREF="http://toolbar.netcraft.com/site_report?url=undefined">Netcraft Site Report</A>'
NetTool_Menu[28]='<a class="whitelink" HREF="http://dnsviz.net/">DNSViz DNSSEC Visualization</a>'
NetTool_Menu[29]='<a class="whitelink" HREF="http://dnscheck.iis.se/">DNS Check (incl DNSSEC)</a>'
NetTool_Menu[30]='<a class="whitelink" HREF="http://dnssec-debugger.verisignlabs.com/">DNSSEC Analyzer</a>'
NetTool_Menu[31]='<a class="whitelink" HREF="http://dnssectest.sidn.nl/">SIDN DNSSEC Test</a>'
NetTool_Menu[32]='<a class="whitelink" HREF="https://cryptoreport.websecurity.symantec.com/checker/">Symantec SSL/TLS CryptoReport</a>'



//NetTool_Menu[45]='<a class="whitelink" href="http://www.potaroo.net/cgi-bin/ipv6addr">IPv6 Address Report</a>'

//NetTool_Menu[46]='<span class="yellowsans">IP Geolocation</span>'
//NetTool_Menu[47]='<a class="whitelink" HREF="http://www.ipaddresslocation.org/">IPAddressLocation.org</A>'
//NetTool_Menu[48]='<a class="whitelink" HREF="http://www.hostip.info/">Hostip.info IP Geolocation</A>'
//NetTool_Menu[49]='<a class="whitelink" HREF="http://www.ip2location.com">IP2Location.com</A>'
//NetTool_Menu[50]='<a class="whitelink" HREF="https://yoursunny.com/p/pcap-map/">PCAP Map Visualizer</A>' 




var Net2_Menu=new Array()
Net2_Menu[0]='<span class="yellowsans">General Reference</span>'
Net2_Menu[1]='<a class="whitelink" href="https://www.rfc-editor.org/search/rfc_search.php">RFC Editor search</A>'
Net2_Menu[2]='<a class="whitelink" href="https://datatracker.ietf.org/">IETF DataTracker</A>'
Net2_Menu[3]='<a class="whitelink" href="https://wiki.wireshark.org/FrontPage">The Wireshark Wiki</A>'
Net2_Menu[4]='<a class="whitelink" href="http://www.tcpipguide.com/">TCPIPGuide.com Wiki</A>'
Net2_Menu[5]='<a class="whitelink" href="https://wiki.mef.net">MEF (Metro Ethernet Forum) Wiki</A>'
Net2_Menu[6]='<a class="whitelink" href="http://www.subnet-calculator.com/">Subnet-calculator.com</A>'
Net2_Menu[7]='<a class="whitelink" href="http://www.ascii-code.com/">ASCII-BIN-HEX-OCT Convert</a>'
Net2_Menu[8]='<a class="whitelink" href="https://www.iana.org/assignments/ieee-802-numbers/ieee-802-numbers.xhtml">IANA EtherType &amp; OUI #s</A>'
Net2_Menu[9]='<a class="whitelink" href="https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml">IANA ICMP Types &amp; Codes</A>'
Net2_Menu[10]='<a class="whitelink" href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">IANA Internet Protocol #s</A>'
Net2_Menu[11]='<a class="whitelink" href="https://www.iana.org/assignments/ipv6-address-space/ipv6-address-space.xhtml">IANA IPv6 Address Space</A>'
Net2_Menu[12]='<a class="whitelink" href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt">IANA Transport Protocol #s</A>'

Net2_Menu[13]='<span class="yellowsans">Cisco Related</span>'
Net2_Menu[14]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-software-release-15-6-2-t/model.html">Cisco IOS 15.6(2)T Cmd Refs</A>'
Net2_Menu[15]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-software-release-15-6m-t/products-command-reference-list.html">IOS 15.6(2) Services Cmd Guides</A>' 
Net2_Menu[16]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-software-release-15-6m-t/products-installation-and-configuration-guides-list.html">Cisco IOS 15.6(2)T Config Guides</A>'
Net2_Menu[17]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-xe-3e/tsd-products-support-series-home.html">Cisco IOS XE 3.x Cmd Refs</a>'
Net2_Menu[18]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-xr-software/tsd-products-support-series-home.html">Cisco IOS XR Cmd Refs</a>'
Net2_Menu[19]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/nx-os-software/tsd-products-support-series-home.html">Cisco IOS NX Cmd Refs</a>'


Net2_Menu[20]='<span class="yellowsans">AS/ BGP Lookups</span>'
Net2_Menu[21]='<a class="whitelink" href="https://www.bgpmon.net/">BGPMon Dashboard</A>'
Net2_Menu[22]='<a class="whitelink" href="http://bgp.he.net/">Hurricane Electric BGP Tools</A>'
Net2_Menu[23]='<a class="whitelink" href="http://www.netconfigs.com/">netconfigs.com BGP Tools</A>'
Net2_Menu[24]='<a class="whitelink" href="http://www.as3257.net/lg/">GTT BGP Looking Glass</A>'
Net2_Menu[25]='<a class="whitelink" href="https://prefix.pch.net/">Packet Clearinghouse</A>'
Net2_Menu[26]='<a class="whitelink" href="https://www.peeringdb.com/advanced_search">PeeringDB Adv Search</A>'
Net2_Menu[27]='<a class="whitelink" href="http://cyclops.cs.ucla.edu/">Cyclops network audit tool</A>'
Net2_Menu[28]='<a class="whitelink" href="https://www.team-cymru.org/services.html">Team Cymru IP-to-ASN, etc</A>'
Net2_Menu[29]='<a class="whitelink" href="https://www.findip-address.com/">Findip-address.com Lookup</A>'
Net2_Menu[30]='<a class="whitelink" href="https://myip.ms/">myip.ms Host Info</a>'
Net2_Menu[31]='<a class="whitelink" href="http://trace.die.net/">die.net TraceRoute Explorer</a>'
Net2_Menu[32]='<a class="whitelink" href="http://www.traceroute.org/">Traceroute.org Jumppoints</a>' 
Net2_Menu[33]='<span class="yellowsans">Route Servers</span>'
Net2_Menu[34]='<a class="whitelink" href="telnet://route-server.ip.att.net">telnet://route-server.ip.att.net</A>'
Net2_Menu[35]='<a class="whitelink" href="telnet://route-server.rogers.com">telnet://route-server.rogers.com</A>'
Net2_Menu[36]='<a class="whitelink" href="telnet://route-server.cerf.net">telnet://route-server.cerf.net</A>'
Net2_Menu[37]='<a class="whitelink" href="telnet://route-server.videotron.net">telnet://route-server.videotron.net</A>'
Net2_Menu[38]='<a class="whitelink" href="http://www.traceroute.org">Public route servers list</A>'


//Net2_Menu[6]='<span class="yellowsans">Tools and Practice</span>'
//Net2_Menu[7]='<a class="whitelink" href="http://rednectar.net/GNS3-workbench/">GNS3 Workbench</A>'
//Net2_Menu[8]='<a class="whitelink" href="https://gns3vault.com/">GNS3Vault</A>'
//Net2_Menu[9]='<a class="whitelink" href="http://www.freeccnaworkbook.com/">FreeCCNAWorkbook.com</A>'
//Net2_Menu[10]='<a class="whitelink" href="http://www.subnettingquestions.com/">SubnettingQuestions.com</A>'
//Net2_Menu[11]='<a class="whitelink" href="http://www.subnet-calculator.com/">Subnet-calculator.com</A>'
//Net2_Menu[12]='<a class="whitelink" href="http://www.slac.stanford.edu/xorg/nmtf/nmtf-tools.html">Net Monitoring Tools list @ Stanford</A>'
// https://wiki.wireshark.org/Tools">Wireshark wiki tool list</a>'

// http://pcp.io">Performance Co-Pilot system metrics</A>'
//Firewall_Menu[29]='<a class="whitelink" href="http://www.zenoss.com/">Zenoss</a>'
// Firewall_Menu[30]='<a class="whitelink" href="http://www.zabbix.org/">Zabbix wiki</A>'
//Firewall_Menu[31]='<a class="whitelink" href="https://www.solarwinds.com/">SolarWinds</A>'
//Firewall_Menu[32]='<a class="whitelink" href="https://community.spiceworks.com">SpiceWorks</A>'
// http://www.qosient.com/argus/">QoSient Argus</A>'

var Gov_Menu2=new Array()
Gov_Menu2[0]='<span class="yellowsans">US Govt Resources</span>'
Gov_Menu2[1]='<a class="whitelink" href="http://www.firstgov.gov/">FirstGov - US Govt Central</A>'
Gov_Menu2[2]='<a class="whitelink" href="http://thomas.loc.gov/">THOMAS - US Legislative Gateway</a> '
Gov_Menu2[3]='<a class="whitelink" href="http://www.gpoaccess.gov/index.html">GPO Access- Govt Printing Ofc</a>'
Gov_Menu2[4]='<a class="whitelink" href="http://uscode.house.gov/usc.htm">US Code - US House of Reps</a>'
Gov_Menu2[5]='<a class="whitelink" href="http://www4.law.cornell.edu/uscode/topn/">US Code - Index by Popular Names</A>'
Gov_Menu2[6]='<a class="whitelink" href="http://www.access.gpo.gov/nara/cfr/">Code of Federal Regulations</a>'
Gov_Menu2[7]='<a class="whitelink" href="http://gsulaw.gsu.edu/metaindex/">US Legal Research MetaIndex</A>'
Gov_Menu2[8]='<a class="whitelink" href="http://www.ncsl.org/">Natl Conf of State Legislatures</A>'
Gov_Menu2[9]='<a class="whitelink" href="http://www.nara.gov/">NARA - The US National Archives</A>'
Gov_Menu2[10]='<a class="whitelink" href="http://www.census.gov/">US Census Bureau</a>'

Gov_Menu2[11]='<span class="yellowsans">Texas Govt Resources</span>'
Gov_Menu2[12]='<a class="whitelink" href="http://www.state.tx.us/">TexasOnline - The State of Texas</a>'
Gov_Menu2[13]='<a class="whitelink" href="http://www.capitol.state.tx.us/">The Texas Legislature Online</a>'
Gov_Menu2[14]='<a class="whitelink" href="http://www.lrl.state.tx.us/">Tx Legislative Reference Library</A>'
Gov_Menu2[15]='<a class="whitelink" href="http://www.capitol.state.tx.us/hrofr/hrofr.htm">Tx House Research Organization</A>'
Gov_Menu2[16]='<a class="whitelink" href="http://www.tdh.state.tx.us/">Texas Department of Health</a>'
Gov_Menu2[17]='<a class="whitelink" href="http://www.tceq.state.tx.us">Tx Commission on Enviro Quality</a>'
Gov_Menu2[18]='<a class="whitelink" href="http://www.tsl.state.tx.us/trail/index.html">TRAIL: Texas State Library</a>'
Gov_Menu2[19]='<a class="whitelink" href="http://204.65.105.13/tac/index.html">Texas Administrative Code</a>'
Gov_Menu2[20]='<a class="whitelink" href="http://www.capitol.state.tx.us/statutes/statutes.html">Texas Statutes Listing</a>'
Gov_Menu2[21]='<a class="whitelink" href="http://www.courts.state.tx.us/">Texas Judiciary Online</A>'
Gov_Menu2[22]='<a class="whitelink" href="http://204.65.105.13/texreg/issues.html">The Texas Register</a>'

Gov_Menu2[23]='<span class="yellowsans">Business News and Data</span>'
Gov_Menu2[24]='<a class="whitelink" href="http://www.ceoexpress.com/">CEOExpress</A>'
Gov_Menu2[25]='<a class="whitelink" href="http://www.businesswire.com/">BusinessWire</A>'
// Gov_Menu2[26]='<a class="whitelink" href="http://www.redherring.com/">Red Herring</A>'
Gov_Menu2[27]='<a class="whitelink" href="http://www.bloomberg.com/">Bloomberg Business</A>'
Gov_Menu2[28]='<a class="whitelink" href="http://www.bbb.com/">BBB Company Search</A>'
Gov_Menu2[29]='<a class="whitelink" href="http://hoovweb.hoovers.com/">Hoovers Handbook Online</A>'
Gov_Menu2[30]='<a class="whitelink" href="http://finance.yahoo.com/">Yahoo Finance</A>'
Gov_Menu2[31]='<a class="whitelink" href="http://www.morningstar.com/">MorningStar</a>'
Gov_Menu2[32]='<a class="whitelink" href="https://www.crunchbase.com">CrunchBase</A>'
// Gov_Menu2[33]='<a class="whitelink" href="http://www.inc.com">Inc.com</A>'
Gov_Menu2[34]='<a class="whitelink" href="https://www.vbprofiles.com/">VentureBeat Profiles</a>'

Gov_Menu2[35]='<span class="yellowsans">Legal News and Resources</span>'
Gov_Menu2[36]='<a class="whitelink" href="http://www.alllaw.com/">AllLaw</A>'
Gov_Menu2[37]='<a class="whitelink" href="http://www.catalaw.com/">CataLaw</A>'
Gov_Menu2[38]='<a class="whitelink" href="http://lp.findlaw.com/">FindLaw</A>'
Gov_Menu2[39]='<a class="whitelink" href="https://www.law.cornell.edu/">Cornell Law - Legal Info Inst.</A>'
Gov_Menu2[40]='<a class="whitelink" href="https://law.duke.edu/lib/researchguides/intresearch/">Duke Law - Research resources</A>'
Gov_Menu2[42]='<a class="whitelink" href="http://www.legaldirectories.com/">Legal Directories Search</A>'
Gov_Menu2[43]='<a class="whitelink" href="https://www.justice.gov/criminal-ccips">US DOJ Computer Crime (CCIPS)</A>'
Gov_Menu2[44]='<a class="whitelink" href="http://news.findlaw.com">FindLaw News</a>'
Gov_Menu2[45]='<a class="whitelink" href="http://www.abanet.org/">American Bar Assoc.</A>'
Gov_Menu2[46]='<a class="whitelink" href="http://www.abanet.org/legalservices/lris/directory.html">ABA Lawyer Referal</A>'
Gov_Menu2[47]='<a class="whitelink" href="http://www.aclu.org/">ACLU</A>'

var UTexas_Menu=new Array()
UTexas_Menu[0]='<span class="yellowsans">The University of Texas</span>'
UTexas_Menu[1]='<a class="whitelink" href="http://www.utexas.edu/">UT Austin - Main</A>'
UTexas_Menu[2]='<a class="whitelink" href="http://www.lib.utexas.edu/">UT Libraries</a>'
UTexas_Menu[3]='<a class="whitelink" href="http://x500.utexas.edu/">x500 Directory</a>'
UTexas_Menu[4]='<a class="whitelink" href="http://www.hrc.utexas.edu/">Harry Ransom Center</a>'
UTexas_Menu[5]='<a class="whitelink" href="http://www.dailytexanonline.com/">The Daily Texan</A>'


var Business_Menu=new Array()
Business_Menu[0]='<span class="yellowsans">Employment: Career Resources</span>'
Business_Menu[1]='<a class="whitelink" href="http://www.indeed.com/">Indeed</A>'
Business_Menu[2]='<a class="whitelink" href="http://www.careerjet.com/">CareerJet</A>'
Business_Menu[3]='<a class="whitelink" href="http://www.simplyhired.com/">SimplyHired</a>'
Business_Menu[4]='<a class="whitelink" href="https://www.ziprecruiter.com/">ZipRecruiter</A>'
Business_Menu[5]='<a class="whitelink" href="http://www.careerbuilder.com/">CareerBuilder</A>'
Business_Menu[6]='<a class="whitelink" href="https://monster.com/">Monster.com</a>'
Business_Menu[7]='<a class="whitelink" href="https://www.dice.com/">Dice.com</A>'
Business_Menu[8]='<a class="whitelink" href="http://hotjobs.yahoo.com/">HotJobs</A>'
Business_Menu[9]='<a class="whitelink" href="https://www.usajobs.gov">US Govt - USAJobs.gov</A>'
Business_Menu[10]='<a class="whitelink" href="http://www.careeronestop.org/">CareerOneStop (US Dept of Labor)</A>'
Business_Menu[11]='<a class="whitelink" href="http://us.jobs">US.Jobs - Natl Labor Exchg</A>'
Business_Menu[12]='<a class="whitelink" href="http://www.jobsafari.co.uk/">JobSafari [UK]</A>'
Business_Menu[13]='<a class="whitelink" href="http://www.jobrobot.de/">JobRobot [DE]</A>'
Business_Menu[14]='--------------'
Business_Menu[15]='<a class="whitelink" href="https://www.theladders.com">TheLadders.com</A>'
Business_Menu[16]='<a class="whitelink" href="https://www.skillgigs.com/">SkillGigs</a>'
Business_Menu[17]='<a class="whitelink" href="http://www.payscale.com/">PayScale</A>'
Business_Menu[18]='<a class="whitelink" href="http://www.glassdoor.com/">Glassdoor</A>'
Business_Menu[19]='<a class="whitelink" href="https://www.careerbliss.com/">CareerBliss</A>'
// http://theundercoverrecruiter.com/">The Undercover Recruiter</a>

Business_Menu[20]='<span class="yellowsans">Business News and Data</span>'
Business_Menu[21]='<a class="whitelink" href="http://www.ceoexpress.com/">CEOExpress</A>'
Business_Menu[22]='<a class="whitelink" href="http://www.businesswire.com/">BusinessWire</A>'
Business_Menu[23]='<a class="whitelink" href="http://www.redherring.com/">Red Herring</A>'
Business_Menu[24]='<a class="whitelink" href="http://www.bloomberg.com/">Bloomberg Business</A>'
Business_Menu[25]='--------------'
Business_Menu[26]='<a class="whitelink" href="http://www.bbb.com/">BBB Company Search</A>'
Business_Menu[27]='<a class="whitelink" href="http://hoovweb.hoovers.com/">Hoovers Handbook Online</A>'
Business_Menu[28]='<a class="whitelink" href="http://finance.yahoo.com/">Yahoo Finance</A>'
Business_Menu[29]='<a class="whitelink" href="http://www.morningstar.com/">MorningStar</a>'
Business_Menu[30]='<a class="whitelink" href="https://www.crunchbase.com">CrunchBase</A>'
Business_Menu[31]='<a class="whitelink" href="http://www.inc.com">Inc.com</A>'
Business_Menu[32]='<a class="whitelink" href="https://www.vbprofiles.com/">VentureBeat Profiles</a>'
 


var SW_Menu=new Array()


SW_Menu[0]='<span class="yellowsans">Package Searches</span>'
SW_Menu[1]='<a class="whitelink" href="https://pkgs.org/">pkgs.org</A>'
SW_Menu[2]='<a class="whitelink" href="https://www.rpmfind.net">RPMFind.net</A>'
SW_Menu[3]='<a class="whitelink" href="http://rpm.pbone.net">RPM Search @ PBone</A>'
SW_Menu[4]='<a class="whitelink" href="http://www.rpmseek.com">RPMSeek</A>'
SW_Menu[5]='<a class="whitelink" href="https://www.apt-browse.org/">Apt-Browse.org</A>'
SW_Menu[6]='<a class="whitelink" href="https://www.debian.org/distrib/packages/">Debian official repos</A>'
SW_Menu[7]='<a class="whitelink" href="https://aur.archlinux.org/">Arch User Repo</A>'
SW_Menu[8]='<a class="whitelink" href="http://www.linux-sound.org/">Linux-Sound.org</A>'
SW_Menu[9]='<a class="whitelink" href="https://appdb.winehq.org/">WineHQ AppDB</A>'
SW_Menu[10]='<a class="whitelink" href="https://alien-pkg-convert.sourceforge.io/">Alien pkg converter</A>'
SW_Menu[11]='<a class="whitelink" href="https://fedoraproject.org/wiki/EPEL">Extra Pkgs for Ent. Linux (EPEL)</A>'
//https://cygwin.com/">CygWin</A>'
SW_Menu[12]='<span class="yellowsans">Shareware and Freeware</span>'
SW_Menu[13]='<a class="whitelink" href="http://www.nirsoft.net/">Nirsoft</A>'
SW_Menu[14]='<a class="whitelink" href="https://technet.microsoft.com/en-us/sysinternals/bb545021.aspx">Sysinternals</A>'
SW_Menu[15]='<a class="whitelink" href="http://www.joeware.net/freetools/index.htm">Joeware.net</A>'
SW_Menu[16]='<a class="whitelink" href="http://download.cnet.com">CBSi - c|net download.com</A>'
SW_Menu[17]='<a class="whitelink" href="http://filehippo.com/">FileHippo</a>'
SW_Menu[18]='<a class="whitelink" href="http://www.FreewareFiles.com/">FreewareFiles.com</A>'
SW_Menu[19]='<a class="whitelink" href="http://www.softpedia.com/">Softpedia.com</A>'
SW_Menu[20]='<a class="whitelink" href="http://www.majorgeeks.com/">MajorGeeks.com</A>'
SW_Menu[21]='<a class="whitelink" href="http://www.softlookup.com/">SoftLookup</a>'
SW_Menu[22]='<a class="whitelink" href="http://www.portableapps.com/">PortableApps.com</A>'
SW_Menu[23]='<a class="whitelink" href="http://www.macupdate.com/">MacUpdate</A>' 
SW_Menu[24]='<a class="whitelink" href="http://brew.sh/">Homebrew Pkg Mgr</A>'
SW_Menu[25]='<a class="whitelink" href="http://www.sourceforge.net/">SourceForge</A>'
SW_Menu[26]='<a class="whitelink" href="https://www.macports.org/">MacPorts</A>'
SW_Menu[27]='<a class="whitelink" href="http://www.oldversion.com/">OldVersion.com - old SW </A>'
SW_Menu[28]='<a class="whitelink" href="http://www.1337s.com">DaRT - ERD Cmdr + More</A>'
SW_Menu[29]='<a class="whitelink" href="http://www.oldergeeks.com/downloads/category.php?id=35">Ancient Microsoft Boot Disks</a>'
SW_Menu[30]='<a class="whitelink" href="https://archive.org/details/softwarelibrary">Internet Archive Old PC Software</a>'
SW_Menu[31]='<span class="yellowsans">File/Driver Searches</span>'
SW_Menu[32]='<a class="whitelink" href="http://www.filesearching.com/advanced/">FileSearching</a>'
SW_Menu[33]='<a class="whitelink" href="http://www.filewatcher.org">FileWatcher</a>'
SW_Menu[34]='<a class="whitelink" href="http://www.driverguide.com/">DriverGuide.com</A>'
SW_Menu[35]='<a class="whitelink" href="http://driveragent.com/c/scanorsearch">DriverAgent.com</A>'


var Unix_Menu=new Array()
Unix_Menu[0]='<span class="yellowsans">Linux Support, Info</span>'
Unix_Menu[1]='<a class="whitelink" href="http://www.linuxfoundation.org">The Linux Foundation</A>'
Unix_Menu[2]='<a class="whitelink" href="http://www.tldp.org/">The Linux Documentation Project</A>'
Unix_Menu[3]='<a class="whitelink" href="http://www.kernel.org/">Linux Kernel Archives</A>'
Unix_Menu[4]='<a class="whitelink" href="http://www.linuxtoday.com/">LinuxToday News</A>'
Unix_Menu[5]='<a class="whitelink" href="http://www.linuxquestions.org/">LinuxQuestions.org</A>'
Unix_Menu[6]='<a class="whitelink" href="https://www.howtoforge.com/">HowtoForge</A>'
Unix_Menu[7]='<a class="whitelink" href="http://linoxide.com/">LinOxide</A>'
Unix_Menu[8]='<a class="whitelink" href="https://www.rootusers.com/">RootUsers.com</A>'
Unix_Menu[9]='<a class="whitelink" href="http://www.binarytides.com/">BinaryTides</A>'
Unix_Menu[10]='<a class="whitelink" href="http://www.tecmint.com">Tecmint How-tos and Guides</A>'
Unix_Menu[11]='<a class="whitelink" href="http://www.thegeekstuff.com">TheGeekStuff.com Guides</A>'
// https://www.slashroot.in/">SlashRoot</A>'
// http://www.linuxnix.com/">Linux Juggernaut</A>'
// https://www.commandlinefu.com/commands/browse/sort-by-votes">Commandlinefu top voted tips</A>'
Unix_Menu[12]='<a class="whitelink" href="http://xmodulo.com/">Xmodulo How-tos and Guides</A>'
Unix_Menu[13]='<a class="whitelink" href="http://linux-training.be/">linux-training.be - Cobbaut</A>'
Unix_Menu[14]='<a class="whitelink" href="http://www.linuxfromscratch.org">Linux From Scratch</A>'
Unix_Menu[15]='<a class="whitelink" href="http://www.ugu.com/">UGU- Unix Guru Universe</A>'
Unix_Menu[16]='<a class="whitelink" href="http://www.unixpower.org">UnixPower</A>'
Unix_Menu[17]='<a class="whitelink" href="http://linux-ip.net">Linux-IP.net</A>'
Unix_Menu[18]='<a class="whitelink" href="http://www.brendangregg.com/linuxperf.html">BGregg- Perf Monitoring - eBPF</A>'
Unix_Menu[19]='<a class="whitelink" href="http://cromwell-intl.com/linux/">Bob Cromwell- Linux/Unix</A>'
Unix_Menu[20]='<a class="whitelink" href="http://cromwell-intl.com/tcpip/">Bob Cromwell- TCP/IP Networking</A>'
Unix_Menu[21]='<a class="whitelink" href="http://cromwell-intl.com/cybersecurity/">Bob Cromwell- Sys/Net Security</A>'
Unix_Menu[22]='<a class="whitelink" href="http://www.policyrouting.org/">Linux Policy Routing</A>'
Unix_Menu[23]='<a class="whitelink" href="https://selinuxproject.org/page/Main_Page">SELinux Project Wiki</A>'
Unix_Menu[24]='<a class="whitelink" href="https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html-single/SELinux_Users_and_Administrators_Guide/index.html">RH SELinux Guide</a>'

	Unix_Menu[25]='<span class="yellowsans">CLI Helpers</span>'
Unix_Menu[26]='<a class="whitelink" href="http://www.bhami.com/rosetta.html">Sysadmins Unixersal Translator</A>'
Unix_Menu[27]='<a class="whitelink" href="http://mywiki.wooledge.org/BashGuide">BashGuide Wiki</A>'
Unix_Menu[28]='<a class="whitelink" href="http://www.shellcheck.net/">ShellCheck.net Script Analyzer</A>'
Unix_Menu[29]='<a class="whitelink" href="http://explainshell.com/">ExplainShell.com- help text for CLI</A>'
Unix_Menu[30]='<a class="whitelink" href="https://github.com/jordansissel/pleaserun">PleaseRun- Auto-gen init/systemd</A>'

Unix_Menu[31]='<span class="yellowsans">Distro Wikis and Manpages</span>'
Unix_Menu[32]='<a class="whitelink" href="http://manpages.debian.org/cgi-bin/man.cgi">Debian Manpages</A>'
Unix_Menu[33]='<a class="whitelink" href="http://manpages.ubuntu.com/">Ubuntu Manpages</A>'
Unix_Menu[34]='<a class="whitelink" href="http://www.unix.com/man-page/linux/1/man/">Unix.com manpages - 20 Versions</A>'

Unix_Menu[35]='<a class="whitelink" href="https://wiki.archlinux.org/">Arch Linux Wiki</A>'
Unix_Menu[36]='<a class="whitelink" href="https://wiki.debian.org/">Debian Wiki</A>'
Unix_Menu[37]='<a class="whitelink" href="http://docs.slackware.com/">Slackware Wiki</A>'
Unix_Menu[38]='<a class="whitelink" href="https://access.redhat.com/documentation/en/">Red Hat Documentation</A>'
Unix_Menu[39]='<a class="whitelink" href="https://fedoraproject.org/wiki/Fedora_Project_Wiki">Fedora Project Wiki</A>'
Unix_Menu[40]='<a class="whitelink" href="http://www.freebsd.net/">The FreeBSD Project</A>'



var HW_Menu=new Array()
HW_Menu[0]='<span class="yellowsans">Hardware Reference Sources</span>'
HW_Menu[1]='<a class="whitelink" href="https://apps.fcc.gov/oetcf/eas/reports/GenericSearch.cfm">Search Equipment FCCIDs</a>'
HW_Menu[2]='<a class="whitelink" href="http://www.pcilookup.com//">PCILookup (old PCI-DB site died)</a>'
HW_Menu[3]='<a class="whitelink" href="https://wikidevi.com">WikiDevi - Open HW DB</a>'
HW_Menu[4]='<a class="whitelink" href="http://www.manualslib.com/">ManualsLib collection</A>'
HW_Menu[5]='<a class="whitelink" href="http://www.intel.com/pressroom/kits/quickreffam.htm">Intel Quick Ref Guide (1971-2008)</A>'
HW_Menu[6]='<a class="whitelink" href="http://ark.intel.com/">Intel ARK (Specs Post-2008)</A>'
HW_Menu[7]='<a class="whitelink" href="http://www.amdcompare.com/">AMD Compare - product specs</A>'
HW_Menu[8]='<a class="whitelink" href="http://www.everymac.com/systems/">EveryMac Macintosh Ref</a>'
HW_Menu[9]='<a class="whitelink" href="http://infocenter.arm.com">ARM Information Center</a>'
HW_Menu[10]='<a class="whitelink" href="http://www.ibm.com/support/us/">IBM Support</A>' 
HW_Menu[11]='<a class="whitelink" href="http://support.dell.com">Dell Support</A>'
HW_Menu[12]='<a class="whitelink" href="http://www.asus.com/us/support/">ASUS Support</A>'
HW_Menu[13]='<a class="whitelink" href="http://toshiba.semicon-storage.com/ap-en/design-support/search.html">Toshiba Support</A>'
HW_Menu[14]='<a class="whitelink" href="http://www.gigabyte.us/support-downloads/support-downloads.aspx">Gigabyte Support</A>'
HW_Menu[15]='<a class="whitelink" href="http://www.seagate.com/support-home/">Seagate (Maxtor, LaCie, Samsung)</A>'
HW_Menu[16]='<a class="whitelink" href="http://support.wdc.com">Western Digital (HGST, SanDisk)</A>'
HW_Menu[17]='<a class="whitelink" href="https://support.ruckuswireless.com/">Ruckus Support</A>'
HW_Menu[18]='<a class="whitelink" href="https://www.juniper.net/customers/support/">Juniper Support</A>'
HW_Menu[19]='<a class="whitelink" href="https://www.infoblox.com/">Infoblox</A>'
HW_Menu[20]='<a class="whitelink" href="https://www.riverbed.com">Riverbed</A>' 

HW_Menu[21]='<a class="whitelink" href="http://docwiki.cisco.com/wiki/Main_Page">Cisco DocWiki</A>'
HW_Menu[22]='<a class="whitelink" href="https://developer.cisco.com/site/devnet/home/index.gsp">Cisco DevNet</A>'
HW_Menu[23]='<a class="whitelink" href="https://learningspace.cisco.com/">Cisco Learning Network</A>'
HW_Menu[24]='<a class="whitelink" href="http://www.cisco.com/cisco/web/psa/default.html">Cisco- Product/Tech Support Tool</A>'
// HW_Menu[25]='<a class="whitelink" href="http://www.bradreese.com/blog/8-11-2015.htm">Cisco Product Quick Ref Guides</a>'
// link dead? site broken?

HW_Menu[26]='<span class="yellowsans">Product Review Sites</span>'
HW_Menu[27]='<a class="whitelink" href="http://arstechnica.com/discipline/hardware-it/">ArsTechnica - IT Hardware</A>'
HW_Menu[28]='<a class="whitelink" href="http://tomshardware.com/">Toms Hardware</a>'
HW_Menu[29]='<a class="whitelink" href="http://www.anandtech.com/">AnandTech</a>'
HW_Menu[30]='<a class="whitelink" href="http://benchmarkreviews.com/">Benchmark Reviews</a>'
HW_Menu[31]='<a class="whitelink" href="http://www.overclockers.com/">Overclockers.com</a>'
HW_Menu[32]='<a class="whitelink" href="http://www.overclockersclub.com/">Overclockers Club</A>'
HW_Menu[33]='<a class="whitelink" href="http://techreport.com/">TechReport.com</A>'
HW_Menu[34]='<a class="whitelink" href="http://hothardware.com">HotHardware</a>'
HW_Menu[35]='<a class="whitelink" href="http://www.hardocp.com/">HardOCP</A>'
HW_Menu[36]='<a class="whitelink" href="http://www.hardwarecanucks.com/">Hardware Canucks</a>'
HW_Menu[37]='<a class="whitelink" href="http://www.legionhardware.com/">Legion Hardware</A>'
HW_Menu[38]='<a class="whitelink" href="http://pcpartpicker.com/">PCPartPicker</A>'

var Cluster_Menu=new Array()
Cluster_Menu[0]='<span class="yellowsans">Kubernetes - Ubernetes</span>'
Cluster_Menu[1]='<a class="whitelink" href="http://kubernetes.io/">Kubernetes</A>'
Cluster_Menu[2]='<a class="whitelink" href="http://kubernetes.io/docs/reference/">Kubernetes Docs</a>'
Cluster_Menu[3]='<a class="whitelink" href="https://github.com/kubernetes/kubernetes">K8s GitHub (lots more)</A>'
Cluster_Menu[4]='<a class="whitelink" href="http://k8s.info/">K8s Community Pgs</A>'
Cluster_Menu[5]='<a class="whitelink" href="https://github.com/kubernetes/kubernetes/blob/release-1.2/docs/proposals/federation.md">K8s Federation</a>'
Cluster_Menu[6]='<a class="whitelink" href="http://blog.kubernetes.io/">Kubernetes Blog</A>'

Cluster_Menu[7]='<span class="yellowsans">Apache Mesos Ecosystem</span>'
Cluster_Menu[8]='<a class="whitelink" href="https://mesos.apache.org/">Apache Mesos</A>'
Cluster_Menu[9]='<a class="whitelink" href="http://mesos.apache.org/documentation/">Mesos Documentation</A>'
Cluster_Menu[10]='<a class="whitelink" href="https://github.com/mesos/">Mesos on GitHub</A>'
Cluster_Menu[11]='<a class="whitelink" href="https://github.com/apache/mesos/blob/master/docs/frameworks.md">Mesos Frameworks</A>'
Cluster_Menu[12]='<a class="whitelink" href="https://github.com/mesosphere">Mesospheres GitHub</A>'

Cluster_Menu[13]='<span class="yellowsans">CoreOS [Tectonic-Quay-rkt-fleet]</span>'
//Cluster_Menu[14]='<span class="yellowsans">(Tectonic-Quay-etcd-rkt-fleet)</span>'
Cluster_Menu[15]='<a class="whitelink" href="https://coreos.com/">CoreOS Main</A>'
Cluster_Menu[16]='<a class="whitelink" href="https://coreos.com/docs/">CoreOS Project Docs</A>'
Cluster_Menu[17]='<a class="whitelink" href="https://github.com/coreos/">CoreOS GitHub</A>'

Cluster_Menu[18]='<span class="yellowsans">OpenShift Stuff</span>'
Cluster_Menu[19]='<a class="whitelink" href="https://docs.openshift.com/">OpenShift Docs</A>'
Cluster_Menu[20]='<a class="whitelink" href="https://docs.openshift.org/">OpenShift Origin Docs</A>'
Cluster_Menu[21]='<a class="whitelink" href="http://commons.openshift.org/">OpenShift Commons</A>'
Cluster_Menu[22]='<a class="whitelink" href="https://www.openshift.com/enterprise/resources.html">OpenShift Resources</A>'
Cluster_Menu[23]='<a class="whitelink" href="https://github.com/openshift/origin">OpenShift Origin at GitHub</A>'
Cluster_Menu[24]='<a class="whitelink" href="https://hub.openshift.com/">OpenShift Hub</A>'
Cluster_Menu[25]='<a class="whitelink" href="https://developers.openshift.com">OpenShift Developer</a>'

Cluster_Menu[26]='<span class="yellowsans">Docker Provisioning</span>'
Cluster_Menu[27]='<a class="whitelink" href="https://docs.docker.com/">Docker Docs</A>'
Cluster_Menu[28]='<a class="whitelink" href="https://hub.docker.com/explore/">Docker Hub</A>'
Cluster_Menu[29]='<a class="whitelink" href="https://github.com/docker/">Docker GitHub</A>'
Cluster_Menu[30]='<a class="whitelink" href="https://www.docker.com/docker-security">Docker Security</A>'
Cluster_Menu[31]='<a class="whitelink" href="https://github.com/docker/infrakit">InfraKit Orchestration</A>'
Cluster_Menu[32]='<a class="whitelink" href="https://docs.docker.com/datacenter/ucp/2.1/guides/">DCC UCP docs</A>'
Cluster_Menu[33]='<a class="whitelink" href="http://container-solutions.com/resources/">container-solutions.com</A>'


Cluster_Menu[34]='<span class="yellowsans">OpenStack Ecosystem</span>'
Cluster_Menu[35]='<a class="whitelink" href="http://docs.openstack.org/">OpenStack Docs</A>'
Cluster_Menu[36]='<a class="whitelink" href="http://docs.openstack.org/cli-reference/">Openstack CLI Ref</A>'
Cluster_Menu[37]='<a class="whitelink" href="http://developer.openstack.org/">OpenStack Developer</A>'
Cluster_Menu[38]='<a class="whitelink" href="https://github.com/openstack">OpenStack GitHub</A>'
Cluster_Menu[39]='<a class="whitelink" href="https://wiki.openstack.org">OpenStack Wiki</A>'
Cluster_Menu[40]='<a class="whitelink" href="https://docs.openstack.org/ocata/">OpenStack Ocata (02-2017)</a>'
Cluster_Menu[41]='<a class="whitelink" href="http://docs.openstack.org/training_labs/">Training Labs</A>'

Cluster_Menu[42]='<span class="yellowsans">Other Orchestration</span>'
Cluster_Menu[43]='<a class="whitelink" href="http://deis.io/">Deis Workflow</A>'
Cluster_Menu[44]='<a class="whitelink" href="http://osv.io/">OSv Platform</a>'
Cluster_Menu[45]='<a class="whitelink" href="http://docs.cloudfoundry.org/">CloudFoundry docs</a>'

var Cluster2_Menu=new Array()

Cluster2_Menu[1]='<span class="yellowsans">Google Cloud Resources</span>'
Cluster2_Menu[2]='<a class="whitelink" href="https://cloud.google.com/docs/">Google Cloud docs</a>'
Cluster2_Menu[3]='<a class="whitelink" href="https://cloud.google.com/sdk/">Google Cloud SDK/CLI</A>'
Cluster2_Menu[4]='<a class="whitelink" href="https://cloud.google.com/python/">Google Cloud Python APIs</A>'
Cluster2_Menu[5]='<a class="whitelink" href="https://cloud.google.com/shell/">Google Cloud Shell (in-browser)</A>'


Cluster2_Menu[6]='<span class="yellowsans">Amazon Web Services</span>'
Cluster2_Menu[7]='<a class="whitelink" href="https://console.aws.amazon.com">AWS Console Login</A>'
Cluster2_Menu[8]='<a class="whitelink" href="https://aws.amazon.com/documentation/">AWS Documentation</A>'
Cluster2_Menu[9]='<a class="whitelink" href="https://forums.aws.amazon.com">AWS Discussion Forums</A>'
Cluster2_Menu[10]='<a class="whitelink" href="http://aws.amazon.com/blogs/aws/">AWS Blogs main</A>'
Cluster2_Menu[11]='<a class="whitelink" href="https://www.awsarchitectureblog.com/">AWS Architecture Blog</A>'
Cluster2_Menu[12]='<a class="whitelink" href="https://aws.amazon.com/tools/">AWS Developer Tools</A>'
Cluster2_Menu[13]='<a class="whitelink" href="https://github.com/aws/">AWS at GitHub</A>'
Cluster2_Menu[14]='<a class="whitelink" href="http://aws.amazon.com/products/">AWS Service Listing</A>'
Cluster2_Menu[15]='<a class="whitelink" href="https://aws.amazon.com/marketplace/">AWS Marketplace</a>'
Cluster2_Menu[16]='<a class="whitelink" href="http://EC2Instances.info">EC2Instance.info (specs/pricing)</A>'
Cluster2_Menu[17]='<a class="whitelink" href="https://aws.amazon.com/cli/">AWS CLI resources</A>'
Cluster2_Menu[18]='<a class="whitelink" href="http://docs.aws.amazon.com/powershell/latest/reference/Index.html">AWS Tools for PowerShell</A>'

Cluster2_Menu[19]='<span class="yellowsans">VMWare Resources</span>'
Cluster2_Menu[20]='<a class="whitelink" href="https://www.vmware.com/support/pubs/">VMWare Docs</A>'
Cluster2_Menu[21]='<a class="whitelink" href="https://kb.vmware.com">VMWare Knowledgebase</A>'
Cluster2_Menu[22]='<a class="whitelink" href="http://blogs.vmware.com">VMWare Support blogs</A>'
Cluster2_Menu[23]='<a class="whitelink" href="https://communities.vmware.com">VMWare Technology Network</A>'
Cluster2_Menu[24]='<a class="whitelink" href="https://my.vmware.com/">MyVMware Login</a>'

Cluster2_Menu[25]='<span class="yellowsans">Xen Project - XenServer</span>'
Cluster2_Menu[26]='<a class="whitelink" href="http://xenserver.org/">XenServer</A>'
Cluster2_Menu[27]='<a class="whitelink" href="https://xenproject.org/">Xen Project</a>'
Cluster2_Menu[28]='<a class="whitelink" href="https://wiki.xenproject.org/wiki/Main_Page">Xen Project Wiki</A>'

Cluster2_Menu[29]='<span class="yellowsans">General Virtualization</span>'
Cluster2_Menu[30]='<a class="whitelink" href="https://wiki.libvirt.org/page/Main_Page">Libvirt wiki</A>'
Cluster2_Menu[31]='<a class="whitelink" href="http://www.virt-tools.org/">Community Virt Tools (KVM, QEMU)</a>'
Cluster2_Menu[32]='<a class="whitelink" href="https://www.virtualbox.org/">Oracle VirtualBox</A>'
Cluster2_Menu[33]='<a class="whitelink" href="https://www.vagrantup.com/">Hashicorp Vagrant</A>'
Cluster2_Menu[34]='<a class="whitelink" href="https://app.vagrantup.com/boxes/search">Vagrant Boxes</A>'

var SDNNFV_Menu=new Array()
SDNNFV_Menu[1]='<span class="yellowsans">SDN-NFV - Open Networking</span>'
SDNNFV_Menu[2]='<a class="whitelink" href="https://www.opennetworking.org/">The Open Networking Foundation</A>'
SDNNFV_Menu[3]='<a class="whitelink" href="https://www.opennetworking.org/sdn-resources/technical-library">ONF Technical Library</A>'
SDNNFV_Menu[4]='<a class="whitelink" href="http://onrc.stanford.edu/projects.html">Open Networking Research Ctr</A>'
SDNNFV_Menu[5]='<a class="whitelink" href="http://onlab.us/">Open Networking Lab (ONOS, etc)</A>'
SDNNFV_Menu[6]='<a class="whitelink" href="http://archive.openflow.org/wk/index.php/Main_Page">OpenFlow Wiki</a>'
SDNNFV_Menu[7]='<a class="whitelink" href="https://www.sdxcentral.com">SDxCentral</A>'
SDNNFV_Menu[8]='<a class="whitelink" href="https://www.sdxcentral.com/resources/">SDxCentral Resources</A>'

SDNNFV_Menu[9]='<span class="yellowsans">ONLAB and ONRC projects</span>'
SDNNFV_Menu[10]='<a class="whitelink" href="http://opencord.org/">OpenCORD</A>'
SDNNFV_Menu[11]='<a class="whitelink" href="http://mininet.org/">Mininet portable netwk virt</A>'
SDNNFV_Menu[12]='<a class="whitelink" href="http://onosproject.org/">Open Network OS</A>'
SDNNFV_Menu[13]='<a class="whitelink" href="http://ovx.onlab.us/">OVX - OpenVirteX hypervisor</A>'
SDNNFV_Menu[14]='<a class="whitelink" href="http://xosproject.org/">XOS (incl. OpenCORD)</A>'

SDNNFV_Menu[15]='<span class="yellowsans">Linux Foundation projects</span>'
SDNNFV_Menu[16]='<a class="whitelink" href="http://openo.org">Open-O @ Linux Foundation</A>'
SDNNFV_Menu[17]='<a class="whitelink" href="https://wiki.opnfv.org/">OPNVF (Linux Foundation)</A>'
SDNNFV_Menu[18]='<a class="whitelink" href="https://www.opendaylight.org">OpenDaylight - ODL Beryllium</A>'
SDNNFV_Menu[19]='<a class="whitelink" href="http://openvswitch.org/">Open vSwitch</A>'
SDNNFV_Menu[20]='<a class="whitelink" href="http://openswitch.net/">OpenSwitch</A>'
SDNNFV_Menu[20]='<a class="whitelink" href="https://wiki.fd.io/view/Main_Page">FD.io & VPP (used by Cisco)</A>'

SDNNFV_Menu[21]='<span class="yellowsans">Other Open projects</span>'
SDNNFV_Menu[22]='<a class="whitelink" href="https://www.ovirt.org/">oVirt (Red Hat project)</A>'
SDNNFV_Menu[23]='<a class="whitelink" href="http://openbaton.github.io/">OpenBaton NFV MANO</A>'
SDNNFV_Menu[24]='<a class="whitelink" href="http://opennaas.org">OpenNaaS (i2CAT)</A>'

SDNNFV_Menu[25]='<span class="yellowsans">Container Networking</span>'
SDNNFV_Menu[26]='<a class="whitelink" href="https://github.com/tigera/canal">Canal project (Calico+Flannel)</a>'
SDNNFV_Menu[27]='<a class="whitelink" href="https://github.com/containernetworking/cni">Container Network Interface (CNI)</a>'
SDNNFV_Menu[28]='<a class="whitelink" href="https://github.com/docker/libnetwork/blob/master/docs/design.md">Container Netwk Model- libnetwork</a>' 

SDNNFV_Menu[29]='<span class="yellowsans">More Proprietary</span>'
SDNNFV_Menu[30]='<a class="whitelink" href="http://www.vmware.com/products/nsx.html#resources">VMWare NSX resources</A>'
SDNNFV_Menu[31]='<a class="whitelink" href="http://docs.openstack.org/developer/neutron/">OpenStack Neutron dev docs</A>'
SDNNFV_Menu[32]='<a class="whitelink" href="http://docs.openstack.org/security-guide/networking.html">OpenStack Networking docs</A>'
SDNNFV_Menu[33]='<a class="whitelink" href="https://github.com/openstack/neutron">OpenStack Neutron @ GitHub</A>'
SDNNFV_Menu[34]='<a class="whitelink" href="https://wiki.fd.io/view/Main_Page">FD.io & VPP (used by Cisco)</A>'
SDNNFV_Menu[35]='<a class="whitelink" href="http://www.cisco.com/c/en/us/solutions/service-provider/virtualization-automation.html">Cisco - NFV and Automation</A>'
SDNNFV_Menu[36]='<a class="whitelink" href="http://www.cisco.com/c/en/us/solutions/service-provider/network-infrastructure/index.html">Cisco - Evolved Programmable</A>'

var ComSec2_Menu=new Array()
ComSec2_Menu[0]='<span class="yellowsans">Security Tools</span>'
ComSec2_Menu[1]='<a class="whitelink" href="http://sectools.org/">SecTools.org</A>'
ComSec2_Menu[2]='<a class="whitelink" href="http://www.securitywizardry.com/index.php/products.html">Security Wizardry</A>'
ComSec2_Menu[3]='<a class="whitelink" href="http://www.securityfocus.com/tools">SecurityFocus Tools</A>'
ComSec2_Menu[4]='<a class="whitelink" href="http://www.toolwar.com/">ToolWar Infosec Tools</A>'
ComSec2_Menu[5]='<a class="whitelink" href="http://packetlife.net/armory/">PacketLife.net- Armory</A>'
ComSec2_Menu[6]='<a class="whitelink" href="http://www.toolswatch.org/">ToolsWatch.org Listing</A>'
ComSec2_Menu[7]='<a class="whitelink" href="http://seclist.us/">SecList.us Tools</A>'
ComSec2_Menu[8]='<a class="whitelink" href="http://www.kitploit.com/">KitPloit.com Tools</A>'
// ComSec2_Menu[9]='<a class="whitelink" href="http://www.firewall.cx/downloads.html">firewall.cx downloads</A>'
ComSec2_Menu[10]='<a class="whitelink" href="https://www.concise-courses.com/hacking-tools/">Concise-Courses.com List</A>'
ComSec2_Menu[11]='<a class="whitelink" href="https://www.defcon.org/html/links/dc-tools.html">DefCon Archive</a>'
ComSec2_Menu[12]='<a class="whitelink" href="https://forensics.cert.org/">CERT Forensics Repo (LiFTeR)</A>'
ComSec2_Menu[13]='<a class="whitelink" href="https://tools.kali.org/">Tools in Kali Linux</A>'
ComSec2_Menu[14]='<a class="whitelink" href="http://cyborg.ztrela.com/tools/">Tools in Cyborg Linux</A>'
ComSec2_Menu[15]='<a class="whitelink" href="https://blackarch.org/tools.html">Tools in BlackArch Linux</A>'
// CANT FIND TOOLS LIST OR RELEASE NOTES FOR BUGTRAQ-II!!!

ComSec2_Menu[16]='<a class="whitelink" href="https://sift.readthedocs.io/en/latest/user/packages.html">SANS SIFT package list</A>'
ComSec2_Menu[17]='<a class="whitelink" href="http://www.deftlinux.net/package-list/">DEFT package list</A>'



ComSec2_Menu[18]='<span class="yellowsans">Online PCAP resources</span>'
ComSec2_Menu[19]='<a class="whitelink" href="https://packettotal.com/">PacketTotal - PCAP analysis</A>'
ComSec2_Menu[20]='<a class="whitelink" href="http://pcapng.com/">Convert PcapNG to PCAP</A>'
ComSec2_Menu[21]='<a class="whitelink" href="https://www.networktotal.com/">NetworkTotal-malware scans</A>'
ComSec2_Menu[22]='<a class="whitelink" href="https://malware-traffic-analysis.net">malware-traffic-analysis.net</A>'
ComSec2_Menu[23]='<a class="whitelink" href="http://www.netresec.com/?page=PcapFiles">NETRESECs PCAP Repo List</A>'
ComSec2_Menu[24]='<a class="whitelink" href="http://www.secrepo.com/">SecRepo.com PCAPs/Logs</A>'
ComSec2_Menu[25]='<a class="whitelink" href="https://wiki.wireshark.org/SampleCaptures">WS Wiki sample PCAPs</A>'
ComSec2_Menu[26]='<a class="whitelink" href="https://www.bro.org/community/traces.html">Bro Project - Packet Traces</A>'

ComSec2_Menu[27]='<span class="yellowsans">CVE - Vulnerability Advisories</span>'
ComSec2_Menu[28]='<a class="whitelink" href="http://www.securiteam.com">SecuriTeam</A>'
ComSec2_Menu[29]='<a class="whitelink" href="http://www.securitytracker.com/">SecurityTracker</a>'
ComSec2_Menu[30]='<a class="whitelink" href="http://www.securityfocus.com/">SecurityFocus</a>'
ComSec2_Menu[31]='<a class="whitelink" href="http://www.talosintelligence.com">Cisco Talos</A>'
ComSec2_Menu[32]='<a class="whitelink" href="https://isc.sans.edu/">SANS Internet Storm Ctr</A>'
ComSec2_Menu[33]='<a class="whitelink" href="http://www.cvedetails.com/">CVE Details</A>'
ComSec2_Menu[34]='<a class="whitelink" href="https://cve.mitre.org/">Mitre.org CVE</a>' 
ComSec2_Menu[35]='<a class="whitelink" href="http://cwe.mitre.org/">Mitre.org CWE</A>'

ComSec2_Menu[36]='<a class="whitelink" href="http://nvd.nist.gov">NIST Natl Vuln DB</A>'
ComSec2_Menu[37]='<a class="whitelink" href="https://www.exploit-db.com"/>OffSecs ExploitDB</A>'
ComSec2_Menu[38]='<a class="whitelink" href="http://www.kb.cert.org/vuls/"/>CMU-CERT Vuln Notes DB</A>'

ComSec2_Menu[39]='<span class="yellowsans">Rule/ Pattern Matching Resources</span>'
ComSec2_Menu[40]='<a class="whitelink" href="https://www.snort.org/downloads/#rule-downloads">Snort Rules download</a>'
ComSec2_Menu[41]='<a class="whitelink" href="http://commons.oreilly.com/wiki/index.php/Snort_Cookbook">Snort Cookbook @ OReilly</A>'
ComSec2_Menu[42]='<span class="whitesans">Find RegEx tools in Online Tools</span>'
// 
// ComSec_Menu[0]='<span class="yellowsans">Security News</span>'
// ComSec_Menu[2]='<a class="whitelink" href="https://www.eff.org/deeplinks">EFFs Deeplinks</A>'
// ComSec_Menu[3]='<a class="whitelink" href="http://thehackernews.com/">The Hacker News</A>'
// ComSec_Menu[4]='<a class="whitelink" href="http://krebsonsecurity.com">Krebs on Security</A>'
// ComSec_Menu[5]='<a class="whitelink" href="http://www.csoonline.com">IDGs CSO Online</A>' 
// ComSec_Menu[6]='<a class="whitelink" href="http://www.darkreading.com">UBMs Dark Reading</A>'
// ComSec_Menu[7]='<a class="whitelink" href="https://threatpost.com/">Kaspersky ThreatPost</A>'
// ComSec_Menu[8]='<a class="whitelink" href="http://www.theregister.co.uk/security/">The Register- Security</A>'
// ComSec_Menu[9]='<a class="whitelink" href="http://www.networkworld.com/category/security">Network World- Security</A>'
// ComSec_Menu[10]='<a class="whitelink" href="http://arstechnica.com/security/">ArsTechnica- Risk Assessment</A>'
// ComSec_Menu[11]='<a class="whitelink" href="http://www.LinuxSecurity.com/">LinuxSecurity.com</a>'
// ComSec_Menu[12]='<a class="whitelink" href="http://www.net-security.org/">Help Net Security</a>'
// 
// ComSec_Menu[13]='<a class="whitelink" href="http://blogs.cisco.com/security/">Cisco Security blog</A>'
// ComSec_Menu[14]='<a class="whitelink" href="https://blog.malwarebytes.com/">MalwareBytes blog</A>'
// ComSec_Menu[15]='<a class="whitelink" href="http://blog.trendmicro.com/trendlabs-security-intelligence/">TrendMicro TrendLabs blog</A>'
// ComSec_Menu[16]='<a class="whitelink" href="https://www.virustotal.com/en/community/">VirusTotal Community blog</A>'
// ComSec_Menu[17]='<a class="whitelink" href="http://www.darknet.org.uk/">darknet.org.uk</A>'
// ComSec_Menu[18]='<a class="whitelink" href="http://sanesecurity.blogspot.co.uk/">Sanesecurity</A>'
// ComSec_Menu[19]='<a class="whitelink" href="http://blog.didierstevens.com/">Didier Stevens blog</A>'
// 


var ComSec_Menu=new Array()
ComSec_Menu[0]='<span class="yellowsans">Resource Sites, Conferences</span>'
ComSec_Menu[1]='<a class="whitelink" href="https://www.us-cert.gov/related-resources">US-CERT</a>'
ComSec_Menu[2]='<a class="whitelink" href="http://www.sans.org/">SANS Institute</a>'
ComSec_Menu[3]='<a class="whitelink" href="https://www.offensive-security.com/">Offensive Security</A>'
ComSec_Menu[4]='<a class="whitelink" href="http://www.defcon.org/">DefCon Security Conf</a>'
ComSec_Menu[5]='<a class="whitelink" href="http://www.blackhat.com">Blackhat Security Conf</a>'
ComSec_Menu[6]='<a class="whitelink" href="http://www.h2k2.net">H2K2 Security Conf</a>'
ComSec_Menu[7]='<a class="whitelink" href="http://www.cansecwest.com">CanSecWest Security Conf</a>'
ComSec_Menu[8]='<a class="whitelink" href="http://pacsec.jp/">PacSec Security Conf</a>'
ComSec_Menu[9]='<a class="whitelink" href="https://github.com/nixawk/pentest-wiki">nixawk PenTest Wiki</A>'
ComSec_Menu[10]='<a class="whitelink" href="https://attack.mitre.org/wiki/Main_Page">Mitre.org ATT&amp;CK wiki</A>'
ComSec_Menu[11]='<a class="whitelink" href="http://forensicswiki.org/">ForensicsWiki</A>'
ComSec_Menu[12]='<a class="whitelink" href="https://www.owasp.org">OWASP Wiki</A>'

ComSec_Menu[13]='<span class="yellowsans">Stds and Regulatory Compliance</span>'
ComSec_Menu[14]='<a class="whitelink" href="http://csrc.nist.gov/groups/SMA/fisma/library.html">NIST FISMA Library (FIPS, SP) </a>'
ComSec_Menu[15]='<a class="whitelink" href="http://www.iso.org/iso/home/standards/management-standards/iso27001.htm">ISO/IEC 27001 ISMS</A>'
ComSec_Menu[16]='<a class="whitelink" href="http://www.nerc.com/pa/Stand/Pages/CIPStandards.aspx">NERC - CIP Standards</A>'
ComSec_Menu[17]='<a class="whitelink" href="https://www.cisecurity.org/critical-controls/Library.cfm">CIS Critical Security Controls</A>'
ComSec_Menu[18]='<a class="whitelink" href="http://www.commoncriteriaportal.org/">Common Criteria Project</a>'
ComSec_Menu[19]='<a class="whitelink" href="https://www.niap-ccevs.org/Documents_and_Guidance/cc_docs.cfm?&CFID=234674743&CFTOKEN=a1286abbecbc80e1-FAF43419-F1CE-967E-90A6181F2B97C7C6">Common Criteria v3.1 Docs</A>'
ComSec_Menu[20]='<a class="whitelink" href="http://www.isaca.org/cobit/pages/default.aspx">ISACA COBIT5 Framework</A>'
ComSec_Menu[21]='<a class="whitelink" href="https://www.pcisecuritystandards.org/document_library">PCI Security Standards Council</a>'
ComSec_Menu[22]='<a class="whitelink" href="https://pcicompliance.stanford.edu/">PCI DSS at Stanford</a>'
ComSec_Menu[23]='<a class="whitelink" href="http://www.hhs.gov/hipaa/for-professionals/index.html">HIPAA at HHS.gov</A>'
ComSec_Menu[24]='<a class="whitelink" href="https://www.cms.gov/Regulations-and-Guidance/Administrative-Simplification/HIPAA-ACA/index.html">HIPAA at CMS.gov</A>'
ComSec_Menu[25]='<a class="whitelink" href="http://www.hl7.org/">HL7- Health Level Seven</A>'
ComSec_Menu[26]='<a class="whitelink" href="http://www.coso.org/guidance.htm">COSO for SOX Compliance, ERM</A>'
ComSec_Menu[27]='<a class="whitelink" href="https://gdpr-info.eu/">GDPR- EU Gen Data Protection</A>'

ComSec_Menu[28]='<a class="whitelink" href="http://www.experian.com/corporate/vendors.html">EI3PA - Experian Assessment</A>'
ComSec_Menu[29]='<a class="whitelink" href="https://www.redspin.com/it-security-blog/2011/01/understanding-the-experian-independent-third-party-assessment-ei3pa-requirements-2/">(More about EI3PA)</A>'
ComSec_Menu[30]='<a class="whitelink" href="https://cloudsecurityalliance.org/group/consensus-assessments/">CAI/CCM Assessment</A>'
ComSec_Menu[31]='<a class="whitelink" href="https://www.ssae-16.com/">SSAE-16, SSAE-18 (SOC1-3)</A>'
ComSec_Menu[32]='<a class="whitelink" href="https://www.law.cornell.edu/rules/fre">Fed Rules of Evidence (Cornell U)</A>' 
ComSec_Menu[33]='<a class="whitelink" href="https://www.law.cornell.edu/rules/frcp">Fed Rules of Civil Procedure</a>'
ComSec_Menu[34]='<a class="whitelink" href="https://www.swgde.org/documents">Sci Working Group Digit Evid</a>'





var Malware_Menu=new Array()
Malware_Menu[0]='<span class="yellowsans">Online Malware Analysis (upload)</span>'
Malware_Menu[1]='<a class="whitelink" href="https://www.virustotal.com/">VirusTotal</A>'
Malware_Menu[2]='<a class="whitelink" href="https://totalhash.cymru.com">TotalHash (Team Cymru)</A>'
Malware_Menu[3]='<a class="whitelink" href="https://www.hybrid-analysis.com/">Hybrid Analysis</A>'
Malware_Menu[4]='<a class="whitelink" href="https://malwr.com/analysis/search/">Malwr.com</A>'
Malware_Menu[5]='<a class="whitelink" href="https://www.malwareviz.com/">MalwareViz (use w/ Malwr)</a>'
Malware_Menu[6]='<a class="whitelink" href="http://sandbox.pikker.ee/">Cuckoo Sandbox</a>'
Malware_Menu[7]='<a class="whitelink" href="https://virusscan.jotti.org/">Jottis malware scan</a>'
Malware_Menu[8]='<a class="whitelink" href="http://detux.org/">Detux Sandbox (Linux-specific)</a>' 
Malware_Menu[9]='<a class="whitelink" href="https://www.joesandbox.com/">Joe Sandbox Cloud</a>'
Malware_Menu[10]='<a class="whitelink" href="https://www.vicheck.ca/">ViCheck (Office files and PDFs)</a>' 
Malware_Menu[11]='<a class="whitelink" href="http://www.systemlookup.com/">SystemLookup filename DB</A>'
Malware_Menu[12]='<a class="whitelink" href="https://zeltser.com/malware-analysis-tool-frameworks/">LZeltsers REMnux</A>'
// http://www.threatexpert.com

Malware_Menu[13]='<span class="yellowsans">Scan URLs</span>'
Malware_Menu[14]='<a class="whitelink" href="https://www.threatminer.org/">ThreatMiner Aggregator</A>'
Malware_Menu[15]='<a class="whitelink" href="https://threatcrowd.org">AlienVault ThreatCrowd</A>'
Malware_Menu[16]='<a class="whitelink" href="http://threatglass.com/">Threatglass URL scan</A>'
Malware_Menu[17]='<a class="whitelink" href="http://urlquery.net/">URLQuery malware scan</A>'
Malware_Menu[18]='<a class="whitelink" href="https://sitecheck.sucuri.net/">Securi SiteCheck</A>'
Malware_Menu[19]='<a class="whitelink" href="https://cymon.io/">Cymon.io scan</A>'
Malware_Menu[20]='<a class="whitelink" href="https://www.censys.io">Censys.io scan</A>'
// http://fortiguard.com/webfilter
// http://www.urlvoid.com/



Malware_Menu[21]='<a class="whitelink" href="https://scanme.iotdef.com/">IoTDefense Botnet Scanner</A>'
Malware_Menu[22]='<a class="whitelink" href="https://www.scanmyserver.com/">ScanMyServer</A>'
Malware_Menu[23]='<a class="whitelink" href="https://www.ssllabs.com/ssltest/">Qualys SSL Labs scan</A>'
Malware_Menu[24]='<a class="whitelink" href="https://www.qualys.com/forms/freescan/">Qualys FreeScan</A>'
Malware_Menu[25]='<a class="whitelink" href="https://www.quttera.com/">Quttera scan</A>'
Malware_Menu[26]='<a class="whitelink" href="https://www.tinfoilsecurity.com/">Tinfoil Security scan</A>'
Malware_Menu[27]='<a class="whitelink" href="https://hackercombat.com/website-malware-scanner/">HackerCombat.com scan</A>'
Malware_Menu[28]='<a class="whitelink" href="http://www.internetofficer.com/seo-tool/redirect-check/">HTTP Redirect Identifier</A>'
Malware_Menu[29]='<a class="whitelink" href="https://www.ssllabs.com/ssltest/">Qualys SSL Labs scan</A>'
Malware_Menu[30]='<a class="whitelink" href="https://www.wormly.com/test_ssl">Wormly SSL tester</A>'
Malware_Menu[31]='<a class="whitelink" href="https://sslanalyzer.comodoca.com/">Comodo SSL Analyzer</A>'
Malware_Menu[32]='<a class="whitelink" href="https://cryptoreport.websecurity.symantec.com/checker/">Symantec CryptoReport</A>'
Malware_Menu[33]='<a class="whitelink" href="https://www.digicert.com/help/">DigiCert SSL Diagnostic</A>'

Malware_Menu[34]='<span class="yellowsans">URL blocklists</span>'
Malware_Menu[35]='<a class="whitelink" href="https://www.spamhaus.org">Spamhaus Project (blocklists)</A>'
Malware_Menu[36]='<a class="whitelink" href="http://www.phishtank.com/">PhishTank tracker</A>'
Malware_Menu[37]='<a class="whitelink" href="http://multirbl.valli.org/">MultiRBL</A>'
Malware_Menu[38]='<a class="whitelink" href="https://zeltser.com/malicious-ip-blocklists/">LZeltsers List of BL sites</A>'
// http://vxvault.net/




















var Firewall_Menu=new Array()
Firewall_Menu[0]='<span class="yellowsans">Firewall</span>'
Firewall_Menu[1]='<a class="whitelink" href="http://www.netfilter.org">netfilter.org --iptables --ipset</A>'
Firewall_Menu[2]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/security/adaptive-security-appliance-asa-software/tsd-products-support-series-home.html">Cisco ASA Support main</A>'
Firewall_Menu[3]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/security/asa-5500-series-next-generation-firewalls/products-command-reference-list.html">Cisco ASA Command Refs</A>'
Firewall_Menu[4]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/security/asa-5500-series-next-generation-firewalls/products-installation-and-configuration-guides-list.html">ASA/ASDM Configuration Guides</A>'

Firewall_Menu[5]='<a class="whitelink" href="https://live.paloaltonetworks.com/">Palo Alto Networks Live</A>'
Firewall_Menu[6]='<a class="whitelink" href="http://docs.net.com/fortigate/admin-guides">Fortinet Document Library</a>'
Firewall_Menu[7]='<a class="whitelink" href="http://help.fortinet.com/cli/fos50hlp/56/index.htm">FortiOS 5.6 CLI Reference</A>'
Firewall_Menu[8]='<a class="whitelink" href="https://community.fireeye.com/">FireEye Community/ Kbase</A>'
 // https://www.youtube.com/user/SecureNetworks/playlists
 // https://www.youtube.com/user/SecureNetworks/videos
 // https://www.fortinet.com/fortidemo.htmlui.html
 
Firewall_Menu[9]='<a class="whitelink" href="https://www.pfsense.org">pfSense Main</A>'
Firewall_Menu[10]='<a class="whitelink" href="https://forum.pfsense.org/">pfSense Forum</A>'
Firewall_Menu[11]='<a class="whitelink" href="http://pfsensesetup.com/">pfSense Setup HQ</A>'

// https://support.f5.com/">f5 Support - KBase/DevCentral</A>'

Firewall_Menu[12]='<span class="yellowsans">Vulnerability Scanning/ Monitoring</span>'

Firewall_Menu[13]='<a class="whitelink" href="http://www.openvas.org/">OpenVAS</a>'
Firewall_Menu[14]='<a class="whitelink" href="https://docs.tenable.com/">Tenable - Nessus</a>'
Firewall_Menu[15]='<a class="whitelink" href="https://community.qualys.com">Qualys Community</a>'
Firewall_Menu[16]='<a class="whitelink" href="https://support.nagios.com/forum/">Nagios forums</a>'
Firewall_Menu[17]='<a class="whitelink" href="https://library.nagios.com/">Nagios Library</a>'
Firewall_Menu[18]='<a class="whitelink" href="https://exchange.nagios.org/">Nagios Exchange</A>'
Firewall_Menu[19]='<a class="whitelink" href="https://www.monitoring-plugins.org/">Monitoring-Plugins.org</A>'
Firewall_Menu[20]='<a class="whitelink" href="https://forum.centreon.com/">Centreon forums</a>'
Firewall_Menu[21]='<a class="whitelink" href="https://securityonion.net/">Security Onion</a>'


Firewall_Menu[24]='<a class="whitelink" href="https://community.rapid7.com/">Rapid7 Community</a>'
Firewall_Menu[25]='<a class="whitelink" href="https://www.alienvault.com/forums/">AlienVault forums</A>'
Firewall_Menu[26]='<a class="whitelink" href="https://www.alienvault.com/resource-center">AlienVault Resource Center</A>'
//Firewall_Menu[27]='<a class="whitelink" href="https://barncat.fidelissecurity.com/">Fidelis Barncat</A>'
Firewall_Menu[28]='<a class="whitelink" href="https://www.fidelissecurity.com/resources/">Fidelis Resources</A>'


Firewall_Menu[33]='<a class="whitelink" href="https://www-947.ibm.com/support/entry/portal/product/ibm_security/ibm_security_qradar_siem?productContext=387411221">IBM QRadar SIEM Support</a>'
Firewall_Menu[34]='<a class="whitelink" href="https://www-947.ibm.com/support/entry/portal/product/ibm_security/ibm_security_support_%28general%29">IBM Security support- general</A>'
Firewall_Menu[35]='<a class="whitelink" href="https://www.protect724.hpe.com/">HPE Protect724 Community</a>'

Firewall_Menu[36]='<span class="yellowsans">More SIEM/ Log Stuff</span>'
Firewall_Menu[37]='<a class="whitelink" href="https://splunkbase.splunk.com/">Splunkbase</A>'
Firewall_Menu[38]='<a class="whitelink" href="http://docs.splunk.com">Splunk docs</A>'
Firewall_Menu[39]='<a class="whitelink" href="https://answers.splunk.com/">Splunk> Answers</a>'
Firewall_Menu[40]='<a class="whitelink" href="https://www.elastic.co/products">Elasticsearch-Logstash-Kibana</A>'
Firewall_Menu[41]='<a class="whitelink" href="https://www.elastic.co/guide/index.html">Elastic documentation</A>'
Firewall_Menu[42]='<a class="whitelink" href="https://github.com/elastic">Elastic.co @ GitHub</A>'
Firewall_Menu[43]='<a class="whitelink" href="https://logz.io/learn/complete-guide-elk-stack/">Logz.io ELK Stack Guide</A>'
Firewall_Menu[44]='<a class="whitelink" href="http://blog.eagerelk.com/">EagerElk blog (Jurgens du Toit)</A>'
Firewall_Menu[45]='<a class="whitelink" href="https://github.com/StamusNetworks/SELKS">SELKS [Suricata+ELK+Scirius]</A>'
Firewall_Menu[46]='<a class="whitelink" href="http://docs.graylog.org/">Greylog documentation</A>'
Firewall_Menu[47]='<a class="whitelink" href="https://github.com/Graylog2">Greylog at Github</a>'

var MSStuff_Menu=new Array()
MSStuff_Menu[0]='<span class="yellowsans">Official MS Sites</span>'
MSStuff_Menu[1]='<a class="whitelink" href="https://www.microsoft.com/en-us/sitemap.aspx">Microsoft Sitemap</A>'
MSStuff_Menu[2]='<a class="whitelink" href="http://support.microsoft.com/">MS Main Support</a>'
MSStuff_Menu[3]='<a class="whitelink" href="https://answers.microsoft.com/en-us">MS Community Forums</A>'
MSStuff_Menu[4]='<a class="whitelink" href="https://blogs.technet.microsoft.com/blogms/">MS Team Blogs - Blogs</a>'
MSStuff_Menu[5]='<a class="whitelink" href="http://blogs.msmvps.com/">Microsoft MVP blogs</a>'
MSStuff_Menu[6]='<a class="whitelink" href="https://msdn.microsoft.com/en-us/">MSDN - DevNet</A>'
MSStuff_Menu[7]='<a class="whitelink" href="https://blogs.msdn.microsoft.com/">-- MSDN Blogs</a>'
MSStuff_Menu[8]='<a class="whitelink" href="https://social.msdn.microsoft.com/forums/">-- MSDN Forums</a>'
MSStuff_Menu[9]='<a class="whitelink" href="https://msdn.microsoft.com/library">-- MSDN API and Ref docs</a>'
MSStuff_Menu[10]='<a class="whitelink" href="https://technet.microsoft.com/en-us/">MS Technet</A>'
MSStuff_Menu[11]='<a class="whitelink" href="https://social.technet.microsoft.com/wiki">-- TechNet - Wiki</A>'
MSStuff_Menu[12]='<a class="whitelink" href="https://technet.microsoft.com/library/">-- TechNet - Library</A>'
MSStuff_Menu[13]='<a class="whitelink" href="https://gallery.technet.microsoft.com/">-- TechNet - Gallery</A>'
MSStuff_Menu[14]='<a class="whitelink" href="https://technet.microsoft.com/en-us/bb403698.aspx">-- TechNet - Downloads</A>'
MSStuff_Menu[15]='<a class="whitelink" href="https://technet.microsoft.com/en-us/ms772425">-- TechNet - Support Search</A>'

MSStuff_Menu[16]='<span class="yellowsans">Windows CLI References</span>'
MSStuff_Menu[17]='<a class="whitelink" href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/a-z-list">Win Server 2012-16 CLI Ref</A>'
MSStuff_Menu[18]='<a class="whitelink" href="https://technet.microsoft.com/en-us/library/cc754340.aspx">-- Alt for XP/7/8 Server 2008/12</A>' 
MSStuff_Menu[19]='<a class="whitelink" href="https://www.microsoft.com/en-us/download/details.aspx?id=2632">-- same as a CHD file?</A>'
MSStuff_Menu[20]='<a class="whitelink" href="https://geekviews.tech/a-z-windows-10-cmd-commands/">GeekViews Win 10 CLI list</A>'
MSStuff_Menu[21]='<a class="whitelink" href="https://commandwindows.com/">Vic Laurie - Windows CLI site</A>'
MSStuff_Menu[22]='<a class="whitelink" href="https://docs.microsoft.com/en-us/cli/azure/">Azure CLI 2.0 Ref Feb. 2017</a>'

MSStuff_Menu[23]='<span class="yellowsans">Azure Resources</span>'
MSStuff_Menu[24]='<a class="whitelink" href="https://azure.microsoft.com/en-us/resources/">Azure Resource Center</A>'
MSStuff_Menu[25]='<a class="whitelink" href="https://github.com/Azure">Azure at GittHub</A>'
MSStuff_Menu[26]='<a class="whitelink" href="https://azure.microsoft.com/en-us/documentation/">Microsoft Azure docs</a>'
MSStuff_Menu[27]='<a class="whitelink" href="https://azure.microsoft.com/en-us/support/forums/">Azure Forums</a>'
MSStuff_Menu[28]='<a class="whitelink" href="https://docs.microsoft.com/en-us/azure/xplat-cli-install">Azure CLI Install</A>'

MSStuff_Menu[29]='<span class="yellowsans">Unofficial MS Sites</span>'
MSStuff_Menu[30]='<a class="whitelink" href="http://www.activewin.com">ActiveWin</a>'
MSStuff_Menu[31]='<a class="whitelink" href="http://www.wininsider.com/">WinInsider</A>'
MSStuff_Menu[32]='<a class="whitelink" href="http://www.annoyances.org/">Windows Annoyances</a>'
MSStuff_Menu[33]='<a class="whitelink" href="http://www.petri.com">Petri IT Kbase</A>'

MSStuff_Menu[34]='<a class="whitelink" href="http://computerperformance.co.uk/">Guy Thomas - Computer Perf LTD</a>'
MSStuff_Menu[35]='<a class="whitelink" href="http://itproguru.com/">Dan Stolts - ITProGuru.com</A>'




var MSStuff_Menu2=new Array()
MSStuff_Menu2[0]='<span class="yellowsans">PowerShell Resources</span>'
MSStuff_Menu2[1]='<a class="whitelink" href="https://msdn.microsoft.com/powershell">MSDN PS main page</A>'
MSStuff_Menu2[2]='<a class="whitelink" href="https://technet.microsoft.com/en-us/scriptcenter">TechNet - Script Center</A>'
MSStuff_Menu2[3]='<a class="whitelink" href="https://social.technet.microsoft.com/wiki/contents/articles/24187.windows-powershell-portal.aspx">TechNet - PowerShell Portal</A>'
MSStuff_Menu2[4]='<a class="whitelink" href="https://social.technet.microsoft.com/wiki/contents/articles/183.windows-powershell-survival-guide.aspx">TechNet - PS Survival Guide</A>'
MSStuff_Menu2[5]='<a class="whitelink" href="https://social.technet.microsoft.com/wiki/contents/articles/4308.popular-powershell-modules.aspx?Sort=MostRecent&PageIndex=1">TechNet - Popular PS Modules</A>'
MSStuff_Menu2[6]='<a class="whitelink" href="https://technet.microsoft.com/library/bb978526.aspx">TechNet - PS Scripting topics/links</A>'
MSStuff_Menu2[7]='<a class="whitelink" href="https://ss64.com/ps/">S.Sheppards PS Ref</A>'
MSStuff_Menu2[8]='<a class="whitelink" href="https://powershell.org/forums/">PowerShell.org forums</A>'
MSStuff_Menu2[9]='<a class="whitelink" href="https://blogs.technet.microsoft.com/heyscriptingguy/">TechNet - Scripting Guy blog</A>' 
MSStuff_Menu2[10]='<a class="whitelink" href="https://blogs.msdn.microsoft.com/powershell/">MSDN PS blog</A>'
MSStuff_Menu2[11]='<a class="whitelink" href="http://community.idera.com/powershell/">Tobias Weltners PS blog @ Idera</A>'
MSStuff_Menu2[12]='<a class="whitelink" href="http://www.powershellmagazine.com/">PowerShell Magazine</A>'
MSStuff_Menu2[13]='<a class="whitelink" href="https://www.reddit.com/r/PowerShell/">PowerShell @ Reddit</A>'

MSStuff_Menu2[14]='<a class="whitelink" href="https://www.poshcode.org">PoShCode repo</A>'
MSStuff_Menu2[15]='<a class="whitelink" href="https://www.codeplex.com/">CodePlex (MS official repo)</A>'
MSStuff_Menu2[16]='<a class="whitelink" href="http://www.powershellgallery.com/">PowerShell Gallery (MS official)</A>'
MSStuff_Menu2[17]='<a class="whitelink" href="https://github.com/powershell">PowerShell @ GitHub (MS official)</A>' 
MSStuff_Menu2[18]='<a class="whitelink" href="https://gallery.technet.microsoft.com/">TechNet Gallery (incl non-PS)</A>'

MSStuff_Menu2[19]='<a class="whitelink" href="https://technet.microsoft.com/en-us/library/dd378937(WS.10).aspx">TechNet - AD Admin with PS</A>'
MSStuff_Menu2[20]='<a class="whitelink" href="https://technet.microsoft.com/en-us/library/jj821831.aspx">TechNet - PS SCCM Cmdlet Ref</A>'
MSStuff_Menu2[21]='<a class="whitelink" href="https://communities.vmware.com/community/vmtn/automationtools/powercli">PowerCLI API for VMware</A>'
MSStuff_Menu2[22]='<a class="whitelink" href="http://docs.aws.amazon.com/powershell/latest/reference/Index.html">AWS Tools for PowerShell</A>'

MSStuff_Menu2[23]='<span class="yellowsans">Active Directory Resources</span>'
MSStuff_Menu2[24]='<a class="whitelink" href="https://technet.microsoft.com/library/cc770946.aspx">Technet - AD Domain Svcs</a>'
MSStuff_Menu2[25]='<a class="whitelink" href="https://blogs.technet.microsoft.com/askds/">TechNet - AD-DS Team</a>'
MSStuff_Menu2[26]='<a class="whitelink" href="https://blogs.msdn.microsoft.com/edutech/">MSDN Edutech - Azure AD</A>'
MSStuff_Menu2[27]='<a class="whitelink" href="https://technet.microsoft.com/en-us/library/bb625087.aspx">Technet - Windows Server</A>'
MSStuff_Menu2[28]='<a class="whitelink" href="https://blogs.technet.microsoft.com/enterprisemobility/">TechNet - Enterprise Mobility blog</A>'

MSStuff_Menu2[29]='<a class="whitelink" href="https://www.reddit.com/r/activedirectory/">Reddit - Active Directory</a>'

MSStuff_Menu2[30]='<a class="whitelink" href="https://adsecurity.org/">Metcalfs ADSecurity.org</A>'
MSStuff_Menu2[31]='<a class="whitelink" href="https://adsecurity.org/?page_id=41"> --- Reading Library</A>'
MSStuff_Menu2[32]='<a class="whitelink" href="https://adsecurity.org/?page_id=1821"> --- Mimikats overview</A>'
MSStuff_Menu2[33]='<a class="whitelink" href="https://adsecurity.org/?page_id=399"> --- Security Resources</a>'

MSStuff_Menu2[34]='<a class="whitelink" href="https://aws.amazon.com/documentation/directory-service/">AWS DS docs</a>'
MSStuff_Menu2[35]='<a class="whitelink" href="https://aws.amazon.com/blogs/security/tag/active-directory/">AWS Sec blog - AD Fed login</A>'





var CMCICD_Menu=new Array()
CMCICD_Menu[0]='<span class="yellowsans">Puppet</span>'
CMCICD_Menu[1]='<a class="whitelink" HREF="https://docs.puppet.com/">Puppet Documentation</A>'
CMCICD_Menu[2]='<a class="whitelink" HREF="https://forge.puppetlabs.com">Puppet Forge</A>'
CMCICD_Menu[3]='<a class="whitelink" HREF="https://forgeapi.puppetlabs.com">Puppet Forge API</A>'
CMCICD_Menu[4]='<a class="whitelink" HREF="https://github.com/puppetlabs">PuppetLab at Github</A>'
CMCICD_Menu[5]='<span class="yellowsans">Chef</span>'
CMCICD_Menu[6]='<a class="whitelink" HREF="https://docs.chef.io/">Chef Documentation</A>'
CMCICD_Menu[7]='<a class="whitelink" HREF="https://supermarket.chef.io/">Chef Supermarket</A>'
CMCICD_Menu[8]='<a class="whitelink" HREF="https://downloads.chef.io/">Chef Downloads</A>'
CMCICD_Menu[9]='<a class="whitelink" HREF="https://github.com/chef">Chef at Github</A>'
CMCICD_Menu[10]='<a class="whitelink" HREF="https://learn.chef.io/">Chef Tutorials</A>'
CMCICD_Menu[11]='<span class="yellowsans">Ansible</span>'
CMCICD_Menu[12]='<a class="whitelink" HREF="http://www.ansible.com/">Ansible (main)</A>'
CMCICD_Menu[13]='<a class="whitelink" HREF="https://www.ansible.com/resources">Ansible Resources</A>'
CMCICD_Menu[14]='<a class="whitelink" HREF="http://docs.ansible.com/">Ansible Documentation</A>'
CMCICD_Menu[15]='<a class="whitelink" HREF="http://docs.ansible.com/ansible/list_of_all_modules.html">List of all modules</A>'
CMCICD_Menu[16]='<a class="whitelink" HREF="https://github.com/ansible/">Ansible at Github</A>'
CMCICD_Menu[17]='<a class="whitelink" HREF="https://github.com/jdauphant/awesome-ansible">JDauphants Ansible list</A>'

CMCICD_Menu[18]='<span class="yellowsans">SaltStack</span>'
CMCICD_Menu[19]='<a class="whitelink" HREF="https://docs.saltstack.com">Salt documentation</A>'
CMCICD_Menu[20]='<a class="whitelink" HREF="https://docs.saltstack.com/en/latest/ref/cli/">Salt CLI reference</A>'
CMCICD_Menu[21]='<a class="whitelink" HREF="https://docs.saltstack.com/en/latest/salt-modindex.html">Salt Modules</A>'
CMCICD_Menu[22]='<a class="whitelink" HREF="https://github.com/saltstack">Salt at GitHub</A>'
CMCICD_Menu[23]='<a class="whitelink" HREF="https://github.com/Lothiraldan/saltpad">SaltPad</A>'
CMCICD_Menu[24]='<a class="whitelink" HREF="https://github.com/hbokh/awesome-saltstack">Awesome SaltStack list</A>' 
CMCICD_Menu[25]='<span class="yellowsans">Jenkins</span>'
CMCICD_Menu[26]='<a class="whitelink" HREF="https://jenkins.io/">Jenkins (main)</A>'
CMCICD_Menu[27]='<a class="whitelink" HREF="https://plugins.jenkins.io/">Jenkins Plugins</A>'
CMCICD_Menu[28]='<a class="whitelink" HREF="https://wiki.jenkins-ci.org/display/JENKINS/Use+Jenkins">Jenkins wiki</A>'
CMCICD_Menu[29]='<a class="whitelink" HREF="https://jenkins.io/doc/">Jenkins documentation</A>'
CMCICD_Menu[30]='<a class="whitelink" HREF="https://jenkins.io/doc/book/managing/cli/">Jenkins CLI</A>'
CMCICD_Menu[31]='<a class="whitelink" HREF="https://www.cloudbees.com/jenkins/about">Cloudbees Jenkins Stuff</A>'

CMCICD_Menu[32]='<span class="yellowsans">Other Config Mgmt, etc</span>'
CMCICD_Menu[33]='<a class="whitelink" HREF="https://community.shavlik.com">Shavlik</A>'
CMCICD_Menu[34]='<a class="whitelink" HREF="https://octopus.com/">Octopus Deploy</A>'
CMCICD_Menu[35]='<a class="whitelink" HREF="https://access.redhat.com/products/red-hat-satellite/">Red Hat Satellite</A>'
CMCICD_Menu[36]='<a class="whitelink" HREF="https://yipee.io">Yipee.io</A>'

var Distro_DL_Menu=new Array()
Distro_DL_Menu[0]='<a class="yellowsans" href="http://distrowatch.com/">General Distros (also DistroWatch)</a>'
Distro_DL_Menu[1]='<a class="whitelink" href="http://www.freebsd.net/">FreeBSD.net</A>'
Distro_DL_Menu[2]='<a class="whitelink" href="http://www.openbsd.net/">OpenBSD.net</A>'
Distro_DL_Menu[3]='<a class="whitelink" href="https://netbsd.org/">NetBSD.org</A>' 
Distro_DL_Menu[4]='<a class="whitelink" href="http://www.puredarwin.org/">PureDarwin (fork of OSX core)</A>'
Distro_DL_Menu[5]='<a class="whitelink" href="https://getfedora.org/">Fedora (Red Hat family)</A>'
Distro_DL_Menu[6]='<a class="whitelink" href="https://www.centos.org/">CentOS (Red Hat family)</A>'
Distro_DL_Menu[7]='<a class="whitelink" href="https://www.debian.org/">Debian (prime)</A>'
Distro_DL_Menu[8]='<a class="whitelink" href="https://www.linuxmint.com/">Linux Mint (Debian/Ubuntu)</A>'
Distro_DL_Menu[9]='<a class="whitelink" href="https://www.ubuntu.com/">Ubuntu (Canonicals Debian fork)</A>'
Distro_DL_Menu[10]='<a class="whitelink" href="https://www.opensuse.org/">OpenSUSE Linux</A>'
Distro_DL_Menu[11]='<a class="whitelink" href="http://www.slackware.com/">Slackware</A>'
Distro_DL_Menu[12]='<a class="whitelink" href="https://www.archlinux.org/">Arch Linux</A>'

// 13  
Distro_DL_Menu[14]='<a class="whitelink" href="https://subgraph.com/">Subgraph (privacy distro)</A>'
Distro_DL_Menu[15]='<a class="whitelink" href="https://tails.boum.org/">TAILS (privacy distro)</A>'
Distro_DL_Menu[16]='<a class="whitelink" href="https://www.qubes-os.org/">QubesOS (privacy distro)</A>'

Distro_DL_Menu[17]='<span class="yellowsans">Security OS Distributions</span>'
Distro_DL_Menu[18]='<a class="whitelink" href="https://www.kali.org/">Kali - Pentesting</A>'
Distro_DL_Menu[19]='<a class="whitelink" href="https://backbox.org/linux">BackBox - Pentesting</A>'
Distro_DL_Menu[20]='<a class="whitelink" href="http://bugtraq-team.com/">Bugtraq II - Pentesting</A>'
Distro_DL_Menu[21]='<a class="whitelink" href="http://cyborg.ztrela.com/">Cyborg Linux - Pentesting</A>'
Distro_DL_Menu[22]='<a class="whitelink" href="https://www.parrotsec.org/">Parrot (Frozenbox+Kali)</A>'
Distro_DL_Menu[23]='<a class="whitelink" href="http://www.weaknetlabs.com/">Weakerth4n - Pentesting</a>'
Distro_DL_Menu[24]='<a class="whitelink" href="http://blackarch.org/downloads.html">BlackArch - Pentesting</A>'
Distro_DL_Menu[25]='<a class="whitelink" href="http://sourceforge.net/projects/matriux/">Matriux - Multipurpose</A>'
Distro_DL_Menu[26]='<a class="whitelink" href="https://securityonion.net/">Security Onion</a>'
Distro_DL_Menu[27]='<a class="whitelink" href="http://sourceforge.net/projects/nst/files/">Network Security Toolkit (NST)</A>'
Distro_DL_Menu[28]='<a class="whitelink" href="http://digital-forensics.sans.org/community/downloads">SANS SIFT - Forensics</a>'
Distro_DL_Menu[29]='<a class="whitelink" href="http://www.deftlinux.net/">DEFT Forensics Toolkit</a>'
Distro_DL_Menu[30]='<a class="whitelink" href="http://www.caine-live.net/">CAINE Investigative Environment</A>'
Distro_DL_Menu[31]='<a class="whitelink" href="https://www.owasp.org/index.php/OWASP_OWTF">OWASP Offensive Web Testing</A>'
Distro_DL_Menu[32]='<a class="whitelink" href="https://sourceforge.net/projects/samurai/files/">Samurai Web Testing Framework</A>'

Distro_DL_Menu[33]='<span class="yellowsans">Utility Boot Images</span>'
Distro_DL_Menu[34]='<a class="whitelink" href="http://clonezilla.org/">Clonezilla</A>'
Distro_DL_Menu[35]='<a class="whitelink" href="http://www.hirensbootcd.org/">HirensBootCD.org</A>'
Distro_DL_Menu[36]='<a class="whitelink" href="http://www.ultimatebootcd.com/">UltimateBootCD.com</A>'
Distro_DL_Menu[37]='<a class="whitelink" href="http://falconfour.com/falconfours-ultimate-boot-cd-usb-v4-6-f4ubcd/">Falcon4s UBCD</A>'
Distro_DL_Menu[38]='<a class="whitelink" href="http://www.system-rescue-cd.org/">SystemRescueCD.org</A>'
Distro_DL_Menu[39]='<a class="whitelink" href="http://trinityhome.org">Trinity Rescue Kit</A>'
Distro_DL_Menu[40]='<a class="whitelink" href="https://sourceforge.net/projects/dban/">Dariks Boot and Nuke</A>'
Distro_DL_Menu[41]='<a class="whitelink" href="http://www.supergrubdisk.org/">SuperGrub2 + Rescatux</A>'
Distro_DL_Menu[42]='<a class="whitelink" href="http://www.remastersys.org/">Linux Respin (Remastersys)</a>'
Distro_DL_Menu[43]='<a class="whitelink" href="http://www.linux-live.org/">Linux Live Kit</a>'





var Prog_Menu=new Array()
Prog_Menu[0]='<span class="yellowsans">C/C++ and Java</span>'
Prog_Menu[1]='<a class="whitelink" href="http://www.stroustrup.com/C++.html">Bjarne Stroustrups C++ Page</A>'
Prog_Menu[2]='<a class="whitelink" href="http://www.cprogramming.com/">CProgramming.com</A>'
Prog_Menu[3]='<a class="whitelink" href="http://en.cppreference.com/w/Main_Page">CPPReference.com</A>'
Prog_Menu[4]='<a class="whitelink" href="https://isocpp.org/">The C++ Foundation</A>'
Prog_Menu[5]='<a class="whitelink" href="http://www.cplusplus.com/">cplusplus.com</A>'
Prog_Menu[6]='<a class="whitelink" href="http://www.learncpp.com/">LearnCpp.com</A>'
Prog_Menu[7]='<a class="whitelink" href="http://www.mindviewinc.com">Eckel- Thinking in C++/Java</A>'
Prog_Menu[8]='<a class="whitelink" href="https://community.oracle.com/community/java">Oracles Java Community</A>'
Prog_Menu[9]='<a class="whitelink" href="http://www.oracle.com/technetwork/java/index.html">Oracle TechNetwork - Java</A>'
Prog_Menu[10]='<a class="whitelink" href="https://www.javacodegeeks.com/">JavaCodeGeeks.com</a>'

// http://docs.oracle.com/javase/8/docs/api/index.html">Java SE8 Spec APIs</A>'
// https://docs.oracle.com/javaee/7/api/toc.htm">Java EE7 Spec APIs</a>'
// http://docs.oracle.com/javadb/10.10.1.2/javadoc/jdbc4/index.html">JavaDB/Derby 10.10 API</A>'

// https://www.tiobe.com/tiobe-index/


// https://golang.org/
// https://go.googlesource.com/go
// https://groups.google.com/group/golang-nuts 
// https://github.com/golang/go/wiki



Prog_Menu[11]='<span class="yellowsans">Python Specific</span>'
Prog_Menu[12]='<a class="whitelink" href="https://www.python.org/">Python.org</A>'
Prog_Menu[13]='<a class="whitelink" href="https://docs.python.org/">Docs.Python.org</A>'
Prog_Menu[14]='<a class="whitelink" href="https://pypi.python.org">PyPI- Python Package Idx</A>'
Prog_Menu[15]='<a class="whitelink" href="http://planetpython.org/">PlanetPython</A>'
Prog_Menu[16]='<a class="whitelink" href="http://www.diveintopython3.net/">Dive Into Python 3</A>'
Prog_Menu[17]='<a class="whitelink" href="http://docs.python-guide.org">Hitchhikers Guide to Python</A>'
Prog_Menu[18]='<a class="whitelink" href="http://python-forensics.org/">Python Forensics</A>'
Prog_Menu[19]='<a class="whitelink" href="http://awesome-python.com/">Awesome Python</A>'
Prog_Menu[20]='<a class="whitelink" href="http://www.scipy.org/">Scientific Python</A>'
Prog_Menu[21]='<a class="whitelink" href="https://pythontips.com/python-resources/">PythonTips.com resource list</a>'
Prog_Menu[22]='<a class="whitelink" href="https://www.fullstackpython.com/best-python-resources.html">FullStackPython.com list</A>'

Prog_Menu[23]='<span class="yellowsans">Ruby Specific</span>'
Prog_Menu[24]='<a class="whitelink" href="https://www.ruby-lang.org/Ruby-Lang.org</A>'
Prog_Menu[25]='<a class="whitelink" href="http://www.rubygems.org/">RubyGems.org</a>'
Prog_Menu[26]='<a class="whitelink" href="http://ruby-doc.org/">Ruby-Doc.org</a>'
Prog_Menu[27]='<a class="whitelink" href="https://www.ruby-toolbox.com/">The Ruby Toolbox</a>'
Prog_Menu[28]='<a class="whitelink" href="http://www.rubyonrails.org/">Rubyonrails.org w/ API</A>'
Prog_Menu[29]='<a class="whitelink" href="http://learnrubythehardway.org/book/">Ruby the Hard Way</A>'
Prog_Menu[30]='<a class="whitelink" href="http:/www.railstutorial.org/">Ruby on Rails Tutorial- Hartl</A>'
Prog_Menu[31]='<a class="whitelink" href="http://railscasts.com/">RailCasts.com - screencasts</A>'
Prog_Menu[32]='<a class="whitelink" href="https://gorails.com/">GoRails.com - screencasts</A>'

Prog_Menu[33]='<span class="yellowsans">General Programming</span>'
Prog_Menu[34]='<a class="whitelink" href="http://perldoc.perl.org/">PerlDoc</A>'
Prog_Menu[35]='<a class="whitelink" href="http://www.rosettacode.org/">Rosetta Code</A>'
Prog_Menu[36]='<a class="whitelink" href="http://stackexchange.com/sites#">StackExchange Site Map</A>'
Prog_Menu[37]='<a class="whitelink" href="http://stackoverflow.com/">StackOverflow.com</A>'
Prog_Menu[40]='<a class="whitelink" href="http://www.developershed.com/">Developer Shed</a>'
Prog_Menu[41]='<a class="whitelink" href="https://dzone.com/portals">DZone areas (includes Java)</A>'
Prog_Menu[42]='<a class="whitelink" href="https://console.developers.google.com/apis/library">Google Developer APIs</a>'


var Game_Menu=new Array()
Game_Menu[0]='<span class="yellowsans">Gaming and Arcade Emulation</span>'
Game_Menu[1]='<a class="whitelink" href="http://www.mame.net">Multiple Arcade Machine Emulator</a>'
Game_Menu[2]='<a class="whitelink" href="http://attractmode.org">Attract-Mode MAME frontend</A>'
Game_Menu[3]='<a class="whitelink" href="https://qmc2.batcom-it.net/">QMC2 [Q.MAME.CAT.II]</a>'
// Game_Menu[4]='<a class="whitelink" href="http://mameosx.sourceforge.net/">MAME OS X</A>'
Game_Menu[5]='<a class="whitelink" href="http://www.openemu.org/">OpenEmu (OSX)</A>'
Game_Menu[6]='<a class="whitelink" href="http://www.retroarch.com/">RetroArch/ Libretro</A>'

Game_Menu[7]='<span class="yellowsans">Historical Info</span>'
Game_Menu[8]='<a class="whitelink" href="http://www.theoldcomputer.com/MainMenu.htm">TheOldComputer.com</a>'
Game_Menu[9]='<a class="whitelink" href="http://www.atarimuseum.com/">Atari History Museum</a>'
Game_Menu[10]='<a class="whitelink" href="http://www.ipdb.org/">Internet Pinball Machine DB</A>'
Game_Menu[11]='<a class="whitelink" href="http://www.arcade-museum.com">Intl Arcade Museum</A>'
Game_Menu[12]='<a class="whitelink" href="https://www.arcade-history.com/">Arcade-History.com</A>'
Game_Menu[13]='<a class="whitelink" href="https://en.wikipedia.org/wiki/List_of_arcade_video_games">Wikipedia Arcade list</A>'
Game_Menu[14]='<a class="whitelink" href="https://archive.org/details/messmame">Internet Archive ROMSets</a>'
Game_Menu[15]='<a class="whitelink" href="https://archive.org/details/softwarelibrary">Internet Archive Old PC Software</a>'
// ---------------------------------------------------------------------------


var KaliNetRecon_Menu=new Array()
KaliNetRecon_Menu[0]='<span class="yellowsans">Information Gathering</span>'
KaliNetRecon_Menu[1]='<A class="whitelink" HREF="http://mor-pah.net/software/dmitry-deepmagic-information-gathering-tool/">DMitry [DeepMagic Info Gathering Tool]</A>'
KaliNetRecon_Menu[2]='<A class="whitelink" HREF="https://github.com/laramies/theHarvester">theHarvester [multi-source recon tool]</A>'
KaliNetRecon_Menu[3]='<A class="whitelink" HREF="http://www.tekdefense.com/automater/">Automater [URL/IP addr multi-lookup]</A>'
KaliNetRecon_Menu[4]='<A class="whitelink" HREF="https://bitbucket.org/LaNMaSteR53/recon-ng">Recon-ng recon framework</A>'
KaliNetRecon_Menu[5]='<A class="whitelink" HREF="https://sparta.secforce.com/">Sparta recon frontend</A>'
// <BR><A class="whitelink12" HREF="https://github.com/golismero/golismero">GoLismero - The Web Knife</A>'

KaliNetRecon_Menu[6]='<span class="yellowsans">DNS Analysis</span>'
KaliNetRecon_Menu[7]='<A class="whitelink" HREF="https://github.com/fwaeytens/dnsenum">DNSEnum</A>'
KaliNetRecon_Menu[8]='<A class="whitelink" HREF="http://code.google.com/p/dnsmap/">DNSMap</A>'
KaliNetRecon_Menu[9]='<A class="whitelink" HREF="https://github.com/darkoperator/dnsrecon">DNSRecon</A>'
KaliNetRecon_Menu[10]='<A class="whitelink" HREF="http://freshmeat.net/projects/dnstracer">DNSTracer</A>'
KaliNetRecon_Menu[11]='<A class="whitelink" HREF="https://sourceforge.net/projects/dnswalk/">DNSWalk</A>'
KaliNetRecon_Menu[12]='<A class="whitelink" HREF="https://github.com/mschwager/fierce">Fierce [find non-contig IP space]</A>'

KaliNetRecon_Menu[13]='<span class="yellowsans">IDS/IPS Identification</span>'
KaliNetRecon_Menu[14]='<A class="whitelink" HREF="http://www.monkey.org/~dugsong/fragroute/">Fragroute - Fragtest</A>'
KaliNetRecon_Menu[15]='<A class="whitelink" HREF="http://www.anzen.com/research/nidsbench/fragrouter.html">Fragrouter [IDS evasion toolkit]</A>'
KaliNetRecon_Menu[16]='<A class="whitelink" HREF="http://inversepath.com/ftester.html">FTest [Firewall Tester]</A>'
KaliNetRecon_Menu[17]='<A class="whitelink" HREF="https://github.com/EnableSecurity/wafw00f">WAFw00f - [WAF detection tool]</A>'
KaliNetRecon_Menu[18]='<A class="whitelink" HREF="https://github.com/craig/ge.mine.nu/tree/master/lbd">LBD [load balancer detection]</A>'

KaliNetRecon_Menu[19]='<span class="yellowsans">Host ID/ Network/ Port Scanners</span>'
KaliNetRecon_Menu[20]='<A class="whitelink" HREF="https://nmap.org/download.html">Nmap-Zenmap-Ncat-Nping</A>'
KaliNetRecon_Menu[21]='<A class="whitelink" HREF="https://sourceforge.net/p/dnmap/wiki/Home/">DNmap [Distributed NMap]</A>'
KaliNetRecon_Menu[22]='<A class="whitelink" HREF="http://www.hping.org/">Hping [packet assembler/analyzer]</A>'
KaliNetRecon_Menu[23]='<A class="whitelink" HREF="https://github.com/dneufeld/unicornscan">UnicornScan [asynchronous scans]</A>'
KaliNetRecon_Menu[24]='<A class="whitelink" HREF="https://github.com/robertdavidgraham/masscan">Masscan [mass IP port scanner]</A>'
KaliNetRecon_Menu[25]='<A class="whitelink" HREF="https://github.com/offensive-security/masscan-web-ui">Masscan GUI</A>'
KaliNetRecon_Menu[26]='<A class="whitelink" HREF="http://knocker.sourceforge.net/">knocker [TCP port scanner]</A>'
KaliNetRecon_Menu[27]='<A class="whitelink" HREF="https://sourceforge.net/p/netdiscover/wiki/Home/">NetDiscover [ARP scanner]</A>'
KaliNetRecon_Menu[28]='<A class="whitelink" HREF="http://www.nta-monitor.com/wiki/index.php/Arp-scan_Installation_Guide">arp-scan [lots of L2 options]</A>'
KaliNetRecon_Menu[29]='<A class="whitelink" HREF="https://www.joedog.org/dick-manual/">Dick [port scanner]</A>'
KaliNetRecon_Menu[30]='<A class="whitelink" HREF="http://fping.org/">Fping [pinging multiple hosts]</A>'
KaliNetRecon_Menu[31]='<A class="whitelink" HREF="https://sourceforge.net/projects/xprobe/">Xprobe2 [fingerprint remote TCP/IP]</A>'
KaliNetRecon_Menu[32]='<A class="whitelink" HREF="http://lcamtuf.coredump.cx/p0f3/">pOf [passive OS fingerprint]</A>'
KaliNetRecon_Menu[33]='<A class="whitelink" HREF="https://github.com/iputils/iputils">iputils package [arping, tracepath, etc]</A>'
KaliNetRecon_Menu[34]='<A class="whitelink" HREF="https://github.com/ThomasHabets/arping">Arping [Habets version]</A>'
 
KaliNetRecon_Menu[35]='<A class="whitelink" HREF="http://www.unixwiz.net/tools/nbtscan.html">nbtscan [NETBIOS scanner]</A>'
KaliNetRecon_Menu[36]='<A class="whitelink" HREF="http://github.com/Zapotek/cdpsnarf">CDPSnarf [get CDP info]</A>'
KaliNetRecon_Menu[37]='<A class="whitelink" HREF="http://code.google.com/p/mirandaupnptool/">Miranda [for UPnP]</A>'
KaliNetRecon_Menu[38]='<A class="whitelink" HREF="https://code.google.com/p/wol-e/">WOL-E [wake-on-LAN tools]</A>'
KaliNetRecon_Menu[39]='<A class="whitelink" HREF="https://github.com/vanhauser-thc/thc-ipv6">THC IPv6 attack toolkit</A>'

KaliNetRecon_Menu[40]='<span class="yellowsans">Route Analysis</span>'
KaliNetRecon_Menu[41]='<A class="whitelink" HREF="http://www.yersinia.net/">Yersinia [L2/L3 protocol analyser]</A>'
KaliNetRecon_Menu[42]='<A class="whitelink" HREF="http://www.phenoelit.org/irpas/docu.html">IRPA Suite</A>'
KaliNetRecon_Menu[43]='<A class="whitelink" HREF="http://lcamtuf.coredump.cx/">0trace [an enhanced traceroute]</A>'
KaliNetRecon_Menu[44]='<A class="whitelink" HREF="http://pwhois.org/lft/">LFT ["all-in-one" Layer 4 Traceroute]</A>'
KaliNetRecon_Menu[45]='<A class="whitelink" HREF="https://code.google.com/p/intrace/wiki/intrace">intrace [TCP-based traceroute]</A>'
KaliNetRecon_Menu[46]='<A class="whitelink" HREF="https://github.com/mct/tcptraceroute">tcptraceroute [the original]</A>'
KaliNetRecon_Menu[47]='<A class="whitelink" HREF="https://github.com/tlby/netmask">netmask [formatting tool]</A>'
KaliNetRecon_Menu[48]='<A class="whitelink" HREF="http://www.hackingciscoexposed.com/?link=tools">Cisco Torch</A>'



var KaliNetSniff_Menu=new Array()
KaliNetSniff_Menu[0]='<span class="yellowsans">Network Sniffers</span>'
KaliNetSniff_Menu[1]='<A class="whitelink" HREF="https://www.wireshark.org/">Wireshark</A>'
KaliNetSniff_Menu[2]='<A class="whitelink" HREF="https://www.ettercap-project.org/">Ettercap</A>'
KaliNetSniff_Menu[3]='<A class="whitelink" HREF="https://unix4lyfe.org/darkstat/">darkstat [graphical network stats]</A>'
KaliNetSniff_Menu[4]='<A class="whitelink" HREF="http://www.ntop.org/">ntop-ng [graphic-enhanced ntop]</A>'
KaliNetSniff_Menu[5]='<A class="whitelink" HREF="http://etherape.sourceforge.net/">EtherApe [graphical network monitor]</A>'
KaliNetSniff_Menu[6]='<A class="whitelink" HREF="https://github.com/bchretien/tcptrack">tcptrack [some stats on live streams]</A>'
// KaliNetSniff_Menu[7]='<A class="whitelink" HREF="https://www.frenchfries.net/paul/tcpstat/">tcpstat [live stats or from tcpdump]</A>'
KaliNetSniff_Menu[8]='<A class="whitelink" HREF="http://www.tcptrace.org/">tcptrace [graphical tcpdump analysis]</A>'

KaliNetSniff_Menu[9]='<A class="whitelink" HREF="https://www.monkey.org/~dugsong/dsniff/">dsniff suite</A>'
KaliNetSniff_Menu[10]='<A class="whitelink" HREF="http://netsniff-ng.org/">netsniff-ng suite</A>'
KaliNetSniff_Menu[11]='<A class="whitelink" HREF="http://hexinject.sourceforge.net/">HexInject [packet injector and sniffer]</A>'
KaliNetSniff_Menu[12]='<A class="whitelink" HREF="https://pypi.org/project/netgrep/">netgrep [scan frames for IP, ASN, county code]</A>'
KaliNetSniff_Menu[13]='<A class="whitelink" HREF="https://github.com/jpr5/ngrep/">ngrep [more grep-like/versatile than netgrep]</A>'
KaliNetSniff_Menu[14]='<A class="whitelink" HREF="https://monkey.org/~jose/software/flowgrep/">flowgrep [sniff traffic flow]</A>'
KaliNetSniff_Menu[15]='<A class="whitelink" HREF="https://jon.oberheide.org/pynids/">pynids [NIDS, sniff traffic flow]</A>'
KaliNetSniff_Menu[16]='<A class="whitelink" HREF="http://tcpxtract.sourceforge.net/">tcpxtract [extract files from live traffic]</A>'
KaliNetSniff_Menu[17]='<A class="whitelink" HREF="http://silicone.homelinux.org/git/netsed.git/">netsed [realtime packet read/alter]</A>'
KaliNetSniff_Menu[18]='<A class="whitelink" HREF="https://github.com/phaag/nfdump">nfdump [collect and process netflow]</A>'
KaliNetSniff_Menu[19]='<A class="whitelink" HREF="https://github.com/simsong/tcpflow">TCPFlow [grab/store PCAPs by flow]</A>'
// KaliNetSniff_Menu[20]='<A class="whitelink" HREF="https://github.com/deiv/driftnet">Driftnet [browse gif/jpgs in traffic]</A>'
// KaliNetSniff_Menu[21]='<A class="whitelink" HREF="https://github.com/sam-github/libnet">libnet tools API [low-level packet construction]</A>'

KaliNetSniff_Menu[22]='<span class="yellowsans">Spoofing and MITM</span>'
KaliNetSniff_Menu[23]='<A class="whitelink" HREF="https://sourceforge.net/projects/ntwox/">netwox/netwag toolbox [network multitool]</A>'
KaliNetSniff_Menu[24]='<A class="whitelink" HREF="http://thesprawl.org/projects/dnschef/">DNSChef [DNS proxy/MitM]</A>'
KaliNetSniff_Menu[25]='<A class="whitelink" HREF="https://www.roe.ch/FakeIKEd">fiked (FakeIKEd)</A>'
KaliNetSniff_Menu[26]='<A class="whitelink" HREF="https://code.google.com/archive/p/rebind/">Rebind [DNS proxy/MitM]</A>'
KaliNetSniff_Menu[27]='<A class="whitelink" HREF="https://github.com/SpiderLabs/Responder">Responder [LLMNR/NBT-NS/mDNS Poisoner]</A>'
KaliNetSniff_Menu[28]='<A class="whitelink" HREF="https://github.com/vecna/sniffjoke">Sniffjoke [transparent TCP scrambler]</A>'
KaliNetSniff_Menu[29]='<A class="whitelink" HREF="https://mitmproxy.org/">mitmproxy [HTTPS proxy]</A>'
KaliNetSniff_Menu[30]='<A class="whitelink" HREF="https://www.roe.ch/SSLsplit">SSLSplit [transparent SSL/TLS intercept]</A>'
KaliNetSniff_Menu[31]='<A class="whitelink" HREF="https://moxie.org/software/sslstrip/">sslstrip [HTTP hijack]</A>'
KaliNetSniff_Menu[32]='<A class="whitelink" HREF="http://tcpreplay.appneta.com/">TCPReplay [PCAP editing/replaying]</A>'
KaliNetSniff_Menu[33]='<A class="whitelink" HREF="https://github.com/alobbs/macchanger">MACChanger</A>'
KaliNetSniff_Menu[34]='<A class="whitelink" HREF="https://github.com/robertdavidgraham/hamster">Hamster [cookie sidejacking]</A>'
KaliNetSniff_Menu[35]='<A class="whitelink" HREF="https://github.com/bonsaiviking/NfSpy">NFSpy [spoof NFS client IDs]</A>'

KaliNetSniff_Menu[36]='<span class="yellowsans">Tunneling</span>'
// KaliNetSniff_Menu[37]='<A class="whitelink" HREF="http://nc110.sourceforge.net/">netcat</A>'
KaliNetSniff_Menu[38]='<A class="whitelink" HREF="http://cryptcat.sourceforge.net/">Cryptcat [netcat + twofish]</A>'
KaliNetSniff_Menu[39]='<A class="whitelink" HREF="http://www.dest-unreach.org/socat/index.html">socat [aka netcat++]</A>'
KaliNetSniff_Menu[40]='<A class="whitelink" HREF="http://dns2tcp.sourcearchive.com/">dns2tcpc</A>'
KaliNetSniff_Menu[41]='<A class="whitelink" HREF="https://code.kryo.se/iodine/">Iodine [IPv4 over DNS]</A>'
KaliNetSniff_Menu[42]='<A class="whitelink" HREF="http://proxychains.sourceforge.net/">ProxyChains [versiatile proxy/tunneling]</A>'
KaliNetSniff_Menu[43]='<A class="whitelink" HREF="http://proxytunnel.sourceforge.net/">ProxyTunnel [HTTPS and SSH]</A>'
KaliNetSniff_Menu[44]='<A class="whitelink" HREF="http://www.cs.uit.no/%7Edaniels/PingTunnel/">ptunnel (PingTunnel)</A>'
KaliNetSniff_Menu[45]='<A class="whitelink" HREF="https://samy.pl/pwnat/">pwnat [NAT traversal/ UDP tunnel]</A>'
KaliNetSniff_Menu[46]='<A class="whitelink" HREF="https://github.com/yrutschle/sslh">sslh  [HTTPS and SSH]</A>'
KaliNetSniff_Menu[47]='<A class="whitelink" HREF="https://www.stunnel.org/">Stunnel [TLS/SSL]</A>'
KaliNetSniff_Menu[48]='<A class="whitelink" HREF="https://github.com/epinna/Stegosip">StegoSIP TCP tunnel over RTP/SIP</A>'
KaliNetSniff_Menu[49]='<A class="whitelink" HREF="https://code.google.com/archive/p/udptunnel/">udptunnel</A>'
KaliNetSniff_Menu[50]='<A class="whitelink" HREF="https://github.com/wangyu-/udp2raw-tunnel">Udp2raw-tunnel</A>'

// To add, sometime, from Fuzzers
// <BR><A class="whitelink12" HREF="https://github.com/kamorin/DHCPig">DHCPig [DHCP exhaustion]</A>'
// <BR><A class="whitelink12" HREF="https://sourceforge.net/projects/t50/">T50 [packet injector/ stress tool]</A>'
// <BR><A class="whitelink12" HREF="https://code.google.com/archive/p/tcpjunk/">TCPJunk [TCP testing/hacking]</A>'
// <BR><A class="whitelink12" HREF="http://git.kali.org/gitweb/?p=packages/bed.git">bed [network protocol fuzzer]</A>'




var KaliWebAppSec_Menu=new Array()
KaliWebAppSec_Menu[0]='<span class="yellowsans">Web App Vulnerability Scan/Analysis</span>'
KaliWebAppSec_Menu[1]='<A class="whitelink" HREF="https://portswigger.net/">PortSwigger - Burp Suite</A>'
KaliWebAppSec_Menu[2]='<A class="whitelink" HREF="https://portswigger.net/bappstore">PortSwigger - BApp Store</A>'
KaliWebAppSec_Menu[3]='<A class="whitelink" HREF="https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project">OWASP ZAProxy</A>'
KaliWebAppSec_Menu[4]='<A class="whitelink" HREF="https://www.owasp.org/index.php/OWASP_OWTF">OWASP OWTF</A>'
KaliWebAppSec_Menu[5]='<A class="whitelink" HREF="https://www.owasp.org/index.php/OWASP_Web_Testing_Environment_Project">OWASP WTE</A>'
KaliWebAppSec_Menu[6]='<A class="whitelink" HREF="http://w3af.sourceforge.net/">w3af Web App Attack/Audit Framework</A>'
KaliWebAppSec_Menu[7]='<A class="whitelink" HREF="https://cirt.net/nikto2">Nikto [noisy webapp scanner]</A>'
KaliWebAppSec_Menu[8]='<A class="whitelink" HREF="https://github.com/stasinopoulos/commix">CommIX (COMM)and (I)njection e(X)ploiter</A>'
KaliWebAppSec_Menu[9]='<A class="whitelink" HREF="http://beefproject.com/">BeEF project</A>'
KaliWebAppSec_Menu[10]='<A class="whitelink" HREF="https://github.com/rajrakeshdr/inguma">Inguma/Ginguma</A>'

KaliWebAppSec_Menu[11]='<A class="whitelink" HREF="http://www.parosproxy.org">Paros proxy</A>'
KaliWebAppSec_Menu[12]='<A class="whitelink" HREF="https://code.google.com/archive/p/proxystrike/">ProxyStrike</A>'
KaliWebAppSec_Menu[13]='<A class="whitelink" HREF="http://wapiti.sourceforge.net/">Wapiti [web app vuln scanner]</A>'
KaliWebAppSec_Menu[14]='<A class="whitelink" HREF="http://code.google.com/p/skipfish/">skipfish [web app auditor]</A>'
KaliWebAppSec_Menu[15]='<A class="whitelink" HREF="https://github.com/hatRiot/clusterd">clusterd [app server attack toolkit]</A>'
KaliWebAppSec_Menu[16]='<A class="whitelink" HREF="https://xsser.03c8.net/">Cross Site Scripter (XSSer)</A>'
KaliWebAppSec_Menu[17]='<A class="whitelink" HREF="http://sourceforge.net/projects/uniscan/">UniScan - RFI, LFI, RCE scanner</A>'
KaliWebAppSec_Menu[18]='<A class="whitelink" HREF="http://blindelephant.sourceforge.net/">BlindElephant [web app fingerprinter]</A>'
KaliWebAppSec_Menu[19]='<A class="whitelink" HREF="https://github.com/rezasp/joomscan">OWASP JoomScan</A>'
KaliWebAppSec_Menu[20]='<A class="whitelink" HREF="https://github.com/SpiderLabs/jboss-autopwn">JBoss Autopwn</A>'
KaliWebAppSec_Menu[21]='<A class="whitelink" HREF="http://wpscan.org/">WPscan</A>'
KaliWebAppSec_Menu[22]='<A class="whitelink" HREF="https://code.google.com/archive/p/plecost/">Plecost [Wordpress fingerprinting]</A>'
KaliWebAppSec_Menu[23]='<A class="whitelink" HREF="http://git.kali.org/gitweb/?p=packages/apache-users.git">apache-users [enumerate httpd users]</A>'

KaliWebAppSec_Menu[24]='<A class="whitelink" HREF="https://code.google.com/p/ua-tester/">UAtester [User Agent]</A>'
KaliWebAppSec_Menu[25]='<A class="whitelink" HREF="https://github.com/xmendez/wfuzz">Wfuzz [web app fuzzer]</A>'
KaliWebAppSec_Menu[26]='<A class="whitelink" HREF="https://web.archive.org/web/20170918105926/http://www.webdav.org/cadaver/">caDAVer [WebDAV client]</A>'
KaliWebAppSec_Menu[27]='<A class="whitelink" HREF="https://code.google.com/p/davtest/">DAVTest [WebDAV exploit tester]</A>'
KaliWebAppSec_Menu[28]='<A class="whitelink" HREF="https://github.com/SpiderLabs/deblaze">Deblaze [exploit ActionScript remoting]</A>'
KaliWebAppSec_Menu[29]='<A class="whitelink" HREF="https://tha-imax.de/git/root/fimap">fimap [LFI/RFI vulnerabilities]</A>'
KaliWebAppSec_Menu[30]='<A class="whitelink" HREF="https://www.joedog.org/siege-manual/">Siege [http load testing/benchmk]</A>'
KaliWebAppSec_Menu[31]='<A class="whitelink" HREF="http://www.powerfuzzer.com/">Powerfuzzer [http fuzzing]</A>'
KaliWebAppSec_Menu[32]='<A class="whitelink" HREF="https://sourceforge.net/projects/dirb/">dirb [URL bruteforcer/scanner]</A>'
KaliWebAppSec_Menu[33]='<A class="whitelink" HREF="https://sourceforge.net/projects/dirbuster/">DirBuster [URL bruteforcer/scanner]</A>'
KaliWebAppSec_Menu[34]='<A class="whitelink" HREF="https://github.com/urbanadventurer/whatweb">WhatWeb [website enumeration/inventory]</A>'
KaliWebAppSec_Menu[35]='<A class="whitelink" HREF="https://www.httrack.com">HTtrack [website downloader]</A>'

KaliWebAppSec_Menu[36]='<span class="yellowsans">DB Assessment</span>'
KaliWebAppSec_Menu[38]='<A class="whitelink" HREF="http://sqlninja.sourceforge.net/">SQL_Ninja [generally for MS SQL]</A>'
KaliWebAppSec_Menu[39]='<A class="whitelink" HREF="http://sqlsus.sourceforge.net/">SQLsus [MySQL console oriented]</A>'
KaliWebAppSec_Menu[40]='<A class="whitelink" HREF="https://github.com/Neohapsis/bbqsql/">BBQSQL [blind SQL injection framework]</A>'
KaliWebAppSec_Menu[41]='<A class="whitelink" HREF="https://code.google.com/p/hexorbase/">HexorBase</A>'
KaliWebAppSec_Menu[42]='<A class="whitelink" HREF="https://github.com/ron190/jsql-injection">jSQL [automatic SQL injection]</A>'
KaliWebAppSec_Menu[43]='<A class="whitelink" HREF="http://mdbtools.sourceforge.net/">MDB Tools [relating to Microsoft Access]</A>'
KaliWebAppSec_Menu[44]='<A class="whitelink" HREF="http://www.cqure.net/wp/tools/database/oscanner/">OScanner [for Oracle]</A>'
KaliWebAppSec_Menu[45]='<A class="whitelink" HREF="http://www.cqure.net/wp/tools/database/sidguesser/">SID Guesser [for Oracle]</A>'
KaliWebAppSec_Menu[46]='<A class="whitelink" HREF="https://github.com/GDSSecurity/PadBuster">PadBuster [padding Oracle attacks]</A>'
KaliWebAppSec_Menu[47]='<A class="whitelink" HREF="http://ntsecurity.nu/toolbox/sqldict/">SQLDict [MS SQL dict attack]</A>'
KaliWebAppSec_Menu[48]='<A class="whitelink" HREF="http://www.red-database-security.com/scripts/oracle_security_scripts.html">tnscmd10g [Red-DB-Sec Oracle stuff]</A>'


var KaliForensics_Menu=new Array()
KaliForensics_Menu[0]='<span class="yellowsans">Forensics I - DEFT and SIFT</span>'
KaliForensics_Menu[1]='<A class="whitelink" HREF="http://www.sleuthkit.org/index.php">Autopsy - The Sleuth Kit</A>'
KaliForensics_Menu[2]='<A class="whitelink" HREF="https://github.com/py4n6/pytsk">pytsk3 [Python bindings for The Sleuth Kit] </A>'
KaliForensics_Menu[3]='<A class="whitelink" HREF="https://github.com/arxsys">DFF [Digital Forensics Framework] </A>'
KaliForensics_Menu[4]='<A class="whitelink" HREF="https://sourceforge.net/projects/odessa/files/">ODESSA Suite (Galleta, rifiuti2, pasco)</A>'
//Ê
KaliForensics_Menu[5]='<A class="whitelink" HREF="https://github.com/simsong/bulk_extractor/">bulk_extractor [scan image, extract info]</A>'

KaliForensics_Menu[6]='<span class="yellowsans">Volatile Memory Analysis</span>'
KaliForensics_Menu[7]='<A class="whitelink" HREF="http://www.volatilityfoundation.org/">Volatility Framework</A>'
KaliForensics_Menu[8]='<A class="whitelink" HREF="https://github.com/n0fate/volafox">volafox - MacOSX Memory Analysis Toolkit</A>' 
KaliForensics_Menu[9]='<A class="whitelink" HREF="http://www.jeffbryner.com/code/pdgmail">pd-gmail [find Gmail in pd process RAM dump]</A>'
KaliForensics_Menu[10]='<A class="whitelink" HREF="http://jeffbryner.com/pdfbook">pd-fbook [find FaceBook in RAM dump]</A>'
KaliForensics_Menu[11]='<A class="whitelink" HREF="https://citp.princeton.edu/memory-content/src/bios_memimage-1.2.tar.gz">bios_memimage [USB/PXE imaging tools]</A>'
KaliForensics_Menu[12]='<A class="whitelink" HREF="https://citp.princeton.edu/memory-content/src/efi_memimage-1.0.tar.gz">efi_memimage [EFI Netboot imaging tools]</A>'

KaliForensics_Menu[13]='<span class="yellowsans">Disk Image/Format/Recovery Tools</span>'
KaliForensics_Menu[14]='<A class="whitelink" HREF="http://guymager.sourceforge.net/">Guymanger [forensic disk imager]</A>'
KaliForensics_Menu[15]='<A class="whitelink" HREF="https://github.com/sshock/AFFLIBv3">AFFLib Tools [for Advanced Forensics Format]</A>'
KaliForensics_Menu[16]='<A class="whitelink" HREF="https://sourceforge.net/projects/dc3dd/">dc3dd - enhanced dd - more updated</A>'
KaliForensics_Menu[17]='<A class="whitelink" HREF="http://dcfldd.sourceforge.net/">dcfldd - enhanced dd - based on old dd</A>'
KaliForensics_Menu[18]='<A class="whitelink" HREF="https://www.gnu.org/software/ddrescue/ddrescue.html">GNU ddrescue</A>'
KaliForensics_Menu[19]='<A class="whitelink" HREF="http://safecopy.sourceforge.net/">safecopy [low-level media copier]</A>'
KaliForensics_Menu[20]='<A class="whitelink" HREF="http://foremost.sourceforge.net/">Foremost [recover file fragment (carving)]</A>'
KaliForensics_Menu[21]='<A class="whitelink" HREF="https://github.com/sleuthkit/scalpel">Scalpel [file carving recovery]</A>'
KaliForensics_Menu[22]='<A class="whitelink" HREF="https://www.cgsecurity.org/wiki/TestDisk">TestDisk [unerase and recovery]</A>' 
KaliForensics_Menu[23]='<A class="whitelink" HREF="http://extundelete.sourceforge.net/">EXTundelete</A>'
KaliForensics_Menu[24]='<A class="whitelink" HREF="http://thewalter.net/stef/software/scrounge/">Scrounge-NTFS</A>'	
KaliForensics_Menu[25]='<A class="whitelink" HREF="https://github.com/libyal/libewf/">Libewf tools [Expert Witness Format]</A>'
KaliForensics_Menu[26]='<A class="whitelink" HREF="https://www.pinguin.lu/xmount">xmount [convert between HD image types]</A>'
KaliForensics_Menu[27]='<A class="whitelink" HREF="https://github.com/libyal/libbde/">libbde-tools [BitLocker Drive Encryption]</A>'
KaliForensics_Menu[28]='<A class="whitelink" HREF="https://github.com/libyal/libesedb/">libesedb-tools [Extensible Storage Engine]</A>'
KaliForensics_Menu[29]='<A class="whitelink" HREF="https://github.com/libyal/libfvde">libfvde-tools [FileVault Drive Encryption -FVDE]</A>'
KaliForensics_Menu[30]='<A class="whitelink" HREF="https://github.com/libyal/libvshadow">libvshadow-tools [VSS]</A>'
KaliForensics_Menu[31]='<A class="whitelink" HREF="https://glandium.org/projects/vmfs-tools/">vmfs-tools [for VMware ESX clustered fs]</A>'
KaliForensics_Menu[32]='<A class="whitelink" HREF="https://www.gnu.org/software/mtools/">mtools [MS-DOS support w/o disk mount]</A>'       

KaliForensics_Menu[33]='<span class="yellowsans">Windows-specific Forensic Tools</span>'    
KaliForensics_Menu[34]='<A class="whitelink" HREF="http://missidentify.sourceforge.net/">Miss Identify [find obscured executables]</A>'
KaliForensics_Menu[35]='<A class="whitelink" HREF="https://github.com/keydet89/RegRipper2.8">RegRipper [zoom in on forensic-related]</A>'
KaliForensics_Menu[36]='<A class="whitelink" HREF="http://projects.sentinelchicken.org/reglookup/">RegLookup [yet another reg viewer]</A>'
KaliForensics_Menu[37]='<A class="whitelink" HREF="https://github.com/libyal/libregf">libregf-tools [WinNT Reg File (REGF)]</A>'
KaliForensics_Menu[38]='<A class="whitelink" HREF="https://metacpan.org/release/Parse-Win32Registry">libparse-win32registry-perl</A>'
KaliForensics_Menu[39]='<A class="whitelink" HREF="https://www.cabextract.org.uk/">cabextract [extract MS cabinet files]</A>'
KaliForensics_Menu[40]='<A class="whitelink" HREF="https://github.com/libyal/libevt/">libevt-tools [Windows Event Log (EVT)]</A>'
KaliForensics_Menu[41]='<A class="whitelink" HREF="https://github.com/libyal/libevtx/">libevtx-tools [Win XML Event Log (EVTX)]</A>'
KaliForensics_Menu[42]='<A class="whitelink" HREF="https://github.com/dkovar/analyzeMFT">analyzemft [parse NTFS MFT file]</A>'
KaliForensics_Menu[43]='<A class="whitelink" HREF="https://github.com/csababarta/ntdsxtract">ntdsxtract [Active Directory forensic framework]</A>'
KaliForensics_Menu[44]='<A class="whitelink" HREF="https://github.com/libyal/libmsiecf/">libmsiecf [MSIE Cache File format]</A>'
KaliForensics_Menu[45]='<A class="whitelink" HREF="https://sourceforge.net/projects/undbx/">undbx [extract Outlook mgs from .dbx]</A>'
KaliForensics_Menu[46]='<A class="whitelink" HREF="http://www.five-ten-sg.com/libpst/">libpst Utilities [readpst, etc]</A>'
// https://abelcheung.github.io/rifiuti2/">rifiuti2 [read Win Recycle Bin files] IS IN ODESSA    



var KaliForens2_Menu=new Array()
KaliForens2_Menu[0]='<span class="yellowsans">HEX/ASCII Binary Editors/Viewers</span>'
KaliForens2_Menu[1]='<A class="whitelink" HREF="https://sourceforge.net/projects/hexedit/">Hexedit</A>'	 
KaliForens2_Menu[2]='<A class="whitelink" HREF="https://directory.fsf.org/wiki/Ghex">ghex [hex/ascii binary editor]</A>' 
KaliForens2_Menu[3]='<A class="whitelink" HREF="https://github.com/bwrsandman/Bless">Bless [hex edit]</A>' 
KaliForens2_Menu[4]='<A class="whitelink" HREF="https://github.com/madsen/vbindiff">VBinDiff [diff ascii and hex bin data]</A>' 		 
KaliForens2_Menu[5]='<A class="whitelink" HREF="https://github.com/google/binplist">binplist [binary property list]</A>'
KaliForens2_Menu[6]='<A class="whitelink" HREF="https://github.com/ReFirmLabs/binwalk">Binwalk - firmware analysis</A>'

KaliForens2_Menu[7]='<span class="yellowsans">Malware Analysis/ Reverse Engineering</span>'
KaliForens2_Menu[8]='<A class="whitelink" HREF="http://rkhunter.sourceforge.net">rkhunter/Rootkit Hunter</A>'  
KaliForens2_Menu[9]='<A class="whitelink" HREF="http://www.security-projects.com/?Unhide">unhide.rb [find hidden rootkit processes]</A>'
KaliForens2_Menu[10]='<A class="whitelink" HREF="http://www.chkrootkit.org/">chkrootkit</A>'
KaliForens2_Menu[11]='<A class="whitelink" HREF="https://github.com/joxeankoret/pyew">pyew [analyse malware] </A>'
KaliForens2_Menu[12]='<A class="whitelink" HREF="https://github.com/VirusTotal/yara">YARA malware toolkit</A>'
KaliForens2_Menu[13]='<A class="whitelink" HREF="https://github.com/VirusTotal/yara-python">python-yara [YARA Python libs]</A>'	
KaliForens2_Menu[14]='<A class="whitelink" HREF="https://ibotpeaches.github.io/Apktool/">ApkTool [Android]</A>'
KaliForens2_Menu[15]='<A class="whitelink" HREF="https://clang.llvm.org/">Clang [C/C++]</A>'
KaliForens2_Menu[16]='<A class="whitelink" HREF="https://github.com/pxb1988/dex2jar">dex2jar [android .dex and java .class]</A>'
KaliForens2_Menu[17]='<A class="whitelink" HREF="http://codef00.com/projects">edb-debugger [AArch32/x86/x86-64 debugger]</A>'
KaliForens2_Menu[18]='<A class="whitelink" HREF="http://www.nowrap.de/flare.html">Flare [Flash/Actionscript]</A>'
KaliForens2_Menu[19]='<A class="whitelink" HREF="http://flasm.sourceforge.net/">Flasm  [Flash/Actionscript]</A>'
KaliForens2_Menu[20]='<A class="whitelink" HREF="https://varaneckas.com/jad/">jad [java decompiler]</A>'
KaliForens2_Menu[21]='<A class="whitelink" HREF="https://code.google.com/archive/p/javasnoop/">JavaSnoop [tamper with applets]</A>'
KaliForens2_Menu[22]='<A class="whitelink" HREF="https://github.com/java-decompiler/jd-gui">jdgui [Java .class decompiler] </A>'
KaliForens2_Menu[23]='<A class="whitelink" HREF="https://github.com/fishstiqz/nasmshell">NASM shell [Netwide Assembler]</A>'
KaliForens2_Menu[24]='<A class="whitelink" HREF="http://www.ollydbg.de/">OllyDbg</A>'
KaliForens2_Menu[25]='<A class="whitelink" HREF="https://rada.re/">Radare2</A>'	   

KaliForens2_Menu[26]='<span class="yellowsans">Unsorted forensic tool leftovers</span>'    
KaliForens2_Menu[27]='<A class="whitelink" HREF="http://md5deep.sourceforge.net/">md5deep/hashdeep</A>'
KaliForens2_Menu[28]='<A class="whitelink" HREF="https://github.com/log2timeline">plaso/log2timeline [timeline tool]</A>'
KaliForens2_Menu[29]='<A class="whitelink" HREF="https://github.com/strozfriedberg/liblightgrep">liblightgrep [grep for forensics]</A>'
KaliForens2_Menu[30]='<A class="whitelink" HREF="https://sourceforge.net/projects/ssdeep/">ssdeep [compute/match fuzzy hashes]</A>' 
KaliForens2_Menu[31]='<A class="whitelink" HREF="https://citp.princeton.edu/memory-content/src/aeskeyfind-1.0.tar.gz">AESKeyFinder</A>'
KaliForens2_Menu[32]='<A class="whitelink" HREF="https://citp.princeton.edu/memory-content/src/rsakeyfind-1.0.tar.gz">RSAKeyFinder</A>'
KaliForens2_Menu[33]='<A class="whitelink" HREF="https://blog.didierstevens.com/programs/pdf-tools/">pdf-parser and pdfid</A>'
KaliForens2_Menu[34]='<A class="whitelink" HREF="http://eternal-todo.com/tools/peepdf-pdf-analysis-tool">peepdf [check PDFs for malicious payload]</A>'
KaliForens2_Menu[35]='<A class="whitelink" HREF="https://github.com/abeluck/stegdetect">stegdetect [does it have stego?]</A>'
KaliForens2_Menu[36]='<A class="whitelink" HREF="https://rfc1149.net/devel/recoverjpeg.html">recoverjpeg [file carver]</A>'
KaliForens2_Menu[37]='<A class="whitelink" HREF="http://vinetto.sourceforge.net/">Vinetto [examine thumbs.db files]</A>'
KaliForens2_Menu[38]='<A class="whitelink" HREF="https://github.com/erocarrera/pefile">pefile [for Portable Executables (PE)]</A>'
KaliForens2_Menu[39]='<A class="whitelink" HREF="http://pev.sourceforge.net/">pev - PE file analysis</A>'
KaliForens2_Menu[40]='<A class="whitelink" HREF="https://code.google.com/archive/p/dumbpig/">dumbpig [syntax checking for Snort rules]</A>' 
KaliForens2_Menu[41]='<A class="whitelink" HREF="https://www.fourmilab.ch/random/">ent [pseudorandom number sequence test]</A>' 		  
KaliForens2_Menu[42]='<A class="whitelink" HREF="http://www.urbanophile.com/arenn/hacking/gzrt/gzrt.html">gzrt [gzrecover - fix corrupted gzip]</A>' 
KaliForens2_Menu[43]='<A class="whitelink" HREF="https://github.com/libyal/libolecf">libolecf [OLE2 Compound File (OLECF) format]</A>'
KaliForens2_Menu[44]='<A class="whitelink" HREF="https://github.com/libimobiledevice/libplist">libplist-dev [Apple Property List format]</A>' 
KaliForens2_Menu[45]='<A class="whitelink" HREF="https://sourceforge.net/projects/libexif/">exif [EXIF info in JPEG]</A>' 


var KaliVOIP_Menu=new Array()
KaliVOIP_Menu[0]='<span class="yellowsans">VoIP Tools</span>'
KaliVOIP_Menu[1]='<A class="whitelink" HREF="https://github.com/EnableSecurity/sipvicious">SIPViscious [svcrack svcrash svmap etc]</A>'
KaliVOIP_Menu[2]='<A class="whitelink" HREF="http://mazzoo.de/blog/2006/08/25#ohrwurm">OhrWurm</A>'
KaliVOIP_Menu[3]='<A class="whitelink" HREF="https://www.ee.oulu.fi/research/ouspg/PROTOS_Test-Suite_c07-sip">PROTOS-SIP</A>'
KaliVOIP_Menu[4]='<A class="whitelink" HREF="http://enumiax.sourceforge.net/">enumIAX</A>'
KaliVOIP_Menu[5]='<A class="whitelink" HREF="https://github.com/relops/rtpbreak">rtpbreak</A>'
KaliVOIP_Menu[6]='<A class="whitelink" HREF="http://www.p1sec.com/corp/research/tools/sctpscan/">SCTPscan</A>'
KaliVOIP_Menu[7]='<A class="whitelink" HREF="http://packetstormsecurity.com/files/107301/SIP-Army-Knife-Fuzzer-1123">SIP Army Knife</A>'
KaliVOIP_Menu[8]='<A class="whitelink" HREF="http://sipp.sourceforge.net/">SIPp- Traffic generator</A>'
KaliVOIP_Menu[9]='<A class="whitelink" HREF="https://sourceforge.net/projects/sipsak.berlios/">SIPsak - SIP Swiss Army Knife</A>'
KaliVOIP_Menu[10]='<A class="whitelink" HREF="http://voiphopper.sourceforge.net/">VoIP_Hopper</A>'
KaliVOIP_Menu[11]='<A class="whitelink" HREF="https://github.com/epinna/Stegosip">StegoSIP [TCP tunnel over RTP/SIP]</A>'
KaliVOIP_Menu[12]='<span class="yellowsans">HackingVOIP.com Stuff</span>'

KaliVOIP_Menu[13]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/hack_library.tar.gz">Deps: hack_library.tar.gz</A>'
KaliVOIP_Menu[14]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/g711conversions.tar.gz">Deps: g711conversions.tar.gz</A>'
KaliVOIP_Menu[15]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/libfindrtp-0.4b.tar.gz">Deps: libfindrtp-0.4b.tar.gz</A>'
KaliVOIP_Menu[16]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/vlanping.tar.gz">VLANping</A>'
KaliVOIP_Menu[17]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/sipscan.msi">SIPSCAN</A>'
KaliVOIP_Menu[18]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/udpflood.tar.gz">UDP Flooder</A>'
KaliVOIP_Menu[19]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/udpfloodVLAN.tar.gz">UDP Flooder w/VLAN support</A>'
KaliVOIP_Menu[20]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/sip_rogue.tar.gz">siprogue</A>'
KaliVOIP_Menu[21]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/iaxflood.tar.gz">IAX Flooder</A>'
KaliVOIP_Menu[22]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/inviteflood.tar.gz">INVITE Flooder </A>'
KaliVOIP_Menu[23]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/rtpflood.tar.gz">RTP Flooder </A>'
KaliVOIP_Menu[24]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/udpflood.tar.gz">UDP Flooder</A>'
KaliVOIP_Menu[25]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/udpfloodVLAN.tar.gz">UDP Flooder w/VLAN support</A>'
KaliVOIP_Menu[26]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/authtool.tar.gz">AuthTool</A>'
KaliVOIP_Menu[27]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/teardown.tar.gz">BYE Teardown</A>'
KaliVOIP_Menu[28]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/check_sync_reboot.tar.gz">Check Sync Phone Rebooter</A>'
KaliVOIP_Menu[29]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/redirectpoison_v1.1.tar.gz">RedirectPoison</a>'
KaliVOIP_Menu[30]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/reghijacker.tar.gz">Registration Hijacker</A>'
KaliVOIP_Menu[31]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/erase_registrations.tar.gz">Registration Eraser </A>'
KaliVOIP_Menu[32]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/add_registrations.tar.gz">Registration Adder</A>'
KaliVOIP_Menu[33]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/rtpinsertsound_v2.0.tar.gz">RTP InsertSound v2.0</A>'
KaliVOIP_Menu[34]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/rtpinsertsound_v3.0.tar.gz">RTP InsertSound v3.0</a>'
KaliVOIP_Menu[35]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/rtpmixsound_v2.0.tar.gz">RTP MixSound v2.0</A>'
KaliVOIP_Menu[36]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/rtpmixsound_v3.0.tar.gz">RTP MixSound v3.0</a>'
KaliVOIP_Menu[37]='<A class="whitelink" HREF="http://www.hackingvoip.com/tools/spitter.tar.gz">Spitter</a>'


var KaliWireless_Menu=new Array()
KaliWireless_Menu[0]='<span class="yellowsans">802.11 Wireless</span>'
KaliWireless_Menu[1]='<A class="whitelink" HREF="http://www.kismetwireless.net/">KismetWireless</A>'
KaliWireless_Menu[2]='<A class="whitelink" HREF="https://www.metageek.com/">MetaGeek - inSSIDer</A>'
KaliWireless_Menu[3]='<A class="whitelink" HREF="https://www.aircrack-ng.org/">Aircrack-ng suite</A>'
KaliWireless_Menu[4]='<A class="whitelink" HREF="https://github.com/savio-code/fern-wifi-cracker">Fern Wifi Cracker [WEP/WPA/WPS]</A>'
KaliWireless_Menu[5]='<A class="whitelink" HREF="https://pyrit.wordpress.com/">Pyrit [blog- crack WPA2-PSK]</A>'
KaliWireless_Menu[6]='<A class="whitelink" HREF="https://github.com/JPaulMora/Pyrit">Pyrit [for newest download]</A>'
KaliWireless_Menu[7]='<A class="whitelink" HREF="https://github.com/derv82/wifite2">Wifite [automated auditing]</A>'
KaliWireless_Menu[8]='<A class="whitelink" HREF="https://github.com/wiire-a/pixiewps">PixieWPS [pixie-dust WPS]</A>'
KaliWireless_Menu[9]='<A class="whitelink" HREF="https://code.google.com/archive/p/reaver-wps/">Reaver [brute force WPS]</A>'
KaliWireless_Menu[10]='<A class="whitelink" HREF="https://github.com/judocol/bully">Bully [brute force WPS]</A>'
KaliWireless_Menu[11]='<A class="whitelink" HREF="http://www.willhackforsushi.com/?page_id=50">coWPAtty [dict attack WPA2-PSK]</A>'
KaliWireless_Menu[12]='<A class="whitelink" HREF="http://www.willhackforsushi.com/?page_id=41">Asleap [MS-CHAPv2/LEAP/PPTP]</A>'
KaliWireless_Menu[13]='<A class="whitelink" HREF="http://www.willhackforsushi.com/?page_id=67">eapmd5pass [dict attack EAP-MD5]</A>'
KaliWireless_Menu[14]='<A class="whitelink" HREF="https://github.com/wi-fi-analyzer/mdk3-master">MDK3 [various stress tests]</A>'
KaliWireless_Menu[15]='<A class="whitelink" HREF="https://github.com/GDSSecurity/wifitap">Wifitap [arp-dns-ping]</A>'
KaliWireless_Menu[16]='<A class="whitelink" HREF="https://wifiphisher.org/">WifiPhisher [rogue AP]</A>'
KaliWireless_Menu[17]='<A class="whitelink" HREF="https://github.com/savio-code/ghost-phisher">Ghost Phisher [rogue AP]</A>'
KaliWireless_Menu[18]='<A class="whitelink" HREF="https://digi.ninja/projects/wifi_honey.php">Wifi Honey [rogue AP]</A>'
KaliWireless_Menu[19]='<A class="whitelink" HREF="https://github.com/xtr4nge/giskismet">GISKismet [Kismet-to-Google Earth]</A>'
KaliWireless_Menu[20]='<A class="whitelink" HREF="http://www.willhackforsushi.com/?page_id=79">WLAN2Eth [PCAP conversion]</A>'
KaliWireless_Menu[21]='<A class="whitelink" HREF="http://www.willhackforsushi.com/?page_id=19">file2Air [inject frames from files]</A>'
KaliWireless_Menu[22]='<A class="whitelink" HREF="https://github.com/wi-fi-analyzer">HUGE Repo at GitHub- tons of tools</A>'
KaliWireless_Menu[23]='<span class="yellowsans">Bluetooth Tools</span>'
KaliWireless_Menu[24]='<A class="whitelink" HREF="https://github.com/MS3FGX/Bluelog">Bluelog [scanner, site survey]</A>'
KaliWireless_Menu[25]='<A class="whitelink" HREF="https://github.com/MS3FGX/Bluefog">BlueFog [broadcast phantom devices]</A>'
KaliWireless_Menu[26]='<A class="whitelink" HREF="https://github.com/BlackArch/blackarch/tree/master/packages/blueranger">BlueRanger [BT "radar"]</A>'
KaliWireless_Menu[27]='<A class="whitelink" HREF="http://www.alighieri.org/project.html">BlueSnarfer</A>'
KaliWireless_Menu[28]='<A class="whitelink" HREF="https://packages.debian.org/sid/net/btscanner">BTScanner [get device info]</A>'
KaliWireless_Menu[29]='<A class="whitelink" HREF="https://tools.kali.org/wireless-attacks/redfang">RedFang [find non-discoverable devices]</A>'
KaliWireless_Menu[30]='<A class="whitelink" HREF="https://sourceforge.net/projects/spooftooph/">Spooftooph [spoofing, cloning]</A>'
KaliWireless_Menu[31]='<span class="yellowsans">RFID/NFC Tools</span>'
KaliWireless_Menu[32]='<A class="whitelink" HREF="http://nfc-tools.org/index.php/Main_Page">NFC-Tools.org</A>'
KaliWireless_Menu[33]='<A class="whitelink" HREF="https://github.com/nfc-tools">NFC-Tools GitHub</A>'
KaliWireless_Menu[34]='<A class="whitelink" HREF="https://github.com/nfc-tools/mfoc">mfoc [MIFARE Classic offline cracker]</A>'
KaliWireless_Menu[35]='<A class="whitelink" HREF="https://github.com/4ZM/mfterm">mfterm (NFC/carding)</A>'
KaliWireless_Menu[36]='<A class="whitelink" HREF="https://github.com/nfc-tools/mfcuk">MiFare Classic Universal toolKit [MFCUK]</A>'
KaliWireless_Menu[37]='<A class="whitelink" HREF="https://github.com/nfc-tools/libnfc/blob/master/utils/nfc-list.c">nfc-list</A>'
KaliWireless_Menu[38]='<span class="yellowsans">Software Defined Radio/ RF</span>'
KaliWireless_Menu[39]='<A class="whitelink" HREF="https://github.com/mossmann/hackrf/tree/master/host/hackrf-tools">HackRF Tools</A>'
KaliWireless_Menu[40]='<A class="whitelink" HREF="https://github.com/riverloopsec/killerbee">KillerBee 802.15.4/ZigBee Sec Research Toolkit</A>'
KaliWireless_Menu[41]='<A class="whitelink" HREF="https://chirp.danplanet.com/projects/chirp/wiki/Home">Chirp</A>'

var KaliExploits_Menu=new Array()
KaliExploits_Menu[1]='<span class="yellowsans">Exploit/Post Exploit</span>'
KaliExploits_Menu[2]='<A class="whitelink" HREF="http://www.fastandeasyhacking.com/">Armitage</A>'
KaliExploits_Menu[3]='<A class="whitelink" HREF="https://www.metasploit.com/">Metasploit main</A>'
KaliExploits_Menu[4]='<A class="whitelink" HREF="https://github.com/rapid7/metasploit-framework/wiki">Metasploit wiki</A>'
KaliExploits_Menu[5]='<A class="whitelink" HREF="https://www.rapid7.com/db/modules/">Metasploit module DB search</A>'
KaliExploits_Menu[6]='<A class="whitelink" HREF="https://www.exploit-db.com/searchsploit/">SearchSploit</A>'
KaliExploits_Menu[7]='<A class="whitelink" HREF="https://github.com/trustedsec/social-engineer-toolkit/">Social-Engineer Toolkit [SET]</A>'
KaliExploits_Menu[8]='<A class="whitelink" HREF="https://github.com/securestate/termineter">Termineter [Smart Meter Security Testing FW]</A>'
KaliExploits_Menu[9]='<span class="yellowsans">Backdoor/ Privilege Escalation</span>'
KaliExploits_Menu[10]='<A class="whitelink" HREF="https://github.com/secretsquirrel/the-backdoor-factory/">The Backdoor Factory (BDF)</A>'
KaliExploits_Menu[11]='<A class="whitelink" HREF="https://github.com/secretsquirrel/BDFProxy">Backdoor Factory Proxy (BDFProxy)</A>'
KaliExploits_Menu[12]='<A class="whitelink" HREF="https://deadbits.github.io/Intersect-2.5/">Intersect framework</A>'
KaliExploits_Menu[13]='<A class="whitelink" HREF="http://cymothoa.sourceforge.net/">Cymothoa [inject shellcode into existing ps]</A>'
KaliExploits_Menu[14]='<A class="whitelink" HREF="https://github.com/gitdurandal/dbd">Durandals Backdoor [dbd stealth netcat]</A>'
KaliExploits_Menu[15]='<A class="whitelink" HREF="http://tigerteam.se/dl/sbd/">ShadowIntegers Backdoor [sbd stealth netcat]</A>'
KaliExploits_Menu[16]='<A class="whitelink" HREF="http://nullsecurity.net/tools/backdoor.html">U3-Pwn [SanDisk usb payload]</A>'
KaliExploits_Menu[17]='<A class="whitelink" HREF="https://sourceforge.net/projects/laudanum/">Laudanum</A>'
KaliExploits_Menu[18]='<A class="whitelink" HREF="https://github.com/anestisb/WeBaCoo">WeBaCoo</A>'
KaliExploits_Menu[19]='<A class="whitelink" HREF="https://github.com/epinna/weevely3">Weevely</A>'
KaliExploits_Menu[20]='<span class="yellowsans">Windows Post-Exploit</span>'
KaliExploits_Menu[21]='<A class="whitelink" HREF="https://github.com/gentilkiwi/mimikatz">Mimikatz</A>'
KaliExploits_Menu[22]='<A class="whitelink" HREF="https://github.com/samratashok/nishang">Nishang Framework</A>'
KaliExploits_Menu[23]='<A class="whitelink" HREF="https://github.com/PowerShellMafia/PowerSploit">PowerSploit</A>'
KaliExploits_Menu[24]='<A class="whitelink" HREF="https://github.com/nccgroup/redsnarf">RedSnarf [creds on Windows boxes]</A>'
KaliExploits_Menu[25]='<A class="whitelink" HREF="https://github.com/byt3bl33d3r/DeathStar">DeathStar [creds on Windows boxes]</A>'
KaliExploits_Menu[26]='<A class="whitelink" HREF="https://www.powershellempire.com/">PowershellEmpire.com</A>'
KaliExploits_Menu[27]='<A class="whitelink" HREF="https://github.com/EmpireProject/Empire">Empire GitHub</A>'
KaliExploits_Menu[28]='<A class="whitelink" HREF="https://github.com/volatilityfoundation/community/blob/master/SlaviParpulev/psempire.py">psempire.py</A>'
KaliExploits_Menu[29]='<span class="yellowsans">SMTP Analysis</span>'
KaliExploits_Menu[30]='<A class="whitelink" HREF="http://pentestmonkey.net/tools/user-enumeration/smtp-user-enum">smtp-user-enum</A>'
KaliExploits_Menu[31]='<A class="whitelink" HREF="http://www.jetmore.org/john/code/swaks/">swaks- SMTP Swiss Army Knife</A>'
KaliExploits_Menu[32]='<span class="yellowsans">SNMP Analysis</span>'
KaliExploits_Menu[33]='<A class="whitelink" HREF="http://net-snmp.sourceforge.net/">Net-SNMP suite [snmpwalk, etc]</A>'
KaliExploits_Menu[34]='<A class="whitelink" HREF="http://s-tech.elsat.net.pl/">braa - mass SNMP scanner</A>'
KaliExploits_Menu[35]='<A class="whitelink" HREF="https://github.com/trailofbits/onesixtyone">OneSixtyOne</A>'
KaliExploits_Menu[36]='<A class="whitelink" HREF="http://www.nothink.org/codes/snmpcheck/index.php">snmp-check</A>'
KaliExploits_Menu[37]='<span class="yellowsans">SSL Analysis</span>'
KaliExploits_Menu[38]='<A class="whitelink" HREF="http://www.gremwell.com/sslcaudit_v1_0">sslcaudit [MITM test, SSL/TLS clients</A>'
KaliExploits_Menu[39]='<A class="whitelink" HREF="http://ssldump.sourceforge.net/">ssldump [find SSLv3/TLS traffic, dump to stdout]</A>'
KaliExploits_Menu[40]='<A class="whitelink" HREF="http://www.rutschle.net/tech/sslh.shtml">sslh- "Applicative protocol multiplexer"</A>'
KaliExploits_Menu[41]='<A class="whitelink" HREF="https://github.com/rbsec/sslscan">sslscan [check ciphers, vulverabilities]</A>'
KaliExploits_Menu[42]='<A class="whitelink" HREF="https://github.com/nabla-c0d3/sslyze">SSLyze [config analysis, scan]</A>'
KaliExploits_Menu[43]='<A class="whitelink" HREF="http://www.taddong.com/en/lab.html">TLSSLed [based on sslscan, auditor]</A>'
KaliExploits_Menu[44]='<A class="whitelink" HREF="https://github.com/azet/thc-tls-dos">THC-SSL-DOS [stress-test handshake]</A>'
KaliExploits_Menu[45]='<span class="yellowsans">Fuzzing/Stress Testing</A></span>'
KaliExploits_Menu[46]='<A class="whitelink" HREF="https://github.com/kamorin/DHCPig">DHCPig [DHCP exhaustion]</A>'
KaliExploits_Menu[47]='<A class="whitelink" HREF="https://sourceforge.net/projects/t50/">T50 [packet injector/ stress tool]</A>'
KaliExploits_Menu[48]='<A class="whitelink" HREF="https://code.google.com/archive/p/tcpjunk/">TCPJunk [TCP testing/hacking]</A>'
KaliExploits_Menu[49]='<A class="whitelink" HREF="http://git.kali.org/gitweb/?p=packages/bed.git">bed [network protocol fuzzer]</A>'
KaliExploits_Menu[50]='<A class="whitelink" HREF="https://github.com/orgcandman/Simple-Fuzzer">sfuzz- Simple Fuzzer</A>'
KaliExploits_Menu[51]='<A class="whitelink" HREF="https://github.com/guilhermeferreira/spikepp">SPIKE API [fuzzer creation kit]</A>'

var KaliPassword_Menu=new Array()
KaliPassword_Menu[0]='<span class="yellowsans">Offline Attacks</span>'
KaliPassword_Menu[1]='<A class="whitelink" HREF="https://hashcat.net/hashcat/">Hashcat suite</A>'
KaliPassword_Menu[2]='<A class="whitelink" HREF="http://www.openwall.com/john/">John the Ripper</A>'
KaliPassword_Menu[3]='<A class="whitelink" HREF="http://openwall.info/wiki/john/johnny">Johnny GUI</A>'
KaliPassword_Menu[4]='<A class="whitelink" HREF="https://github.com/psypanda/hashID">hashID [hash-identifier]</A>'
KaliPassword_Menu[5]='<A class="whitelink" HREF="http://www.cryptohaze.com/multiforcer.php.html">Cryptohaze Multiforcer [hash bruteforce]</A>'
KaliPassword_Menu[6]='<A class="whitelink" HREF="http://project-rainbowcrack.com/index.htm">RainbowCrack [pre-computation hash crack]</A>'
KaliPassword_Menu[7]='<A class="whitelink" HREF="https://tools.kali.org/password-attacks/rcracki-mt">rcrack_mt [RainbowCrack, multi-threaded]</A>'
KaliPassword_Menu[8]='<A class="whitelink" HREF="http://project-rainbowcrack.com/table.htm">Project RainbowCrack tables [download]</A>'
KaliPassword_Menu[9]='<A class="whitelink" HREF="http://ophcrack.sourceforge.net/">Ophcrack [incl. LM and NTLM tables]</A>'
KaliPassword_Menu[10]='<A class="whitelink" HREF="https://github.com/moyix/creddump">creddump [lsadump-cachedump-pwdump]</A>'
KaliPassword_Menu[11]='<A class="whitelink" HREF="https://sourceforge.net/projects/ophcrack/files/samdump2/">samdump2 [Ophcracks SAM grabber]</A>'
KaliPassword_Menu[12]='<A class="whitelink" HREF="https://tools.kali.org/password-attacks/chntpw">chntpw [Win2k SAM password/reg editor]</A>'
KaliPassword_Menu[13]='<A class="whitelink" HREF="https://tools.kali.org/password-attacks/cmospwd">cmospwd [decrypt CMOS password]</A>'
KaliPassword_Menu[14]='<A class="whitelink" HREF="http://oldhome.schmorp.de/marc/fcrackzip.html">fcrackzip [zip archive crack]</A>'
KaliPassword_Menu[15]='<A class="whitelink" HREF="http://www.leidecker.info/projects/sucrack.shtml">sucrack [brute local *nix users]</A>'
KaliPassword_Menu[16]='<A class="whitelink" HREF="https://github.com/lvaccaro/truecrack">TrueCrack [for TrueCrypted volumes]</A>'

KaliPassword_Menu[17]='<span class="yellowsans">Online Attacks</span>'
KaliPassword_Menu[18]='<A class="whitelink" HREF="https://github.com/vanhauser-thc/thc-hydra/tree/master/web">THC Hydra [parallel, multiprotocol]</A>'
KaliPassword_Menu[19]='<A class="whitelink" HREF="http://foofus.net/goons/jmk/medusa/medusa.html">Medusa [parallel, multiprotocol]</A>'
KaliPassword_Menu[20]='<A class="whitelink" HREF="https://nmap.org/ncrack/">NCrack [parallel, multiprotocol]</A>'
KaliPassword_Menu[21]='<A class="whitelink" HREF="https://github.com/lanjelot/patator">Patator [modular, multiprotocol]</A>'
// https://sites.google.com/site/reusablesec2/drcrack">drcrack [dict-based rtables]</A>'
KaliPassword_Menu[22]='<A class="whitelink" HREF="https://labs.portcullis.co.uk/tools/acccheck/">acccheck [brute SMB logins]</A>'
KaliPassword_Menu[23]='<A class="whitelink" HREF="https://inquisb.github.io/keimpx/">keimpx [enum/grab SMB creds]</A>'
KaliPassword_Menu[24]='<A class="whitelink" HREF="https://github.com/BlackArch/thc-pptp-bruter">thc-pptp-bruter [CHAP v2 auth]</A>'
KaliPassword_Menu[25]='<A class="whitelink" HREF="https://code.google.com/archive/p/findmyhash/">FindMyHash [crack using "free online svcs"]</A>'

KaliPassword_Menu[26]='<span class="yellowsans">PW Profiling and Wordlists Tools</span>'
KaliPassword_Menu[27]='<A class="whitelink" HREF="https://thesprawl.org/projects/pack/">PACK [Password Analysis and Cracking Kit]</A>'
KaliPassword_Menu[28]='<A class="whitelink" HREF="http://www.digininja.org/projects/cewl.php">CeWL [wordlist generator]</A>'
KaliPassword_Menu[29]='<A class="whitelink" HREF="http://sourceforge.net/projects/crunch-wordlist/">Crunch [wordlist generator]</A>'
KaliPassword_Menu[30]='<A class="whitelink" HREF="http://www.remote-exploit.org/articles/misc_research__amp_code/index.html">Wyd [wordlist gen, from filenames]</A>'
KaliPassword_Menu[31]='<A class="whitelink" HREF="https://github.com/Mebus/cupp">CUPP [Common User Passwords Profiler]</A>'
KaliPassword_Menu[32]='<A class="whitelink" HREF="https://digi.ninja/projects/rsmangler.php">rsmangler [wordlist randomizer]</A>'

KaliPassword_Menu[33]='<span class="yellowsans">Pass the Hash</span>'
KaliPassword_Menu[34]='<A class="whitelink" HREF="https://code.google.com/archive/p/passing-the-hash/downloads">Pass The Hash toolkit</A>'
KaliPassword_Menu[35]='<A class="whitelink" HREF="https://github.com/gentilkiwi/mimikatz">Mimikatz [multifunction incl. PtH]</A>'
KaliPassword_Menu[36]='<A class="whitelink" HREF="https://github.com/ShawnDEvans/smbmap">SMBmap [PtH, remote cmd exec, enumeration]</A>'

KaliPassword_Menu[37]='<span class="yellowsans">Precompiled Wordlists Sources</span>'
KaliPassword_Menu[38]='<A class="whitelink" HREF="https://crackstation.net/buy-crackstation-wordlist-password-cracking-dictionary.htm">CrackStation wordlist</A>'
KaliPassword_Menu[39]='<A class="whitelink" HREF="https://wiki.skullsecurity.org/Passwords">Wordlists @ skullsecurity.org wiki</A>'
KaliPassword_Menu[40]='<A class="whitelink" HREF="https://packetstormsecurity.com/Crackers/wordlists/">Wordlists @ PacketStorm</A>'
KaliPassword_Menu[41]='<A class="whitelink" HREF="http://www.openwall.com/wordlists/">Openwall wordlists</A>'
KaliPassword_Menu[42]='<A class="whitelink" HREF="https://github.com/danielmiessler/SecLists">OWASP SecList Github repo</A>'
KaliPassword_Menu[43]='<A class="whitelink" HREF="https://github.com/berzerk0/Probable-Wordlists">berzerk0s Probable Wordlists v2</A>'
// http://www.wirelesshack.org/wpa-wpa2-word-list-dictionaries.html




var menuwidth='200px' 
var menubgcolor='#555555' 
var disappeardelay=250 
var hidemenu_onclick="yes" 
var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="dropmenudiv" style="visibility:hidden;width:'+menuwidth+';background-color:'+menubgcolor+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top=-500
if (menuwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=menuwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat") ? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
}
return edgeoffset
}

function populatemenu(what){
if (ie4||ns6)
dropmenuobj.innerHTML=what.join("")
}


function dropdownmenu(obj, e, menucontents, menuwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidemenu()
dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
populatemenu(menucontents)

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}

return clickreturnvalue()
}

function clickreturnvalue(){
if (ie4||ns6) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie4&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidemenu(){
if (ie4||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
document.onclick=hidemenu


