
	
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
WebS_Menu[0]='<B>Web Searches</B>'
WebS_Menu[2]='<a class="whitelink" href="https://duckduckgo.com/">DuckDuckGo</A>'
WebS_Menu[3]='<a class="whitelink" href="http://yippy.com/">Yippy (Clusty)</a>'
WebS_Menu[4]='<a class="whitelink" href="http://www.zoo.com/">Zoo Metasearch</A>'
WebS_Menu[5]='<a class="whitelink" href="http://www.ixquick.com/">Ixquick private search</A>'
WebS_Menu[6]='<a class="whitelink" href="http://www.wolframalpha.com/">Wolfram Alpha</A>'
WebS_Menu[8]='<a class="whitelink" href="http://searchenginewatch.com/">Search Engine Watch (SEO)</a>'
WebS_Menu[9]='<a class="whitelink" href="http://www.internetmarketingninjas.com">InternetMarketingNinjas.com</a>'
WebS_Menu[10]='<B>Web Indicies</B>'
WebS_Menu[11]='<a class="whitelink" href="http://www.archive.org/">The Internet Archive</a>'
WebS_Menu[12]='<a class="whitelink" href="http://dmoz.org">The DMOZ Open Directory Project</a>'
WebS_Menu[13]='<a class="whitelink" href="http://vlib.org/">The WWW Virtual Library</a>'
WebS_Menu[14]='<a class="whitelink" href="http://web.archive.org/">The Way Back Machine</A>'
WebS_Menu[15]='<B>File Searches</B>'
WebS_Menu[16]='<a class="whitelink" href="http://www.filesearching.com/advanced/">FileSearching</a>'
WebS_Menu[17]='<a class="whitelink" href="http://www.filewatcher.org">FileWatcher</a>'
WebS_Menu[18]='<a class="whitelink" href="http://www.driverguide.com/">DriverGuide.com</A>'






var WebI_Menu=new Array()
WebI_Menu[0]='<B>Web Indicies</B>'
WebI_Menu[1]='<a class="whitelink" href="http://www.archive.org/">The Internet Archive</a>'
WebI_Menu[2]='<a class="whitelink" href="http://dmoz.org">The DMOZ Open Directory Project</a>'
WebI_Menu[3]='<a class="whitelink" href="http://vlib.org/">The WWW Virtual Library</a>'
WebI_Menu[4]='<a class="whitelink" href="http://web.archive.org/">The Way Back Machine</A>'

var FileS_Menu=new Array()
FileS_Menu[0]='<B>File Searches</B>'
FileS_Menu[1]='<a class="whitelink" href="http://www.filesearching.com/advanced/">FileSearching</a>'
FileS_Menu[2]='<a class="whitelink" href="http://www.filewatcher.org">FileWatcher</a>'
FileS_Menu[3]='<a class="whitelink" href="http://www.driverguide.com/">DriverGuide.com</A>'


var USGov_Menu=new Array()
USGov_Menu[0]='<B>US Govt Resources</B>'
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

var TxGov_Menu=new Array()
TxGov_Menu[0]='<B>Texas Govt Resources</B>'
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
UTexas_Menu[0]='<B>The University of Texas</B>'
UTexas_Menu[1]='<a class="whitelink" href="http://www.utexas.edu/">UT Austin - Main</A>'
UTexas_Menu[2]='<a class="whitelink" href="http://www.lib.utexas.edu/">UT Libraries</a>'
UTexas_Menu[3]='<a class="whitelink" href="http://x500.utexas.edu/">x500 Directory</a>'
UTexas_Menu[4]='<a class="whitelink" href="http://www.hrc.utexas.edu/">Harry Ransom Center</a>'
UTexas_Menu[5]='<a class="whitelink" href="http://www.dailytexanonline.com/">The Daily Texan</A>'


var Libs_Menu=new Array()
Libs_Menu[0]='<B>Notable Libraries</B>'
Libs_Menu[1]='<a class="whitelink" href="http://www.loc.gov">The Library of Congress</a>'
Libs_Menu[2]='<a class="whitelink" href="http://www.lib.utexas.edu/">U of Texas Libraries</a>'
Libs_Menu[3]='<a class="whitelink" href="http://www.libdex.com/">LibDex</a>'
Libs_Menu[4]='<a class="whitelink" href="http://www.wikipedia.org/">Wikipedia Reference</a>'
Libs_Menu[5]='<a class="whitelink" href="http://www.lii.org">The Librarians Internet Index</A>'


var Phone_Menu=new Array()
Phone_Menu[0]='<B>Telephony Resources</B>'
Phone_Menu[1]='<a class="whitelink" href="http://www.411Locate.com/">411Locate</A>'
Phone_Menu[2]='<a class="whitelink" href="http://www.anywho.com">AT&amp;T AnyWho</a>'
Phone_Menu[3]='<a class="whitelink" href="http://www.superpages.com">SuperPages</A>'
Phone_Menu[4]='<a class="whitelink" href="http://www.realpages.com">RealPages</A>'
Phone_Menu[5]='<a class="whitelink" href="http://www.addresses.com/">Addresses.com</A>'
Phone_Menu[6]='<a class="whitelink" href="http://www.1010-info.com">1010-Info (for rates)</A>'
Phone_Menu[7]='<a class="whitelink" href="http://www.nanpa.com/index.html">N. Am. Numbering Plan Admin</A>'
Phone_Menu[8]='<a class="whitelink" href="http://puck.nether.net/npa-nxx/">NPA NXX Lookup</A>'

