
	
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
// FROM SECOPS ADD - http://www.ipvoid.com/">IPVoid tools</A>'
// https://www.whatismyip.com/
// FROM SECOPS ADD - https://www.websitepulse.com/tools/tcp-traceroute-test">WebSitePulse TCP Traceroute</A>'
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

NetTool_Menu[33]='<span class="yellowsans">AS/ BGP Lookups</span>'
NetTool_Menu[34]='<a class="whitelink" href="https://www.bgpmon.net/">BGPMon Dashboard</A>'
NetTool_Menu[35]='<a class="whitelink" href="http://bgp.he.net/">Hurricane Electric BGP Tools</A>'
NetTool_Menu[36]='<a class="whitelink" href="http://www.netconfigs.com/">netconfigs.com BPG Tools</A>'
NetTool_Menu[37]='<a class="whitelink" href="http://www.as3257.net/lg/">GTT BGP Looking Glass</A>'
NetTool_Menu[38]='<a class="whitelink" href="https://prefix.pch.net/">Packet Clearinghouse</A>'
NetTool_Menu[39]='<a class="whitelink" href="https://www.peeringdb.com/advanced_search">PeeringDB Adv Search</A>'
NetTool_Menu[40]='<a class="whitelink" href="http://cyclops.cs.ucla.edu/">Cyclops network audit tool</A>'
NetTool_Menu[41]='<a class="whitelink" href="https://www.team-cymru.org/services.html">Team Cymru IP-to-ASN, etc</A>'
NetTool_Menu[42]='<a class="whitelink" href="https://www.findip-address.com/">Findip-address.com Lookup</A>'
NetTool_Menu[43]='<a class="whitelink" href="https://myip.ms/">myip.ms Host Info</a>'
NetTool_Menu[44]='<a class="whitelink" href="http://trace.die.net/">die.net TraceRoute Explorer</a>'
NetTool_Menu[45]='<a class="whitelink" href="http://www.traceroute.org/">Traceroute.org Jumppoints</a>' 

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

Net2_Menu[6]='<span class="yellowsans">Tools and Practice</span>'
Net2_Menu[7]='<a class="whitelink" href="http://rednectar.net/GNS3-workbench/">GNS3 Workbench</A>'
Net2_Menu[8]='<a class="whitelink" href="https://gns3vault.com/">GNS3Vault</A>'
Net2_Menu[9]='<a class="whitelink" href="http://www.freeccnaworkbook.com/">FreeCCNAWorkbook.com</A>'
Net2_Menu[10]='<a class="whitelink" href="http://www.subnettingquestions.com/">SubnettingQuestions.com</A>'
Net2_Menu[11]='<a class="whitelink" href="http://www.subnet-calculator.com/">Subnet-calculator.com</A>'
Net2_Menu[12]='<a class="whitelink" href="http://www.slac.stanford.edu/xorg/nmtf/nmtf-tools.html">Net Monitoring Tools list @ Stanford</A>'
// https://wiki.wireshark.org/Tools">Wireshark wiki tool list</a>'
 
Net2_Menu[13]='<span class="yellowsans">Cisco Related</span>'
Net2_Menu[14]='<a class="whitelink" href="http://docwiki.cisco.com/wiki/Main_Page">Cisco DocWiki</A>'
Net2_Menu[15]='<a class="whitelink" href="https://developer.cisco.com/site/devnet/home/index.gsp">Cisco DevNet</A>'
Net2_Menu[16]='<a class="whitelink" href="https://learningspace.cisco.com/">Cisco Learning Network</A>'
Net2_Menu[17]='<a class="whitelink" href="http://www.cisco.com/cisco/web/psa/default.html">Cisco- Product/Tech Support Tool</A>'
Net2_Menu[18]='<a class="whitelink" href="http://upgrad.cloudapps.cisco.com/upgrad/">Cisco Product Upgrade tool</A>'
Net2_Menu[19]='<a class="whitelink" href="http://www.bradreese.com/blog/8-11-2015.htm">Cisco Product Quick Ref Guides</a>'
Net2_Menu[20]='<a class="whitelink" href="http://www.cisco.com/cisco/web/psa/default.html">Cisco (replacement for UniverCD)</A>'
Net2_Menu[21]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-software-release-15-6-2-t/model.html">Cisco IOS 15.6(2)T Cmd Refs</A>'
Net2_Menu[22]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-software-release-15-6m-t/products-command-reference-list.html">IOS 15.6(2) Services Cmd Guides</A>' 
Net2_Menu[23]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-software-release-15-6m-t/products-installation-and-configuration-guides-list.html">Cisco IOS 15.6(2)T Config Guides</A>'
Net2_Menu[24]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-xe-3e/tsd-products-support-series-home.html">Cisco IOS XE 3.x Cmd Refs</a>'
Net2_Menu[25]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/ios-xr-software/tsd-products-support-series-home.html">Cisco IOS XR Cmd Refs</a>'
Net2_Menu[26]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/ios-nx-os-software/nx-os-software/tsd-products-support-series-home.html">Cisco IOS NX Cmd Refs</a>'

Net2_Menu[27]='<span class="yellowsans">Juniper - JunOS Related</span>'
Net2_Menu[28]='<a class="whitelink" href="https://www.juniper.net/customers/support/">Juniper Support</A>'
Net2_Menu[29]='<a class="whitelink" href="https://www.juniper.net/techpubs/">Juniper Docs</A>'
Net2_Menu[30]='<a class="whitelink" href="https://forums.juniper.net/">Juniper Forums</A>'
Net2_Menu[31]='<a class="whitelink" href="http://kb.juniper.net/">Juniper KBase</A>'





var USGov_Menu=new Array()
USGov_Menu[0]='<span class="yellowsans">US Govt Resources</span>'
USGov_Menu[1]='<a class="whitelink" href="http://www.firstgov.gov/">FirstGov - US Govt Central</A>'
USGov_Menu[2]='<a class="whitelink" href="http://thomas.loc.gov/">THOMAS - US Legislative Gateway</a> '
USGov_Menu[3]='<a class="whitelink" href="http://www.gpoaccess.gov/index.html">GPO Access- Govt Printing Ofc</a>'
USGov_Menu[4]='<a class="whitelink" href="http://uscode.house.gov/usc.htm">US Code - US House of Reps</a>'
USGov_Menu[5]='<a class="whitelink" href="http://www4.law.cornell.edu/uscode/topn/">US Code - Index by Popular Names</A>'
USGov_Menu[6]='<a class="whitelink" href="http://www.access.gpo.gov/nara/cfr/">Code of Federal Regulations</a>'
USGov_Menu[7]='<a class="whitelink" href="http://gsulaw.gsu.edu/metaindex/">US Legal Research MetaIndex</A>'
USGov_Menu[8]='<a class="whitelink" href="http://www.ncsl.org/">Natl Conf of State Legislatures</A>'
USGov_Menu[9]='<a class="whitelink" href="http://www.nara.gov/">NARA - The US National Archives</A>'
USGov_Menu[10]='<a class="whitelink" href="http://www.census.gov/">US Census Bureau</a>'
USGov_Menu[11]='<span class="yellowsans">Texas Govt Resources</span>'
USGov_Menu[12]='<a class="whitelink" href="http://www.state.tx.us/">TexasOnline - The State of Texas</a>'
USGov_Menu[13]='<a class="whitelink" href="http://www.capitol.state.tx.us/">The Texas Legislature Online</a>'
USGov_Menu[14]='<a class="whitelink" href="http://www.lrl.state.tx.us/">Tx Legislative Reference Library</A>'
USGov_Menu[15]='<a class="whitelink" href="http://www.capitol.state.tx.us/hrofr/hrofr.htm">Tx House Research Organization</A>'
USGov_Menu[16]='<a class="whitelink" href="http://www.tdh.state.tx.us/">Texas Department of Health</a>'
USGov_Menu[17]='<a class="whitelink" href="http://www.tceq.state.tx.us">Tx Commission on Enviro Quality</a>'
USGov_Menu[18]='<a class="whitelink" href="http://www.tsl.state.tx.us/trail/index.html">TRAIL: Texas State Library</a>'
USGov_Menu[19]='<a class="whitelink" href="http://204.65.105.13/tac/index.html">Texas Administrative Code</a>'
USGov_Menu[20]='<a class="whitelink" href="http://www.capitol.state.tx.us/statutes/statutes.html">Texas Statutes Listing</a>'
USGov_Menu[21]='<a class="whitelink" href="http://www.courts.state.tx.us/">Texas Judiciary Online</A>'
USGov_Menu[22]='<a class="whitelink" href="http://204.65.105.13/texreg/issues.html">The Texas Register</a>'

