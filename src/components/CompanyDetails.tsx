import React from "react";
import { companies as sharedCompanies } from "../data/companies"; // Import shared colorClass and other styles

const companies = [
  {
    id: "IESCO",
    name: "IESCO Online Bill",
    url: "/iesco",
    areasServed: ["Islamabad", "Rawalpindi", "Jhelum", "Attock"],
    description: "IESCO ensures reliable power supply to the capital city and surrounding regions.",
    image: "/images/iesco.png",
    region: "Islamabad",
    data: [
      { srNo: 1, station: "Islamabad", subStations: "G-6, G-7, G-8, G-9, F-6, F-7, F-8, F-10, I-8, I-9, I-10, I-11, Rawat, Tarnol" },
      { srNo: 2, station: "Rawalpindi", subStations: "Saddar, Westridge, Chaklala, Mareer Hassan, Satellite Town, Bahria Town, DHA" },
      { srNo: 3, station: "Attock", subStations: "Attock City, Hazro, Hasan Abdal, Fateh Jang, Pindi Gheb" },
      { srNo: 4, station: "Jhelum", subStations: "Jhelum City, Dina, Sohawa, Pind Dadan Khan" },
      { srNo: 5, station: "Chakwal", subStations: "Chakwal City, Talagang, Choa Saidan Shah, Kallar Kahar" },
      { srNo: 6, station: "AJK (Part's)", subStations: "Muzaffarabad, Rawalakot, Mirpur, Kotli" },
      { srNo: 7, station: "Murree", subStations: "Murree City, Bhurban, Patriata, Pindi Point, Ayubia" },
      { srNo: 8, station: "Kotli Sattian", subStations: "Kotli Sattian Town, Narrar, Panjar, Deval" },
      { srNo: 9, station: "Tarnol", subStations: "Tarnol, Golra Sharif, Sangjani, D-12, F-11" },
      { srNo: 10, station: "Taxila", subStations: "Taxila City, Wah Cantt, Heavy Industries Taxila, Hattar Industrial Area" },
    ],
  },
  {
    id: "LESCO",
    name: "LESCO Online Bill",
    url: "/lesco",
    areasServed: ["Lahore", "Kasur", "Sheikhupura", "Okara"],
    description: "LESCO caters to a diverse consumer base in the provincial capital and neighboring districts.",
    image: "/images/lesco.png",
    region: "Lahore",
    data: [
      { srNo: 1, station: "Lahore Station", subStations: "Lahore City, Lahore Cantt, Raiwind, Kahna, Kot Lakhpat, Shalimar, Mughalpura" },
      { srNo: 2, station: "Kasur Station", subStations: "Kasur City, Chunian, Pattoki, Kot Radha Kishan, Phool Nagar" },
      { srNo: 3, station: "Sheikhupura Station", subStations: "Sheikhupura City, Muridke, Ferozewala, Sharqpur, Khanqah Dogran" },
      { srNo: 4, station: "Okara Station", subStations: "Okara City, Depalpur, Renala Khurd, Basirpur, Hujra Shah Muqeem" },
      { srNo: 5, station: "Nankana Sahib", subStations: "Nankana Sahib City, Shahkot, Sangla Hill, Bucheki" },
      { srNo: 6, station: "Raiwind", subStations: "Raiwind City, Manga Mandi, Bhai Pheru, Phool Nagar" },
      { srNo: 7, station: "Shalimar", subStations: "Shalimar Town, Baghbanpura, Mughalpura, Dharampura" },
      { srNo: 8, station: "Kot Lakhpat", subStations: "Kot Lakhpat Industrial Area, Township, Green Town, Johar Town" },
      { srNo: 9, station: "Kahna", subStations: "Kahna Nau, Halloki, Ferozepur Road, Chungi Amar Sidhu" },
      { srNo: 10, station: "Mughalpura", subStations: "Mughalpura, Harbanspura, Canal Bank, Dharampura" },
    ],
  },
  {
    id: "GEPCO",
    name: "GEPCO Online Bill",
    url: "/gepco",
    areasServed: ["Gujranwala", "Sialkot", "Narowal", "Gujrat"],
    description: "GEPCO serves industrial and commercial hubs with stable power supply.",
    image: "/images/gepco.png",
    region: "Gujranwala",
    data: [
      { srNo: 1, station: "Gujranwala", subStations: "Gujranwala City, Kamoke, Wazirabad, Nowshera Virkan, Ghakhar Mandi" },
      { srNo: 2, station: "Sialkot", subStations: "Sialkot City, Daska, Sambrial, Pasrur, Uggoki" },
      { srNo: 3, station: "Gujrat", subStations: "Gujrat City, Lalamusa, Kharian, Sarai Alamgir, Jalalpur Jattan" },
      { srNo: 4, station: "Hafizabad", subStations: "Hafizabad City, Pindi Bhattian, Sukheke, Jalalpur Bhattian" },
      { srNo: 5, station: "Mandi Bahauddin", subStations: "Mandi Bahauddin City, Phalia, Malakwal, Qadirabad" },
      { srNo: 6, station: "Narowal", subStations: "Narowal City, Shakargarh, Zafarwal, Noor Kot" },
      { srNo: 7, station: "Daska", subStations: "Daska City, Sambrial, Pasrur, Satrah" },
      { srNo: 8, station: "Wazirabad", subStations: "Wazirabad City, Alipur Chattha, Sohdra, Rasool Nagar" },
      { srNo: 9, station: "Kamoke", subStations: "Kamoke City, Eminabad, Aroop, Sadhoke" },
      { srNo: 10, station: "Nowshera Virkan", subStations: "Nowshera Virkan City, Qila Didar Singh, Qila Mian Singh, Qila Sahib Singh" },
    ],
  },
  {
    id: "FESCO",
    name: "FESCO Online Bill",
    url: "/fesco",
    areasServed: ["Faisalabad", "Jhang", "Toba Tek Singh", "Sargodha"],
    description: "FESCO powers Pakistan's textile hub and industrial sector.",
    image: "/images/fesco.png",
    region: "Faisalabad",
    data: [
      { srNo: 1, station: "Faisalabad", subStations: "Faisalabad City, Jaranwala, Samundri, Tandlianwala, Chak Jhumra" },
      { srNo: 2, station: "Jhang", subStations: "Jhang City, Shorkot, Ahmedpur Sial, 18-Hazari" },
      { srNo: 3, station: "Toba Tek Singh", subStations: "Toba Tek Singh City, Gojra, Kamalia, Pir Mahal" },
      { srNo: 4, station: "Chiniot", subStations: "Chiniot City, Lalian, Bhowana" },
      { srNo: 5, station: "Sargodha", subStations: "Sargodha City, Bhalwal, Shahpur, Sillanwali, Sahiwal, Bhera" },
      { srNo: 6, station: "Mianwali", subStations: "Mianwali City, Isa Khel, Piplan" },
      { srNo: 7, station: "Khushab", subStations: "Khushab City, Noorpur Thal, Naushera, Quaidabad" },
      { srNo: 8, station: "Bhakkar", subStations: "	Bhakkar City, Darya Khan, Mankera, Kallur Kot" },
      { srNo: 9, station: "Sahiwal (Sargodha Division)", subStations: "Sahiwal City, Farooqabad, Sillanwali, Shah Nikdar, Chak 79-NB" },
      { srNo: 10, station: "Gojra (Toba Tek Singh Division)", subStations: "Gojra City, Chak 272-JB, Chak 296-JB, Chak 323-JB" },
    ],
  },
  {
    id: "MEPCO",
    name: "MEPCO Online Bill",
    url: "/mepco",
    areasServed: ["Multan", "Bahawalpur", "Dera Ghazi Khan", "Rajanpur"],
    description: "MEPCO serves the largest area, mixing urban and rural regions in southern Punjab.",
    image: "/images/mepco.png",
    region: "Multan",
    data: [
      { srNo: 1, station: "Multan", subStations: "Multan City, Multan Cantt, Mumtazabad, Shujabad, Moosa Pak, S.R.Alam" },
      { srNo: 2, station: "Bahawalpur", subStations: "Bahawalpur City, Ahmedpur East, Yazman, Hasilpur, Khairpur Tamewali" },
      { srNo: 3, station: "Dera Ghazi Khan", subStations: "D.G. Khan City, Kot Chutta, Taunsa, Tribal Area D.G. Khan, Fort Munro" },
      { srNo: 4, station: "Muzaffargarh", subStations: "Muzaffargarh City, Kot Addu, Chowk Munda, Alipur, Jatoi" },
      { srNo: 5, station: "Rahim Yar Khan", subStations: "Rahim Yar Khan City, Sadiqabad, Khanpur, Liaqatpur" },
      { srNo: 6, station: "Vehari", subStations: "Vehari City, Burewala, Mailsi" },
      { srNo: 7, station: "Sahiwal", subStations: "Sahiwal City, Chichawatni, Noor Shah" },
      { srNo: 8, station: "Pakpattan", subStations: "Pakpattan City, Arifwala, Qaboola" },
      { srNo: 9, station: "Khanewal", subStations: "Khanewal City, Kabirwala, Mian Channu, Jahanian" },
      { srNo: 10, station: "Layyah", subStations: "Layyah City, Karor Lal Esan, Chaubara" },
      { srNo: 11, station: "Rajanpur", subStations: "Rajanpur City, Jampur, Rojhan" },
      { srNo: 12, station: "Lodhran", subStations: "Lodhran City, Dunyapur, Kehror Pacca" },
      { srNo: 13, station: "Bahawalnagar", subStations: "Bahawalnagar City, Chishtian, Haroonabad, Fort Abbas" },
    ],
  },
  {
    id: "PESCO",
    name: "PESCO Online Bill",
    url: "/pesco",
    areasServed: ["Peshawar", "Mardan", "Swat", "Hazara"],
    description: "PESCO addresses unique challenges of distributing electricity in Khyber Pakhtunkhwa.",
    image: "/images/pesco.png",
    region: "Peshawar",
    data: [
      { srNo: 1, station: "Peshawar", subStations: "Peshawar City, Peshawar Cantt, Hayatabad, University Town, Kohat Road" },
      { srNo: 2, station: "Mardan", subStations: "Mardan City, Takht Bhai, Katlang, Rustam, Lund Khwar" },
      { srNo: 3, station: "Swat", subStations: "Mingora, Saidu Sharif, Matta, Khwazakhela, Bahrain" },
      { srNo: 4, station: "Abbottabad", subStations: "Abbottabad City, Mansehra, Haripur, Havelian, Balakot" },
      { srNo: 5, station: "Bannu", subStations: "Bannu City, Lakki Marwat, Domel, Serai Naurang, Ghoriwala" },
      { srNo: 6, station: "Dera Ismail Khan", subStations: "D.I. Khan City, Tank, Kulachi, Paroa, Paharpur" },
      { srNo: 7, station: "Kohat", subStations: "Kohat City, Hangu, Lachi, Karak, Teri" },
      { srNo: 8, station: "Charsadda", subStations: "Charsadda City, Tangi, Shabqadar, Utmanzai, Rajar" },
      { srNo: 9, station: "Nowshera", subStations: "Nowshera City, Akora Khattak, Pabbi, Jehangira, Risalpur" },
      { srNo: 10, station: "Swabi", subStations: "Swabi City, Topi, Lahor, Marghuz, Yar Hussain" },
    ],
  },
  {
    id: "HESCO",
    name: "HESCO Online Bill",
    url: "/hesco",
    areasServed: ["Hyderabad", "Jamshoro", "Thatta", "Mirpurkhas"],
    description: "HESCO ensures electricity reaches both urban centers and rural areas in Sindh.",
    image: "/images/hesco.png",
    region: "Hyderabad",
    data: [
      { srNo: 1, station: "Hyderabad", subStations: "Latifabad, Qasimabad, City, Tando Jam, Hala Naka" },
      { srNo: 2, station: "Jamshoro", subStations: "Kotri, Nooriabad, Manjhand, Sehwan, Thana Bula Khan" },
      { srNo: 3, station: "Thatta", subStations: "Makli, Mirpur Sakro, Gharo, Keti Bunder, Sujawal" },
      { srNo: 4, station: "Badin", subStations: "Digri, Jhuddo, Kot Ghulam Muhammad, Sindhri, Tando Jan Muhammad" },
      { srNo: 5, station: "Mirpurkhas", subStations: "Matli, Talhar, Tando Bago, Golarchi, Kadhan" },
      { srNo: 6, station: "Tando Allahyar", subStations: "Jhando Mari, Chamber, Nasarpur, Rashidabad, Sultanabad" },
      { srNo: 7, station: "Umerkot", subStations: "Kunri, Samaro, Pithoro, Dhoronaro, Chhor" },
      { srNo: 8, station: "Sanghar", subStations: "Shahdadpur, Sinjhoro, Tando Adam, Khipro, Jam Nawaz Ali" },
      { srNo: 9, station: "Nawabshah", subStations: "Sakrand, Daur, Qazi Ahmed, Bandhi, Jam Saheb" },
      { srNo: 10, station: "Matiari", subStations: "Hala, Saeedabad, Odero Lal, New Saeedabad, Bhitshah" },
    ],
  },
  {
    id: "QESCO",
    name: "QESCO Online Bill",
    url: "/qesco",
    areasServed: ["Quetta", "Gwadar", "Turbat", "Chaman"],
    description: "QESCO serves Balochistan, the largest province by area with sparse population.",
    image: "/images/qesco.png",
    region: "Hyderabad",
    data: [
      { srNo: 1, station: "Quetta", subStations: "Quetta City, Sariab, Brewery, Samungli, Airport Road" },
      { srNo: 2, station: "Khuzdar", subStations: "Khuzdar City, Wadh, Naal, Zehri, Ornach" },
      { srNo: 3, station: "Turbat", subStations: "Turbat City, Buleda, Tump, Hoshab, Dasht" },
      { srNo: 4, station: "Gwadar", subStations: "Gwadar City, Pasni, Jiwani, Ormara, Pishukan" },
      { srNo: 5, station: "Loralai", subStations: "Loralai City, Duki, Mekhtar, Sanjavi, Bori" },
      { srNo: 6, station: "Sibi", subStations: "Sibi City, Dhadar, Harnai, Lehri, Bhag" },
      { srNo: 7, station: "Zhob", subStations: "Zhob City, Qila Saifullah, Muslim Bagh, Sherani, Tangi" },
      { srNo: 8, station: "Chaman", subStations: "Chaman City, Qila Abdullah, Gulistan, Dobandi, Killa Saifullah" },
      { srNo: 9, station: "Panjgur", subStations: "Panjgur City, Parome, Gichk, Washap, Khudabadan" },
      { srNo: 10, station: "Kharan", subStations: "Kharan City, Basima, Nag, Mashkel, Rakhshan" },
    ],
  },
  {
    id: "SEPCO",
    name: "SEPCO Online Bill",
    url: "/sepco",
    areasServed: ["Sukkur", "Larkana", "Dadu", "Jacobabad"],
    description: "SEPCO provides electricity to agricultural and residential areas in northern Sindh.",
    image: "/images/sepco.png",
    region: "Hyderabad",
    data: [
      { srNo: 1, station: "Sukkur", subStations: "Sukkur City, Rohri, Pano Aqil, Saleh Pat, New Sukkur" },
      { srNo: 2, station: "Larkana", subStations: "Larkana City, Ratodero, Dokri, Bakrani, Naudero" },
      { srNo: 3, station: "Dadu", subStations: "Dadu City, Mehar, Khairpur Nathan Shah, Johi, Sehwan" },
      { srNo: 4, station: "Shikarpur", subStations: "Shikarpur City, Garhi Yasin, Lakhi Ghulam Shah, Khanpur, Madeji" },
      { srNo: 5, station: "Jacobabad", subStations: "Jacobabad City, Thul, Garhi Khairo, Kandhkot, Tangwani" },
      { srNo: 6, station: "Khairpur", subStations: "Khairpur City, Gambat, Sobhodero, Kot Diji, Kingri" },
      { srNo: 7, station: "Ghotki", subStations: "Ghotki City, Mirpur Mathelo, Ubauro, Daharki, Khangarh" },
      { srNo: 8, station: "Kashmore", subStations: "Kashmore City, Kandhkot, Tangwani, Ghouspur, Karampur" },
      { srNo: 9, station: "Naushahro Feroze", subStations: "Naushahro Feroze City, Moro, Kandiaro, Bhiria, Mehrabpur" },
      { srNo: 10, station: "Qambar Shahdadkot", subStations: "Qambar City, Shahdadkot, Miro Khan, Nasirabad, Warah" },
    ],
  },
  {
    id: "TESCO",
    name: "TESCO Online Bill",
    url: "/tesco",
    areasServed: ["Khyber", "Bajaur", "Mohmand", "Orakzai"],
    description: "TESCO powers the tribal areas, focusing on infrastructure improvements.",
    image: "/images/tesco.png",
    region: "Hyderabad",
    data: [
      { srNo: 1, station: "Khyber", subStations: "Jamrud, Landi Kotal, Bara, Torkham, Ali Masjid" },
      { srNo: 2, station: "Bajaur", subStations: "Khar, Nawagai, Mamund, Salarzai, Utmankhel" },
      { srNo: 3, station: "Mohmand", subStations: "Ghalanai, Ekka Ghund, Safi, Pandiali, Ambar" },
      { srNo: 4, station: "Orakzai", subStations: "Kalaya, Ghiljo, Dabori, Mishti Mela, Ferozkhel" },
      { srNo: 5, station: "Kurram", subStations: "Parachinar, Sadda, Alizai, Dogar, Shalozan" },
      { srNo: 6, station: "North Waziristan", subStations: "Miranshah, Mir Ali, Razmak, Spinwam, Dattakhel" },
      { srNo: 7, station: "South Waziristan", subStations: "Wana, Shakai, Sararogha, Ladha, Makeen" },
      { srNo: 8, station: "Frontier Regions", subStations: "FR Peshawar, FR Kohat, FR Bannu, FR Lakki Marwat, FR Dera Ismail Khan" },
      { srNo: 9, station: "FR Tank", subStations: "Jandola, Tank Bazaar, Ama Khel, Tatta Pani, Gul Imam" },
      { srNo: 10, station: "FR Dera Ismail Khan", subStations: "Darazinda, Kulachi, Gara Hayat, Chashma, Sago" },
    ],
  },
];