var Time_Menu=new Array()
Time_Menu[0]='<B>Time Zones and Info</B>'
Time_Menu[1]='<a class="whitelink" href="http://www.timeanddate.com/">TimeAndDate.com</A>'
Time_Menu[2]='<a class="whitelink" href="http://tf.nist.gov/tf-cgi/servers.cgi">US NIST NTP Servers</A>'
 
var Music_Menu=new Array()
Music_Menu[0]='<B>Entertainment Reference</B>'
Music_Menu[1]='<a class="whitelink" href="http://www.gracenote.com/music/">Gracenote CDDB Lookup</a>'
Music_Menu[2]='<a class="whitelink" href="http://www.imdb.com">Internet Movie DB</a>'
Music_Menu[3]='<a class="whitelink" href="http://www.titantv.com/quickguide/quickguide.aspx">TitanTV Listings</a>'
Music_Menu[4]='<a class="whitelink" href="http://www.webcam-index.com">WebCam Index.com</a>'

var Lang_Menu=new Array()
Lang_Menu[0]='<B>Language Reference</B>'
Lang_Menu[1]='<a class="whitelink" href="http://babelfish.altavista.com/">AltaVista Babelfish</a>'
Lang_Menu[2]='<a class="whitelink" HREF="http://www.onelook.com/">OneLook Dictionaries</A>'
Lang_Menu[3]='<a class="whitelink" href="http://www.yourdictionary.com">YourDictionary.com</A>'
Lang_Menu[4]='<a class="whitelink" href="http://www.visualthesaurus.com/online/index.html">VisualThesaurus</a>'

var Weather_Menu=new Array()
Weather_Menu[0]='<B>Meterological Resources</B>'
Weather_Menu[1]='<a class="whitelink" href="http://www.intellicast.com/">Intellicast</A>'
Weather_Menu[2]='<a class="whitelink" href="http://weather.unisys.com/">Unisys Weather Radars</a>'
Weather_Menu[3]='<a class="whitelink" href="http://weather.gov/">NOAA- Natl Weather Service</A>'

// ---------------------------------------------------------------------------

var Jobs_Menu=new Array()
Jobs_Menu[0]='<B>Employment: Job Searches</B>'
Jobs_Menu[1]='<a class="whitelink" href="http://www.indeed.com/">Indeed</A>'
Jobs_Menu[2]='<a class="whitelink" href="http://www.careerjet.com/">CareerJet</A>'
Jobs_Menu[3]='<a class="whitelink" href="http://www.simplyhired.com/">SimplyHired</a>'
Jobs_Menu[4]='<a class="whitelink" href="https://www.ziprecruiter.com/">ZipRecruiter</A>'
Jobs_Menu[5]='<a class="whitelink" href="http://www.careerbuilder.com/">CareerBuilder</A>'
Jobs_Menu[6]='<a class="whitelink" href="https://monster.com/">Monster.com</a>'
Jobs_Menu[7]='<a class="whitelink" href="https://www.dice.com/">Dice.com</A>'
Jobs_Menu[8]='<a class="whitelink" href="http://hotjobs.yahoo.com/">HotJobs</A>'
Jobs_Menu[9]='<a class="whitelink" href="https://www.usajobs.gov">US Govt - USAJobs.gov</A>'
Jobs_Menu[10]='<a class="whitelink" href="http://www.careeronestop.org/">CareerOneStop (US Dept of Labor)</A>'
Jobs_Menu[11]='<a class="whitelink" href="http://us.jobs">US.Jobs - Natl Labor Exchg</A>'
Jobs_Menu[12]='<a class="whitelink" href="http://www.jobsafari.co.uk/">JobSafari [UK]</A>'
Jobs_Menu[13]='<a class="whitelink" href="http://www.jobrobot.de/">JobRobot [DE]</A>'
Jobs_Menu[14]='--------------'
Jobs_Menu[15]='<a class="whitelink" href="https://www.theladders.com">TheLadders.com</A>'
Jobs_Menu[16]='<a class="whitelink" href="https://www.skillgigs.com/">SkillGigs</a>'
Jobs_Menu[17]='<a class="whitelink" href="http://www.payscale.com/">PayScale</A>'
Jobs_Menu[18]='<a class="whitelink" href="http://www.glassdoor.com/">Glassdoor</A>'
Jobs_Menu[19]='<a class="whitelink" href="https://www.careerbliss.com/">CareerBliss</A>'


// ---------------------------------------------------------------------------


