/* WebHub India — seed dataset
   ~140 real, verified websites/services across every major category.
   This is a curated starting set (not the full 100,000+ vision) —
   structured so it can be extended indefinitely. Every entry below
   is a real, currently operating website. */

const CATEGORIES = [
  { id: "government", label: "Government", icon: "landmark" },
  { id: "finance", label: "Banking & Finance", icon: "banknote" },
  { id: "shopping", label: "Shopping", icon: "shopping-bag" },
  { id: "education", label: "Education", icon: "graduation-cap" },
  { id: "jobs", label: "Jobs & Careers", icon: "briefcase" },
  { id: "travel", label: "Travel & Transport", icon: "plane" },
  { id: "entertainment", label: "Entertainment", icon: "clapperboard" },
  { id: "news", label: "News & Media", icon: "newspaper" },
  { id: "health", label: "Health", icon: "heart-pulse" },
  { id: "food", label: "Food & Grocery", icon: "utensils" },
  { id: "ai", label: "AI Tools", icon: "sparkles" },
  { id: "social", label: "Social & Messaging", icon: "message-circle" },
  { id: "realestate", label: "Real Estate", icon: "home" },
  { id: "utilities", label: "Utilities & Bills", icon: "zap" },
  { id: "productivity", label: "Productivity & Dev", icon: "layout-grid" },
];

