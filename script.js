/* ══════════════ JAVASCRIPT ══════════════ */
/* ── Splash ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const s = document.getElementById('splashScreen');
    s.classList.add('fade-out');
    setTimeout(() => { s.style.display = 'none'; }, 800);
  }, 5000);
});

/* ── Language ── */
const isJa = () => document.body.classList.contains('ja');
function setLang(lang) {
  const btn = document.getElementById('langLabel');
  if (lang === 'ja') { document.body.classList.add('ja'); btn.textContent = 'JP'; }
  else { document.body.classList.remove('ja'); btn.textContent = 'EN'; }
}
function toggleLanguage() { setLang(isJa() ? 'en' : 'ja'); }

/* ── Page routing ── */
let currentPage = 'main';
function showMain() {
  closeSidePanel();
  document.getElementById('mainSite').classList.remove('hidden');
  document.querySelectorAll('.subpage').forEach(p => p.classList.remove('active'));
  currentPage = 'main';
  window.scrollTo({top:0,behavior:'smooth'});
}
function showPage(id) {
  closeSidePanel();
  document.getElementById('mainSite').classList.add('hidden');
  document.querySelectorAll('.subpage').forEach(p => p.classList.remove('active'));
  const t = document.getElementById('page-' + id);
  if (t) { t.classList.add('active'); currentPage = id; }
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ── Side panel ── */
function openSidePanel() {
  document.getElementById('sidePanel').style.right = '0';
  document.getElementById('panelOverlay').style.opacity = '1';
  document.getElementById('panelOverlay').style.pointerEvents = 'all';
  document.body.style.overflow = 'hidden';
}
function closeSidePanel() {
  document.getElementById('sidePanel').style.right = '-360px';
  document.getElementById('panelOverlay').style.opacity = '0';
  document.getElementById('panelOverlay').style.pointerEvents = 'none';
  document.body.style.overflow = '';
}

/* ── Nav to section ── */
function navTo(id) {
  closeSidePanel();
  if (currentPage !== 'main') {
    showMain();
    setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({behavior:'smooth'}); }, 300);
  } else {
    const el = document.getElementById(id); if (el) el.scrollIntoView({behavior:'smooth'});
  }
}

/* ── Year tabs ── */
function switchYear(year) {
  document.querySelectorAll('.year-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.year-content').forEach(c => c.classList.remove('active'));
  document.getElementById('tab-' + year).classList.add('active');
  document.getElementById('year-' + year).classList.add('active');
}