var Austin_Menu=new Array()
Austin_Menu[0]='<B>Austin, Texas</B>'
Austin_Menu[1]='<a class="whitelink" href="http://www.ci.austin.tx.us/">The City of Austin</a>'
Austin_Menu[2]='<a class="whitelink" href="http://www.co.travis.tx.us/">Travis County, Texas</a>'
Austin_Menu[3]='<a class="whitelink" href="http://www.capmetro.org/">Capital Metro</a>'
Austin_Menu[4]='<a class="whitelink" href="http://www.statesman.com">Austin American Statesman</a>'
Austin_Menu[5]='<a class="whitelink" href="http://www.auschron.com/">The Austin Chronicle</a>'
Austin_Menu[6]='-------------------------'
Austin_Menu[7]='<a class="whitelink" href="http://www.ProgressiveAustin.org">ProgressiveAustin.org</A>'


var Maps_Menu=new Array()
Maps_Menu[0]='<B>Web Searches</B>'
Maps_Menu[1]='<a class="whitelink" href="http://www.mapquest.com">Mapquest</a>'
Maps_Menu[2]='<a class="whitelink" href="http://www.topozone.com/">TopoZone</a>'
Maps_Menu[3]='<a class="whitelink" href="http://mapping.usgs.gov/">USGS Mapping</a>'
Maps_Menu[4]='<a class="whitelink" href="http://maps.google.com/">Google Maps</a>'

Maps_Menu[5]='<a class="whitelink" href="http://www.nationalatlas.gov/">NationalAtlas.gov</a>'
Maps_Menu[6]='<a class="whitelink" href="http://mapserver.maptech.com/">MapTech Mapserver</a>'
Maps_Menu[7]='<a class="whitelink" href="http://www.geographynetwork.com/">GeographyNetwork.com</a>'
Maps_Menu[8]='<a class="whitelink" href="http://txdot.lib.utexas.edu/">TxDOT, Texas Highway Maps</a>'
Maps_Menu[9]='<a class="whitelink" href="http://www.library.kent.edu/page/10476">Kent State U - Maps on the net</a>'

// ---------------------------------------------------------------------------

var Mac_Menu=new Array()
Mac_Menu[0]='<B>Macintosh Resources</B>'
Mac_Menu[1]='<a class="whitelink" href="http://www.maccentral.com/">Macworld</A>'
Mac_Menu[2]='<a class="whitelink" href="http://www.mactech.com/">MacTech</a>'
Mac_Menu[3]='<a class="whitelink" href="http://www.macnn.com/">MacNN.com</a>'
Mac_Menu[4]='<a class="whitelink" href="http://www.macintouch.com/">MacInTouch</A>'
Mac_Menu[5]='<a class="whitelink" href="http://www.securemac.com/">SecureMac</a>'
Mac_Menu[6]='<a class="whitelink" href="http://freaky.staticusers.net/index2.shtml">Freaks Mac Archive</a>'
Mac_Menu[7]='<a class="whitelink" href="http://www.macwindows.com/">MacWindows</A>'
Mac_Menu[8]='<a class="whitelink" href="http://www.capmac.org/">CapMac</a>'

var Win_Menu=new Array()
Win_Menu[0]='<B>Windows Resources</B>'
Win_Menu[1]='<a class="whitelink" href="http://www.annoyances.org/">Windows Annoyances</a>'
Win_Menu[2]='<a class="whitelink" href="https://technet.microsoft.com">MSN Technet</a>'
Win_Menu[3]='<a class="whitelink" href="http://support.microsoft.com/">MSN Main Support</a>' 
Win_Menu[4]='<a class="whitelink" href="https://www.microsoft.com/en-us/download/default.aspx">MSN Software Downloads</A>'
Win_Menu[5]='<a class="whitelink" href="http://labmice.techtarget.com/">Labmice</a>'
Win_Menu[6]='<a class="whitelink" href="http://www.techgenix.com/">TechGenix Network</a>'
Win_Menu[7]='<a class="whitelink" href="http://www.petri.co.il">Petri Windows Admin Kbase</A>'
Win_Menu[8]='<a class="whitelink" href="http://computerperformance.co.uk/">Computer Performance LTD</a>'
Win_Menu[9]='<a class="whitelink" href="http://www.ntcompatible.com/">NT Compatible</a>'
Win_Menu[10]='<a class="whitelink" href="http://www.windowsitpro.com/">Windows IT Pro</a>'

var Unix_Menu=new Array()
Unix_Menu[0]='<B>Unix and Linux</B>'
Unix_Menu[1]='<a class="whitelink" href="http://www.freebsd.net/">FreeBSD.net</A>'
Unix_Menu[2]='<a class="whitelink" href="http://www.openbsd.net/">OpenBSD.net</A>'
Unix_Menu[3]='<a class="whitelink" href="http://www.ugu.com/">Unix Guru Universe</A>'
Unix_Menu[4]='<a class="whitelink" href="http://www.rootprompt.org">RootPrompt</a>'
Unix_Menu[5]='<a class="whitelink" href="http://www.unixpower.org">UnixPower</A>'
Unix_Menu[6]='<a class="whitelink" href="http://www.tldp.org/">The Linux Documentation Project</A>'
Unix_Menu[7]='<a class="whitelink" href="http://www.boutell.com/lsm/">Linux SW Map</a>'
Unix_Menu[8]='<a class="whitelink" href="http://www.kernel.org/">Linux Kernel Archives</A>'
Unix_Menu[9]='<a class="whitelink" href="http://www.linux.org/">Linux.org</A>'
Unix_Menu[12]='<a class="whitelink" href="http://www.linuxiso.org">LinuxISO.org</a>'