var TxGov_Menu=new Array()
TxGov_Menu[0]='<span class="yellowsans">Texas Govt Resources</span>'
TxGov_Menu[1]='<a class="whitelink" href="http://www.state.tx.us/">TexasOnline - The State of Texas</a>'
TxGov_Menu[2]='<a class="whitelink" href="http://www.capitol.state.tx.us/">The Texas Legislature Online</a>'
TxGov_Menu[3]='<a class="whitelink" href="http://www.lrl.state.tx.us/">Tx Legislative Reference Library</A>'
TxGov_Menu[4]='<a class="whitelink" href="http://www.capitol.state.tx.us/hrofr/hrofr.htm">Tx House Research Organization</A>'
TxGov_Menu[5]='<a class="whitelink" href="http://www.tdh.state.tx.us/">Texas Department of Health</a>'
TxGov_Menu[6]='<a class="whitelink" href="http://www.tceq.state.tx.us">Tx Commission on Enviro Quality</a>'
TxGov_Menu[7]='<a class="whitelink" href="http://www.tsl.state.tx.us/trail/index.html">TRAIL: Texas State Library</a>'
TxGov_Menu[8]='<a class="whitelink" href="http://204.65.105.13/tac/index.html">Texas Administrative Code</a>'
TxGov_Menu[9]='<a class="whitelink" href="http://www.capitol.state.tx.us/statutes/statutes.html">Texas Statutes Listing</a>'
TxGov_Menu[10]='<a class="whitelink" href="http://www.courts.state.tx.us/">Texas Judiciary Online</A>'
TxGov_Menu[11]='<a class="whitelink" href="http://204.65.105.13/texreg/issues.html">The Texas Register</a>'

var UTexas_Menu=new Array()
UTexas_Menu[0]='<span class="yellowsans">The University of Texas</span>'
UTexas_Menu[1]='<a class="whitelink" href="http://www.utexas.edu/">UT Austin - Main</A>'
UTexas_Menu[2]='<a class="whitelink" href="http://www.lib.utexas.edu/">UT Libraries</a>'
UTexas_Menu[3]='<a class="whitelink" href="http://x500.utexas.edu/">x500 Directory</a>'
UTexas_Menu[4]='<a class="whitelink" href="http://www.hrc.utexas.edu/">Harry Ransom Center</a>'
UTexas_Menu[5]='<a class="whitelink" href="http://www.dailytexanonline.com/">The Daily Texan</A>'


var Libs_Menu=new Array()
Libs_Menu[0]='<span class="yellowsans">Notable Libraries</span>'
Libs_Menu[1]='<a class="whitelink" href="http://www.loc.gov">The Library of Congress</a>'
Libs_Menu[2]='<a class="whitelink" href="http://www.lib.utexas.edu/">U of Texas Libraries</a>'
Libs_Menu[3]='<a class="whitelink" href="http://www.libdex.com/">LibDex</a>'
Libs_Menu[4]='<a class="whitelink" href="http://www.wikipedia.org/">Wikipedia Reference</a>'
Libs_Menu[5]='<a class="whitelink" href="http://www.lii.org">The Librarians Internet Index</A>'


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
 


// ---------------------------------------------------------------------------


var Austin_Menu=new Array()
Austin_Menu[0]='<span class="yellowsans">Austin, Texas</span>'
Austin_Menu[1]='<a class="whitelink" href="http://www.ci.austin.tx.us/">The City of Austin</a>'
Austin_Menu[2]='<a class="whitelink" href="http://www.co.travis.tx.us/">Travis County, Texas</a>'
Austin_Menu[3]='<a class="whitelink" href="http://www.capmetro.org/">Capital Metro</a>'
Austin_Menu[4]='<a class="whitelink" href="http://www.statesman.com">Austin American Statesman</a>'
Austin_Menu[5]='<a class="whitelink" href="http://www.auschron.com/">The Austin Chronicle</a>'
Austin_Menu[6]='-------------------------'
Austin_Menu[7]='<a class="whitelink" href="http://www.ProgressiveAustin.org">ProgressiveAustin.org</A>'



// ---------------------------------------------------------------------------

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
	Unix_Menu[23]='<span class="yellowsans">CLI Helpers</span>'
Unix_Menu[24]='<a class="whitelink" href="http://www.bhami.com/rosetta.html">Sysadmins Unixersal Translator</A>'
Unix_Menu[25]='<a class="whitelink" href="http://mywiki.wooledge.org/BashGuide">BashGuide Wiki</A>'
Unix_Menu[26]='<a class="whitelink" href="http://www.shellcheck.net/">ShellCheck.net Script Analyzer</A>'
Unix_Menu[27]='<a class="whitelink" href="http://explainshell.com/">ExplainShell.com- help text for CLI</A>'
Unix_Menu[28]='<a class="whitelink" href="https://github.com/jordansissel/pleaserun">PleaseRun- Auto-gen init/systemd</A>'
Unix_Menu[29]='<a class="whitelink" href="http://www.regexr.com/">RegExr - RegEx webtool</A>'
Unix_Menu[30]='<a class="whitelink" href="http://www.regular-expressions.info">Regular-Expressions.info</a>'
Unix_Menu[31]='<a class="whitelink" href="https://txt2re.com">Txt2RE.com - RegEx webtool</a>'
Unix_Menu[32]='<a class="whitelink" href="https://regex101.com/">RegEx101 - RegEx webtool</a>'
Unix_Menu[33]='<a class="whitelink" href="http://www.regexe.com/">RegExe - RegEx webtool</a>'
Unix_Menu[34]='<a class="whitelink" href="http://regex.inginf.units.it/">Regex Generator++</A>'
Unix_Menu[35]='<span class="yellowsans">Distro Wikis and Manpages</span>'
// Unix_Menu[36]='<a class="whitelink" href="http://linuxmanpages.net/">Fedora Manpages page disappeared!!</A>'
Unix_Menu[37]='<a class="whitelink" href="http://manpages.debian.org/cgi-bin/man.cgi">Debian Manpages</A>'
Unix_Menu[38]='<a class="whitelink" href="http://manpages.ubuntu.com/">Ubuntu Manpages</A>'
Unix_Menu[39]='<a class="whitelink" href="http://www.unix.com/man-page/linux/1/man/">Unix.com manpages - 20 Versions</A>'

Unix_Menu[40]='<a class="whitelink" href="https://wiki.archlinux.org/">Arch Linux Wiki</A>'
Unix_Menu[41]='<a class="whitelink" href="https://wiki.debian.org/">Debian Wiki</A>'
Unix_Menu[42]='<a class="whitelink" href="http://docs.slackware.com/">Slackware Wiki</A>'
Unix_Menu[43]='<a class="whitelink" href="https://access.redhat.com/documentation/en/">Red Hat Documentation</A>'
Unix_Menu[44]='<a class="whitelink" href="https://fedoraproject.org/wiki/Fedora_Project_Wiki">Fedora Project Wiki</A>'
Unix_Menu[45]='<a class="whitelink" href="http://www.freebsd.net/">The FreeBSD Project</A>'

