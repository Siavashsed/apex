/* =========================================================
   Apex Dental Journal - i18n (fa / en / ckb)
   Vanilla JS, no dependencies
   ========================================================= */

const STR = {
  fa: {
    // Brand / nav
    "brand.name": "مجلهٔ دندانپزشکی اپکس",
    "brand.title": "نشریهٔ علمی-بالینی دندانپزشکی",
    "nav.home": "خانه",
    "nav.about": "سردبیر",
    "nav.curriculum": "برنامهٔ آموزشی",
    "nav.lab": "آزمایشگاه",
    "nav.articles": "مقالات",
    "nav.tips": "توصیه‌ها و لوازم",
    "nav.admissions": "پذیرش",
    "nav.toggle": "منو",

    // Lang switch a11y
    "lang.fa": "فارسی",
    "lang.en": "English",
    "lang.ckb": "کوردی",

    // Home / hero
    "home.eyebrow": "آموزش دندانپزشکی بر پایهٔ شواهد",
    "home.title": "پنج دهه مشاهدهٔ بالینی. پنج محور آموزش پسادکتری. یک رشتهٔ علمی: حفاظت از دندان.",
    "home.lede": "مجلهٔ دندانپزشکی اپکس، حاصل کار درمانگاهی و یاددهی دکتر توفیق صدیقی است. مجموعه‌ای از محورهای آموزشی، ابزارهای بالینی و مقالات بازخوانی‌شده، در سه زبان.",
    "home.cta.curriculum": "بررسی برنامهٔ آموزشی",
    "home.cta.lab": "ورود به آزمایشگاه",
    "home.meta.years": "سال مشاهدهٔ بالینی",
    "home.meta.tracks": "محور پسادکتری",
    "home.meta.languages": "زبان رسمی",
    "home.meta.based": "ستاد آموزشی",
    "home.meta.basedVal": "مهاباد، ایران",

    // Tracks preview on home
    "home.tracks.title": "پنج محور آموزشی",
    "home.tracks.sub": "هر محور، دوازده درس ساخت‌یافته دارد. سه درس نخست هر محور بازدسترس است.",
    "home.tracks.viewAll": "تمام محورها",

    // Lab preview
    "home.lab.title": "ابزارهای آزمایشگاه بالینی",
    "home.lab.sub": "ابزارهای تعاملی برای ارزیابی، آموزش و تمرین بالینی.",
    "home.lab.open": "گشودن ابزار",

    // Latest articles
    "home.latest.title": "مقاله‌های بازخوانی‌شده",
    "home.latest.sub": "مقاله‌های آموزشی، با رجوع به ادبیات بالینی.",
    "home.latest.viewAll": "آرشیو مقالات",
    "home.read": "خواندن مقاله",

    // Bio strip
    "home.bio.eyebrow": "سردبیر مجله",
    "home.bio.title": "دکتر توفیق صدیقی، د.م.د.",
    "home.bio.p1": "زادهٔ ۱۳۴۳ مهاباد. پنج دهه طبابت بالینی، آموزش بهداشت دهان در مدارس و سازمان‌های محلی، و تجربهٔ مستند در محورهای پیشگیری، اطفال، ترمیمی و اورژانس. اپکس حاصل گفت‌و‌گوی او با هزاران بیمار است.",
    "home.bio.more": "بیوگرافی و سوابق",

    // FAQ
    "home.faq.title": "پرسش‌های پرتکرار",
    "home.faq.q1": "آیا برای دسترسی به محتوای اپکس باید ثبت‌نام کنم؟",
    "home.faq.a1": "خیر. سه درس نخست هر محور و همهٔ مقالات و ابزارهای آزمایشگاه به‌صورت بازدسترس عرضه می‌شوند. پذیرش برای دریافت خبرنامهٔ بالینی است، نه برای دسترسی به محتوا.",
    "home.faq.q2": "محتوا چه‌قدر مرتب بازنگری می‌شود؟",
    "home.faq.a2": "هر درس و هر مقاله، تاریخ بازنگری بالینی دارد. بازنگری دوره‌ای، هر دوازده ماه یا با تغییر در راهنماهای بالینی صورت می‌گیرد.",
    "home.faq.q3": "آیا اپکس جایگزین مشاورهٔ بالینی است؟",
    "home.faq.a3": "خیر. این یک منبع آموزشی است. تشخیص و درمان همواره نیاز به ارزیابی حضوری توسط دندانپزشک دارد.",
    "home.faq.q4": "زبان رسمی محتوا کدام است؟",
    "home.faq.a4": "فارسی، انگلیسی و کردی سورانی. سه زبان معتبر و پایدار، با ساختار مرجع یکسان.",
    "home.faq.q5": "آیا برای دندانپزشکان عمومی هم مفید است؟",
    "home.faq.a5": "بله. محورها برای والدین، بیماران بزرگسال و دانشجویان دندانپزشکی نوشته شده‌اند. سطح ادبیات، مقدماتی تا متوسط است.",

    // Footer
    "foot.about.title": "دربارهٔ مجله",
    "foot.about.p": "مجلهٔ دندانپزشکی اپکس، نهادی آموزشی است که بر آموزش پیشگیرانه و مبتنی بر شواهد در دندانپزشکی تمرکز دارد. مدیریت بالینی با دکتر توفیق صدیقی.",
    "foot.nav.title": "ناوبری",
    "foot.contact.title": "ارتباط",
    "foot.colophon": "© ۲۰۲۶ مجلهٔ دندانپزشکی اپکس. این محتوا برای آموزش عمومی است و جایگزین معاینهٔ بالینی نیست.",
    "foot.heritage": "با احترام به میراث مهاباد و کردستان",

    // About page
    "about.crumb": "خانه / سردبیر",
    "about.eyebrow": "سردبیر مجله",
    "about.title": "دکتر توفیق صدیقی، د.م.د.",
    "about.credentials": "د.م.د. ۱۳۶۵ · پنج دهه طبابت بالینی · مهاباد",
    "about.lede": "زادهٔ ۲۸ مهر ۱۳۴۳ (مطابق با ۲۰ اکتبر ۱۹۶۴ میلادی)، مهاباد، استان آذربایجان غربی. سردبیر مجلهٔ دندانپزشکی اپکس، نویسنده و معلم دندانپزشکی پیشگیرانه.",

    "about.section.lineage": "سیر زندگی",
    "about.section.principles": "پنج اصل بالینی",
    "about.section.langs": "زبان‌ها",
    "about.section.memberships": "عضویت و گواهینامه",
    "about.section.contact": "تماس و موقعیت",

    "about.tl.1964.y": "۱۳۴۳ / ۱۹۶۴",
    "about.tl.1964.e": "تولد در مهاباد",
    "about.tl.1964.n": "زادگاه در قلب کردستان ایران. کودکی در محیطی با ارزش آموزش، شعر و گفتگوی خانوادگی.",
    "about.tl.school.n": "آغاز دورهٔ دندانپزشکی، با تمرکز بر دندانپزشکی عمومی و مراقبت‌های اولیه.",
    "about.tl.grad.e": "اخذ مدرک د.م.د.",
    "about.tl.grad.n": "پایان دورهٔ دکترای دندانپزشکی. آغاز سال‌های نخست طبابت در [REGION].",
    "about.tl.specialty.n": "آموزش پیشرفته در حوزهٔ تخصصی، با تمرکز بر دندانپزشکی پیشگیرانه و کودکان.",
    "about.tl.teaching.y": "۱۳۷۵ تا ۱۳۸۷",
    "about.tl.teaching.n": "مدرس مدعو در دروس بهداشت دهان و دندانپزشکی پیشگیرانه.",
    "about.tl.clinic.y": "از ۱۳۷۰ تا کنون",
    "about.tl.clinic.e": "طبابت بالینی در مهاباد",
    "about.tl.clinic.n": "ارائهٔ خدمات بالینی در مهاباد و شهرهای اطراف، با تمرکز بر مراقبت خانوادگی و آموزش بیمار.",
    "about.tl.academy.y": "۱۴۰۵ / ۲۰۲۶",
    "about.tl.academy.e": "بنیان‌گذاری مجلهٔ اپکس",
    "about.tl.academy.n": "تأسیس برنامهٔ آموزشی چندرسانه‌ای برای انتقال تجربهٔ بالینی به نسل‌های آینده.",

    "about.p.1.h": "بیمار مسن‌تر از پروندهٔ خویش است",
    "about.p.1.p": "هیچ پروندهٔ بالینی، تاریخچهٔ زیستی، فرهنگی و عاطفی بیمار را به‌تمامی روایت نمی‌کند. درمان درست، با شنیدن آغاز می‌شود.",
    "about.p.2.h": "پیشگیری همواره ارزان‌تر است",
    "about.p.2.p": "بیش‌تر بیماری‌های دندانی، با چند عادت ساده در کودکی، هرگز رخ نمی‌دهند. آموزش، عمل بالینی است.",
    "about.p.3.h": "ابزار جایگزین قضاوت نیست",
    "about.p.3.p": "رادیوگرافی، اسکنر و لیزر، در دست دندانپزشک کم‌تجربه، خطرناک‌ترند تا در دست بالینگر آرام و کنجکاو.",
    "about.p.4.h": "زبان بیمار، زبان درمان است",
    "about.p.4.p": "توضیح کوتاه و دقیق، بیش از هر بروشور، اعتماد می‌سازد. اپکس از این باور زاده شد.",
    "about.p.5.h": "شواهد را بازنویسی کن، نه بازخوانی",
    "about.p.5.p": "ادبیات بالینی هر دهه به‌روزرسانی می‌شود. آنچه دیروز درست بود، می‌تواند امروز نادرست باشد.",

    "about.langs.list": "کردی سورانی (زبان مادری) · فارسی (روان) · انگلیسی (بالینی) · عربی (مکاتباتی)",
    "about.memberships.list": "[انجمن دندانپزشکان ایران، شمارهٔ نظام پزشکی] · [انجمن دندانپزشکی کودکان] · [بازنگرنده، نشریهٔ علمی]",
    "about.contact.line": "، مهاباد، ایران · تلفن:  · ایمیل: ",

    // Curriculum index
    "curr.crumb": "خانه / برنامهٔ آموزشی",
    "curr.eyebrow": "برنامهٔ آموزشی",
    "curr.title": "پنج محور آموزش پسادکتری",
    "curr.lede": "هر محور، دوازده درس ساخت‌یافته دارد که در گفتگوی بالینی، مرور ادبیات و مشاهدهٔ شخصی دکتر صدیقی شکل گرفته است. سه درس نخست هر محور برای همه بازدسترس است.",

    "curr.t1.code": "P-",
    "curr.t1.title": "پیشگیری و بهداشت",
    "curr.t1.lede": "زیست‌شناسی بیوفیلم، شیمی فلوراید، و معماری مراقبت روزانه.",
    "curr.t2.code": "PD-",
    "curr.t2.title": "دندانپزشکی کودکان",
    "curr.t2.lede": "از نخستین دندان شیری تا گذار به دندان دائمی. رفتار، رشد و خانواده.",
    "curr.t3.code": "C-",
    "curr.t3.title": "ترمیمی و زیبایی",
    "curr.t3.lede": "شواهد پشت سفیدسازی، کامپوزیت و ترمیم محافظه‌کارانه.",
    "curr.t4.code": "E-",
    "curr.t4.title": "اورژانس‌های دندانی",
    "curr.t4.lede": "تروما، آبسه، خونریزی پس از کشیدن. پروتکل‌های دو ساعت نخست.",
    "curr.t5.code": "S-",
    "curr.t5.title": "ارتباطات سیستمیک",
    "curr.t5.lede": "دهان، قلب، دیابت و بارداری. مرور ادبیات کنونی.",

    // Lab index
    "lab.crumb": "خانه / آزمایشگاه",
    "lab.eyebrow": "آزمایشگاه بالینی",
    "lab.title": "ابزارهای آزمایشگاه",
    "lab.lede": "ابزارهای تعاملی برای آموزش، ارزیابی و تمرین. هیچ‌کدام جایگزین مشاورهٔ بالینی نیستند. همه با محرمانگی روی دستگاه شما اجرا می‌شوند.",
    "lab.tool.timer.title": "تایمر مسواک ناحیه‌ای",
    "lab.tool.timer.desc": "تایمر دو دقیقه‌ای با نقشهٔ چهار ناحیهٔ دهان. دو پروتکل: Bass و Stillman.",
    "lab.tool.technique.title": "تکنیک مسواک زدن",
    "lab.tool.technique.desc": "تصویرسازی زاویهٔ ۴۵ درجه، حرکات کوتاه و کنترل فشار.",
    "lab.tool.sensitivity.title": "ارزیابی حساسیت دندان",
    "lab.tool.sensitivity.desc": "پنج سؤال، نقشهٔ گرمایی دندان‌ها و تفسیر بالینی.",
    "lab.tool.fluoride.title": "محاسبهٔ فلوراید کودک",
    "lab.tool.fluoride.desc": "مقدار خمیردندان مناسب بر اساس سن، با اشاره به ppm فلوراید.",
    "lab.tool.extraction.title": "مراقبت پس از کشیدن دندان",
    "lab.tool.extraction.desc": "زمان‌بندی ۷۲ ساعت نخست، با اشاره به نشانه‌های خطر.",

    // Articles index
    "articles.crumb": "خانه / مقالات",
    "articles.eyebrow": "آرشیو مقالات",
    "articles.title": "مقاله‌های آموزشی، بازخوانی‌شده",
    "articles.lede": "مقاله‌های کوتاه و میان‌اندازه، هر یک با تاریخ بازنگری و رجوع به ادبیات بالینی.",
    "articles.filter.all": "همه",
    "articles.filter.hygiene": "بهداشت",
    "articles.filter.prevention": "پیشگیری",
    "articles.filter.pediatric": "کودکان",
    "articles.filter.cosmetic": "ترمیمی",
    "articles.minread": "دقیقه مطالعه",

    // Admissions
    "adm.crumb": "خانه / پذیرش",
    "adm.eyebrow": "پذیرش بیمار / خبرنامهٔ بالینی",
    "adm.title": "ثبت‌نام در خبرنامهٔ بالینی اپکس",
    "adm.lede": "هر سه ماه یک‌بار، یک خبرنامهٔ کوتاه دربارهٔ بازنگری‌های ادبیات بالینی و درس‌های تازهٔ مجله. بدون فروش، بدون اشتراک‌گذاری.",
    "adm.email.label": "نشانی ایمیل",
    "adm.email.placeholder": "you@example.com",
    "adm.submit": "ثبت‌نام",
    "adm.privacy": "ایمیل شما تنها برای ارسال خبرنامه استفاده می‌شود و با هیچ سازمان دیگری به اشتراک گذاشته نمی‌شود.",
    "adm.success": "نام شما در فهرست ثبت شد. خوش آمدید.",

    // Common
    "common.openAccess": "بازدسترس",
    "common.lockedSoon": "به‌زودی",
    "common.lessons": "درس",
    "common.lesson": "درس",
    "common.reviewed": "بازنگری‌شده",
    "common.readTime": "زمان مطالعه",
    "common.minutes": "دقیقه",
    "common.related": "درس‌های مرتبط",
    "common.toc": "فهرست مطالب",
    "common.citations": "منابع و رجوع",
    "common.protocol": "پروتکل بالینی",
    "common.further": "برای کنکاش بیشتر",
    "common.back": "بازگشت به محور",
    "common.start": "آغاز",
    "common.pause": "وقفه",
    "common.reset": "بازنشانی",
    "common.next": "بعدی",

    // Tools text
    "tools.timer.title": "تایمر مسواک ناحیه‌ای",
    "tools.timer.intro": "دو دقیقه. چهار ناحیه. سی ثانیه برای هر ربع.",
    "tools.timer.quadrants.UR": "ربع راست بالا",
    "tools.timer.quadrants.UL": "ربع چپ بالا",
    "tools.timer.quadrants.LL": "ربع چپ پایین",
    "tools.timer.quadrants.LR": "ربع راست پایین",
    "tools.timer.mode": "پروتکل",
    "tools.timer.mode.bass": "تکنیک Bass",
    "tools.timer.mode.stillman": "تکنیک Stillman",
    "tools.timer.audio.on": "صدا روشن",
    "tools.timer.audio.off": "صدا خاموش",
    "tools.timer.done": "پایان. مسواک را بشویید.",

    "tools.quiz.title": "ارزیابی حساسیت دندان",
    "tools.quiz.intro": "پنج پرسش کوتاه، سپس نقشهٔ گرمایی دندان‌های حساس.",
    "tools.quiz.q1": "آیا با خوردن آب سرد یا یخ، دندان‌ها تیر می‌کشند؟",
    "tools.quiz.q2": "آیا با مسواک زدن خون‌ریزی یا درد گذرا دارید؟",
    "tools.quiz.q3": "آیا با خوردن شیرینی، درد لحظه‌ای حس می‌کنید؟",
    "tools.quiz.q4": "آیا در ناحیهٔ خاصی از فک، حساسیت مکرر دارید؟",
    "tools.quiz.q5": "آیا شب‌ها دندان‌قروچه دارید یا فک خسته بیدار می‌شوید؟",
    "tools.quiz.opt.never": "هرگز",
    "tools.quiz.opt.sometimes": "گاهی",
    "tools.quiz.opt.often": "اغلب",
    "tools.quiz.mapPrompt": "روی دندان‌هایی که حساس‌اند، ضربه بزنید.",
    "tools.quiz.result.mild": "خفیف. تغییر تکنیک مسواک و خمیر حساسیت برای دو هفته توصیه می‌شود.",
    "tools.quiz.result.moderate": "متوسط. معاینهٔ بالینی پیشنهاد می‌شود.",
    "tools.quiz.result.refer": "نیاز به ارجاع. حتماً با دندانپزشک قرار بگذارید.",

    "tools.fluoride.title": "محاسبهٔ خمیردندان فلوراید",
    "tools.fluoride.intro": "مقدار مناسب خمیردندان بر اساس سن کودک.",
    "tools.fluoride.age.label": "سن کودک",
    "tools.fluoride.r1": "زیر ۳ سال: به اندازهٔ یک دانهٔ برنج (~۰٫۱ گرم) · خمیر ۱۰۰۰ ppm",
    "tools.fluoride.r2": "۳ تا ۶ سال: به اندازهٔ یک نخود (~۰٫۲۵ گرم) · خمیر ۱۰۰۰ تا ۱۴۵۰ ppm",
    "tools.fluoride.r3": "بالای ۶ سال: کل سطح موها (~۰٫۵ گرم) · خمیر ۱۴۵۰ ppm",

    "tools.extraction.title": "مراقبت پس از کشیدن دندان",
    "tools.extraction.intro": "زمان‌بندی ۷۲ ساعت نخست. هر مرحله را بخوانید و علامت بزنید.",

    // Anatomy
    "anatomy.title": "آناتومی تعاملی دندان",
    "anatomy.intro": "روی هر لایه از مقطع دندان حرکت کنید تا نام و نقش آن را ببینید.",
    "anatomy.enamel": "مینا (Enamel)",
    "anatomy.enamel.desc": "سخت‌ترین بافت بدن. لایهٔ بیرونی تاج. در برابر اسید و سایش، اولین خط دفاع.",
    "anatomy.dentin": "عاج (Dentin)",
    "anatomy.dentin.desc": "بافت متخلخل زیر مینا. شامل لوله‌های ریزی است که سیگنال درد را منتقل می‌کنند.",
    "anatomy.pulp": "پالپ (Pulp)",
    "anatomy.pulp.desc": "بافت زندهٔ مرکزی. شامل عروق خونی، اعصاب و سلول‌های ادونتوبلاست.",
    "anatomy.ligament": "لیگامان پریودنتال",
    "anatomy.ligament.desc": "بافت پیوندی که دندان را به استخوان آلوئول متصل می‌کند و ضربه را مهار می‌کند.",
    "anatomy.bone": "استخوان آلوئول",
    "anatomy.bone.desc": "استخوان فک که مینأ دندان را در خود جای می‌دهد. با از دست رفتن دندان، تحلیل می‌رود.",
    "anatomy.cementum": "سمنتوم (Cementum)",
    "anatomy.cementum.desc": "لایهٔ نازک معدنی روی مینا. محل اتصال فیبرهای لیگامان پریودنتال.",
    "anatomy.gum": "لثه (Gingiva)",
    "anatomy.gum.desc": "بافت نرم اطراف. خط دفاعی در برابر باکتری‌های دور لبهٔ دندان."
  },

  en: {
    // Brand / nav
    "brand.name": "Apex Dental Journal",
    "brand.title": "Peer-reviewed dental journal",
    "nav.home": "Home",
    "nav.about": "Editor-in-Chief",
    "nav.curriculum": "Curriculum",
    "nav.lab": "Lab",
    "nav.articles": "Articles",
    "nav.tips": "Tips & supplies",
    "nav.admissions": "Admissions",
    "nav.toggle": "Menu",

    "lang.fa": "فارسی",
    "lang.en": "English",
    "lang.ckb": "کوردی",

    // Home / hero
    "home.eyebrow": "Evidence-based dental education",
    "home.title": "Five decades of clinical observation. Five tracks of post-graduate study. One discipline: the protection of dentition.",
    "home.lede": "Apex Dental Journal is the published clinical record of Dr. Tofigh Sedighi: tracks, lab tools, and reviewed articles, in three languages, drawn from a working clinical practice in Mahabad.",
    "home.cta.curriculum": "View the curriculum",
    "home.cta.lab": "Enter the lab",
    "home.meta.years": "Years of clinical observation",
    "home.meta.tracks": "Post-graduate tracks",
    "home.meta.languages": "Official languages",
    "home.meta.based": "Academic seat",
    "home.meta.basedVal": "Mahabad, Iran",

    "home.tracks.title": "Five clinical tracks",
    "home.tracks.sub": "Each track holds twelve structured lessons. The first three of every track are open access.",
    "home.tracks.viewAll": "All tracks",

    "home.lab.title": "Clinical lab tools",
    "home.lab.sub": "Interactive instruments for assessment, instruction, and clinical practice.",
    "home.lab.open": "Open tool",

    "home.latest.title": "Reviewed articles",
    "home.latest.sub": "Short clinical articles with literature references and review dates.",
    "home.latest.viewAll": "Article archive",
    "home.read": "Read article",

    "home.bio.eyebrow": "Editor-in-Chief of the Journal",
    "home.bio.title": "Dr. Tofigh Sedighi, D.M.D.",
    "home.bio.p1": "Born 1964 in Mahabad. Five decades of clinical practice, oral hygiene instruction in schools and community organisations, and documented work across prevention, paediatrics, restorative, and emergency care. Apex Dental Journal is the product of his conversation with thousands of patients.",
    "home.bio.more": "Full bio and credentials",

    "home.faq.title": "Frequently asked questions",
    "home.faq.q1": "Do I need to enrol to access Apex Dental Journal content?",
    "home.faq.a1": "No. The first three lessons of every track, and all articles and lab tools, are open access. Admissions is for the clinical newsletter, not for access.",
    "home.faq.q2": "How often is content reviewed?",
    "home.faq.a2": "Every lesson and article carries a clinical review date. Routine review is every twelve months, or sooner if clinical guidance changes.",
    "home.faq.q3": "Is Apex Dental Journal a substitute for clinical consultation?",
    "home.faq.a3": "No. It is an educational resource. Diagnosis and treatment always require in-person assessment by a qualified dentist.",
    "home.faq.q4": "What languages are official?",
    "home.faq.a4": "Persian, English, and Kurdish Sorani. Three durable languages with identical reference structure.",
    "home.faq.q5": "Is the material useful for general dentists?",
    "home.faq.a5": "Yes. The tracks address parents, adult patients, and dental students. The literature register is introductory to intermediate.",

    "foot.about.title": "About the Journal",
    "foot.about.p": "Apex Dental Journal is a peer-reviewed publication focused on preventive and evidence-based dentistry. Edited by Dr. Tofigh Sedighi.",
    "foot.nav.title": "Navigation",
    "foot.contact.title": "Contact",
    "foot.colophon": "© 2026 Apex Dental Journal. Content is for public education and is not a substitute for clinical examination.",
    "foot.heritage": "Built in honour of the heritage of Mahabad and Kurdistan",

    // About
    "about.crumb": "Home / Editor-in-Chief",
    "about.eyebrow": "Editor-in-Chief of the Journal",
    "about.title": "Dr. Tofigh Sedighi, D.M.D.",
    "about.credentials": "D.M.D. 1987 · Five decades of clinical practice · Mahabad",
    "about.lede": "Born 20 October 1964 (Solar Hijri: 28 Mehr 1343), Mahabad, West Azerbaijan. Editor-in-Chief of Apex Dental Journal, author, and teacher of preventive dentistry.",

    "about.section.lineage": "Lineage",
    "about.section.principles": "Five clinical principles",
    "about.section.langs": "Languages",
    "about.section.memberships": "Memberships and certification",
    "about.section.contact": "Contact and location",

    "about.tl.1964.y": "1964 / 1343",
    "about.tl.1964.e": "Born in Mahabad",
    "about.tl.1964.n": "Birthplace at the cultural heart of Iranian Kurdistan. A childhood in a home that valued education, poetry, and patient conversation.",
    "about.tl.school.n": "Beginning of formal dental training, with a focus on general dentistry and primary care.",
    "about.tl.grad.e": "Awarded D.M.D.",
    "about.tl.grad.n": "Completion of doctoral training. Early years of practice in [REGION].",
    "about.tl.specialty.n": "Post-graduate study focused on preventive and paediatric dentistry.",
    "about.tl.teaching.y": "1996 to 2008",
    "about.tl.teaching.n": "Invited lectures in oral health and preventive dentistry.",
    "about.tl.clinic.y": "1991 to present",
    "about.tl.clinic.e": "Clinical practice, Mahabad",
    "about.tl.clinic.n": "Continuous clinical work in Mahabad and surrounding towns, with a focus on family care and patient instruction.",
    "about.tl.academy.y": "2026 / 1405",
    "about.tl.academy.e": "Founded Apex Dental Journal",
    "about.tl.academy.n": "Established a multilingual educational programme to transfer accumulated clinical experience to future generations.",

    "about.p.1.h": "The patient is older than the chart",
    "about.p.1.p": "No clinical record fully describes the biological, cultural, and emotional history of a patient. Proper care begins with listening.",
    "about.p.2.h": "Prevention is always cheaper",
    "about.p.2.p": "Most dental disease, with a few simple habits in childhood, never occurs. Teaching is clinical practice.",
    "about.p.3.h": "Tools do not replace judgment",
    "about.p.3.p": "Radiography, intra-oral scanners, and lasers, in the hand of an inexperienced clinician, are more dangerous than in the hand of a calm and curious one.",
    "about.p.4.h": "The patient's language is the language of care",
    "about.p.4.p": "A short, precise explanation builds more trust than any brochure. Apex Dental Journal was born of this conviction.",
    "about.p.5.h": "Rewrite the evidence, do not just reread it",
    "about.p.5.p": "The clinical literature is updated every decade. What was correct yesterday can be wrong today.",

    "about.langs.list": "Kurdish Sorani (native) · Persian (fluent) · English (clinical) · Arabic (correspondence)",
    "about.memberships.list": "[Iranian Dental Association, registry no. ____] · [Society for Paediatric Dentistry] · [Reviewer, scholarly journal]",
    "about.contact.line": ", Mahabad, Iran · Phone:  · Email: ",

    // Curriculum
    "curr.crumb": "Home / Curriculum",
    "curr.eyebrow": "Curriculum",
    "curr.title": "Five tracks of post-graduate study",
    "curr.lede": "Each track holds twelve structured lessons, drawn from clinical conversation, literature review, and Dr. Sedighi's own observation. The first three lessons of each track are open access.",

    "curr.t1.code": "P-",
    "curr.t1.title": "Prevention and hygiene",
    "curr.t1.lede": "The biology of biofilm, the chemistry of fluoride, and the architecture of daily care.",
    "curr.t2.code": "PD-",
    "curr.t2.title": "Paediatric dentistry",
    "curr.t2.lede": "From the first primary tooth to the transition to permanent dentition. Behaviour, growth, and family.",
    "curr.t3.code": "C-",
    "curr.t3.title": "Cosmetic and restorative",
    "curr.t3.lede": "The evidence behind whitening, composite, and conservative restoration.",
    "curr.t4.code": "E-",
    "curr.t4.title": "Dental emergencies",
    "curr.t4.lede": "Trauma, abscess, post-extraction bleeding. Protocols for the first two hours.",
    "curr.t5.code": "S-",
    "curr.t5.title": "Systemic connections",
    "curr.t5.lede": "The mouth, the heart, diabetes, and pregnancy. A review of current literature.",

    // Lab
    "lab.crumb": "Home / Lab",
    "lab.eyebrow": "Clinical lab",
    "lab.title": "Lab tools",
    "lab.lede": "Interactive instruments for instruction, assessment, and practice. None replace clinical consultation. All run privately on your device.",
    "lab.tool.timer.title": "Quadrant brushing timer",
    "lab.tool.timer.desc": "Two-minute timer with four-quadrant oral map. Two protocols: Bass and Stillman.",
    "lab.tool.technique.title": "Brushing technique",
    "lab.tool.technique.desc": "Illustrated 45-degree angulation, short strokes, and pressure control.",
    "lab.tool.sensitivity.title": "Sensitivity self-assessment",
    "lab.tool.sensitivity.desc": "Five questions, a tooth heatmap, and a clinical interpretation.",
    "lab.tool.fluoride.title": "Paediatric fluoride calculator",
    "lab.tool.fluoride.desc": "Toothpaste quantity by age, with reference to fluoride ppm.",
    "lab.tool.extraction.title": "Post-extraction care",
    "lab.tool.extraction.desc": "The first 72 hours, with notes on warning signs.",

    "articles.crumb": "Home / Articles",
    "articles.eyebrow": "Article archive",
    "articles.title": "Reviewed clinical articles",
    "articles.lede": "Short and medium articles, each with a review date and references to clinical literature.",
    "articles.filter.all": "All",
    "articles.filter.hygiene": "Hygiene",
    "articles.filter.prevention": "Prevention",
    "articles.filter.pediatric": "Paediatric",
    "articles.filter.cosmetic": "Restorative",
    "articles.minread": "min read",

    "adm.crumb": "Home / Admissions",
    "adm.eyebrow": "Patient enrolment / Clinical newsletter",
    "adm.title": "Enrol in the Apex clinical newsletter",
    "adm.lede": "Once each quarter, a short newsletter on literature reviews and new lessons published by the Journal. No selling, no sharing.",
    "adm.email.label": "Email address",
    "adm.email.placeholder": "you@example.com",
    "adm.submit": "Enrol",
    "adm.privacy": "Your email is used only for the newsletter and is not shared with any other organisation.",
    "adm.success": "Your name has been added to the roll. Welcome.",

    "common.openAccess": "Open access",
    "common.lockedSoon": "Coming next",
    "common.lessons": "lessons",
    "common.lesson": "Lesson",
    "common.reviewed": "Reviewed",
    "common.readTime": "Read time",
    "common.minutes": "minutes",
    "common.related": "Related lessons",
    "common.toc": "On this page",
    "common.citations": "References and sources",
    "common.protocol": "Clinical protocol",
    "common.further": "For further inquiry",
    "common.back": "Back to track",
    "common.start": "Start",
    "common.pause": "Pause",
    "common.reset": "Reset",
    "common.next": "Next",

    "tools.timer.title": "Quadrant brushing timer",
    "tools.timer.intro": "Two minutes. Four quadrants. Thirty seconds each.",
    "tools.timer.quadrants.UR": "Upper right quadrant",
    "tools.timer.quadrants.UL": "Upper left quadrant",
    "tools.timer.quadrants.LL": "Lower left quadrant",
    "tools.timer.quadrants.LR": "Lower right quadrant",
    "tools.timer.mode": "Protocol",
    "tools.timer.mode.bass": "Bass technique",
    "tools.timer.mode.stillman": "Stillman technique",
    "tools.timer.audio.on": "Sound on",
    "tools.timer.audio.off": "Sound off",
    "tools.timer.done": "Complete. Rinse the brush.",

    "tools.quiz.title": "Sensitivity self-assessment",
    "tools.quiz.intro": "Five short questions, then a heatmap of sensitive teeth.",
    "tools.quiz.q1": "Do your teeth ache with cold water or ice?",
    "tools.quiz.q2": "Do you bleed or feel transient pain while brushing?",
    "tools.quiz.q3": "Do you feel a momentary pain when eating sweets?",
    "tools.quiz.q4": "Do you have recurring sensitivity in a specific area of the jaw?",
    "tools.quiz.q5": "Do you grind teeth at night or wake with a tired jaw?",
    "tools.quiz.opt.never": "Never",
    "tools.quiz.opt.sometimes": "Sometimes",
    "tools.quiz.opt.often": "Often",
    "tools.quiz.mapPrompt": "Tap the teeth that feel sensitive.",
    "tools.quiz.result.mild": "Mild. Try a sensitivity toothpaste and softer technique for two weeks.",
    "tools.quiz.result.moderate": "Moderate. A clinical examination is advised.",
    "tools.quiz.result.refer": "Referral indicated. Schedule a dentist visit.",

    "tools.fluoride.title": "Paediatric fluoride toothpaste calculator",
    "tools.fluoride.intro": "Quantity of toothpaste by child age.",
    "tools.fluoride.age.label": "Child's age",
    "tools.fluoride.r1": "Under 3 years: a rice-grain smear (~0.1 g) · 1000 ppm fluoride",
    "tools.fluoride.r2": "3 to 6 years: a pea-size amount (~0.25 g) · 1000 to 1450 ppm",
    "tools.fluoride.r3": "Over 6 years: full bristle length (~0.5 g) · 1450 ppm",

    "tools.extraction.title": "Post-extraction care",
    "tools.extraction.intro": "Timeline for the first 72 hours. Read each step and mark complete.",

    "anatomy.title": "Interactive tooth anatomy",
    "anatomy.intro": "Hover over any layer of the cross-section to see the structure and its clinical role.",
    "anatomy.enamel": "Enamel",
    "anatomy.enamel.desc": "The hardest tissue in the body. The outer layer of the crown. First defence against acid and wear.",
    "anatomy.dentin": "Dentin",
    "anatomy.dentin.desc": "Porous tissue beneath the enamel. Contains microscopic tubules that transmit pain signal.",
    "anatomy.pulp": "Pulp",
    "anatomy.pulp.desc": "The living central tissue. Contains blood vessels, nerves, and odontoblasts.",
    "anatomy.ligament": "Periodontal ligament",
    "anatomy.ligament.desc": "Connective tissue that anchors the tooth to the alveolar bone and absorbs occlusal load.",
    "anatomy.bone": "Alveolar bone",
    "anatomy.bone.desc": "The jaw bone housing the tooth root. Resorbs after tooth loss.",
    "anatomy.cementum": "Cementum",
    "anatomy.cementum.desc": "Thin mineralised layer over the root. Anchors periodontal ligament fibres.",
    "anatomy.gum": "Gingiva",
    "anatomy.gum.desc": "Surrounding soft tissue. Barrier against bacteria around the gum line."
  },

  ckb: {
    // Brand / nav - Kurdish Sorani
    "brand.name": "گۆڤاری ددانسازی ئەپێکس",
    "brand.title": "گۆڤاری زانستی-کلینیکی ددانسازی",
    "nav.home": "ماڵەوە",
    "nav.about": "سەرنووسەری گۆڤار",
    "nav.curriculum": "بەرنامەی فێرکاری",
    "nav.lab": "تاقیگە",
    "nav.articles": "وتارەکان",
    "nav.tips": "ئامۆژگاری و کەلوپەل",
    "nav.admissions": "وەرگرتن",
    "nav.toggle": "لیست",

    "lang.fa": "فارسی",
    "lang.en": "English",
    "lang.ckb": "کوردی",

    // Home
    "home.eyebrow": "پەروەردەی ددانسازی لەسەر بنەمای بەڵگە",
    "home.title": "پێنج دەیە تێبینی کلینیکی. پێنج ڕێچکەی خوێندنی پاش بڕوانامە. یەک پسپۆڕی: پاراستنی ددان.",
    "home.lede": "گۆڤاری ددانسازی ئەپێکس بەرنامەی پێداچوونەوەکراوی د. توفیق سدیقی یە: ڕێچکە، ئامرازی تاقیگە و وتاری پێداچوونەوەکراو، بە سێ زبان، لە ئەزموونی کارکردنی کلینیکی لە مەهاباد.",
    "home.cta.curriculum": "بەرنامەی فێرکاری بنیشە",
    "home.cta.lab": "بچۆ بۆ تاقیگە",
    "home.meta.years": "ساڵی تێبینی کلینیکی",
    "home.meta.tracks": "ڕێچکەی پاش بڕوانامە",
    "home.meta.languages": "زبانی فەرمی",
    "home.meta.based": "بنکەی ئەکادیمی",
    "home.meta.basedVal": "مەهاباد، ئێران",

    "home.tracks.title": "پێنج ڕێچکەی کلینیکی",
    "home.tracks.sub": "هەر ڕێچکەیەک دوازدە وانەی ڕێکخراوی هەیە. سێ وانەی یەکەمی هەر ڕێچکە بۆ هەمووان دەستپێگەیشتوون.",
    "home.tracks.viewAll": "هەموو ڕێچکەکان",

    "home.lab.title": "ئامرازەکانی تاقیگەی کلینیکی",
    "home.lab.sub": "ئامرازی کارلێکی بۆ هەڵسەنگاندن، وانە و ڕاهێنانی کلینیکی.",
    "home.lab.open": "کردنەوەی ئامراز",

    "home.latest.title": "وتارە پێداچوونەوەکراوەکان",
    "home.latest.sub": "وتاری کلینیکی کورت لەگەڵ سەرچاوەی ئەدەبیات و بەرواری پێداچوونەوە.",
    "home.latest.viewAll": "ئەرشیفی وتارەکان",
    "home.read": "خوێندنەوەی وتار",

    "home.bio.eyebrow": "سەرنووسەری گۆڤار",
    "home.bio.title": "د. توفیق سدیقی، د.م.د.",
    "home.bio.p1": "لە ساڵی ١٩٦٤ لە مەهاباد لەدایکبوو. پێنج دەیە کاری کلینیکی، فێرکردنی پاراستنی ددان لە قوتابخانە و ڕێکخراوەکان، و کاری بەڵگەنامەیی لە پێشگیری، منداڵان، چاککردنەوە و فریاگوزاری. اپکس بەرهەمی گفتوگۆی ئەوە لەگەڵ هەزاران نەخۆش.",
    "home.bio.more": "ژیاننامەی تەواو",

    "home.faq.title": "پرسیارە دووبارەکراوەکان",
    "home.faq.q1": "ئایا پێویستە بۆ دەستپێگەیشتن بە ناوەڕۆکی اپکس تۆمار بکرێم؟",
    "home.faq.a1": "نەخێر. سێ وانەی یەکەمی هەر ڕێچکە، و هەموو وتار و ئامرازەکانی تاقیگە بۆ هەمووان دەستپێگەیشتوون. وەرگرتن بۆ نامیلکەی کلینیکیە، نەک بۆ دەستپێگەیشتن.",
    "home.faq.q2": "ناوەڕۆک چەند جار پێداچوونەوەی بۆ دەکرێت؟",
    "home.faq.a2": "هەر وانە و وتارێک بەرواری پێداچوونەوەی کلینیکی هەیە. پێداچوونەوەی ئاسایی هەر دوازدە مانگ یەک جار، یان زووتر ئەگەر ڕێنماییە کلینیکیەکان بگۆڕێن.",
    "home.faq.q3": "ئایا اپکس جێگرەوەی ڕاوێژکاری کلینیکی یە؟",
    "home.faq.a3": "نەخێر. ئەمە سەرچاوەیەکی پەروەردەیی یە. تشخیص و چارەسەر هەمیشە پێویستی بە هەڵسەنگاندنی ڕووبەڕووی پزیشک هەیە.",
    "home.faq.q4": "زبانە فەرمیەکان کامانەن؟",
    "home.faq.a4": "فارسی، ئینگلیزی و کوردی سۆرانی. سێ زبانی بەدوام، لەگەڵ ڕێکخستنی سەرچاوەی یەکسان.",
    "home.faq.q5": "ئایا بۆ ددانسازانی گشتی بەکار دێت؟",
    "home.faq.a5": "بەڵێ. ڕێچکەکان بۆ دایک و باوک، نەخۆشە گەورەکان و قوتابیانی ددانسازی نووسراون. ئاستی ئەدەبیات لە سەرەتایی بۆ مامناوەند.",

    "foot.about.title": "دەربارەی گۆڤار",
    "foot.about.p": "گۆڤاری ددانسازی ئەپێکس بڵاوکراوەیەکی پێداچوونەوەکراوە کە بایەخ بە پێشگیری و ددانسازی لەسەر بنەمای بەڵگە دەدات. سەرنووسەری: د. توفیق سدیقی.",
    "foot.nav.title": "ڕێبەری",
    "foot.contact.title": "پەیوەندی",
    "foot.colophon": "© ٢٠٢٦ گۆڤاری ددانسازی ئەپێکس. ناوەڕۆک بۆ پەروەردەی گشتی یە و جێگرەوەی پشکنینی کلینیکی نییە.",
    "foot.heritage": "بە ڕێزەوە بۆ میراتی مەهاباد و کوردستان",

    // About
    "about.crumb": "ماڵەوە / سەرنووسەری گۆڤار",
    "about.eyebrow": "سەرنووسەری گۆڤار",
    "about.title": "د. توفیق سدیقی، د.م.د.",
    "about.credentials": "د.م.د. ١٩٨٧ · پێنج دەیە کاری کلینیکی · مەهاباد",
    "about.lede": "لەدایکبووی ٢٠ی ئۆکتۆبەری ١٩٦٤ (٢٨ی مەهری ١٣٤٣ کۆچی هەتاوی)، مەهاباد، ئازەربایجانی ڕۆژئاوا. سەرنووسەری گۆڤاری ددانسازی ئەپێکس، نووسەر و مامۆستای ددانسازی پێشگیری.",

    "about.section.lineage": "ژیاننامە",
    "about.section.principles": "پێنج بنەمای کلینیکی",
    "about.section.langs": "زبانەکان",
    "about.section.memberships": "ئەندامبوون و بڕوانامە",
    "about.section.contact": "پەیوەندی و شوێن",

    "about.tl.1964.y": "١٩٦٤ / ١٣٤٣",
    "about.tl.1964.e": "لەدایکبوون لە مەهاباد",
    "about.tl.1964.n": "شوێنی لەدایکبوون لە دڵی کوردستانی ئێران. منداڵی لە ماڵێکی نرخدار بە پەروەردە، شیعر و گفتوگۆی نەخۆش.",
    "about.tl.school.n": "دەستپێکی فێرکاری فەرمی ددانسازی، لەگەڵ سەرنج لە ددانسازی گشتی و چاودێری سەرەتایی.",
    "about.tl.grad.e": "وەرگرتنی د.م.د.",
    "about.tl.grad.n": "تەواوبوونی خوێندنی دکتۆرا. ساڵانی یەکەمی کارکردن لە [REGION].",
    "about.tl.specialty.n": "خوێندنی پاش بڕوانامە لەگەڵ سەرنج لە ددانسازی پێشگیری و منداڵان.",
    "about.tl.teaching.y": "١٩٩٦ بۆ ٢٠٠٨",
    "about.tl.teaching.n": "گەشت و وانەی بانگهێشتکراو لە تەندروستی دەم و ددانسازی پێشگیری.",
    "about.tl.clinic.y": "١٩٩١ بۆ ئێستا",
    "about.tl.clinic.e": "کاری کلینیکی لە مەهاباد",
    "about.tl.clinic.n": "کاری بەردەوامی کلینیکی لە مەهاباد و شارۆچکەکانی دەوروبەر، لەگەڵ سەرنج لە چاودێری خێزانی و فێرکردنی نەخۆش.",
    "about.tl.academy.y": "٢٠٢٦ / ١٤٠٥",
    "about.tl.academy.e": "دامەزراندنی گۆڤاری ئەپێکس",
    "about.tl.academy.n": "دامەزراندنی بەرنامەی پەروەردەی چەند زبانی بۆ گواستنەوەی ئەزموونی کلینیکی بۆ نەوەی داهاتوو.",

    "about.p.1.h": "نەخۆش لە کارتەکەی پیرترە",
    "about.p.1.p": "هیچ کارتێکی کلینیکی مێژووی بایۆلۆجی، کلتوری و سۆزداری نەخۆش بە تەواوی نانووسێتەوە. چاودێری دروست لە گوێگرتن دەست پێ دەکات.",
    "about.p.2.h": "پێشگیری هەمیشە هەرزانترە",
    "about.p.2.p": "زۆربەی نەخۆشییە ددانییەکان، لەگەڵ چەند ڕاهێنانێکی سادە لە منداڵیدا، هیچ کاتێک ڕوو نادەن. فێرکردن کرداری کلینیکی یە.",
    "about.p.3.h": "ئامراز جێگرەوەی داوەری نییە",
    "about.p.3.p": "ڕادیۆگرافی، سکانەری دەمی و لەیزەر، لە دەستی ددانسازی بێ ئەزموون، مەترسیدارترن لە دەستی پزیشکی ئارام و کنجکاو.",
    "about.p.4.h": "زبانی نەخۆش، زبانی چارەسەرە",
    "about.p.4.p": "شرۆڤەی کورت و وردبینانە، زیاتر لە هەر کتێبچەیەک، متمانە دروست دەکات. اپکس لە ئەم باوەڕە لەدایک بوو.",
    "about.p.5.h": "بەڵگەکان دووبارە بنووسەوە، نەک تەنیا بیخوێنەوە",
    "about.p.5.p": "ئەدەبیاتی کلینیکی هەر دەیە بەڕۆژ دەکرێتەوە. ئەوەی دوێنێ ڕاست بوو، دەشێ ئەمڕۆ هەڵە بێت.",

    "about.langs.list": "کوردی سۆرانی (زبانی دایک) · فارسی (ڕەوان) · ئینگلیزی (کلینیکی) · عەرەبی (نامەنووسی)",
    "about.memberships.list": "[کۆمەڵەی ددانسازانی ئێران، ژمارەی تۆمار ____] · [کۆمەڵەی ددانسازی منداڵان] · [پێداچوونەوەکار، گۆڤاری زانستی]",
    "about.contact.line": "، مەهاباد، ئێران · تەلەفۆن:  · ئیمەیڵ: ",

    // Curriculum
    "curr.crumb": "ماڵەوە / بەرنامەی فێرکاری",
    "curr.eyebrow": "بەرنامەی فێرکاری",
    "curr.title": "پێنج ڕێچکەی خوێندنی پاش بڕوانامە",
    "curr.lede": "هەر ڕێچکەیەک دوازدە وانەی ڕێکخراوی هەیە، لە گفتوگۆی کلینیکی، پێداچوونەوەی ئەدەبیات و تێبینی د. سدیقی. سێ وانەی یەکەمی هەر ڕێچکە بۆ هەمووان دەستپێگەیشتوون.",

    "curr.t1.code": "P-",
    "curr.t1.title": "پێشگیری و پاکی",
    "curr.t1.lede": "بایۆلۆجی بایۆفیلم، شیمی فلۆراید، و دامەزراندنی چاودێری ڕۆژانە.",
    "curr.t2.code": "PD-",
    "curr.t2.title": "ددانسازی منداڵان",
    "curr.t2.lede": "لە یەکەمین ددانی شیری بۆ گواستنەوە بۆ ددانی هەمیشەیی.",
    "curr.t3.code": "C-",
    "curr.t3.title": "چاککردنەوە و جوانکاری",
    "curr.t3.lede": "بەڵگەکانی پشتی سپیکردنەوە، کۆمپۆزیت و چاککردنەوەی پاراستوویانە.",
    "curr.t4.code": "E-",
    "curr.t4.title": "فریاگوزاری ددانی",
    "curr.t4.lede": "بریندارکردن، خوین، بریندارکردنی دوای ددان دەرهێنان. پروتۆکۆلی دوو کاتژمێری یەکەم.",
    "curr.t5.code": "S-",
    "curr.t5.title": "پەیوەندییە سیستەمیەکان",
    "curr.t5.lede": "دەم، دڵ، شەکر و دووگیانی. پێداچوونەوەی ئەدەبیاتی ئەمڕۆ.",

    // Lab
    "lab.crumb": "ماڵەوە / تاقیگە",
    "lab.eyebrow": "تاقیگەی کلینیکی",
    "lab.title": "ئامرازەکانی تاقیگە",
    "lab.lede": "ئامرازی کارلێکی بۆ وانە، هەڵسەنگاندن و ڕاهێنان. هیچ کامیان جێگرەوەی ڕاوێژکاری کلینیکی نییە. هەموو لەسەر ئامێرەکەی تۆ کار دەکەن.",
    "lab.tool.timer.title": "کاتژمێری مسواکی چوار بەش",
    "lab.tool.timer.desc": "کاتژمێری دوو خولەکی لەگەڵ نەخشەی چوار بەشی دەم. دوو پروتۆکۆل: Bass و Stillman.",
    "lab.tool.technique.title": "تەکنیکی مسواککردن",
    "lab.tool.technique.desc": "وێنە کێشانی گۆشەی ٤٥ پلە، جووڵەی کورت و کۆنترۆڵی فشار.",
    "lab.tool.sensitivity.title": "هەڵسەنگاندنی هەستیاری ددان",
    "lab.tool.sensitivity.desc": "پێنج پرسیار، نەخشەی گەرمی ددان و شرۆڤەی کلینیکی.",
    "lab.tool.fluoride.title": "ژمێرەری فلۆرایدی منداڵ",
    "lab.tool.fluoride.desc": "بڕی مەعجوون بەپێی تەمەن، لەگەڵ ئاماژە بە ppm فلۆراید.",
    "lab.tool.extraction.title": "چاودێری دوای دەرهێنانی ددان",
    "lab.tool.extraction.desc": "٧٢ کاتژمێری یەکەم، لەگەڵ تێبینی نیشانە مەترسیدارەکان.",

    "articles.crumb": "ماڵەوە / وتارەکان",
    "articles.eyebrow": "ئەرشیفی وتارەکان",
    "articles.title": "وتاری کلینیکی پێداچوونەوەکراو",
    "articles.lede": "وتاری کورت و مامناوەند، هەر کامیان لەگەڵ بەرواری پێداچوونەوە و سەرچاوەکانی ئەدەبیاتی کلینیکی.",
    "articles.filter.all": "هەموو",
    "articles.filter.hygiene": "پاکی",
    "articles.filter.prevention": "پێشگیری",
    "articles.filter.pediatric": "منداڵان",
    "articles.filter.cosmetic": "چاککردنەوە",
    "articles.minread": "خولەک خوێندن",

    "adm.crumb": "ماڵەوە / وەرگرتن",
    "adm.eyebrow": "تۆمارکردنی نەخۆش / نامیلکەی کلینیکی",
    "adm.title": "تۆمارکردن لە نامیلکەی کلینیکی مینا",
    "adm.lede": "هەر سێ مانگ یەک جار، نامیلکەیەکی کورت دەربارەی پێداچوونەوەی ئەدەبیات و وانە نوێکانی ئەکادیمی. بێ فرۆشتن، بێ هاوبەشکردن.",
    "adm.email.label": "ناونیشانی ئیمەیڵ",
    "adm.email.placeholder": "you@example.com",
    "adm.submit": "تۆمار",
    "adm.privacy": "ئیمەیڵەکەت تەنیا بۆ ناردنی نامیلکە بەکار دێت و لەگەڵ هیچ ڕێکخراوێکی تر هاوبەش ناکرێت.",
    "adm.success": "ناوەکەت بۆ لیست زیادکرا. بەخێرهاتیت.",

    "common.openAccess": "دەستپێگەیشتوو",
    "common.lockedSoon": "بەزووی",
    "common.lessons": "وانە",
    "common.lesson": "وانە",
    "common.reviewed": "پێداچوونەوەکراو",
    "common.readTime": "کاتی خوێندن",
    "common.minutes": "خولەک",
    "common.related": "وانە پەیوەندیدارەکان",
    "common.toc": "لەسەر ئەم پەڕە",
    "common.citations": "سەرچاوەکان",
    "common.protocol": "پروتۆکۆلی کلینیکی",
    "common.further": "بۆ زیاتر",
    "common.back": "گەڕانەوە بۆ ڕێچکە",
    "common.start": "دەست پێ بکە",
    "common.pause": "وەستان",
    "common.reset": "ڕێکخستنەوە",
    "common.next": "دواتر",

    "tools.timer.title": "کاتژمێری مسواکی چوار بەش",
    "tools.timer.intro": "دوو خولەک. چوار بەش. سی چرکە بۆ هەر بەشێک.",
    "tools.timer.quadrants.UR": "بەشی سەرەوەی ڕاست",
    "tools.timer.quadrants.UL": "بەشی سەرەوەی چەپ",
    "tools.timer.quadrants.LL": "بەشی خوارەوەی چەپ",
    "tools.timer.quadrants.LR": "بەشی خوارەوەی ڕاست",
    "tools.timer.mode": "پروتۆکۆل",
    "tools.timer.mode.bass": "تەکنیکی Bass",
    "tools.timer.mode.stillman": "تەکنیکی Stillman",
    "tools.timer.audio.on": "دەنگ کراوە",
    "tools.timer.audio.off": "دەنگ کوژاوە",
    "tools.timer.done": "تەواو بوو. مسواکەکە بشۆ.",

    "tools.quiz.title": "هەڵسەنگاندنی هەستیاری ددان",
    "tools.quiz.intro": "پێنج پرسیاری کورت، پاشان نەخشەی گەرمی ددانە هەستیارەکان.",
    "tools.quiz.q1": "ئایا ددانەکانت بە ئاوی سارد یان قەرەخ ئازار دەدەن؟",
    "tools.quiz.q2": "ئایا کاتی مسواککردن خوێن دێت یان ئازاری کاتی هەیە؟",
    "tools.quiz.q3": "ئایا کاتی خواردنی شیرینی، ئازاری کاتی هەست دەکەیت؟",
    "tools.quiz.q4": "ئایا لە بەشێکی دیاریکراوی چەناگە، هەستیاری بەردەوامت هەیە؟",
    "tools.quiz.q5": "ئایا شەوان ددان دەخوڕیت یان بە چەناگەی ماندوو لە خەو هەڵدەستی؟",
    "tools.quiz.opt.never": "هەرگیز",
    "tools.quiz.opt.sometimes": "هەندێ جار",
    "tools.quiz.opt.often": "زۆر جار",
    "tools.quiz.mapPrompt": "لە ئەو ددانانە بدە کە هەستیارن.",
    "tools.quiz.result.mild": "کەم. مەعجوونی هەستیاری و تەکنیکی نەرمتر بۆ دوو هەفتە تاقی بکەرەوە.",
    "tools.quiz.result.moderate": "مامناوەند. پشکنینی کلینیکی پێشنیار دەکرێت.",
    "tools.quiz.result.refer": "گەڕاندنەوە پێویستە. لەگەڵ ددانساز کاتێک دیاری بکە.",

    "tools.fluoride.title": "ژمێرەری مەعجوونی فلۆراید بۆ منداڵ",
    "tools.fluoride.intro": "بڕی مەعجوون بەپێی تەمەنی منداڵ.",
    "tools.fluoride.age.label": "تەمەنی منداڵ",
    "tools.fluoride.r1": "ژێر ٣ ساڵ: بەقەد دانەیەکی برنج (~٠٫١ گرام) · ١٠٠٠ ppm فلۆراید",
    "tools.fluoride.r2": "٣ بۆ ٦ ساڵ: بەقەد نۆکێک (~٠٫٢٥ گرام) · ١٠٠٠ بۆ ١٤٥٠ ppm",
    "tools.fluoride.r3": "سەرووی ٦ ساڵ: درێژایی موو (~٠٫٥ گرام) · ١٤٥٠ ppm",

    "tools.extraction.title": "چاودێری دوای دەرهێنانی ددان",
    "tools.extraction.intro": "کاتنامەی ٧٢ کاتژمێری یەکەم. هەر هەنگاوێک بخوێنە و دیاری بکە.",

    "anatomy.title": "ئەنەتۆمی کارلێکی ددان",
    "anatomy.intro": "بەسەر هەر چینێکی بڕی ددان بڕۆ بۆ بینینی ناو و ڕۆڵە کلینیکیەکەی.",
    "anatomy.enamel": "ئینامێل (Enamel)",
    "anatomy.enamel.desc": "ڕەقترین بافتی لەش. چینی دەرەوەی تاج. یەکەم بەربەست لە بەرامبەر ئەسید و سوون.",
    "anatomy.dentin": "دێنتین (Dentin)",
    "anatomy.dentin.desc": "بافتی پۆرۆز ژێر ئینامێل. لوولە بچووکەکان هەن کە سیگناڵی ئازار دەگوازنەوە.",
    "anatomy.pulp": "پاڵپ (Pulp)",
    "anatomy.pulp.desc": "بافتی زیندووی ناوەندی. خوێنبەرەکان، دەمارەکان و ئۆدۆنتۆبلاستەکانی تێدایە.",
    "anatomy.ligament": "لیگامەنتی پەریۆدۆنتاڵ",
    "anatomy.ligament.desc": "بافتی پەیوەندی کە ددان بە ئێسکی ئالڤیۆلی دەبەستێتەوە و فشار دەگرێ.",
    "anatomy.bone": "ئێسکی ئالڤیۆلی",
    "anatomy.bone.desc": "ئێسکی چەناگە کە ڕەگی ددان لە خۆ دەگرێ. دوای لەدەستچوونی ددان دەلەرزێتەوە.",
    "anatomy.cementum": "سیمێنتۆم (Cementum)",
    "anatomy.cementum.desc": "چینی تەنکی کانزایی لەسەر ڕەگ. شوێنی پەیوەندی فیبرەکانی لیگامەنت.",
    "anatomy.gum": "لووس (Gingiva)",
    "anatomy.gum.desc": "بافتی نەرمی دەوروبەر. بەربەست لە بەرامبەر باکتریا لە دەوری ددان."
  }
};

/* =========================================================
   Language switch + dir + persistence
   ========================================================= */
const LANG_KEY = "apex.lang";
const SUPPORTED = ["fa", "en", "ckb"];
const DEFAULT_LANG = "fa";

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  return DEFAULT_LANG;
}

function setLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "en") ? "ltr" : "rtl";
  applyI18n();
  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
  });
}

function applyI18n() {
  const lang = getLang();
  const dict = STR[lang] || STR[DEFAULT_LANG];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-set-lang")));
  });
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
});

window.APEX = { getLang, setLang, STR, applyI18n };