var SW_Menu=new Array()
SW_Menu[0]='<B>Software Downloads</B>'
SW_Menu[1]='<a class="whitelink" href="http://download.cnet.com">c|net download.com</A>'
SW_Menu[2]='<a class="whitelink" href="http://www.tucows.com/downloads">Tucows Software</a>'
SW_Menu[3]='<a class="whitelink" href="http://www.softlookup.com/">SoftLookup</a>'
SW_Menu[4]='<a class="whitelink" href="http://filehippo.com/">FileHippo</a>'
SW_Menu[5]='<a class="whitelink" href="http://www.FreewareFiles.com/">FreewareFiles.com</A>'
SW_Menu[6]='<a class="whitelink" href="http://www.portableapps.com/">PortableApps.com</A>'
SW_Menu[7]='<a class="whitelink" href="http://www.browzar.com/">Browzar- portable browser</A>'

SW_Menu[8]='--------------------------'
SW_Menu[9]='<a class="whitelink" href="http://www.freshmeat.net/">FreshMeat</A>'
SW_Menu[10]='<a class="whitelink" href="http://www.sourceforge.net/">SourceForge</A>'
SW_Menu[11]='<a class="whitelink" href="https://www.macports.org/">MacPorts</A>'
SW_Menu[12]='<a class="whitelink" href="http://gnu-darwin.sourceforge.net">GNU-Darwin @ SF</A>'
SW_Menu[13]='<a class="whitelink" href="http://savannah.nongnu.org/">Savannah GNU Distro</A>'

var Viral_Menu=new Array()
Viral_Menu[0]='Under Construction<BR>'
Viral_Menu[1]='See "Software"'

var HW_Menu=new Array()
HW_Menu[0]='<B>Computer Hardware</B>'
HW_Menu[1]='<a class="whitelink" href="http://www.sysinternals.com/">SysInternals.com</a>'
HW_Menu[2]='<a class="whitelink" href="http://sysopt.earthweb.com/">SysOpt.com</a>'
HW_Menu[3]='<a class="whitelink" href="http://www.netsys.com/">NetSys.com</a>'
HW_Menu[4]='<a class="whitelink" href="http://hardwarehell.com/">Esc. From HW Hell</a>'
HW_Menu[5]='<a class="whitelink" href="http://www.dansdata.com/altindex.html">Dans Data</a>'
HW_Menu[6]='<a class="whitelink" href="http://www.motherboards.org/">Motherboards.org</a>'
HW_Menu[7]='<a class="whitelink" href="http://bxboards.com/">BXBoards.com</a>'
HW_Menu[8]='<a class="whitelink" href="http://tomshardware.com/">Toms Hardware</a>' 
HW_Menu[9]='<a class="whitelink" href="http://www.chickshardware.com/">Chicks Hardware</a>'
HW_Menu[10]='<a class="whitelink" href="http://www.overclockers.com/">Overclockers.com</a>'
HW_Menu[11]='<a class="whitelink" href="http://www.octools.com/">OCTools.com</a>' 
HW_Menu[12]='<a class="whitelink" href="http://www.fcc.gov/oet/fccid/">Search Equipment FCCIDs</a>'