var HW_Menu=new Array()

HW_Menu[0]='<span class="yellowsans">Hardware Reference Sources</span>'
HW_Menu[1]='<a class="whitelink" href="https://apps.fcc.gov/oetcf/eas/reports/GenericSearch.cfm">Search Equipment FCCIDs</a>'
HW_Menu[2]='<a class="whitelink" href="http://pcidatabase.com/">PCI Database</a>'
HW_Menu[3]='<a class="whitelink" href="https://wikidevi.com">WikiDevi - Open HW DB</a>'
HW_Menu[4]='<a class="whitelink" href="http://www.bradreese.com/blog/8-11-2015.htm">Cisco Product Quick Ref Guides</a>'
HW_Menu[5]='<a class="whitelink" href="http://www.cisco.com/cisco/web/psa/default.html">Cisco (replacement for UniverCD)</A>'
HW_Menu[6]='<a class="whitelink" href="http://www.intel.com/pressroom/kits/quickreffam.htm">Intel Quick Ref Guide (1971-2008)</A>'
HW_Menu[7]='<a class="whitelink" href="http://ark.intel.com/">Intel ARK (Specs Post-2008)</A>'
HW_Menu[8]='<a class="whitelink" href="http://www.amdcompare.com/">AMD Compare - product specs</A>'
HW_Menu[9]='<a class="whitelink" href="http://www.everymac.com/systems/">EveryMac Macintosh Ref</a>'
HW_Menu[10]='<a class="whitelink" href="http://infocenter.arm.com">ARM Information Center</a>'

HW_Menu[11]='<a class="whitelink" href="http://www.ibm.com/support/us/">IBM Support</A>'
HW_Menu[12]='<a class="whitelink" href="http://support.dell.com">Dell Support</A>'
HW_Menu[13]='<a class="whitelink" href="http://www.asus.com/us/support/">ASUS Support</A>'
HW_Menu[14]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/index.html">Cisco Support</A>'
HW_Menu[15]='<a class="whitelink" href="https://www.juniper.net/customers/support/">Juniper Support</A>'
HW_Menu[16]='<a class="whitelink" href="http://www.alliedtelesis.com/support">Allied Telesys</A>'
HW_Menu[17]='<a class="whitelink" href="https://support.avaya.com/">Avaya Support</A>'
HW_Menu[18]='<a class="whitelink" href="https://support.ruckuswireless.com/">Ruckus Support</A>'
HW_Menu[19]='<a class="whitelink" href="http://toshiba.semicon-storage.com/ap-en/design-support/search.html">Toshiba Support</A>'
HW_Menu[20]='<a class="whitelink" href="http://www.gigabyte.us/support-downloads/support-downloads.aspx">Gigabyte Support</A>'
HW_Menu[21]='<a class="whitelink" href="http://www.seagate.com/support-home/">Seagate (Maxtor, LaCie, Samsung)</A>'
HW_Menu[22]='<a class="whitelink" href="http://support.wdc.com">Western Digital (HGST, SanDisk)</A>'
HW_Menu[23]='<a class="whitelink" href="http://www.manualslib.com/">ManualsLib collection</A>'

HW_Menu[24]='<span class="yellowsans">Reviews/ News (no particular order)</span>'
HW_Menu[25]='<a class="whitelink" href="http://arstechnica.com/gadgets/">ArsTechnica - Gear and Gadgets</A>'
HW_Menu[26]='<a class="whitelink" href="http://arstechnica.com/discipline/hardware-it/">ArsTechnica - IT Hardware</A>'
HW_Menu[27]='<a class="whitelink" href="http://tomshardware.com/">Toms Hardware</a>'
HW_Menu[28]='<a class="whitelink" href="http://www.anandtech.com/">AnandTech</a>'
HW_Menu[29]='<a class="whitelink" href="http://benchmarkreviews.com/">Benchmark Reviews</a>'
HW_Menu[30]='<a class="whitelink" href="http://www.overclockersclub.com/">Overclockers Club</A>'
HW_Menu[31]='<a class="whitelink" href="http://www.pureoverclock.com/">Pure Overclock</A>'
HW_Menu[32]='<a class="whitelink" href="http://www.pcper.com/">PC Perspective</A>'
HW_Menu[33]='<a class="whitelink" href="http://hothardware.com">HotHardware</a>'
HW_Menu[34]='<a class="whitelink" href="http://www.hardocp.com/">HardOCP</A>'
HW_Menu[35]='<a class="whitelink" href="http://www.guru3d.com">Guru3D</A>'
HW_Menu[36]='<a class="whitelink" href="http://www.xbitlabs.com/">X-bit labs</A>'
HW_Menu[37]='<a class="whitelink" href="http://www.overclockers.com/">Overclockers.com</a>'
HW_Menu[38]='<a class="whitelink" href="http://techreport.com/">TechReport.com</A>'
HW_Menu[39]='<a class="whitelink" href="http://www.hardwarecanucks.com/">Hardware Canucks</a>'
HW_Menu[40]='<a class="whitelink" href="http://www.legionhardware.com/">Legion Hardware</A>'
HW_Menu[41]='<a class="whitelink" href="http://www.hardwaresecrets.com/">HardwareSecrets.com</A>'

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
// http://container-solutions.com/resources/


Cluster_Menu[33]='<span class="yellowsans">OpenStack Ecosystem</span>'
Cluster_Menu[34]='<a class="whitelink" href="http://docs.openstack.org/">OpenStack Docs</A>'
Cluster_Menu[35]='<a class="whitelink" href="http://docs.openstack.org/cli-reference/">Openstack CLI Ref</A>'
Cluster_Menu[36]='<a class="whitelink" href="http://developer.openstack.org/">OpenStack Developer</A>'
Cluster_Menu[37]='<a class="whitelink" href="https://github.com/openstack">OpenStack GitHub</A>'
Cluster_Menu[38]='<a class="whitelink" href="https://wiki.openstack.org">OpenStack Wiki</A>'
Cluster_Menu[39]='<a class="whitelink" href="https://docs.openstack.org/ocata/">OpenStack Ocata (02-2017)</a>'
Cluster_Menu[40]='<a class="whitelink" href="http://docs.openstack.org/training_labs/">Training Labs</A>'

//Cluster_Menu[41]='<span class="yellowsans">Other Orchestration</span>'
//Cluster_Menu[42]='<a class="whitelink" href="http://deis.io/">Deis Workflow</A>'
//Cluster_Menu[43]='<a class="whitelink" href="http://osv.io/">OSv Platform</a>'
//Cluster_Menu[44]='<a class="whitelink" href="http://docs.cloudfoundry.org/">CloudFoundry docs</a>'

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
ComSec2_Menu[9]='<a class="whitelink" href="https://www.concise-courses.com/hacking-tools/">Concise-Courses.com List</A>'
ComSec2_Menu[10]='<a class="whitelink" href="https://www.defcon.org/html/links/dc-tools.html">DefCon Archive</a>'
ComSec2_Menu[11]='<a class="whitelink" href="https://forensics.cert.org/">CERT Forensics Linux Repo</A>'

ComSec2_Menu[12]='<span class="yellowsans">Resource Sites, Conferences</span>'
ComSec2_Menu[13]='<a class="whitelink" href="http://www.cert.org/">CMU - CERT</a>'
ComSec2_Menu[14]='<a class="whitelink" href="http://www.sans.org/">SANS Institute</a>'
ComSec2_Menu[15]='<a class="whitelink" href="https://www.offensive-security.com/">Offensive Security</A>'
ComSec2_Menu[16]='<a class="whitelink" href="http://www.defcon.org/">DefCon Security Conf</a>'
ComSec2_Menu[17]='<a class="whitelink" href="http://www.blackhat.com">Blackhat Security Conf</a>'
ComSec2_Menu[18]='<a class="whitelink" href="http://www.h2k2.net">H2K2 Security Conf</a>'
ComSec2_Menu[19]='<a class="whitelink" href="http://www.cansecwest.com">CanSecWest Security Conf</a>'
ComSec2_Menu[20]='<a class="whitelink" href="http://pacsec.jp/">PacSec Security Conf</a>'
ComSec2_Menu[21]='<a class="whitelink" href="https://github.com/nixawk/pentest-wiki">nixawk PenTest Wiki</A>'
ComSec2_Menu[22]='<a class="whitelink" href="http://forensicswiki.org/">ForensicsWiki</A>'
ComSec2_Menu[24]='<a class="whitelink" href="https://www.owasp.org">OWASP Wiki</A>'

