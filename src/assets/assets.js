import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import profile_image from "./profile-image.jpg";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import title_logo from "./healthcare.png";
import title_icon from "./title-icon.webp";
import web_icon from "./hospital.png";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  title_logo,
  title_icon,
  profile_image,
  web_icon,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Bhagya Varadhan",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Bhagya Varadhan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Bhagya Varadhan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 100,
    address: {
      line1: "17th Cross, GST Road",
      line2: "Circle, Ring Road, Chrompet",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Thangam Sudhan",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Thangam Sudhan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.Thangam Sudhan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 200,
    address: {
      line1: "12th Cross, MIC College",
      line2: "Dam Ring Road, East Tambaram",
    },
  },
  {
    _id: "doc3",
    name: "Dr.Chandra Mohan",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Chandra Mohan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Chandra Mohan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 30,
    address: {
      line1: "7th Cross Street, T. Nagar",
      line2: " Ranganathan Lane, Chennai",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christu Das",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Christu Das has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Christu Das has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 100,
    address: {
      line1: "3rd Block, Besant Nagar",
      line2: "Elliots Beach Road, Chennai",
    },
  },
  {
    _id: "doc5",
    name: "Dr.Chithra Devi ",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Chithra Devi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Chithra Devi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: " 2nd Avenue, Velachery",
      line2: " Gandhi Road, Chennai",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Leo Das",
    image: doc6,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Leo Das has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Leo Das has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 150,
    address: {
      line1: "1st Main Road, Adyar",
      line2: "Kasturibai Nagar, Chennai",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Vetri Maran",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Vetri Maran has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Vetri Maran has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 350,
    address: {
      line1: "10th Street, Kodambakkam",
      line2: "Arcot Road, Chennai",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Edjer Nelson",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr.  Edjer Nelson has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.  Edjer Nelson has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "6th Avenue, Tambaram",
      line2: "East Coast Road, Chennai",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Aishwarya Rajesh",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Aishwarya Rajesh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Aishwarya Rajesh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 150,
    address: {
      line1: "12th Avenue, Ashok Nagar",
      line2: "2nd Street, Jawahar Colony, Chennai",
    },
  },
  {
    _id: "doc10",
    name: "Dr. John Paul",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. John Paul has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. John Paul has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 120,
    address: {
      line1: "4th Block, Mylapore",
      line2: "Luz Church Road, Chennai",
    },
  },
  {
    _id: "doc11",
    name: "Dr.Indhu Rebacca",
    image: doc11,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Indhu Rebacca has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Indhu Rebacca has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 250,
    address: {
      line1: "8th Street, Guindy",
      line2: "Race Course Road, Chennai",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Punith Kumar",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Punith Kumar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Punith Kumar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 250,
    address: {
      line1: "11th Main, Perungudi",
      line2: "OMR Road, Chennai",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Elizabeth Christina",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr.  Elizabeth Christina has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr.  Elizabeth Christina has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 100,
    address: {
      line1: "2nd Lane, Egmore",
      line2: "Pantheon Road, Chennai",
    },
  },
  {
    _id: "doc14",
    name: "Dr.Saravana Perumal",
    image: doc14,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Saravana Perumal has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Saravana Perumal has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 150,
    address: {
      line1: "14th Cross, Teynampet",
      line2: "Anna Salai, Chennai",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Manjula Pandiyan",
    image: doc15,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Manjula Pandiyan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Manjula Pandiyan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 200,
    address: {
      line1: "3rd Avenue, Royapettah",
      line2: "Whites Road, Chennai",
    },
  },
];