var ComSec_Menu=new Array()
ComSec_Menu[0]='<B>Systems and Network Security</B>'
ComSec_Menu[1]='<a class="whitelink" href="http://www.sans.org/">SANS Institute</a>'
ComSec_Menu[2]='<a class="whitelink" href="http://www.defcon.org/">DefCon Security Conf</a>'
ComSec_Menu[3]='<a class="whitelink" href="http://www.blackhat.com">Blackhat Security Conf</a>'
ComSec_Menu[4]='<a class="whitelink" href="http://www.h2k2.net">H2K2 Security Conf</a>'
ComSec_Menu[5]='<a class="whitelink" href="http://www.cansecwest.com">CanSecWest Security Conf</a>'
ComSec_Menu[6]='<a class="whitelink" href="http://pacsec.jp/">PacSec Security Conf</a>'
ComSec_Menu[7]='<a class="whitelink" href="http://www.cert.org/">CERT Coordination Ctr</a>'
ComSec_Menu[8]='<a class="whitelink" href="http://www.bugtraq.org">BugTraq</a>'
ComSec_Menu[9]='<a class="whitelink" href="http://www.ntbugtraq.com">NT BugTraq</a>'
ComSec_Menu[10]='<a class="whitelink" href="http://www.packetstorm.org/">PacketStorm</a>'
ComSec_Menu[11]='<a class="whitelink" href="http://www.securityfocus.com/">SecurityFocus</a>'
ComSec_Menu[12]='<a class="whitelink" href="http://www.atstake.com/">@Stake Inc.</a>'
ComSec_Menu[13]='<a class="whitelink" href="http://www.whitehats.ca/">WhiteHats.ca</a>'
ComSec_Menu[14]='<a class="whitelink" href="http://www.securitytracker.com/">SecurityTracker</a>'
ComSec_Menu[15]='<a class="whitelink" href="http://www.threatfocus.com/">ThreatFocus</a>'
ComSec_Menu[16]='<a class="whitelink" href="http://www.net-security.org/">Help Net Security</a>'
ComSec_Menu[17]='<a class="whitelink" href="http://www.securityconfig.com/">SecurityConfig</a>'
ComSec_Menu[18]='<a class="whitelink" href="http://www.LinuxSecurity.com/">LinuxSecurity.com</a>'
ComSec_Menu[19]='<a class="whitelink" href="http://xforce.iss.net/">ISS X-Force</a>'
ComSec_Menu[20]='<a class="whitelink" href="http://neworder.box.sk/">New Order</a>'
ComSec_Menu[21]='<a class="whitelink" href="http://www.hackcanada.com/">HackCanada archives</a>' 
ComSec_Menu[22]='<a class="whitelink" href="http://www.undergroundnews.com/">UGN Security</a>'
ComSec_Menu[23]='<a class="whitelink" href="http://www.neohapsis.com/">Neohapsis Inc.</a>'
ComSec_Menu[24]='<a class="whitelink" href="http://www.digicrime.com/dc.html">Digicrime, Inc.</a>'
ComSec_Menu[25]='<a class="whitelink" href="http://www.attrition.org/">Attrition.org archives</a>' 
ComSec_Menu[26]='<a class="whitelink" href="http://www.insecure.org/">Insecure.Org - Nmap</a>'
ComSec_Menu[27]='<a class="whitelink" href="http://www.antionline.com/">AntiOnline Forum</a>'
ComSec_Menu[28]='<a class="whitelink" href="http://www.2600.com/">2600</a>'
ComSec_Menu[29]='<a class="whitelink" href="http://www.phrack.com/">Phrack</A>'

var Crypto_Menu=new Array()
Crypto_Menu[0]='Under Construction- See "Software"'


var NetTool_Menu=new Array()
NetTool_Menu[0]='<B>Network Resources</B>'
NetTool_Menu[1]='<a class="whitelink" href="http://www.dnsstuff.com/tools">DNSStuff.com</a>'
NetTool_Menu[2]='<a class="whitelink" href="http://www.intodns.com">IntoDNS</a>'
NetTool_Menu[3]='<a class="whitelink" href="http://www.leafdns.com/">LeafDNS</A>'
NetTool_Menu[4]='<a class="whitelink" href="http://www.infosyssec.com/infosyssec/ipsectools.htm">InfoSysSec IP Tools</a>'
NetTool_Menu[5]='<a class="whitelink" href="http://www.nwtools.com/">Network-Tools.com</a>'
NetTool_Menu[6]='<a class="whitelink" href="http://www.ip-adress.com">ip-adress.com</a>'
NetTool_Menu[7]='<a class="whitelink" href="http://trace.die.net/">die.net TraceRoute Explorer</a>'
NetTool_Menu[8]='<a class="whitelink" href="http://nswalk.com">NSWalk DNS Trace</A>'
NetTool_Menu[9]='<a class="whitelink" href="http://tools.rosinstrument.com/proxy/">Proxy Servers Database</a>'
NetTool_Menu[10]='<a class="whitelink" href="http://searchdns.netcraft.com/">NetCraft Query</a>'
NetTool_Menu[11]='<a class="whitelink" href="http://centralops.net/co/">CentralOps.net Tools</a>'
NetTool_Menu[12]='<a class="whitelink" href="http://aris.securityfocus.com/">SF ARIS Analyzer</a>'
NetTool_Menu[13]='<a class="whitelink" href="http://www.internettrafficreport.com/">Internet Traffic Report</a>'
NetTool_Menu[14]='<a class="whitelink" href="http://www.zone-h.org/">Zone-H "Internet Thermometer"</a>'
NetTool_Menu[15]='<a class="whitelink" href="http://www.dns.net/">DNS.net</a>'
NetTool_Menu[16]='<a class="whitelink" HREF="http://remote.12dt.com/rns/">Reverse DNS Lookup</a>'
NetTool_Menu[17]='<a class="whitelink" HREF="http://www.internic.net/whois.html">InterNic WHOIS</a>'
NetTool_Menu[18]='<a class="whitelink" HREF="http://www.ripe.net/">RIPE</a>'
NetTool_Menu[19]='<a class="whitelink" HREF="http://www.apnic.net/apnic-bin/whois.pl">APNIC</A>'
NetTool_Menu[20]='<a class="whitelink" href="http://www.lacnic.net/cgi-bin/lacnic/whois">LACNIC</A>'
NetTool_Menu[21]='<a class="whitelink" href="http://www.arin.net/whois/">ARIN</a>'
NetTool_Menu[22]='<a class="whitelink" HREF="http://www.dyndns.org/">Dynamic Network Svcs -DynDNS</A>' 
NetTool_Menu[23]='<a class="whitelink" HREF="http://puck.nether.net/netops/nocs.cgi">NOC List</A>'
NetTool_Menu[24]='<a class="whitelink" HREF="http://www.reach.com/imap/imap.html">Reach Global Net Maps</a>'
NetTool_Menu[25]='<a class="whitelink" HREF="http://atdn.net/network_map.shtml">ATDN Backbone Map</a>'