ComSec2_Menu[25]='<span class="yellowsans">Online PCAP resources</span>'
ComSec2_Menu[26]='<a class="whitelink" href="https://packettotal.com/">PacketTotal - PCAP analysis</A>'
ComSec2_Menu[27]='<a class="whitelink" href="http://pcapng.com/">Convert PcapNG to PCAP</A>'
ComSec2_Menu[28]='<a class="whitelink" href="https://www.networktotal.com/">NetworkTotal- malware scan PCAP</A>'
ComSec2_Menu[29]='<a class="whitelink" href="https://malware-traffic-analysis.net">malware-traffic-analysis.net PCAPs</A>'
ComSec2_Menu[30]='<a class="whitelink" href="http://www.netresec.com/?page=PcapFiles">NETRESECs Huge PCAP Repo List</A>'
ComSec2_Menu[31]='<a class="whitelink" href="http://www.secrepo.com/">SecRepo.com PCAPs/Logs</A>'
ComSec2_Menu[32]='<a class="whitelink" href="https://wiki.wireshark.org/SampleCaptures">WS Wiki sample PCAPs</A>'
ComSec2_Menu[33]='<a class="whitelink" href="https://www.bro.org/community/traces.html">Bro Project - Packet Traces</A>'









var ComSec_Menu=new Array()
ComSec_Menu[0]='<span class="yellowsans">Security News</span>'
ComSec_Menu[2]='<a class="whitelink" href="https://www.eff.org/deeplinks">EFFs Deeplinks</A>'
ComSec_Menu[3]='<a class="whitelink" href="http://thehackernews.com/">The Hacker News</A>'
ComSec_Menu[4]='<a class="whitelink" href="http://krebsonsecurity.com">Krebs on Security</A>'
ComSec_Menu[5]='<a class="whitelink" href="http://www.csoonline.com">IDGs CSO Online</A>' 
ComSec_Menu[6]='<a class="whitelink" href="http://www.darkreading.com">UBMs Dark Reading</A>'
ComSec_Menu[7]='<a class="whitelink" href="https://threatpost.com/">Kaspersky ThreatPost</A>'
ComSec_Menu[8]='<a class="whitelink" href="http://www.theregister.co.uk/security/">The Register- Security</A>'
ComSec_Menu[9]='<a class="whitelink" href="http://www.networkworld.com/category/security">Network World- Security</A>'
ComSec_Menu[10]='<a class="whitelink" href="http://arstechnica.com/security/">ArsTechnica- Risk Assessment</A>'
ComSec_Menu[11]='<a class="whitelink" href="http://www.LinuxSecurity.com/">LinuxSecurity.com</a>'
ComSec_Menu[12]='<a class="whitelink" href="http://www.net-security.org/">Help Net Security</a>'


ComSec_Menu[13]='<a class="whitelink" href="http://blogs.cisco.com/security/">Cisco Security blog</A>'
ComSec_Menu[14]='<a class="whitelink" href="https://blog.malwarebytes.com/">MalwareBytes blog</A>'
ComSec_Menu[15]='<a class="whitelink" href="http://blog.trendmicro.com/trendlabs-security-intelligence/">TrendMicro TrendLabs blog</A>'
ComSec_Menu[16]='<a class="whitelink" href="https://www.virustotal.com/en/community/">VirusTotal Community blog</A>'
ComSec_Menu[17]='<a class="whitelink" href="http://www.darknet.org.uk/">darknet.org.uk</A>'
ComSec_Menu[18]='<a class="whitelink" href="http://sanesecurity.blogspot.co.uk/">Sanesecurity</A>'
ComSec_Menu[19]='<a class="whitelink" href="http://blog.didierstevens.com/">Didier Stevens blog</A>'


ComSec_Menu[20]='<span class="yellowsans">Stds and Regulatory Compliance</span>'
ComSec_Menu[21]='<a class="whitelink" href="http://csrc.nist.gov/groups/SMA/fisma/library.html">NIST FISMA Library (FIPS, SP) </a>'
ComSec_Menu[22]='<a class="whitelink" href="http://www.iso.org/iso/home/standards/management-standards/iso27001.htm">ISO/IEC 27001 ISMS</A>'
ComSec_Menu[23]='<a class="whitelink" href="http://www.nerc.com/pa/Stand/Pages/CIPStandards.aspx">NERC - CIP Standards</A>'
ComSec_Menu[24]='<a class="whitelink" href="https://www.cisecurity.org/critical-controls/Library.cfm">CIS Critical Security Controls</A>'
ComSec_Menu[25]='<a class="whitelink" href="http://www.commoncriteriaportal.org/">Common Criteria Project</a>'
ComSec_Menu[25]='<a class="whitelink" href="https://www.niap-ccevs.org/Documents_and_Guidance/cc_docs.cfm?&CFID=234674743&CFTOKEN=a1286abbecbc80e1-FAF43419-F1CE-967E-90A6181F2B97C7C6">Common Criteria v3.1 Docs</A>'
ComSec_Menu[26]='<a class="whitelink" href="http://www.isaca.org/cobit/pages/default.aspx">ISACA COBIT5 Framework</A>'
ComSec_Menu[27]='<a class="whitelink" href="https://www.pcisecuritystandards.org/document_library">PCI Security Standards Council</a>'
ComSec_Menu[28]='<a class="whitelink" href="https://pcicompliance.stanford.edu/">PCI DSS at Stanford</a>'
ComSec_Menu[29]='<a class="whitelink" href="http://www.hhs.gov/hipaa/for-professionals/index.html">HIPAA at HHS.gov</A>'
ComSec_Menu[30]='<a class="whitelink" href="https://www.cms.gov/Regulations-and-Guidance/Administrative-Simplification/HIPAA-ACA/index.html">HIPAA at CMS.gov</A>'
ComSec_Menu[31]='<a class="whitelink" href="http://www.coso.org/guidance.htm">COSO for SOX Compliance, ERM</A>'
ComSec_Menu[32]='<a class="whitelink" href="https://gdpr-info.eu/">GDPR- EU Gen Data Protection</A>'

ComSec_Menu[33]='<a class="whitelink" href="http://www.experian.com/corporate/vendors.html">EI3PA - Experian Assessment</A>'
ComSec_Menu[34]='<a class="whitelink" href="https://www.redspin.com/it-security-blog/2011/01/understanding-the-experian-independent-third-party-assessment-ei3pa-requirements-2/">(More about EI3PA)</A>'
ComSec_Menu[35]='<a class="whitelink" href="https://cloudsecurityalliance.org/group/consensus-assessments/">CAI/CCM Assessment</A>'
ComSec_Menu[36]='<a class="whitelink" href="https://www.ssae-16.com/">SSAE-16, SSAE-18 (SOC1-3)</A>'
ComSec_Menu[37]='<a class="whitelink" href="https://www.law.cornell.edu/rules/fre">Fed Rules of Evidence (Cornell U)</A>' 
ComSec_Menu[38]='<a class="whitelink" href="https://www.law.cornell.edu/rules/frcp">Fed Rules of Civil Procedure</a>'
ComSec_Menu[39]='<a class="whitelink" href="https://www.swgde.org/documents">Sci Working Group Digit Evid</a>'





