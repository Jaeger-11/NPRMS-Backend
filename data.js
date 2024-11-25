const identities = [
  {
    NIN: 12345678901,
    firstName: "Chinedu",
    lastName: "Okafor",
    middleName: "Ifeanyi",
    DOB: new Date('1990-01-01'),
    address: "12 Lagos Road, Ikeja, Lagos",
    state: "Lagos",
    LGA: "Ikeja",
    height: 175,
    gender: "Male"
  },
  {
    NIN: 98765432101,
    firstName: "Amina",
    lastName: "Bello",
    middleName: "Zainab",
    DOB: new Date('1985-05-15'),
    address: "45 Kaduna Street, Garki, Abuja",
    state: "FCT",
    LGA: "Garki",
    height: 165,
    gender: "Female"
  },
  {
    NIN: 11223344556,
    firstName: "Funke",
    lastName: "Adeniyi",
    middleName: "Oluwakemi",
    DOB: new Date('1992-03-10'),
    address: "78 Opebi Road, Ikeja, Lagos",
    state: "Lagos",
    LGA: "Ikeja",
    height: 160,
    gender: "Female"
  },
  {
    NIN: 22334455667,
    firstName: "Musa",
    lastName: "Ibrahim",
    middleName: "Abdullahi",
    DOB: new Date('1988-12-12'),
    address: "32 Zaria Road, Tudun Wada, Kaduna",
    state: "Kaduna",
    LGA: "Tudun Wada",
    height: 170,
    gender: "Male"
  },
  {
    NIN: 33445566778,
    firstName: "Ngozi",
    lastName: "Nwankwo",
    middleName: "Amaka",
    DOB: new Date('1995-06-20'),
    address: "50 Aba Road, Umuahia, Abia",
    state: "Abia",
    LGA: "Umuahia North",
    height: 168,
    gender: "Female"
  },
  {
    NIN: 44556677889,
    firstName: "Bola",
    lastName: "Adetayo",
    middleName: "Kehinde",
    DOB: new Date('1983-08-22'),
    address: "90 Oyo Road, Ibadan North, Oyo",
    state: "Oyo",
    LGA: "Ibadan North",
    height: 178,
    gender: "Male"
  },
  {
    NIN: 55667788990,
    firstName: "Hauwa",
    lastName: "Usman",
    middleName: "Aisha",
    DOB: new Date('1991-09-15'),
    address: "18 Kano Road, Gwale, Kano",
    state: "Kano",
    LGA: "Gwale",
    height: 162,
    gender: "Female"
  },
  {
    NIN: 66778899001,
    firstName: "Emeka",
    lastName: "Iheanacho",
    middleName: "Chukwuemeka",
    DOB: new Date('1987-11-11'),
    address: "25 Owerri Road, Owerri, Imo",
    state: "Imo",
    LGA: "Owerri Municipal",
    height: 173,
    gender: "Male"
  },
  {
    NIN: 77889900112,
    firstName: "Fatima",
    lastName: "Ahmed",
    middleName: "Maryam",
    DOB: new Date('1994-03-07'),
    address: "60 Minna Road, Bosso, Niger",
    state: "Niger",
    LGA: "Bosso",
    height: 165,
    gender: "Female"
  },
  {
    NIN: 88990011223,
    firstName: "Uche",
    lastName: "Obi",
    middleName: "Ikenna",
    DOB: new Date('1989-04-14'),
    address: "77 Enugu Road, Nsukka, Enugu",
    state: "Enugu",
    LGA: "Nsukka",
    height: 180,
    gender: "Male"
  }
];