var Prog_Menu=new Array()
Prog_Menu[0]='<B>Programming and Coding</B>'
// http://stackexchange.com/sites#
// http://stackoverflow.com/
// http://serverfault.com/
// http://superuser.com/
Prog_Menu[1]='<a class="whitelink" href="http://www.developershed.com/">Developer Shed</a>'
Prog_Menu[2]='<a class="whitelink" href="http://devcentral.iftech.com/">DevCentral</a> '
Prog_Menu[3]='<a class="whitelink" href="http://www.devguru.com/">DevGuru</a>'
Prog_Menu[4]='<a class="whitelink" href="http://www.devx.com/">DevX</a>'
Prog_Menu[5]='<a class="whitelink" href="http://www.scriptsearch.com/">ScriptSearch</a>'
Prog_Menu[6]='<a class="whitelink" href="http://www.dynamicdrive.com/">Dynamic Drive</a>' 
Prog_Menu[7]='<a class="whitelink" href="http://www.dhtmlshock.com/">DHTML Shock</a>'
Prog_Menu[8]='<a class="whitelink" href="http://www.quirksmode.org/">QuirksMode DHTML</a>'
Prog_Menu[9]='<a class="whitelink" href="http://www.phpfreaks.com/">PHPFreaks.com</a>'
Prog_Menu[10]='<a class="whitelink" href="http://www.php.net/">PHP.net</A>'
Prog_Menu[11]='<a class="whitelink" href="http://www.phpbuilder.com/">PHPBuilder.com</a>'
Prog_Menu[12]='<a class="whitelink" href="http://www.mysql.org/">MySQL.org</a>' 
Prog_Menu[13]='<a class="whitelink" href="http://www.sqlcourse.com/">SQLCourse.com</a>'
Prog_Menu[14]='<a class="whitelink" href="http://www.resourceindex.com/">ResourceIndex CGI and PHP</a>'
Prog_Menu[15]='<a class="whitelink" href="http://www.scriptarchive.com/">Matts Script Archive</A>'
Prog_Menu[16]='<a class="whitelink" href="http://www.planet-source-code.com/">Planet Source Code</A>'
Prog_Menu[17]='<a class="whitelink" href="http://www.perl.org/">Perl.org</a>' 
Prog_Menu[18]='<a class="whitelink" href="http://www.perl.com">OReillys Perl.com</a>' 
Prog_Menu[19]='<a class="whitelink" href="http://www.perlarchive.com/">PerlArchive.com</a>'  
Prog_Menu[20]='<a class="whitelink" href="http://www.sitepoint.com/">SitePoint</a>' 
Prog_Menu[21]='<a class="whitelink" href="http://www.siteexperts.com/">SiteExperts.com</a>' 
Prog_Menu[22]='<a class="whitelink" href="http://www.hotscripts.com/">HotScripts.com</a>' 
Prog_Menu[23]='<a class="whitelink" href="http://reallybig.com/reallybig.shtml">ReallyBig.com</a>' 
Prog_Menu[24]='<a class="whitelink" href="http://cross-browser.com/">Cross-browser.com</a>' 
Prog_Menu[25]='<a class="whitelink" href="http://www.WebReview.com">Dr Dobbs Journal</a>' 
Prog_Menu[26]='<a class="whitelink" href="http://www.earthweb.com/">EarthWeb</a>' 
Prog_Menu[27]='<a class="whitelink" href="http://www.gamelan.com/">Gamelan Java</A>' 
Prog_Menu[28]='<a class="whitelink" href="http://java.sun.com/">Java at Sun</a>'

var Game_Menu=new Array()
Game_Menu[0]='<B>Gaming and Arcade Emulation</B>'
Game_Menu[1]='<a class="whitelink" href="http://www.mame.net">Multiple Arcade Machine Emulator</a>'
Game_Menu[2]='<a class="whitelink" href="http://www.theoldcomputer.com/MainMenu.htm">TheOldComputer.com</a>'
Game_Menu[3]='<a class="whitelink" href="http://www.atarimuseum.com/">Atari History Museum</a>'
Game_Menu[4]='<a class="whitelink" href="http://www.emulation.net">Emulation.net (for Macs)</a>'


// ---------------------------------------------------------------------------