var Malware_Menu=new Array()
Malware_Menu[0]='<span class="yellowsans">Online Malware Analysis (upload)</span>'
Malware_Menu[1]='<a class="whitelink" href="https://www.virustotal.com/">VirusTotal</A>'
Malware_Menu[2]='<a class="whitelink" href="https://totalhash.cymru.com">TotalHash (Team Cymru)</A>'
Malware_Menu[3]='<a class="whitelink" href="https://www.hybrid-analysis.com/">Hybrid Analysis</A>'
Malware_Menu[4]='<a class="whitelink" href="https://malwr.com/analysis/search/">Malwr.com</A>'
Malware_Menu[5]='<a class="whitelink" href="https://www.malwareviz.com/">MalwareViz (use w/ Malwr)</a>'
Malware_Menu[6]='<a class="whitelink" href="http://sandbox.pikker.ee/">Cuckoo Sandbox</a>'
Malware_Menu[7]='<a class="whitelink" href="http://detux.org/">Detux Sandbox (Linux-specific)</a>' 
Malware_Menu[8]='<a class="whitelink" href="https://www.joesandbox.com/">Joe Sandbox Cloud</a>'
Malware_Menu[9]='<a class="whitelink" href="https://www.vicheck.ca/">ViCheck (Office files and PDFs)</a>' 
// http://www.systemlookup.com/">SystemLookup filename DB</A>'
Malware_Menu[10]='<a class="whitelink" href="https://zeltser.com/malware-analysis-tool-frameworks/">LZeltsers REMnux</A>'

Malware_Menu[11]='<span class="yellowsans">Scan URLs for Web-based Malware</span>'
Malware_Menu[12]='<a class="whitelink" href="https://www.threatminer.org/">ThreatMiner Aggregator</A>'
Malware_Menu[13]='<a class="whitelink" href="https://threatcrowd.org">AlienVault ThreatCrowd</A>'
Malware_Menu[14]='<a class="whitelink" href="http://threatglass.com/">Threatglass URL scan</A>'
Malware_Menu[15]='<a class="whitelink" href="http://urlquery.net/">URLQuery malware scan</A>'
Malware_Menu[16]='<a class="whitelink" href="https://sitecheck.sucuri.net/">Securi SiteCheck</A>'
Malware_Menu[17]='<a class="whitelink" href="http://www.internetofficer.com/seo-tool/redirect-check/">URL Redirect Checker</A>'

Malware_Menu[18]='<span class="yellowsans">URL blocklists</span>'
Malware_Menu[19]='<a class="whitelink" href="https://www.spamhaus.org">Spamhaus Project (blocklists)</A>'
Malware_Menu[20]='<a class="whitelink" href="http://www.phishtank.com/">PhishTank tracker</A>'
Malware_Menu[21]='<a class="whitelink" href="http://multirbl.valli.org/">MultiRBL</A>'
Malware_Menu[22]='<a class="whitelink" href="https://zeltser.com/malicious-ip-blocklists/">LZeltsers List of BL sites</A>'

Malware_Menu[23]='<span class="yellowsans">CVE - Vulnerability Advisories</span>'
Malware_Menu[24]='<a class="whitelink" href="http://www.securiteam.com">SecuriTeam</A>'
Malware_Menu[25]='<a class="whitelink" href="http://www.securitytracker.com/">SecurityTracker</a>'
Malware_Menu[26]='<a class="whitelink" href="http://www.securityfocus.com/">SecurityFocus</a>'
Malware_Menu[27]='<a class="whitelink" href="http://www.talosintelligence.com">Cisco Talos</A>'
Malware_Menu[28]='<a class="whitelink" href="https://isc.sans.edu/">SANS Internet Storm Ctr</A>'
Malware_Menu[29]='<a class="whitelink" href="http://www.cvedetails.com/">CVE Details</A>'
Malware_Menu[30]='<a class="whitelink" href="https://cve.mitre.org/">Mitre.org CVE</a>' 
Malware_Menu[31]='<a class="whitelink" href="http://cwe.mitre.org/">Mitre.org CWE</A>'
Malware_Menu[32]='<a class="whitelink" href="https://attack.mitre.org/wiki/Main_Page">Mitre.org ATT&amp;CK wiki</A>'
Malware_Menu[33]='<a class="whitelink" href="http://nvd.nist.gov">NIST Natl Vuln DB</A>'
Malware_Menu[34]='<a class="whitelink" href="https://www.exploit-db.com"/>OffSecs ExploitDB</A>'
Malware_Menu[35]='<a class="whitelink" href="http://www.kb.cert.org/vuls/"/>CMU-CERT Vuln Notes DB</A>'
























var Firewall_Menu=new Array()
Firewall_Menu[0]='<span class="yellowsans">Cisco Firewalls</span>'
Firewall_Menu[1]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/security/adaptive-security-appliance-asa-software/tsd-products-support-series-home.html">Cisco ASA Support main</A>'
Firewall_Menu[2]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/security/asa-5500-series-next-generation-firewalls/products-command-reference-list.html">Cisco ASA Command Refs</A>'
Firewall_Menu[3]='<a class="whitelink" href="http://www.cisco.com/c/en/us/support/security/asa-5500-series-next-generation-firewalls/products-installation-and-configuration-guides-list.html">ASA/ASDM Configuration Guides</A>'

Firewall_Menu[4]='<span class="yellowsans">pfSense Resources</span>'
Firewall_Menu[5]='<a class="whitelink" href="https://www.pfsense.org">pfSense Main</A>'
Firewall_Menu[6]='<a class="whitelink" href="https://doc.pfsense.org/">pfSense docs</A>'
Firewall_Menu[7]='<a class="whitelink" href="https://forum.pfsense.org/">pfSense Forum</A>'
Firewall_Menu[8]='<a class="whitelink" href="http://pfsensesetup.com/">pfSense Setup HQ</A>'

Firewall_Menu[9]='<span class="yellowsans">Linux FW/ NIDS/ HIDS</span>'
Firewall_Menu[10]='<a class="whitelink" href="http://www.netfilter.org">netfilter.org --iptables --ipset</A>'
Firewall_Menu[11]='<a class="whitelink" href="https://selinuxproject.org/page/Main_Page">SELinux Project Wiki</A>'
Firewall_Menu[12]='<a class="whitelink" href="https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html-single/SELinux_Users_and_Administrators_Guide/index.html">RH SELinux Guide</a>'
Firewall_Menu[13]='<a class="whitelink" href="https://www.snort.org/downloads/#rule-downloads">Snort Rules download</a>'
Firewall_Menu[14]='<a class="whitelink" href="http://commons.oreilly.com/wiki/index.php/Snort_Cookbook">Snort Cookbook @ OReilly</A>'

Firewall_Menu[15]='<span class="yellowsans">Monitoring - Logging - SIEM</span>'

Firewall_Menu[16]='<a class="whitelink" href="http://www.zabbix.org/">Zabbix wiki</A>'
Firewall_Menu[17]='<a class="whitelink" href="https://support.nagios.com/forum/">Nagios forums</a>'
Firewall_Menu[18]='<a class="whitelink" href="https://library.nagios.com/">Nagios Library</a>'
Firewall_Menu[19]='<a class="whitelink" href="https://exchange.nagios.org/">Nagios Exchange</A>'
Firewall_Menu[20]='<a class="whitelink" href="https://www.monitoring-plugins.org/">Monitoring-Plugins.org</A>'
Firewall_Menu[21]='<a class="whitelink" href="https://forum.centreon.com/">Centreon forums</a>'