const officers = [
  {
    NIN: "12345678901",
    forceNo: "654321",
    firstName: "Chinedu",
    lastName: "Okafor",
    middleName: "Ifeanyi",
    gender: "Male",
    state: "Lagos",
    LGA: "Ikeja",
    DOB: new Date('1990-01-01'),
    dateOfEmployment: new Date('2015-06-15'),
    currentRank: "Superintendent",
    stateOfAssignment: "Lagos",
    PPA: {
      state: "Lagos",
      LGA: "Ikeja",
      station: "Ikeja Police Station",
      department: "Criminal Investigation",
      specialty: "Cyber Crime"
    },
    achievements: ["Awarded Best Officer of the Year 2018"],
    contact: {
      email: "chinedu.okafor@example.com",
      phoneNumber: "08012345678"
    }
  },
  {
    NIN: "98765432101",
    forceNo: "123456",
    firstName: "Amina",
    lastName: "Bello",
    middleName: "Zainab",
    gender: "Female",
    state: "FCT",
    LGA: "Garki",
    DOB: new Date('1985-05-15'),
    dateOfEmployment: new Date('2010-09-01'),
    currentRank: "Chief Superintendent",
    stateOfAssignment: "FCT",
    PPA: {
      state: "FCT",
      LGA: "Garki",
      station: "Garki Police Station",
      department: "Operations",
      specialty: "Road Safety"
    },
    achievements: ["Implemented new traffic management system"],
    contact: {
      email: "amina.bello@example.com",
      phoneNumber: "08023456789"
    }
  },
  {
    NIN: "11223344556",
    forceNo: "789012",
    firstName: "Funke",
    lastName: "Adeniyi",
    middleName: "Oluwakemi",
    gender: "Female",
    state: "Lagos",
    LGA: "Surulere",
    DOB: new Date('1992-03-10'),
    dateOfEmployment: new Date('2017-02-20'),
    currentRank: "Assistant Superintendent",
    stateOfAssignment: "Lagos",
    PPA: {
      state: "Lagos",
      LGA: "Surulere",
      station: "Surulere Police Station",
      department: "Training",
      specialty: "Youth Engagement"
    },
    achievements: ["Organized community outreach programs"],
    contact: {
      email: "funke.adeniyi@example.com",
      phoneNumber: "08034567890"
    }
  },
  {
    NIN: "22334455667",
    forceNo: "345678",
    firstName: "Musa",
    lastName: "Ibrahim",
    middleName: "Abdullahi",
    gender: "Male",
    state: "Kaduna",
    LGA: "Tudun Wada",
    DOB: new Date('1988-12-12'),
    dateOfEmployment: new Date('2013-11-25'),
    currentRank: "Deputy Superintendent",
    stateOfAssignment: "Kaduna",
    PPA: {
      state: "Kaduna",
      LGA: "Tudun Wada",
      station: "Tudun Wada Police Station",
      department: "Criminal Investigation",
      specialty: "Forensics"
    },
    achievements: ["Solved 50+ homicide cases"],
    contact: {
      email: "musa.ibrahim@example.com",
      phoneNumber: "08045678901"
    }
  },
  {
    NIN: "33445566778",
    forceNo: "567890",
    firstName: "Ngozi",
    lastName: "Nwankwo",
    middleName: "Amaka",
    gender: "Female",
    state: "Abia",
    LGA: "Umuahia North",
    DOB: new Date('1995-06-20'),
    dateOfEmployment: new Date('2018-08-15'),
    currentRank: "Inspector",
    stateOfAssignment: "Abia",
    PPA: {
      state: "Abia",
      LGA: "Umuahia North",
      station: "Umuahia Police Station",
      department: "Operations",
      specialty: "Robbery Investigation"
    },
    achievements: ["Reduced robbery incidents by 30%"],
    contact: {
      email: "ngozi.nwankwo@example.com",
      phoneNumber: "08056789012"
    }
  },
  {
    NIN: "44556677889",
    forceNo: "098765",
    firstName: "Bola",
    lastName: "Adetayo",
    middleName: "Kehinde",
    gender: "Male",
    state: "Oyo",
    LGA: "Ibadan North",
    DOB: new Date('1983-08-22'),
    dateOfEmployment: new Date('2009-03-10'),
    currentRank: "Chief Inspector",
    stateOfAssignment: "Oyo",
    PPA: {
      state: "Oyo",
      LGA: "Ibadan North",
      station: "Ibadan Police Station",
      department: "Intelligence Unit",
      specialty: "Counter-Terrorism"
    },
    achievements: ["Foiled multiple terrorist plots"],
    contact: {
      email: "bola.adetayo@example.com",
      phoneNumber: "08067890123"
    }
  },
  {
    NIN: "55667788990",
    forceNo: "234567",
    firstName: "Hauwa",
    lastName: "Usman",
    middleName: "Aisha",
    gender: "Female",
    state: "Kano",
    LGA: "Gwale",
    DOB: new Date('1991-09-15'),
    dateOfEmployment: new Date('2016-01-05'),
    currentRank: "Assistant Commissioner",
    stateOfAssignment: "Kano",
    PPA: {
      state: "Kano",
      LGA: "Gwale",
      station: "Gwale Police Station",
      department: "Information and Communication Technology",
      specialty: "Digital Forensics"
    },
    achievements: ["Led major cybercrime investigations"],
    contact: {
      email: "hauwa.usman@example.com",
      phoneNumber: "08078901234"
    }
  },
  {
    NIN: "66778899001",
    forceNo: "345678",
    firstName: "Emeka",
    lastName: "Iheanacho",
    middleName: "Chukwuemeka",
    gender: "Male",
    state: "Imo",
    LGA: "Owerri Municipal",
    DOB: new Date('1987-11-11'),
    dateOfEmployment: new Date('2012-05-30'),
    currentRank: "Deputy Commissioner",
    stateOfAssignment: "Imo",
    PPA: {
      state: "Imo",
      LGA: "Owerri Municipal",
      station: "Owerri Police Station",
      department: "Operations",
      specialty: "Hostage Negotiation"
    },
    achievements: ["Resolved high-profile kidnapping cases"],
    contact: {
      email: "emeka.iheanacho@example.com",
      phoneNumber: "08089012345"
    }
  },
  {
    NIN: "77889900112",
    forceNo: "456789",
    firstName: "Fatima",
    lastName: "Ahmed",
    middleName: "Maryam",
    gender: "Female",
    state: "Niger",
    LGA: "Bosso",
    DOB: new Date('1994-03-07'),
    dateOfEmployment: new Date('2019-09-23'),
    currentRank: "Superintendent",
    stateOfAssignment: "Niger",
    PPA: {
      state: "Niger",
      LGA: "Bosso",
      station: "Bosso Police Station",
      department: "Criminal Investigation",
      specialty: "Victim Support"
    },
    achievements: ["Rescued numerous trafficking victims"],
    contact: {
      email: "fatima.ahmed@example.com",
      phoneNumber: "08090123456"
    }
  },
  {
    NIN: "88990011223",
    forceNo: "567890",
    firstName: "Uche",
    lastName: "Obi",
    middleName: "Ikenna",
    gender: "Male",
    state: "Enugu",
    LGA: "Nsukka",
    DOB: new Date('1989-04-14'),
    dateOfEmployment: new Date('2014-07-18'),
    currentRank: "Chief Superintendent",
    stateOfAssignment: "Enugu",
    PPA: {
      state: "Enugu",
      LGA: "Nsukka",
      station: "Nsukka Police Station",
      department: "Research and Planning",
      specialty: "Narcotics Investigation"
    },
    achievements: ["Led significant drug busts"],
    contact: {
      email: "uche.obi@example.com",
      phoneNumber: "08101234567"
    }
  }
];

module.exports = {identities, officers};