var NewsMain_Menu=new Array()
NewsMain_Menu[0]='<B>News Outlets</B>'
NewsMain_Menu[1]='<a class="whitelink" href="http://news.google.com/">Google News Search</a>'
NewsMain_Menu[2]='<a class="whitelink" href="http://news.yahoo.com/">Yahoo News Search</a>'
NewsMain_Menu[3]='<a class="whitelink" href="http://www.newsindex.com">NewsIndex Search</A>'
NewsMain_Menu[4]='<a class="whitelink" href="http://www.findarticles.com/">FindArticles</a>'
NewsMain_Menu[5]='-----------'
NewsMain_Menu[6]='<a class="whitelink" href="http://newslink.org/">NewsLink.org</a>'
NewsMain_Menu[7]='<a class="whitelink" href="http://www.newspaperlinks.com/home.cfm">NewspaperLinks.com</a>'
NewsMain_Menu[8]='-----------'
NewsMain_Menu[9]='<a class="whitelink" href="http://www.c-span.org">C-SPAN</a>'
NewsMain_Menu[10]='<a class="whitelink" href="http://www.reuters.com/">Reuters</A>'
NewsMain_Menu[11]='<a class="whitelink" href="http://customwire.ap.org/specials/bluepage.html">AP Wire</a>'
NewsMain_Menu[12]='<a class="whitelink" href="http://news.npr.org/">Natl Public Radio</a>'
NewsMain_Menu[13]='<a class="whitelink" href="http://news.bbc.co.uk/">BBC Online</a>'
NewsMain_Menu[14]='<a class="whitelink" href="http://www.cnn.com/">CNN Online</a>'
NewsMain_Menu[15]='-----------'
NewsMain_Menu[16]='<a class="whitelink" href="http://www.iht.com/">Intl Herald Tribune</a>'
NewsMain_Menu[17]='<a class="whitelink" href="http://www.nytimes.com">NY Times</a>'
NewsMain_Menu[19]='<a class="whitelink" href="http://online.wsj.com/public/us">Wall St Journal</a>'
NewsMain_Menu[20]='<a class="whitelink" href="http://www.indymedia.org">Independent Media Center</a>'
NewsMain_Menu[21]='<a class="whitelink" href="http://www.washingtonpost.com">Washington Post</a>'
// NewsMain_Menu[23]='-----------'
// NewsMain_Menu[24]='<a class="whitelink" href="http://www.oaoa.com/">Odessa American</A>'
// NewsMain_Menu[25]='<a class="whitelink" href="http://houstonchronicle.com/">Houston Chronicle</a> '
// NewsMain_Menu[26]='<a class="whitelink" href="http://www.dallasnews.com/">Dallas Morning News</a>'
// NewsMain_Menu[27]='<a class="whitelink" href="http://www.startelegram.com/">Fort Worth Star Telegram</a>'
// NewsMain_Menu[28]='<a class="whitelink" href="http://www.texasobserver.org/">The Texas Observer</A>'

var TechNews_Menu=new Array()
TechNews_Menu[0]='<B>Technology News</B>'
TechNews_Menu[1]='<a class="whitelink" href="http://www.slashdot.org/">/. SlashDot&nbsp; /.</a>'
TechNews_Menu[2]='<a class="whitelink" href="http://www.arstechnica.com/">ArsTechnica</a>'
TechNews_Menu[3]='<a class="whitelink" href="http://www.techweb.com/">TechWeb</a>'
TechNews_Menu[4]='<a class="whitelink" href="http://www.cmp.com/">CMP Media</a>'
TechNews_Menu[5]='<a class="whitelink" href="http://www.zdnet.com/">ZDNet</a>'
TechNews_Menu[6]='<a class="whitelink" href="http://www.cnet.com/">C|Net</a>'
TechNews_Menu[7]='<a class="whitelink" href="http://www.internet.com/">Internet.com</a>'
TechNews_Menu[8]='<a class="whitelink" href="http://www.datafuse.net/">DataFuse</a>'

var Business_Menu=new Array()
Business_Menu[0]='<B>Business News and Data</B>'
Business_Menu[1]='<a class="whitelink" href="http://www.ceoexpress.com/">CEOExpress</A>'
Business_Menu[2]='<a class="whitelink" href="http://www.businesswire.com/">BusinessWire</A>'
Business_Menu[3]='<a class="whitelink" href="http://www.redherring.com/">Red Herring</A>'
// Business_Menu[3]='<a class="whitelink" href="http://www.bloomberg.com/">Bloomberg Business</A>'
Business_Menu[4]='--------------'
Business_Menu[5]='<a class="whitelink" href="http://www.bbb.com/">BBB Company Search</A>'
Business_Menu[6]='<a class="whitelink" href="http://hoovweb.hoovers.com/">Hoovers Handbook Online</A>'