Firewall_Menu[22]='<a class="whitelink" href="https://docs.tenable.com/">Tenable docs</a>'
Firewall_Menu[23]='<a class="whitelink" href="https://community.rapid7.com/">Rapid7 Community</a>'
Firewall_Menu[24]='<a class="whitelink" href="https://www.alienvault.com/forums/">AlienVault forums</A>'
Firewall_Menu[25]='<a class="whitelink" href="https://www.alienvault.com/resource-center">AlienVault Resource Center</A>'
Firewall_Menu[26]='<a class="whitelink" href="https://barncat.fidelissecurity.com/">Fidelis Barncat</A>'
Firewall_Menu[27]='<a class="whitelink" href="https://www.fidelissecurity.com/resources/">Fidelis Resources</A>'

Firewall_Menu[28]='<a class="whitelink" href="https://live.paloaltonetworks.com/">Palo Alto Networks Live</A>'
Firewall_Menu[29]='<a class="whitelink" href="http://docs.net.com/fortigate/admin-guides">Fortinet Document Library</a>'
Firewall_Menu[30]='<a class="whitelink" href="http://help.fortinet.com/cli/fos50hlp/56/index.htm">FortiOS 5.6 CLI Reference</A>'
 // https://www.youtube.com/user/SecureNetworks/playlists
 // https://www.youtube.com/user/SecureNetworks/videos
 // https://www.fortinet.com/fortidemo.htmlui.html
 
Firewall_Menu[31]='<a class="whitelink" href="https://community.fireeye.com/">FireEye Community/ Kbase</A>'
Firewall_Menu[32]='<a class="whitelink" href="https://community.qualys.com">Qualys Community</a>'
Firewall_Menu[33]='<a class="whitelink" href="https://www-947.ibm.com/support/entry/portal/product/ibm_security/ibm_security_qradar_siem?productContext=387411221">IBM QRadar SIEM Support</a>'
Firewall_Menu[34]='<a class="whitelink" href="https://www-947.ibm.com/support/entry/portal/product/ibm_security/ibm_security_support_%28general%29">IBM Security support- general</A>'
Firewall_Menu[35]='<a class="whitelink" href="https://www.protect724.hpe.com/">HPE Protect724 Community</a>'

Firewall_Menu[36]='<span class="yellowsans">(More-entire menu needs sorting)</span>'
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
Firewall_Menu[48]='<a class="whitelink" href="https://securityonion.net/">Security Onion</a>'


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

// MSStuff_Menu[]='<span class="yellowsans">Azure Resources</span>'
// MSStuff_Menu[33]='<a class="whitelink" href="https://azure.microsoft.com/en-us/documentation/">Microsoft Azure docs</a>'
// MSStuff_Menu[34]='<a class="whitelink" href="https://azure.microsoft.com/en-us/support/forums/">Azure Forums</a>'
// MSStuff_Menu[35]='<a class="whitelink" href="https://https://docs.microsoft.com/en-us/azure/xplat-cli-install">Azure CLI Install</A>'



MSStuff_Menu[23]='<span class="yellowsans">Unofficial MS Sites</span>'
MSStuff_Menu[24]='<a class="whitelink" href="http://www.activewin.com">ActiveWin</a>'
MSStuff_Menu[25]='<a class="whitelink" href="http://www.wininsider.com/">WinInsider</A>'
MSStuff_Menu[26]='<a class="whitelink" href="http://www.annoyances.org/">Windows Annoyances</a>'
MSStuff_Menu[27]='<a class="whitelink" href="http://www.petri.com">Petri IT Kbase</A>'

MSStuff_Menu[28]='<a class="whitelink" href="http://computerperformance.co.uk/">Guy Thomas - Computer Perf LTD</a>'
MSStuff_Menu[29]='<a class="whitelink" href="http://itproguru.com/">Dan Stolts - ITProGuru.com</A>'




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
MSStuff_Menu2[36]='<a class="whitelink" href="https://azure.microsoft.com/en-us/resources/">Azure Resource Center</A>'
MSStuff_Menu2[37]='<a class="whitelink" href="https://github.com/Azure">Azure at GittHub</A>'

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

var NewsMain_Menu=new Array()
NewsMain_Menu[0]='<span class="yellowsans">News Outlets</span>'
NewsMain_Menu[1]='<a class="whitelink" href="http://www.realclearpolitics.com/epolls/latest_polls/">RCPs Polling Aggregation</A>'
NewsMain_Menu[2]='<a class="whitelink" href="http://news.google.com/">Google News</a>'
NewsMain_Menu[3]='<a class="whitelink" href="http://news.yahoo.com/">Yahoo News</a>'
NewsMain_Menu[4]='<a class="whitelink" href="http://www.findarticles.com/">CBSi FindArticles</a>'
NewsMain_Menu[5]='-----------'
NewsMain_Menu[6]='<a class="whitelink" href="http://www.c-span.org">C-SPAN</a>'
NewsMain_Menu[7]='<a class="whitelink" href="http://www.reuters.com/">Reuters</A>'
NewsMain_Menu[8]='<a class="whitelink" href="http://customwire.ap.org">AP Wire</a>'
NewsMain_Menu[9]='<a class="whitelink" href="http://news.npr.org/">Natl Public Radio</a>'
NewsMain_Menu[10]='<a class="whitelink" href="http://news.bbc.co.uk/">BBC Online</a>'
NewsMain_Menu[11]='<a class="whitelink" href="http://www.cnn.com/">CNN Online</a>'
NewsMain_Menu[12]='<a class="whitelink" href="http://www.aljazeera.com/">Al Jazeera</A>'
NewsMain_Menu[13]='<a class="whitelink" href="http://www.dw.com">Deutsche-Welle</A>'

NewsMain_Menu[14]='<a class="whitelink" href="https://theintercept.com/">The Intercept</A>'
NewsMain_Menu[15]='<a class="whitelink" href="http://www.nytimes.com">NY Times</a>'
NewsMain_Menu[16]='<a class="whitelink" href="http://www.washingtonpost.com">Washington Post</a>'
NewsMain_Menu[17]='<a class="whitelink" href="http://online.wsj.com/public/us">Wall St Journal</a>'
NewsMain_Menu[18]='<a class="whitelink" href="http://www.indymedia.org">Independent Media Center</a>'

NewsMain_Menu[19]='<a class="whitelink" href="http://www.theregister.co.uk/">The Register</a>'
NewsMain_Menu[20]='<a class="whitelink" href="http://www.slashdot.org/">/. SlashDot&nbsp; /.</a>'
NewsMain_Menu[21]='<a class="whitelink" href="http://www.arstechnica.com/">ArsTechnica</a>'
NewsMain_Menu[22]='<a class="whitelink" href="http://www.techweb.com/">TechWeb</a>'
NewsMain_Menu[23]='<a class="whitelink" href="http://www.cmp.com/">CMP Media</a>'
NewsMain_Menu[24]='<a class="whitelink" href="http://www.zdnet.com/">CBSi - ZDNet</a>'
NewsMain_Menu[25]='<a class="whitelink" href="http://www.cnet.com/">CBSi - C|Net</a>'
NewsMain_Menu[26]='<a class="whitelink" href="http://www.internet.com/">Internet.com</a>'
NewsMain_Menu[27]='<a class="whitelink" href="http://www.techgenix.com/">TechGenix</A>'
NewsMain_Menu[28]='<a class="whitelink" href="http://www.datafuse.net/">DataFuse</a>'