/* ── Modal data ── */
const modalData = {
  bhoomi: {
    en: { title:'Mahasamadhibhumi', subtitle:'Sacred Memorial Ground · Ruyad (Sindhpuri), Pauni, Bhandara',
      body:`<p>Mahasamadhi Bhumi is a prominent Buddhist spiritual and cultural site situated at Ruyad (Sindhpuri) village near Pauni, in Bhandara district of Maharashtra, on the serene banks of the Wainganga River. Established on 8 February 1987 to preserve and promote Buddha Dhamma.</p>
      <p>Spread across approximately 6.5 acres, the complex is home to the magnificent Maha Samadhi Bhumi Maha Stupa — inaugurated on 8 February 2007, regarded as one of the finest contemporary examples of Buddhist architecture in the region.</p>
      <h4>A Living Pilgrimage Centre</h4>
      <p>Thousands of monks, devotees, and visitors from India and abroad visit the site every year. The annual Dhammotsav on 8th February draws tens of thousands of pilgrims who gather for collective vandana, dhamma talks, cultural programs, and community lunch.</p>
      <h4>Social &amp; Heritage Work</h4>
      <p>Mahasamadhibhumi organises annual dhamma programs, essay competitions, cultural events, and social welfare activities — serving as both a spiritual sanctuary and a community hub for the region.</p>`
    },
    ja: { title:'マハーサマーディブーミ', subtitle:'神聖な追悼の地・パウニ、バンダーラ',
      body:`<p>マハーサマーディ・ブーミはインド・マハーラーシュトラ州バンダーラ地区のパウニ近くにあるルヤード村に位置する著名な仏教遺跡です。1987年2月8日に設立され、2007年2月8日に大仏塔が開幕しました。</p>
      <p>約6.5エーカーの敷地に壮大な大仏塔があり、地域で最高の現代仏教建築の一つとして評価されています。</p>`
    }
  },
  prajñagiri: {
    en: { title:'Prajñagiri', subtitle:'Hill of Wisdom · Dongargarh, Rajnandgaon, Chhattisgarh',
      body:`<p>On a 30-ft stage on Prajñagiri mountain (200m above sea level) stands a majestic 30-ft meditating Buddha statue — communicating the message of world peace and brotherhood. The International Buddhist Conference held here on 6 February 2017 drew participants from Japan, Thailand, Sri Lanka, Tibet, Korea, Taiwan, and over 5 lakh attendees from India.</p>
      <h4>Eye Camp — Community Health Service</h4>
      <p>In partnership with Dr. Mahatme Eye Hospital, Nagpur, a landmark eye camp at Pahela, Dist. Bhandara examined 200+ villagers. 36 cataract surgeries were performed. Spectacles: 48 | Hospital Referrals: 32 | Medicines: 15.</p>`
    },
    ja: { title:'プラドニャギリ', subtitle:'智慧の丘・ドンガルガル',
      body:`<p>海抜200mのプラドニャギリ山に建立された30フィートの仏陀像は世界平和と友愛を発信しています。2017年2月6日の国際仏教会議には50万人以上が集まりました。</p>
      <p>眼科キャンプ：パーヘラ村で200人以上を検診。白内障手術36件、眼鏡48件。</p>`
    }
  },
  headquarters: {
    en: { title:'PMS Headquarters', subtitle:'Buddha Nag Vihara · Hardasnagar, Nagpur',
      body:`<p>The Pannya Metta Sangha Head Office is located at Buddha Nag Vihara, Cr. No. 15/21, Hardasnagar (Lashkaribagh), Nagpur, Maharashtra. Registered under No. MAH 586/82, F-3849(NAG).</p>
      <h4>Organisation Structure</h4>
      <p><strong>President:</strong> Venerable Sangharatna Manake<br><strong>General Secretary:</strong> Administrative leadership and coordination<br><strong>Balsadan Committee:</strong> Overseeing children's home operations<br><strong>Social Welfare Division:</strong> Medical camps, education, community programs</p>
      <h4>Contact</h4>
      <p>📧 pannyamettasangha1982@gmail.com<br>📞 +91 9766186214</p>`
    },
    ja: { title:'PMS本部', subtitle:'ブッダ・ナグ・ヴィハーラ・ナーグプル',
      body:`<p>パンニャ・メッタ・サンガ本部はナーグプル・ハルダースナガルのブッダ・ナグ・ヴィハーラにあります。登録番号：MAH 586/82, F-3849(NAG)。</p>
      <p><strong>会長：</strong>僧侶サンガラトナ・マナケ師<br>📧 pannyamettasangha1982@gmail.com<br>📞 +91 9766186214</p>`
    }
  },
  school: {
    en: { title:'Pannya Metta Sangha School', subtitle:'Classes 1–10 · Buddhist Values · Academic Excellence',
      body:`<p><strong>Motto:</strong> "Seek Wisdom, Cultivate Compassion, Serve Community" — inspired by the Three Jewels of Buddhism and Dr. Ambedkar's call for Education, Agitate, Organise.</p>
      <h4>Founder &amp; Principal</h4>
      <p>Founded under the vision of Venerable Sangharatna Manake, the school is led by a principal dedicated to holistic education combining academic rigour with Buddhist values of compassion, mindfulness, and social responsibility.</p>
      <h4>Classes &amp; Curriculum</h4>
      <p>Classes 1 to 10. The curriculum integrates standard board syllabus with Buddhist ethics, Dhamma teachings, community service, and the legacy of Dr. B.R. Ambedkar.</p>
      <h4>Annual Programs</h4>
      <p>Annual Day · Buddha Jayanti · Ambedkar Jayanti · Sports Day · Essay Competition · Cultural performances and prize distribution at Dhammasangoshti.</p>
      <h4>Student Achievements</h4>
      <p>Consistently high board exam results with top district rankings. Medals in district and state-level sports. Recognition for community service and environmental drives.</p>
      <h4>Address</h4>
      <p>Near Mahasamadhibhumi, Sindhpuri, Pauni, Dist. Bhandara, Maharashtra (95 km from Nagpur).</p>`
    },
    ja: { title:'パンニャ・メッタ・サンガ学校', subtitle:'1～10年生・仏教的価値観',
      body:`<p><strong>モットー：</strong>「智慧を求め、慈悲を育み、地域に奉仕する」</p>
      <p>1年生から10年生。仏教倫理、ダンマの教え、アンベードカル博士の遺産を取り込んだカリキュラム。年次発表会、仏誕祭、アンベードカル誕生祭、スポーツデーなどの年次プログラム。</p>`
    }
  },
  balsadan: {
    en: { title:"Pannya Metta Balsadan", subtitle:"Children's Home · Sindhpuri, Pauni, Dist. Bhandara",
      body:`<p>Pannya Metta Balsadan is dedicated to providing a stable, loving family atmosphere for orphan children. Established in 1995 on 9 acres near Mahasamadhibhumi at Sindhpuri, Pauni, Dist. Bhandara (95 kms from Nagpur).</p>
      <h4>Our Home</h4>
      <h4>Education &amp; Development</h4>
      <p>Children attend reputed schools and colleges. Two dedicated teachers provide 2 hours of personal tuition daily at Balsadan. Activities include dancing, singing, sports, and annual tours (including the memorable 2016 Goa tour covering 4,800 km).</p>
      <h4>Health Care</h4>
      <p>Annual health check-up camps screen all children. Every year clothes and bedding are donated by Pannya Metta Sangha. Regular medical attention and specialist referrals are provided.</p>`
    },
    ja: { title:'パンニャ・メッタ・バルサダン', subtitle:'子どもの家・パウニ',
      body:`<p>1995年2月8日設立。パウニ・シンドプリのマハーサマーディブーミ近くの9エーカーの土地に。現在32人（男子14人・女子18人）が16のホールで生活。毎年衣類と寝具をパンニャ・メッタ・サンガより寄贈。</p>`
    }
  },
  library: {
    en: { title:'Pannya Metta Sangha Library', subtitle:'Buddhist Knowledge Centre · Nagpur',
      body:`<p>The Pannya Metta Sangha Library is a dedicated repository of Buddhist knowledge — housing thousands of texts on Buddhist philosophy, Pali scriptures, Dr. Ambedkar's writings, social justice literature, and community history.</p>
      <h4>Collection</h4>
      <p>Rare manuscripts, Pali texts, original editions of Dr. Ambedkar's works, Buddhist art books, a growing digital collection, and the complete run of the Mahasamadhibhumi Magazine.</p>
      <h4>Activities</h4>
      <p>Regular reading programs, book discussions, study circles, and scholarly seminars are held for community members of all ages. The library is free and open to all.</p>`
    },
    ja: { title:'パンニャ・メッタ・サンガ図書館', subtitle:'仏教知識センター・ナーグプル',
      body:`<p>仏教哲学、パーリ語経典、アンベードカル博士の著作、社会正義文学を所蔵する専門図書館。定期的な読書プログラム、読書会、学習サークルを開催。すべての人に無料で開放。</p>`
    }
  }
};