const CompanyDetails = () => {
  return (
    <div className="mt-8 p-2 sm:p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="mt-8 p-3 sm:p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center px-2">
          Electricity Companies in Pakistan
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-6 px-2">
          Discover the major electricity companies in Pakistan, the areas they serve, and their contribution to reliable power supply.
        </p>

        <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">
            Reliable Power for a Growing Nation
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm sm:text-base">
            <li>
              <strong>Coverage Across Pakistan:</strong> From the all cities of Lahore and Karachi to the remote areas of Balochistan and Khyber Pakhtunkhwa, these companies ensure that every household and business has access to electricity.
            </li>
            <li>
              <strong>Infrastructure Development:</strong> Continuous upgrades to transmission and distribution networks aim to reduce power outages and enhance efficiency.
            </li>
            <li>
              <strong>Customer-Centric Services:</strong> Online platforms for bill generation, payments, and support make accessing services more convenient for users.
            </li>
            <li>
              <strong>Economic Growth:</strong> By powering industries, businesses, and agriculture, these companies drive economic development and innovation across the country.
            </li>
            <li>
              <strong>Regional Impact:</strong> Each company addresses unique demands and challenges, from urban industrial hubs to rural agricultural regions, ensuring equitable distribution.
            </li>
          </ul>
        </div>

        <div className="bg-white mt-6 p-3 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">
            Building a Sustainable Future
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Together, these companies are transforming Pakistan's energy landscape. By investing in infrastructure, embracing modern technology, and focusing on sustainability, they are shaping a brighter, more connected future for all. Their contributions are not just powering homes and industries but also enabling economic and social progress across the nation.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {companies.map((company) => (
          <div key={company.id} className="p-3 sm:p-4 rounded-lg shadow-md bg-white">
            {company.image && (
              <img
                src={company.image}
                alt={`${company.name} coverage area`}
                className="w-full h-32 sm:h-40 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-base sm:text-lg font-bold text-gray-800">
              <a href={company.url} className="text-blue-500 hover:underline">
                {company.name}
              </a>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">{company.description}</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              <strong>Areas Served:</strong> {company.areasServed.join(", ")}
            </p>

            <div className="mt-6 overflow-x-auto">
              <h4 className="text-sm sm:text-md font-semibold text-gray-800 mb-4">Coverage Details for {company.region}</h4>
              <div className="min-w-full overflow-hidden">
                <table className="w-full border border-gray-300 rounded-lg shadow-md">
                  <thead className="bg-gray-100 text-gray-800">
                    <tr>
                      <th className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm">Sr No.</th>
                      <th className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm">Station</th>
                      <th className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm">Sub-Stations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {company.data.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">{row.srNo}</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm">{row.station}</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm break-words">{row.subStations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;