var Science_Menu=new Array()
Science_Menu[0]='<span class="yellowsans">Science News and Resources</span>'
Science_Menu[1]='<a class="whitelink" href="http://www.sciencedaily.com/">Science Daily</a>'
Science_Menu[2]='<a class="whitelink" href="http://www.sciencemag.org/news">Science Magazine News</A>'
Science_Menu[3]='--------------------------------'
Science_Menu[4]='<a class="whitelink" href="http://www.science.gov/">Science.gov Gateway</a>'
Science_Menu[5]='<a class="whitelink" href="http://www.nasa.gov">NASA</A>'
Science_Menu[6]='<A class="whitelink" HREF="http://www.planetary.org/">The Planetary Society</A>'
Science_Menu[7]='<A class="whitelink" HREF="http://www.chemnetbase.com/">ChemNetBase</A>'
Science_Menu[8]='<a class="whitelink" href="http://www.physicsweb.org/resources/Reference/Data_and_constants/">PhysicsWeb- Data and Constants</a>'
Science_Menu[9]='<a class="whitelink" href="http://ie.lbl.gov/">The LBL Isotopes Project</a>'
Science_Menu[10]='<a class="whitelink" href="http://physics.nist.gov/cuu/index.html">NIST Physics Reference</a>'
Science_Menu[11]='<a class="whitelink" href="http://t2.lanl.gov/">T-2 Nuclear Information Service</a>'
Science_Menu[12]='<A class="whitelink" HREF="http://livingtextbook.oregonstate.edu/">LivingTextbook of Nuclear Chem</A>'
Science_Menu[13]='<A class="whitelink" HREF="http://ie.lbl.gov/education/glossary/glossaryf.htm">LBL Glossary of Nuclear Science</A>'
Science_Menu[14]='See also "Medical"'

var Medical_Menu=new Array()
Medical_Menu[0]='<span class="yellowsans">Medical News and Resources</span>'
Medical_Menu[1]='<A class="whitelink" HREF="http://www.nlm.nih.gov/">U.S. Natl Library of Medicine</a>'
Medical_Menu[2]='<A class="whitelink" HREF="http://wonder.cdc.gov/">CDC: Epidemiologic Research</A>'
Medical_Menu[3]='<A class="whitelink" HREF="http://www.gdb.org/">The Human Genome Database</A>'
Medical_Menu[4]='<A class="whitelink" HREF="http://www.innerbody.com/">InnerBody.com</a>' 
Medical_Menu[5]='<A class="whitelink" HREF="http://www.med.harvard.edu/AANLIB/home.html">Harvard Whole Brain Atlas</A>'
Medical_Menu[6]='<A class="whitelink" HREF="http://www.up.univ-mrs.fr/~wabim/english/biology.html">ABIM Biological Index</A>'
Medical_Menu[7]='<A class="whitelink" HREF="http://www.healthcentral.com/library/library.cfm">HealthCentral</a>'
Medical_Menu[8]='<A class="whitelink" HREF="http://www.coloradohealthnet.org/">Colorado HealthNet</a>'
Medical_Menu[9]='<A class="whitelink" HREF="http://www.ama-assn.org/">American Medical Association</a>'
Medical_Menu[10]='<A class="whitelink" HREF="http://www.who.ch/">World Health Organization</a>'
Medical_Menu[11]='<A class="whitelink" HREF="http://www.parasolemt.com.au/">Parasol EMT Australia</a>'
Medical_Menu[12]='<A class="whitelink" HREF="http://www.thehealthencyclopedia.com/">Concise Health Encyclopedia</a>'
// Medical_Menu[13]='<a class="whitelink" href="http://www.rxlist.com">RxList</A>'
// Medical_Menu[15]='<a class="whitelink" href="http://www.mayoclinic.org/">MayoClinic</A>'

var Legal_Menu=new Array()
Legal_Menu[0]='<span class="yellowsans">Legal News and Resources</span>'
Legal_Menu[1]='<a class="whitelink" href="http://www.alllaw.com/">AllLaw</A>'
Legal_Menu[2]='<a class="whitelink" href="http://www.catalaw.com/">CataLaw</A>'
Legal_Menu[3]='<a class="whitelink" href="http://lp.findlaw.com/">FindLaw</A>'
Legal_Menu[6]='<a class="whitelink" href="https://www.law.cornell.edu/">Cornell Law - Legal Info Inst.</A>'
Legal_Menu[7]='<a class="whitelink" href="https://law.duke.edu/lib/researchguides/intresearch/">Duke Law - Legal Research on the Web</A>'
Legal_Menu[8]='<a class="whitelink" href="http://www.legaldirectories.com/">Legal Directories Publishing Co.</A>'
Legal_Menu[9]='<a class="whitelink" href="https://www.justice.gov/criminal-ccips">US DOJ Computer Crime (CCIPS)</A>'
Legal_Menu[10]='------------------------'
Legal_Menu[11]='<a class="whitelink" href="http://news.findlaw.com">FindLaw News</a>'
Legal_Menu[12]='------------------------'
Legal_Menu[13]='<a class="whitelink" href="http://www.abanet.org/">American Bar Assoc.</A>'
Legal_Menu[14]='<a class="whitelink" href="http://www.abanet.org/legalservices/lris/directory.html">ABA Lawyer Referal</A>'
Legal_Menu[15]='<a class="whitelink" href="http://www.aclu.org/">ACLU</A>'

var USGrps_Menu=new Array()
USGrps_Menu[0]='<span class="yellowsans">US Journalism and Groups</span>'
USGrps_Menu[1]='<a class="whitelink" href="http://www.alternet.org/">AlterNet</A>'
USGrps_Menu[2]='<a class="whitelink" href="http://www.thenation.com/">The Nation</A>'
USGrps_Menu[3]='<a class="whitelink" href="http://www.motherjones.org/">Mother Jones</a>'
USGrps_Menu[4]='<a class="whitelink" href="http://www.utne.com/">UTNE Reader</a>'
USGrps_Menu[5]='<a class="whitelink" href="http://www.progressive.org/">The Progressive</a>'
USGrps_Menu[6]='<a class="whitelink" href="http://www.adbusters.org/">AdBusters Online</A>'
USGrps_Menu[7]='<a class="whitelink" href="http://www.fair.org/extra/">Extra! from FAIR</a>'
USGrps_Menu[8]='<a class="whitelink" href="http://www.zmag.org/">ZNet - Z Magazine</a>'
USGrps_Menu[9]='<a class="whitelink" href="http://www.ainfos.ca/">A-Infos Archives</A>'
USGrps_Menu[10]='<a class="whitelink" href="http://www.judibari.org/">www.JudiBari.org</a>'
USGrps_Menu[11]='<a class="whitelink" href="http://www.earthfirstjournal.org/">Earth First! Journal</a>'
USGrps_Menu[12]='<a class="whitelink" href="http://www.iww.org/">I.W.W.- Industrial Worker</A>'
USGrps_Menu[13]='<a class="whitelink" href="http://www.worldmedia.com/caq/">Covert Action Quarterly</a>'
USGrps_Menu[14]='<a class="whitelink" href="http://www.multinationalmonitor.org/">The Multinational Monitor</A>'
USGrps_Menu[15]='<a class="whitelink" href="http://www.igc.apc.org/">IGC/APC Progressive Directory</A>'
USGrps_Menu[16]='<a class="whitelink" href="http://www.thismodernworld.com/">This Modern World (Tom Tomorrow)</A>'


var TxGrps_Menu=new Array()
TxGrps_Menu[0]='<span class="yellowsans">Texas Journalism and Groups</span>'
TxGrps_Menu[1]='<a class="whitelink" href="http://UTWatch.org/">UT Watch (University of Texas)</a>'
TxGrps_Menu[2]='<a class="whitelink" href="http://www.tpj.org">Texans for Public Justice</a>'
TxGrps_Menu[3]='<a class="whitelink" href="http://ProgressiveAustin.org">ProgressiveAustin.org</A>'
TxGrps_Menu[4]='<a class="whitelink" href="http://www.texansforpeace.org">Texans For Peace</a>'
TxGrps_Menu[5]='<a class="whitelink" href="http://lonestar.sierraclub.org">Texas Sierra Club</a>'
TxGrps_Menu[6]='<A class="whitelink" HREF="http://www.citizen.org/texas/">Public Citizen, Tx Ofc</a>'