/* ── Project modal data ── */
const projectModalData = {
  essay: {
    en:{ title:'Essay Competition', subtitle:'Annual Academic Program', body:`<p>The Mahasamadhibhumi Essay Competition is an annual academic event organised by Pannya Metta Sangha. Open to students from primary to post-graduate level, topics include Buddhist philosophy, Dr. Ambedkar's legacy, social justice, and community welfare.</p><h4>Prizes</h4><p>🥇 First Prize: Certificate, medal, and cash prize<br>🥈 Second Prize: Certificate, medal, and books<br>🥉 Third Prize: Certificate and books<br>🌟 Special Recognition: Publication in the annual magazine</p><p>Winners are honoured at the Dhammasangoshti ceremony in the presence of Venerable Sangharatna Manake.</p>` },
    ja:{ title:'作文コンクール', subtitle:'年次学術プログラム', body:`<p>年次作文コンクールは仏教哲学、アンベードカル博士の遺産、社会正義をテーマにした学術行事です。入賞者はダンマサンガシュティで表彰されます。</p>` }
  },
  cataract: {
    en:{ title:'Cataract Project', subtitle:'Free Eye Care for Rural Communities', body:`<p>In partnership with Dr. Mahatme Eye Hospital, Nagpur, Pannya Metta Sangha organises free eye camps, screenings, and cataract surgeries for hundreds of rural patients annually.</p><h4>2017 Landmark Camp — Pahela, Dist. Bhandara</h4><p>Villagers screened: 200+ | Cataract surgeries: 36 | Spectacles distributed: 48 | Hospital referrals: 32 | Medicines: 15</p><p>The Sangha arranges transport and accommodation for all patients receiving surgery at Nagpur.</p>` },
    ja:{ title:'白内障プロジェクト', subtitle:'農村コミュニティへの無料眼科ケア', body:`<p>ナーグプル・マハトメ眼科病院との協力により無料眼科キャンプを開催。2017年のパーヘラ村キャンプでは200人以上を検診し、36件の白内障手術を実施しました。</p>` }
  },
  covid: {
    en:{ title:'Covid Aid', subtitle:'Pandemic Relief Operations', body:`<p>During the COVID-19 pandemic (2020–2022), Pannya Metta Sangha stepped up with comprehensive community relief — distributing ration kits, masks, sanitisers, medicines, and PPE to thousands of affected families across Nagpur, Bhandara, and Pauni.</p><p>The Sangha coordinated with local authorities and healthcare workers to ensure the most vulnerable received timely support. Balsadan children and staff were kept safe throughout the crisis with dedicated health protocols.</p>` },
    ja:{ title:'COVID支援', subtitle:'パンデミック救援活動', body:`<p>COVID-19パンデミック中に食料キット、マスク、消毒液、薬品を数千の被害家族に配布。地方当局・医療従事者と協力して最も脆弱な人々を支援しました。</p>` }
  },
  handpump: {
    en:{ title:'Hand Pump Facilities', subtitle:'Clean Water for Remote Villages', body:`<p>Pannya Metta Sangha has funded and installed hand pumps in remote villages across the Bhandara and Gadchiroli regions — providing clean, accessible drinking water to communities that historically relied on contaminated sources.</p><p>This initiative has had a profound impact on public health, reducing waterborne diseases and improving quality of life for hundreds of rural families.</p>` },
    ja:{ title:'手押しポンプ設備', subtitle:'遠隔地の村への清潔な水', body:`<p>バンダーラ・ガドチロリ地区の遠隔地の村に手押しポンプを設置し、清潔な飲料水へのアクセスを提供。水系疾患を減少させ、農村家族の生活の質を向上させました。</p>` }
  },
  purnima: {
    en:{ title:'Purnima Sutra Pathan', subtitle:'Monthly Community Dhamma Gathering', body:`<p>Every Purnima (full moon day), community members gather at Mahasamadhibhumi and branch viharas across the region for collective sutra recitation (Sutra Pathan), dhamma discourses, and meditation.</p><p>This monthly tradition, practiced consistently for decades, strengthens community bonds, deepens individual practice, and keeps the Dhamma alive in everyday life.</p>` },
    ja:{ title:'プールニマ経典誦読', subtitle:'毎月のコミュニティ集会', body:`<p>毎月の満月（プールニマ）に集合的な経典誦読、ダンマ法話、瞑想を開催。数十年にわたり継続されてきたこの月次伝統がコミュニティの絆とダンマの実践を深めます。</p>` }
  },
  vaisakhshibir: {
    en:{ title:'Vaisakh Purnima Shibir', subtitle:'Annual Buddha Jayanti Retreat', body:`<p>The Vaisakh Purnima Shibir is an annual meditation and dhamma retreat held on Buddha Jayanti — the celebration of the Buddha's birth, enlightenment, and Parinirvana.</p><p>Participants spend the day in collective meditation, sutra chanting, dhamma discourse, and community service. The retreat is open to all — monks, lay practitioners, students, and families — and is one of the year's most spiritually enriching gatherings.</p>` },
    ja:{ title:'ヴァイシャーク・プールニマ修行会', subtitle:'年次仏誕祭リトリート', body:`<p>仏誕祭（仏陀の誕生・悟り・大般涅槃の祝典）に開催される年次瞑想・ダンマリトリート。集合瞑想、経典誦唱、法話、コミュニティ奉仕が一日を構成します。</p>` }
  },
  dharmaatalks: {
    en:{ title:'Dharma Talks', subtitle:'Online Dharma Talks', body:`<p>Online Dharma Talks are a series of virtual events that bring the wisdom of the Buddha to a global audience.</p><p>This practical act of Dana (generosity) is particularly valued by the monks and children at Balsadan, who receive umbrellas to use on their daily journeys to school and vihara.</p>` },
    ja:{ title:'法話', subtitle:'オンライン法話', body:`<p>オンライン法話は、仏教の智慧を世界中の聴衆に届けるための仮想イベントです。</p>` }
  },
  mobilehospital: {
    en:{ title:'Mobile Hospitals', subtitle:'Healthcare to Remote Villages', body:`<p>The Mobile Hospital initiative deploys teams of doctors, nurses, specialists, and health workers directly to remote villages across Sironcha, Gadchiroli, Bhandara, and tribal regions of central India.</p><p>Services include general health check-ups, specialist consultations (eye, dental, orthopaedic), medicine distribution, and referrals for advanced hospital care. The Sangha arranges transport for patients requiring surgery in Nagpur.</p><p>This program has benefitted thousands of rural residents who cannot access urban hospitals, particularly the tribal and adivasi communities of Gadchiroli.</p>` },
    ja:{ title:'移動病院', subtitle:'遠隔地の村への医療提供', body:`<p>シロンチャ、ガドチロリ、バンダーラなどの遠隔地の村に医師・看護師チームを派遣。一般検診、専門相談、投薬、紹介を提供。都市病院にアクセスできない農村住民、特にガドチロリの部族コミュニティを支援。</p>` }
  },
  trees: {
    en:{ title:'Tree Plantation', subtitle:'Community Environmental Initiative', body:`<p>Pannya Metta Sangha organises regular tree plantation drives in villages surrounding Mahasamadhibhumi, Pauni, and across the Bhandara-Gadchiroli region. Schools, volunteers, and community members participate in planting saplings of medicinal, fruit-bearing, and shade trees.</p><p>This initiative honours the Buddhist reverence for nature — recalling the Bodhi Tree under which the Buddha attained enlightenment — and builds a greener, more sustainable environment for future generations.</p>` },
    ja:{ title:'植樹活動', subtitle:'コミュニティ環境イニシアチブ', body:`<p>マハーサマーディブーミ周辺の村々で定期的な植樹活動を実施。仏陀が悟りを開いた菩提樹への敬意を体現し、将来世代のためのより緑豊かな環境を構築します。</p>` }
  },
  umbrella: {
    en:{ title:'Umbrella Donations', subtitle:'Seasonal Community Care', body:`<p>Every year during the monsoon season, Pannya Metta Sangha distributes umbrellas to monks, nuns, students, elderly community members, and underprivileged families — ensuring protection from the rains and expressing the Sangha's ongoing care for all members of the community.</p><p>This practical act of Dana (generosity) is particularly valued by the monks and children at Balsadan, who receive umbrellas to use on their daily journeys to school and vihara.</p>` },
    ja:{ title:'傘の寄贈', subtitle:'季節のコミュニティケア', body:`<p>毎年モンスーン期に僧侶、学生、高齢者、恵まれないコミュニティメンバーへ傘を配布。この実践的な布施行為はバルサダンの子どもたちや僧侶に特に喜ばれています。</p>` }
  },
  gujarat: {
    en:{ title:'Gujarat Earthquake Relief', subtitle:'Emergency Humanitarian Operations · 2001', body:`<p>Following the devastating 2001 Gujarat earthquake, Pannya Metta Sangha mobilised emergency relief operations — collecting and distributing food rations, clothing, medicines, shelter materials, and essential household items to affected communities.</p><p>Volunteers from the Sangha travelled to the affected areas to provide direct relief and coordinate with local organisations. This interstate outreach reflected the Sangha's commitment to serving all beings in need, regardless of region, caste, or religious affiliation.</p>` },
    ja:{ title:'グジャラート地震救援', subtitle:'緊急人道支援・2001年', body:`<p>2001年グジャラート地震後、食料、衣類、薬品、避難材を被害コミュニティに配布。ボランティアが直接救援活動を行い、地域を問わずすべての存在への奉仕を体現しました。</p>` }
  },
  nepal: {
    en:{ title:'Nepal Earthquake Relief', subtitle:'International Buddhist Solidarity · 2015', body:`<p>Following the 2015 Nepal earthquake that devastated Buddhist heritage sites and communities, Pannya Metta Sangha organised fundraising drives, collected relief materials, and coordinated support with Buddhist organisations in Nepal.</p><p>The response was rooted in Buddhist solidarity — recognising Nepal as the birthplace of the Buddha (Lumbini) and a sacred land of the Dhamma. Relief included financial donations, medicines, and community support for affected Buddhist communities.</p>` },
    ja:{ title:'ネパール地震救援', subtitle:'国際仏教連帯・2015年', body:`<p>2015年ネパール地震後に募金活動と救援物資収集を組織。仏陀の誕生地（ルンビニ）への敬意と仏教連帯の精神のもと、ネパールの仏教コミュニティを支援しました。</p>` }
  },
  clothes: {
    en:{ title:'Clothes Distribution', subtitle:'Community Welfare Drives', body:`<p>Regular clothing distribution drives are organised by Pannya Metta Sangha throughout the year — with special drives at Buddha Jayanti, Diwali, and the monsoon season. Recipients include the 32 children at Balsadan (who receive new clothes and bedding annually), elderly community members, and underprivileged families.</p><p>Supporters from Japan — including friends from Saichoji Temple — have contributed clothing and funds for these distributions, strengthening the Indo-Japanese community bond.</p>` },
    ja:{ title:'衣類配布', subtitle:'コミュニティ福祉活動', body:`<p>年間を通じて定期的に衣類配布活動を実施。バルサダンの32人の子どもたちへの年次衣類・寝具寄贈を含む。西光寺の友人からの支援も。</p>` }
  },
  blood: {
    en:{ title:'Blood Donation Camps', subtitle:'Life-Saving Community Service', body:`<p>Pannya Metta Sangha organises regular blood donation camps in collaboration with local hospitals and blood banks — mobilising hundreds of voluntary donors from the community each year.</p><p>Blood donation is seen as one of the highest acts of Dana (giving) — an act of pure compassion that directly saves lives. The camps are held at Mahasamadhibhumi during major events and at the headquarters in Nagpur, making donation accessible and easy for community members.</p>` },
    ja:{ title:'献血キャンプ', subtitle:'命を救うコミュニティ奉仕', body:`<p>地域の病院・血液バンクとの協力による定期的な献血キャンプ。献血は最高の布施行為の一つとして、命を直接救う純粋な慈悲の行為として位置づけられています。</p>` }
  },
  yatra: {
    en:{ title:'Vishwa Shanti Dhamma Yatra', subtitle:'World Peace Pilgrimage', body:`<p>The Vishwa Shanti Dhamma Yatra (World Peace Dhamma Pilgrimage) is one of the most spiritually significant initiatives of Pannya Metta Sangha — a sacred journey through Buddhist sites across India, spreading the message of peace, brotherhood, and Dhamma.</p><p>Participants visit key Buddhist pilgrimage sites — Bodh Gaya, Sarnath, Kushinagar, Lumbini, Rajgir, Nalanda, and Sanchi — deepening their understanding of the Dhamma and fostering international Buddhist community connections. The Yatra has also included visits to Japanese Buddhist centres, strengthening the Indo-Japanese Dhamma bond.</p>` },
    ja:{ title:'ヴィシュワ・シャンティ・ダンマ・ヤートラー', subtitle:'世界平和巡礼', body:`<p>インド各地の仏教遺跡を巡る神聖な巡礼旅行。ブッダガヤ、サールナート、クシナガル、ルンビニなどを訪問。平和、友愛、ダンマのメッセージを広め、国際的な仏教コミュニティのつながりを深めます。</p>` }
  }
};

function openModal(key) {
  const lang = isJa() ? 'ja' : 'en';
  const d = modalData[key][lang];
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalSubtitle').textContent = d.subtitle;
  document.getElementById('modalBody').innerHTML = d.body;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function handleModalClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function openProjectModal(key) {
  const lang = isJa() ? 'ja' : 'en';
  const d = projectModalData[key][lang];
  document.getElementById('projectModalTitle').textContent = d.title;
  document.getElementById('projectModalSubtitle').textContent = d.subtitle;
  document.getElementById('projectModalBody').innerHTML = d.body;
  document.getElementById('projectModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProjectModal() {
  document.getElementById('projectModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function handleProjectModalClick(e) {
  if (e.target === document.getElementById('projectModalOverlay')) closeProjectModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeProjectModal(); closeSidePanel(); }
});
