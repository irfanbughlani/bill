export interface Company {
  id: string;
  name: string;
  fullName: string;
  description: string;
  endpoint: string;
  colorClass: {
    from: string;
    to: string;
    button: string;
    buttonHover: string;
    icon: string;
  };
  region: string;
}

export const companies: Company[] = [
  {
    id: 'LESCO',
    name: 'LESCO',
    fullName: 'Lahore Electric Supply Company',
    description: 'Serving the greater Lahore region with reliable electricity distribution.',
    endpoint: 'https://bill.pitc.com.pk/lescobill/general?refno=',
    colorClass: {
      from: 'from-blue-600',
      to: 'to-blue-700',
      button: 'bg-blue-600',
      buttonHover: 'hover:bg-blue-700',
      icon: 'text-blue-600'
    },
    region: 'Lahore Division'
  },
  {
    id: 'FESCO',
    name: 'FESCO',
    fullName: 'Faisalabad Electric Supply Company',
    description: 'Providing power to Faisalabad and surrounding districts.',
    endpoint: 'https://bill.pitc.com.pk/fescobill/general?refno=',
    colorClass: {
      from: 'from-green-600',
      to: 'to-green-700',
      button: 'bg-green-600',
      buttonHover: 'hover:bg-green-700',
      icon: 'text-green-600'
    },
    region: 'Faisalabad Division'
  },
  {
    id: 'MEPCO',
    name: 'MEPCO',
    fullName: 'Multan Electric Power Company',
    description: 'Serving the southern Punjab region with efficient power distribution.',
    endpoint: 'https://bill.pitc.com.pk/mepcobill/general?refno=',
    colorClass: {
      from: 'from-purple-600',
      to: 'to-purple-700',
      button: 'bg-purple-600',
      buttonHover: 'hover:bg-purple-700',
      icon: 'text-purple-600'
    },
    region: 'Multan Division'
  },
  {
    id: 'HESCO',
    name: 'HESCO',
    fullName: 'Hyderabad Electric Supply Company',
    description: 'Powering the Hyderabad region with reliable electricity services.',
    endpoint: 'https://bill.pitc.com.pk/hescobill/general?refno=',
    colorClass: {
      from: 'from-red-600',
      to: 'to-red-700',
      button: 'bg-red-600',
      buttonHover: 'hover:bg-red-700',
      icon: 'text-red-600'
    },
    region: 'Hyderabad Division'
  },
  {
    id: 'PESCO',
    name: 'PESCO',
    fullName: 'Peshawar Electric Supply Company',
    description: 'Delivering electricity to the Khyber Pakhtunkhwa region.',
    endpoint: 'https://bill.pitc.com.pk/pescobill/general?refno=',
    colorClass: {
      from: 'from-amber-600',
      to: 'to-amber-700',
      button: 'bg-amber-600',
      buttonHover: 'hover:bg-amber-700',
      icon: 'text-amber-600'
    },
    region: 'Peshawar Division'
  },
  {
    id: 'GEPCO',
    name: 'GEPCO',
    fullName: 'Gujranwala Electric Power Company',
    description: 'Serving the Gujranwala division with quality power supply.',
    endpoint: 'https://bill.pitc.com.pk/gepcobill/general?refno=',
    colorClass: {
      from: 'from-orange-600',
      to: 'to-orange-700',
      button: 'bg-orange-600',
      buttonHover: 'hover:bg-orange-700',
      icon: 'text-orange-600'
    },
    region: 'Gujranwala Division'
  },
  {
    id: 'SEPCO',
    name: 'SEPCO',
    fullName: 'Sukkur Electric Power Company',
    description: 'Providing electricity to the Sukkur region and surrounding areas.',
    endpoint: 'https://bill.pitc.com.pk/sepcobill/general?refno=',
    colorClass: {
      from: 'from-teal-600',
      to: 'to-teal-700',
      button: 'bg-teal-600',
      buttonHover: 'hover:bg-teal-700',
      icon: 'text-teal-600'
    },
    region: 'Sukkur Division'
  },
  {
    id: 'QESCO',
    name: 'QESCO',
    fullName: 'Quetta Electric Supply Company',
    description: 'Powering Balochistan with reliable electricity distribution.',
    endpoint: 'https://bill.pitc.com.pk/qescobill/general?refno=',
    colorClass: {
      from: 'from-indigo-600',
      to: 'to-indigo-700',
      button: 'bg-indigo-600',
      buttonHover: 'hover:bg-indigo-700',
      icon: 'text-indigo-600'
    },
    region: 'Quetta Division'
  },
   {
    id: 'IESCO',
    name: 'IESCO',
    fullName: 'ISLAMABAD Electric Supply Company',
    description: 'Powering Islamabad with reliable electricity distribution.',
    endpoint: 'https://bill.pitc.com.pk/iescobill/general?refno=',
    colorClass: {
      from: 'from-indigo-600',
      to: 'to-indigo-700',
      button: 'bg-indigo-600',
      buttonHover: 'hover:bg-indigo-700',
      icon: 'text-indigo-600'
    },
    region: 'Islamabad Division'
  },
];