var Politics_Menu=new Array()
Politics_Menu[0]='<span class="yellowsans">General Politics</span>'
Politics_Menu[1]='<a class="whitelink" href="http://www.moveon.org/">MoveOn.org</A>'
Politics_Menu[2]='<a class="whitelink" href="http://www.democracynow.org">Democracy Now</a>'
Politics_Menu[3]='<a class="whitelink" href="http://www.peaceaction.org">Peace Action</a>'
Politics_Menu[4]='<a class="whitelink" href="http://www.veteransforpeace.org/">Veterans for Peace</A>'
Politics_Menu[5]='<a class="whitelink" href="http://www.amnesty.org/">Amnesty International</A>'
Politics_Menu[6]='<a class="whitelink" href="http://www.commondreams.org">Common Dreams</a>'
Politics_Menu[7]='<a class="whitelink" href="http://www.truthout.org">TruthOut</a>'
Politics_Menu[8]='<a class="whitelink" href="http://www.antiwar.com">AntiWar.com</a>'
Politics_Menu[9]='<a class="whitelink" href="http://www.ellsberg.net">Daniel Ellsberg</a>'
Politics_Menu[10]='<a class="whitelink" href="http://www.truthtellingproject.org">Truth Telling Project</a>'


var CleanE_Menu=new Array()
CleanE_Menu[0]='<span class="yellowsans">Clean Energy</span>'
CleanE_Menu[1]='<A class="whitelink" HREF="http://www.txses.org/">Tx Solar Energy Society</a>'
CleanE_Menu[2]='<A class="whitelink" HREF="http://www.solaraustin.org/">www.SolarAustin.org</a>'
CleanE_Menu[3]='<A class="whitelink" HREF="http://www.seedcoalition.org/">Texas SEED Coalition</a>'
CleanE_Menu[4]='<A class="whitelink" HREF="http://www.citizen.org/texas/">Public Citizen, Tx Ofc</a>'
CleanE_Menu[5]='<A class="whitelink" HREF="http://www.powertochoose.org/">Texas Public Utility Comm</A>'	
CleanE_Menu[6]='<A class="whitelink" HREF="http://www.seco.cpa.state.tx.us/">Tx SECO</A>' 
CleanE_Menu[7]='<A class="whitelink" HREF="http://www.infinitepower.org/">InfinitePower.org</a>'	
CleanE_Menu[8]='<a class="whitelink" href="http://www.safeenergy.org/">Safe Energy Comm. Council (SECC)</a>'
CleanE_Menu[9]='<A class="whitelink" HREF="http://www.ush2.com/">American Hydrogen Assn</a>'
CleanE_Menu[10]='<A class="whitelink" HREF="http://www.usfcc.com/">US Fuel Cells Council</a>'
CleanE_Menu[11]='<A class="whitelink" HREF="http://www.fuelcellstexas.org/">Fuel Cells Texas</a>'
CleanE_Menu[12]='<A class="whitelink" HREF="http://www.fuelcelltoday.com">Fuel Cell Today</a>'
CleanE_Menu[13]='<A class="whitelink" HREF="http://www.fuelcells.org/">FuelCells.org</a>'
	

var Nuke_Menu=new Array()
Nuke_Menu[0]='<span class="yellowsans">Nuclear Issues</span>'
Nuke_Menu[1]='<a class="whitelink" href="http://www.ieer.org/">Inst for Energy and Environ Resrch</a>'
Nuke_Menu[2]='<a class="whitelink" href="http://www.antenna.nl/wise">World Info Svc on Energy (WISE)</a>'
Nuke_Menu[3]='<a class="whitelink" href="http://www.nirs.org">Nuclear Info Resource Svc (NIRS)</a>'
Nuke_Menu[4]='<a class="whitelink" href="http://www.space4peace.org/">Space4Peace.org- Nukes in Space</a>'
Nuke_Menu[5]='<a class="whitelink" href="http://www.bullatomsci.org/">Bulletin of the Atomic Scientist</a> '
Nuke_Menu[6]='<a class="whitelink" href="http://www.psr.org">Physicians for Social Responsibility</a> '
Nuke_Menu[7]='<a class="whitelink" href="http://www.ucsusa.org/">Union of Concerned Scientists</a> '
Nuke_Menu[8]='<a class="whitelink" href="http://www.citizen.org/cmep/">Public Citizen CMEP</a>'
Nuke_Menu[9]='<a class="whitelink" href="http://www.shundahai.org/">Shundahai Network</a>'
Nuke_Menu[10]='<a class="whitelink" href="http://www.nuclearfiles.org/">Nuclear Age Peace Foundation</a>'
Nuke_Menu[11]='<a class="whitelink" href="http://www.texasradiation.org/">Texas Radiation Online</a>'
Nuke_Menu[12]='<a class="whitelink" href="http://www.stand-texas.org/">Texas STAND</a>'
Nuke_Menu[13]='<a class="whitelink" href="http://www.sric.org/">SRIC, New Mexico</a>'
Nuke_Menu[14]='<a class="whitelink" href="http://www.cardnm.org/">CARD, New Mexico</a>'
Nuke_Menu[15]='<a class="whitelink" href="http://www.nukewatch.org/">NukeWatch, New Mexico</a>'
Nuke_Menu[16]='-----------'
Nuke_Menu[17]='<a class="whitelink" href="http://www.tceq.state.tx.us/nav/permits/rw.html">TCEQ LLW Disposal Policy</a>'
Nuke_Menu[18]='<a class="whitelink" href="http://www.tdh.state.tx.us/radiation/">TDH, Bureau of Radiation Ctrl</a>'
Nuke_Menu[19]='<a class="whitelink" href="http://www.tdh.state.tx.us/radiation/TRABhomepage.htm">Tx Radiation Advisory Board</a>'
Nuke_Menu[20]='<a class="whitelink" href="http://www.nrc.gov/">Nuclear Regulatory Commission</a>'
Nuke_Menu[21]='<a class="whitelink" href="http://www.osti.gov/">DOE EnergyFiles: OSTI Search</a>'
Nuke_Menu[22]='<a class="whitelink" href="http://cid.em.doe.gov/">DOE Central Internet Database</A>'
Nuke_Menu[23]='<a class="whitelink" href="http://www.eia.doe.gov/emeu/states/_states.html">DOE - Energy Info Administration</A>'
Nuke_Menu[24]='<a class="whitelink" href="http://www.directives.doe.gov/">DOE Directives Portal</a>'
Nuke_Menu[25]='<a class="whitelink" href="http://legacystory.apps.em.doe.gov/">DOE EM: The Legacy Story</a>'
Nuke_Menu[26]='<a class="whitelink" href="http://www.lm.doe.gov">DOE Office of Legacy Mgmt</a>'
//Nuke_Menu[27]='<a class="whitelink" href="http://www.umrc.net/index.asp">Uranium Medical Research Centre</a>'
//Nuke_Menu[28]='<a class="whitelink" href="http://www.cadu.org.uk/">Campaign Against Deleted Uranium</a>'
//Nuke_Menu[29]='<a class="whitelink" href="http://www.ngwrc.org/">National Gulf War Resource Center</A>'
//Nuke_Menu[30]='<a class="whitelink" href="http://www.i-dust.org/">Intl Depleted Uranium Study Team</a>'
//Nuke_Menu[31]='<A class="whitelink" href="http://www.miltoxproj.org/">Military Toxics Project</A>'



var Widget_Menu=new Array()
Widget_Menu[0]='<span class="yellowsans">Converters and Tools</span>'
Widget_Menu[1]='<a class="whitelink" href="http://www.google.com/about/products/">Google Tools</a>'
Widget_Menu[2]='<a class="whitelink" href="http://www.itools.com/">iTools</A>'
Widget_Menu[5]='<a class="whitelink" href="http://www.convertit.com">ConvertIt</a>'
Widget_Menu[6]='<A class="whitelink" HREF="http://www.onlineconversion.com/">OnlineConversion</A>'
Widget_Menu[7]='<a class="whitelink" href="http://www.webelements.com">WebElements</a>'


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