var Science_Menu=new Array()
Science_Menu[0]='<B>Science News and Resources</B>'
Science_Menu[1]='<a class="whitelink" href="http://www.sciencedaily.com/">Science Daily</a>'
Science_Menu[2]='<a class="whitelink" href="http://www.sciencemag.org/netwatch/">Science Magazine NetWatch</A>'
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
Medical_Menu[0]='<B>Medical News and Resources</B>'
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
// Medical_Menu[14]='<a class="whitelink" href="http://www.webmd.com/">WebMD</A>'
// Medical_Menu[15]='<a class="whitelink" href="http://www.mayoclinic.org/">MayoClinic</A>'

var Legal_Menu=new Array()
Legal_Menu[0]='<B>Legal News and Resources</B>'
Legal_Menu[1]='<a class="whitelink" href="http://www.alllaw.com/">AllLaw</A>'
Legal_Menu[2]='<a class="whitelink" href="http://www.catalaw.com/">CataLaw</A>'
Legal_Menu[3]='<a class="whitelink" href="http://www.findlaw.com/">FindLaw</A>'
Legal_Menu[4]='<a class="whitelink" href="http://www.lexisone.com/">LexisOne</A>'
Legal_Menu[5]='<a class="whitelink" href="http://www.martindale.com/">Martindale-Hubbell</A>'
Legal_Menu[6]='<a class="whitelink" href="http://www.paralegals.org/displaycommon.cfm?an=1">NFPA Legal Reference Library</A>'
Legal_Menu[7]='<a class="whitelink" href="http://www.legaldirectories.com/">Legal Directories Publishing Co.</A>'
Legal_Menu[8]='------------------------'
Legal_Menu[9]='<a class="whitelink" href="http://news.findlaw.com">FindLaw News</a>'
Legal_Menu[10]='------------------------'
Legal_Menu[11]='<a class="whitelink" href="http://www.abanet.org/">American Bar Assoc.</A>'
Legal_Menu[12]='<a class="whitelink" href="http://www.abanet.org/legalservices/lris/directory.html">ABA Lawyer Referal</A>'
Legal_Menu[13]='<a class="whitelink" href="http://www.aclu.org/">ACLU</A>'

var USGrps_Menu=new Array()
USGrps_Menu[0]='<B>US Journalism and Groups</B>'
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
TxGrps_Menu[0]='<B>Texas Journalism and Groups</B>'
TxGrps_Menu[1]='<a class="whitelink" href="http://UTWatch.org/">UT Watch (University of Texas)</a>'
TxGrps_Menu[2]='<a class="whitelink" href="http://www.tpj.org">Texans for Public Justice</a>'
TxGrps_Menu[3]='<a class="whitelink" href="http://ProgressiveAustin.org">ProgressiveAustin.org</A>'
TxGrps_Menu[4]='<a class="whitelink" href="http://www.texansforpeace.org">Texans For Peace</a>'
TxGrps_Menu[5]='<a class="whitelink" href="http://lonestar.sierraclub.org">Texas Sierra Club</a>'
TxGrps_Menu[6]='<A class="whitelink" HREF="http://www.citizen.org/texas/">Public Citizen, Tx Ofc</a>'


var Politics_Menu=new Array()
Politics_Menu[0]='<B>General Politics</B>'
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



var Enviro_Menu=new Array()
Enviro_Menu[0]='<B>Environmental Orgs</B>'
Enviro_Menu[1]='<a class="whitelink" href="http://www.sierraclub.org">Sierra Club</a>'
Enviro_Menu[2]='<a class="whitelink" href="http://www.earthfirstjournal.org/">Earth First! Journal</a>'
Enviro_Menu[3]='<a class="whitelink" href="http://www.seashepherd.org/">Sea Shepherds Society</a>'
Enviro_Menu[4]='<a class="whitelink" href="http://www.friendsoftheearth.org/">Friends of the Earth</a>'
Enviro_Menu[5]='<a class="whitelink" href="http://www.greenpeace.org/">GreenPeace</a>'


var CleanE_Menu=new Array()
CleanE_Menu[0]='<B>Clean Energy</B>'
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
Nuke_Menu[0]='<B>Nuclear Issues</B>'
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
Widget_Menu[0]='<B>Converters and Tools</B>'
Widget_Menu[1]='<a class="whitelink" href="http://www.google.com/options/index.html">Google Tools</a>'
Widget_Menu[2]='<a class="whitelink" href="http://www.itools.com/">iTools</A>'
Widget_Menu[3]='<a class="whitelink" href="http://www.ninjasuit.com/">Ninja Suit</A>'
Widget_Menu[4]='<a class="whitelink" href="http://www.cssdrive.com">CSS Drive</a>'
Widget_Menu[5]='<a class="whitelink" href="http://www.convertit.com">ConvertIt</a>'
Widget_Menu[6]='<A class="whitelink" HREF="http://www.onlineconversion.com/">OnlineConversion</A>'
Widget_Menu[7]='<a class="whitelink" href="http://www.webelements.com">WebElements</a>'
Widget_Menu[8]='<a class="whitelink" href="http://www.howstuffworks.com/">HowStuffWorks.com</a>'
Widget_Menu[9]='<a class="whitelink" href="http://www.ihackstuff.com/">iHackStuff.com</a>'

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


