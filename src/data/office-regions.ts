export type Office = {
  city: string;
  cityJa?: string;
  cityAr?: string;
  building?: string;
  buildingAr?: string;
  street: string;
  streetAr?: string;
  streetJa?: string;
  suburb: string;
  suburbAr?: string;
  suburbJa?: string;
  statePostcode: string;
  statePostcodeAr?: string;
  statePostcodeJa?: string;
  email: string;
};

export type OfficeRegion = {
  id: string;
  name: string;
  nameJa?: string;
  nameAr?: string;
  offices: Office[];
};

export const officeRegions: OfficeRegion[] = [
  {
    id: "australia",
    name: "Australia",
    nameJa: "オーストラリア",
    nameAr: "أستراليا",
    offices: [
      {
        city: "Melbourne",
        cityJa: "メルボルン",
        cityAr: "ملبورن",
        street: "11-13 Cubitt St",
        streetAr: "11-13 شارع كيوبيت",
        suburb: "Cremorne",
        suburbAr: "كريمورن",
        statePostcode: "VIC 3121",
        statePostcodeAr: "فيكتوريا 3121",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Brisbane",
        cityJa: "ブリスベン",
        cityAr: "بريزبن",
        building: "Level 1, North Tower",
        buildingAr: "الطابق الأول، البرج الشمالي",
        street: "527 Gregory Terrace",
        streetAr: "527 غريغوري تيراس",
        suburb: "Fortitude Valley",
        suburbAr: "فورتيتيود فالي",
        statePostcode: "Queensland 4006",
        statePostcodeAr: "كوينزلاند 4006",
        email: "enquiries@tally-group.com",
      },
    ],
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    nameJa: "ニュージーランド",
    nameAr: "نيوزيلندا",
    offices: [
      {
        city: "Auckland",
        cityJa: "オークランド",
        cityAr: "أوكلاند",
        building: "Level 11",
        buildingAr: "الطابق 11",
        street: "56 Cawley Street",
        streetAr: "56 شارع كاولي",
        suburb: "Ellerslie",
        suburbAr: "إيليرسلي",
        statePostcode: "Auckland 1051",
        statePostcodeAr: "أوكلاند 1051",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Christchurch",
        cityJa: "クライストチャーチ",
        cityAr: "كرايستشيرش",
        street: "146A Lichfield Street",
        streetAr: "146A شارع ليتشفيلد",
        suburb: "Christchurch Central City",
        suburbAr: "وسط مدينة كرايستشيرش",
        statePostcode: "Christchurch 8011",
        statePostcodeAr: "كرايستشيرش 8011",
        email: "enquiries@tally-group.com",
      },
    ],
  },
  {
    id: "north-america",
    name: "North America",
    nameJa: "北米",
    nameAr: "أمريكا الشمالية",
    offices: [
      {
        city: "Houston",
        cityJa: "ヒューストン",
        cityAr: "هيوستن",
        street: "1450 Lake Robbins Drive, Suite 160",
        streetAr: "1450 ليك روبنز درايف، جناح 160",
        suburb: "The Woodlands",
        suburbAr: "ذا وودلاندز",
        statePostcode: "TX 77380",
        statePostcodeAr: "تكساس 77380",
        email: "contact_us@tally-group.com",
      },
    ],
  },
  {
    id: "japan",
    name: "Japan",
    nameJa: "日本",
    nameAr: "اليابان",
    offices: [
      {
        city: "Tokyo",
        cityJa: "東京",
        cityAr: "طوكيو",
        building: "The Energy Center",
        street: "2-20-1 4F, Nishi-Shimbashi, Minato-ku",
        streetJa: "東京都港区西新橋 2-20-1-4F",
        suburb: "Tokyo",
        statePostcode: "105-0003",
        statePostcodeJa: "〒105-0003",
        email: "contact_jp@tally-group.com",
      },
    ],
  },
  {
    id: "uae",
    name: "UAE",
    nameJa: "アラブ首長国連邦",
    nameAr: "الإمارات العربية المتحدة",
    offices: [
      {
        city: "Dubai",
        cityJa: "ドバイ",
        cityAr: "دبي",
        building: "Office 2402A, Tower A",
        buildingAr: "مكتب 2402A، البرج A",
        street: "Business Central Towers",
        streetAr: "أبراج بزنس سنترال",
        suburb: "Dubai",
        suburbAr: "دبي",
        statePostcode: "UAE",
        statePostcodeAr: "الإمارات العربية المتحدة",
        email: "anuj.sahrawat@tally-group.com",
      },
    ],
  },
  {
    id: "india",
    name: "India",
    nameJa: "インド",
    nameAr: "الهند",
    offices: [
      {
        city: "Hyderabad",
        cityJa: "ハイデラバード",
        cityAr: "حيدر آباد",
        building: "Block 1, Cyber Pearl",
        buildingAr: "بلوك 1، سايبر بيرل",
        street: "Hitech City, Madhapur",
        streetAr: "مدينة هايتك، مادهابور",
        suburb: "Hyderabad",
        suburbAr: "حيدر آباد",
        statePostcode: "Telangana 500081",
        statePostcodeAr: "تيلانغانا 500081",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Bangalore",
        cityJa: "バンガロール",
        cityAr: "بنغالور",
        building: 'No.112, 2nd Floor, "B" Block, AKR Tech Park',
        buildingAr: "رقم 112، الطابق الثاني، بلوك B، مجمع AKR التقني",
        street: "7th Mile Hosur Rd, Kudlu Gate",
        streetAr: "الميل السابع، طريق هوسور، بوابة كودلو",
        suburb: "Bengaluru",
        suburbAr: "بنغالورو",
        statePostcode: "Karnataka 560068",
        statePostcodeAr: "كارناتاكا 560068",
        email: "enquiries@tally-group.com",
      },
    ],
  },
];