const WEBSITES = [
  // ---------------- GOVERNMENT ----------------
  { id:1, name:"India.gov.in", url:"https://www.india.gov.in", category:"government", desc:"The National Portal of India — a single gateway to information and services from central and state government.", tags:["portal","official"], verified:true, popular:true },
  { id:2, name:"UIDAI (Aadhaar)", url:"https://uidai.gov.in", category:"government", desc:"Official portal to enroll, update or download your Aadhaar card.", tags:["aadhaar","identity"], verified:true, popular:true, trending:true },
  { id:3, name:"Income Tax e-Filing", url:"https://www.incometax.gov.in", category:"government", desc:"File income tax returns, check refund status and manage PAN-linked tax services.", tags:["tax","pan"], verified:true, popular:true },
  { id:4, name:"GST Portal", url:"https://www.gst.gov.in", category:"government", desc:"Registration, return filing and payment portal for Goods & Services Tax.", tags:["tax","business"], verified:true },
  { id:5, name:"IRCTC", url:"https://www.irctc.co.in", category:"government", desc:"Official Indian Railways portal for train ticket booking and PNR status.", tags:["railways","tickets"], verified:true, popular:true, trending:true },
  { id:6, name:"Passport Seva", url:"https://www.passportindia.gov.in", category:"government", desc:"Apply for a new passport, renewal or track application status.", tags:["passport","travel"], verified:true, popular:true },
  { id:7, name:"Parivahan Sewa", url:"https://parivahan.gov.in", category:"government", desc:"Driving licence, vehicle registration and RTO services across India.", tags:["driving licence","vehicle"], verified:true, popular:true },
  { id:8, name:"EPFO", url:"https://www.epfindia.gov.in", category:"government", desc:"Check PF balance, withdraw or transfer your Employees' Provident Fund.", tags:["pf","retirement"], verified:true },
  { id:9, name:"DigiLocker", url:"https://www.digilocker.gov.in", category:"government", desc:"Secure cloud storage for official documents like Aadhaar, PAN, marksheets and licences.", tags:["documents","storage"], verified:true, popular:true, trending:true },
  { id:10, name:"MyGov India", url:"https://www.mygov.in", category:"government", desc:"Citizen engagement platform for government surveys, discussions and initiatives.", tags:["citizen","engagement"], verified:true },
  { id:11, name:"Election Commission of India", url:"https://www.eci.gov.in", category:"government", desc:"Official site of India's Election Commission, covering elections and electoral rolls.", tags:["voting","elections"], verified:true },
  { id:12, name:"Voter Services (ECI)", url:"https://voters.eci.gov.in", category:"government", desc:"Register to vote, apply for a Voter ID or update your electoral details online.", tags:["voter id","elections"], verified:true },
  { id:13, name:"India Post", url:"https://www.indiapost.gov.in", category:"government", desc:"Track parcels, locate post offices and access postal/banking services.", tags:["postal","courier"], verified:true },
  { id:14, name:"CoWIN", url:"https://www.cowin.gov.in", category:"government", desc:"National platform for COVID-19 vaccination registration and certificates.", tags:["health","vaccination"], verified:true },
  { id:15, name:"UMANG", url:"https://web.umang.gov.in", category:"government", desc:"Unified mobile app/portal bringing hundreds of government services onto one platform.", tags:["portal","services"], verified:true, popular:true },
  { id:16, name:"ESIC", url:"https://www.esic.gov.in", category:"government", desc:"Employees' State Insurance Corporation portal for medical and cash benefit schemes.", tags:["insurance","labour"], verified:true },
  { id:17, name:"NDMA India", url:"https://ndma.gov.in", category:"government", desc:"National Disaster Management Authority — alerts, guidelines and preparedness resources.", tags:["disaster","safety"], verified:true },
  { id:18, name:"PM India", url:"https://www.pmindia.gov.in", category:"government", desc:"Official website of the Prime Minister's Office of India.", tags:["pmo","official"], verified:true },
  { id:19, name:"data.gov.in", url:"https://data.gov.in", category:"government", desc:"Open Government Data Platform with public datasets across sectors.", tags:["open data","datasets"], verified:true },
  { id:20, name:"e-Courts Services", url:"https://ecourts.gov.in", category:"government", desc:"Case status, cause lists and court orders from district and high courts.", tags:["legal","courts"], verified:true },

  // ---------------- FINANCE ----------------
  { id:21, name:"RBI", url:"https://www.rbi.org.in", category:"finance", desc:"Reserve Bank of India — monetary policy, regulations and financial literacy resources.", tags:["banking","regulator"], verified:true },
  { id:22, name:"State Bank of India", url:"https://www.onlinesbi.sbi", category:"finance", desc:"Net banking portal for India's largest public sector bank.", tags:["bank","netbanking"], verified:true, popular:true },
  { id:23, name:"HDFC Bank", url:"https://www.hdfcbank.com", category:"finance", desc:"Retail and corporate banking services from one of India's largest private banks.", tags:["bank","netbanking"], verified:true, popular:true },
  { id:24, name:"ICICI Bank", url:"https://www.icicibank.com", category:"finance", desc:"Banking, loans, cards and investment services.", tags:["bank","loans"], verified:true },
  { id:25, name:"Axis Bank", url:"https://www.axisbank.com", category:"finance", desc:"Personal and business banking services across India.", tags:["bank"], verified:true },
  { id:26, name:"NSE India", url:"https://www.nseindia.com", category:"finance", desc:"National Stock Exchange — live market data, indices and listed company info.", tags:["stocks","markets"], verified:true },
  { id:27, name:"BSE India", url:"https://www.bseindia.com", category:"finance", desc:"Asia's oldest stock exchange, offering market data and corporate announcements.", tags:["stocks","markets"], verified:true },
  { id:28, name:"Zerodha", url:"https://zerodha.com", category:"finance", desc:"India's largest stock broker for equity, mutual fund and derivatives trading.", tags:["trading","investing"], verified:true, popular:true, trending:true },
  { id:29, name:"Groww", url:"https://groww.in", category:"finance", desc:"Investing app for stocks, mutual funds, IPOs and digital gold.", tags:["investing","mutual funds"], verified:true, popular:true },
  { id:30, name:"Paytm", url:"https://paytm.com", category:"finance", desc:"Digital payments, recharges, bill payments and UPI transfers.", tags:["upi","payments"], verified:true, popular:true, trending:true },
  { id:31, name:"PhonePe", url:"https://www.phonepe.com", category:"finance", desc:"UPI payments, recharges, insurance and investment in one app.", tags:["upi","payments"], verified:true, popular:true, trending:true },
  { id:32, name:"Google Pay", url:"https://pay.google.com/intl/en_in/about/", category:"finance", desc:"UPI-based payments app for quick money transfers and bill payments.", tags:["upi","payments"], verified:true, popular:true },
  { id:33, name:"Policybazaar", url:"https://www.policybazaar.com", category:"finance", desc:"Compare and buy health, life, motor and travel insurance policies online.", tags:["insurance","compare"], verified:true, popular:true },
  { id:34, name:"CAMS KRA", url:"https://www.camsonline.com", category:"finance", desc:"Mutual fund transaction and registry services for investors.", tags:["mutual funds","kyc"], verified:true },
  { id:35, name:"CoinDCX", url:"https://coindcx.com", category:"finance", desc:"Indian cryptocurrency exchange for buying, selling and trading digital assets.", tags:["crypto","exchange"], verified:true },

  // ---------------- SHOPPING ----------------
  { id:36, name:"Amazon India", url:"https://www.amazon.in", category:"shopping", desc:"Online marketplace for electronics, fashion, groceries and nearly everything else.", tags:["ecommerce","marketplace"], verified:true, popular:true, trending:true },
  { id:37, name:"Flipkart", url:"https://www.flipkart.com", category:"shopping", desc:"India's homegrown ecommerce giant for electronics, fashion and home goods.", tags:["ecommerce","marketplace"], verified:true, popular:true, trending:true },
  { id:38, name:"Myntra", url:"https://www.myntra.com", category:"shopping", desc:"Fashion and lifestyle shopping for clothing, footwear and accessories.", tags:["fashion","clothing"], verified:true, popular:true },
  { id:39, name:"Ajio", url:"https://www.ajio.com", category:"shopping", desc:"Reliance's fashion ecommerce platform with curated brand collections.", tags:["fashion","clothing"], verified:true },
  { id:40, name:"Nykaa", url:"https://www.nykaa.com", category:"shopping", desc:"Beauty, wellness and personal care products marketplace.", tags:["beauty","cosmetics"], verified:true, popular:true },
  { id:41, name:"Meesho", url:"https://www.meesho.com", category:"shopping", desc:"Budget-friendly social commerce marketplace for reselling and shopping.", tags:["ecommerce","budget"], verified:true, popular:true },
  { id:42, name:"BigBasket", url:"https://www.bigbasket.com", category:"shopping", desc:"Online grocery delivery for daily essentials, fresh produce and staples.", tags:["grocery","delivery"], verified:true, popular:true },
  { id:43, name:"Blinkit", url:"https://blinkit.com", category:"shopping", desc:"10-minute grocery and essentials delivery service.", tags:["grocery","quick commerce"], verified:true, popular:true, trending:true },
  { id:44, name:"Zepto", url:"https://www.zeptonow.com", category:"shopping", desc:"Quick-commerce app delivering groceries in minutes.", tags:["grocery","quick commerce"], verified:true, trending:true },
  { id:45, name:"Snapdeal", url:"https://www.snapdeal.com", category:"shopping", desc:"Value-focused online shopping marketplace across categories.", tags:["ecommerce"], verified:true },
  { id:46, name:"Tata CLiQ", url:"https://www.tatacliq.com", category:"shopping", desc:"Multi-brand online shopping platform for fashion and electronics.", tags:["ecommerce","fashion"], verified:true },
  { id:47, name:"IKEA India", url:"https://www.ikea.com/in/en/", category:"shopping", desc:"Furniture and home furnishing store with online shopping and delivery.", tags:["furniture","home"], verified:true },

  // ---------------- EDUCATION ----------------
  { id:48, name:"BYJU'S", url:"https://byjus.com", category:"education", desc:"Online learning platform for school students and competitive exam prep.", tags:["learning","school"], verified:true, popular:true },
  { id:49, name:"Unacademy", url:"https://unacademy.com", category:"education", desc:"Live classes and courses for competitive exams and skill learning.", tags:["exam prep","live classes"], verified:true, popular:true },
  { id:50, name:"Vedantu", url:"https://www.vedantu.com", category:"education", desc:"Live online tutoring for school subjects and board exam preparation.", tags:["tutoring","school"], verified:true },
  { id:51, name:"NCERT", url:"https://ncert.nic.in", category:"education", desc:"Official source for NCERT textbooks and curriculum resources.", tags:["textbooks","curriculum"], verified:true, popular:true },
  { id:52, name:"UGC", url:"https://www.ugc.gov.in", category:"education", desc:"University Grants Commission — regulates higher education standards in India.", tags:["higher education","regulator"], verified:true },
  { id:53, name:"SWAYAM", url:"https://swayam.gov.in", category:"education", desc:"Government platform offering free online courses from school to postgraduate level.", tags:["free courses","moocs"], verified:true, popular:true },
  { id:54, name:"NPTEL", url:"https://nptel.ac.in", category:"education", desc:"Free engineering and science video courses from IITs and IISc.", tags:["engineering","iit"], verified:true, popular:true },
  { id:55, name:"National Scholarship Portal", url:"https://scholarships.gov.in", category:"education", desc:"Apply for central and state government scholarships in one place.", tags:["scholarships","students"], verified:true, popular:true },
  { id:56, name:"Khan Academy", url:"https://www.khanacademy.org", category:"education", desc:"Free world-class education across math, science and more.", tags:["free courses","global"], verified:true },
  { id:57, name:"Coursera", url:"https://www.coursera.org", category:"education", desc:"Online courses and degrees from top universities and companies worldwide.", tags:["moocs","certificates"], verified:true, popular:true },
  { id:58, name:"Physics Wallah", url:"https://www.pw.live", category:"education", desc:"Affordable online coaching for JEE, NEET and school exams.", tags:["exam prep","affordable"], verified:true, trending:true },

  // ---------------- JOBS ----------------
  { id:59, name:"Naukri.com", url:"https://www.naukri.com", category:"jobs", desc:"India's leading job search portal across every industry and experience level.", tags:["jobs","recruitment"], verified:true, popular:true, trending:true },
  { id:60, name:"LinkedIn", url:"https://www.linkedin.com", category:"jobs", desc:"Professional networking platform for jobs, hiring and career growth.", tags:["networking","jobs"], verified:true, popular:true },
  { id:61, name:"Internshala", url:"https://internshala.com", category:"jobs", desc:"Internships and fresher jobs for students across India.", tags:["internships","students"], verified:true, popular:true },
  { id:62, name:"Indeed India", url:"https://in.indeed.com", category:"jobs", desc:"Global job search engine aggregating listings from across the web.", tags:["jobs","search"], verified:true },
  { id:63, name:"Sarkari Result", url:"https://www.sarkariresult.com", category:"jobs", desc:"Government job notifications, admit cards and exam results.", tags:["government jobs","exam results"], verified:true, popular:true },
  { id:64, name:"SSC Online", url:"https://ssc.nic.in", category:"jobs", desc:"Staff Selection Commission portal for government recruitment exams.", tags:["government jobs","exams"], verified:true },
  { id:65, name:"Freshersworld", url:"https://www.freshersworld.com", category:"jobs", desc:"Job portal focused on entry-level and fresher opportunities.", tags:["freshers","entry level"], verified:true },
  { id:66, name:"Upwork", url:"https://www.upwork.com", category:"jobs", desc:"Global freelancing marketplace for remote work across skills.", tags:["freelancing","remote"], verified:true },

  // ---------------- TRAVEL ----------------
  { id:67, name:"MakeMyTrip", url:"https://www.makemytrip.com", category:"travel", desc:"Flights, hotels, trains and holiday packages booking platform.", tags:["flights","hotels"], verified:true, popular:true, trending:true },
  { id:68, name:"Goibibo", url:"https://www.goibibo.com", category:"travel", desc:"Book flights, hotels and buses at competitive prices.", tags:["flights","hotels"], verified:true, popular:true },
  { id:69, name:"redBus", url:"https://www.redbus.in", category:"travel", desc:"India's largest online bus ticket booking platform.", tags:["bus","tickets"], verified:true, popular:true },
  { id:70, name:"ixigo", url:"https://www.ixigo.com", category:"travel", desc:"Flight, train and bus booking with real-time travel assistance.", tags:["flights","trains"], verified:true },
  { id:71, name:"OYO Rooms", url:"https://www.oyorooms.com", category:"travel", desc:"Budget hotel booking chain with standardized stays across India.", tags:["hotels","budget"], verified:true, popular:true },
  { id:72, name:"Air India", url:"https://www.airindia.com", category:"travel", desc:"National carrier of India for domestic and international flight booking.", tags:["airline","flights"], verified:true },
  { id:73, name:"IndiGo", url:"https://www.goindigo.in", category:"travel", desc:"India's largest airline by passengers carried, for flight bookings.", tags:["airline","flights"], verified:true, popular:true },
  { id:74, name:"Google Maps", url:"https://maps.google.com", category:"travel", desc:"Navigation, live traffic and place discovery across India and the world.", tags:["maps","navigation"], verified:true, popular:true },
  { id:75, name:"Delhi Metro Rail (DMRC)", url:"https://www.delhimetrorail.com", category:"travel", desc:"Route maps, fares and timings for the Delhi Metro network.", tags:["metro","transit"], verified:true },
  { id:76, name:"Incredible India", url:"https://www.incredibleindia.org", category:"travel", desc:"Official tourism portal showcasing destinations across India.", tags:["tourism","destinations"], verified:true },

  // ---------------- ENTERTAINMENT ----------------
  { id:77, name:"JioHotstar", url:"https://www.hotstar.com", category:"entertainment", desc:"Streaming platform for movies, shows, live sports and cricket.", tags:["streaming","sports"], verified:true, popular:true, trending:true },
  { id:78, name:"Netflix", url:"https://www.netflix.com", category:"entertainment", desc:"Global streaming service for movies, series and originals.", tags:["streaming","movies"], verified:true, popular:true },
  { id:79, name:"Amazon Prime Video", url:"https://www.primevideo.com", category:"entertainment", desc:"Streaming service bundled with Amazon Prime for movies and shows.", tags:["streaming","movies"], verified:true, popular:true },
  { id:80, name:"Spotify", url:"https://www.spotify.com", category:"entertainment", desc:"Music and podcast streaming with personalized playlists.", tags:["music","podcasts"], verified:true, popular:true },
  { id:81, name:"JioSaavn", url:"https://www.jiosaavn.com", category:"entertainment", desc:"Music streaming platform with a large Indian and Bollywood catalogue.", tags:["music","bollywood"], verified:true, popular:true },
  { id:82, name:"Gaana", url:"https://gaana.com", category:"entertainment", desc:"Indian music streaming service across languages and genres.", tags:["music"], verified:true },
  { id:83, name:"BookMyShow", url:"https://in.bookmyshow.com", category:"entertainment", desc:"Movie tickets, events and live show bookings across Indian cities.", tags:["movie tickets","events"], verified:true, popular:true, trending:true },
  { id:84, name:"YouTube", url:"https://www.youtube.com", category:"entertainment", desc:"Video sharing platform for entertainment, learning and creators.", tags:["video","streaming"], verified:true, popular:true },

  // ---------------- NEWS ----------------
  { id:85, name:"NDTV", url:"https://www.ndtv.com", category:"news", desc:"National news, business and lifestyle coverage.", tags:["news","national"], verified:true, popular:true },
  { id:86, name:"The Times of India", url:"https://timesofindia.indiatimes.com", category:"news", desc:"India's widely read English daily, covering national and world news.", tags:["news","national"], verified:true, popular:true },
  { id:87, name:"The Hindu", url:"https://www.thehindu.com", category:"news", desc:"National newspaper known for in-depth political and policy coverage.", tags:["news","national"], verified:true },
  { id:88, name:"Indian Express", url:"https://indianexpress.com", category:"news", desc:"National daily covering politics, business and current affairs.", tags:["news","national"], verified:true },
  { id:89, name:"News18", url:"https://www.news18.com", category:"news", desc:"Multi-language news network covering India and the world.", tags:["news","regional"], verified:true },
  { id:90, name:"Moneycontrol", url:"https://www.moneycontrol.com", category:"news", desc:"Business and financial news, stock quotes and market analysis.", tags:["business","markets"], verified:true, popular:true },
  { id:91, name:"ESPNcricinfo", url:"https://www.espncricinfo.com", category:"news", desc:"Live cricket scores, news and analysis from around the world.", tags:["cricket","sports"], verified:true, popular:true },

  // ---------------- HEALTH ----------------
  { id:92, name:"Practo", url:"https://www.practo.com", category:"health", desc:"Find doctors, book appointments and consult online.", tags:["doctors","appointments"], verified:true, popular:true },
  { id:93, name:"1mg", url:"https://www.1mg.com", category:"health", desc:"Order medicines online and book lab tests with home sample collection.", tags:["medicine","pharmacy"], verified:true, popular:true, trending:true },
  { id:94, name:"PharmEasy", url:"https://pharmeasy.in", category:"health", desc:"Online pharmacy for medicines, healthcare products and diagnostics.", tags:["medicine","pharmacy"], verified:true, popular:true },
  { id:95, name:"Apollo 24|7", url:"https://www.apollo247.com", category:"health", desc:"Online doctor consultations, medicine delivery and diagnostic tests.", tags:["doctors","medicine"], verified:true },
  { id:96, name:"AIIMS Delhi", url:"https://www.aiims.edu", category:"health", desc:"Premier government medical institute for treatment, research and education.", tags:["hospital","research"], verified:true },
  { id:97, name:"National Health Portal", url:"https://www.nhp.gov.in", category:"health", desc:"Government portal for verified health information and services.", tags:["health info","government"], verified:true },

  // ---------------- FOOD ----------------
  { id:98, name:"Swiggy", url:"https://www.swiggy.com", category:"food", desc:"Food delivery, quick grocery delivery and dining discovery.", tags:["food delivery","grocery"], verified:true, popular:true, trending:true },
  { id:99, name:"Zomato", url:"https://www.zomato.com", category:"food", desc:"Restaurant discovery, reviews and online food delivery.", tags:["food delivery","restaurants"], verified:true, popular:true, trending:true },
  { id:100, name:"EatSure", url:"https://www.eatsure.com", category:"food", desc:"Cloud-kitchen food delivery brand with curated meal options.", tags:["food delivery"], verified:true },
  { id:101, name:"Licious", url:"https://www.licious.in", category:"food", desc:"Fresh meat and seafood delivery across major Indian cities.", tags:["meat","grocery"], verified:true },

  // ---------------- AI TOOLS ----------------
  { id:102, name:"Claude", url:"https://claude.ai", category:"ai", desc:"AI assistant by Anthropic for writing, coding, research and analysis.", tags:["ai assistant","anthropic"], verified:true, popular:true, trending:true },
  { id:103, name:"ChatGPT", url:"https://chatgpt.com", category:"ai", desc:"OpenAI's conversational AI assistant for a wide range of tasks.", tags:["ai assistant","openai"], verified:true, popular:true, trending:true },
  { id:104, name:"Gemini", url:"https://gemini.google.com", category:"ai", desc:"Google's AI assistant integrated with search and workspace tools.", tags:["ai assistant","google"], verified:true, popular:true },
  { id:105, name:"Perplexity", url:"https://www.perplexity.ai", category:"ai", desc:"AI-powered answer engine that cites sources for its responses.", tags:["ai search","research"], verified:true, popular:true },
  { id:106, name:"Krutrim", url:"https://www.krutrim.ai", category:"ai", desc:"Indian AI platform building multilingual models for Indian languages.", tags:["ai assistant","indian"], verified:true, trending:true },
  { id:107, name:"Microsoft Copilot", url:"https://copilot.microsoft.com", category:"ai", desc:"AI assistant integrated across Microsoft's productivity apps.", tags:["ai assistant","microsoft"], verified:true },

  // ---------------- SOCIAL ----------------
  { id:108, name:"WhatsApp", url:"https://www.whatsapp.com", category:"social", desc:"India's most widely used messaging app for chat, voice and video calls.", tags:["messaging","calls"], verified:true, popular:true, trending:true },
  { id:109, name:"Instagram", url:"https://www.instagram.com", category:"social", desc:"Photo and video sharing social network.", tags:["photos","video"], verified:true, popular:true },
  { id:110, name:"Facebook", url:"https://www.facebook.com", category:"social", desc:"Social networking platform for connecting with friends and communities.", tags:["social network"], verified:true },
  { id:111, name:"X (Twitter)", url:"https://x.com", category:"social", desc:"Real-time public conversation and news platform.", tags:["microblogging","news"], verified:true, popular:true },
  { id:112, name:"Telegram", url:"https://telegram.org", category:"social", desc:"Cloud-based messaging app known for large groups and channels.", tags:["messaging","channels"], verified:true },
  { id:113, name:"ShareChat", url:"https://sharechat.com", category:"social", desc:"Indian social media platform for regional-language content.", tags:["regional","social network"], verified:true },

  // ---------------- REAL ESTATE ----------------
  { id:114, name:"99acres", url:"https://www.99acres.com", category:"realestate", desc:"Property listings for buying, selling and renting homes across India.", tags:["property","rent"], verified:true, popular:true },
  { id:115, name:"MagicBricks", url:"https://www.magicbricks.com", category:"realestate", desc:"Real estate portal for residential and commercial property search.", tags:["property","buy"], verified:true, popular:true },
  { id:116, name:"Housing.com", url:"https://housing.com", category:"realestate", desc:"Property search platform with verified listings and virtual tours.", tags:["property","rent"], verified:true },
  { id:117, name:"NoBroker", url:"https://www.nobroker.in", category:"realestate", desc:"Brokerage-free platform to rent, buy or sell property directly.", tags:["property","no brokerage"], verified:true, trending:true },

  // ---------------- UTILITIES / BILLS ----------------
  { id:118, name:"BillDesk", url:"https://www.billdesk.com", category:"utilities", desc:"Online bill payment platform for utilities, insurance and more.", tags:["bill payment"], verified:true },
  { id:119, name:"Airtel Thanks", url:"https://www.airtel.in", category:"utilities", desc:"Recharge, bill payment and account management for Airtel services.", tags:["recharge","telecom"], verified:true, popular:true },
  { id:120, name:"Jio", url:"https://www.jio.com", category:"utilities", desc:"Recharge plans and account management for Jio mobile and broadband.", tags:["recharge","telecom"], verified:true, popular:true },
  { id:121, name:"Vi (Vodafone Idea)", url:"https://www.myvi.in", category:"utilities", desc:"Recharge and manage Vi prepaid and postpaid mobile connections.", tags:["recharge","telecom"], verified:true },

  // ---------------- PRODUCTIVITY / DEV ----------------
  { id:122, name:"GitHub", url:"https://github.com", category:"productivity", desc:"Code hosting platform for version control and collaboration.", tags:["code","git"], verified:true, popular:true },
  { id:123, name:"Google Drive", url:"https://drive.google.com", category:"productivity", desc:"Cloud storage and file sharing integrated with Google Workspace.", tags:["cloud storage","files"], verified:true, popular:true },
  { id:124, name:"Notion", url:"https://www.notion.com", category:"productivity", desc:"All-in-one workspace for notes, docs, wikis and project tracking.", tags:["notes","docs"], verified:true, popular:true },
  { id:125, name:"Canva", url:"https://www.canva.com", category:"productivity", desc:"Drag-and-drop design tool for graphics, presentations and social posts.", tags:["design","graphics"], verified:true, popular:true, trending:true },
  { id:126, name:"iLovePDF", url:"https://www.ilovepdf.com", category:"productivity", desc:"Free online tools to merge, split, compress and convert PDFs.", tags:["pdf","tools"], verified:true, popular:true },
  { id:127, name:"Zoom", url:"https://zoom.us", category:"productivity", desc:"Video conferencing platform for meetings, webinars and classes.", tags:["video calls","meetings"], verified:true, popular:true },
  { id:128, name:"Vercel", url:"https://vercel.com", category:"productivity", desc:"Cloud platform for deploying and hosting frontend web applications.", tags:["hosting","deployment"], verified:true },
  { id:129, name:"Namecheap", url:"https://www.namecheap.com", category:"productivity", desc:"Domain registration and web hosting services.", tags:["domains","hosting"], verified:true },
];