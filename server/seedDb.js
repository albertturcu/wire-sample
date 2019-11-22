const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config/secrets');
const User = require('./models/user');
const Company = require('./models/company');
const Job = require('./models/job');
const Proposals = require('./models/proposal');

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const users = [
  {
    _id: '58c039018060197ca0b52d4c',
    name: 'wiresample',
    active: true,
    profile_pic: '',
    email: 'wiresample@myemail.com',
    phone_number: '123456789',
    address: 'Unkown',
    zipcode: '2200',
    salt: 'b534e078aeb6dbcd8b680a29593eb981770596cb2b7fbc8ebaf0b720d449321c',
    hash:
      'bcde22e37ada8309931acd9820249bb1c1d7fdd9482d9391776eeab3c5ba035e7ebd896547bc4ec3f0362c3ef6054223c7c140257eadf3c9693abd581686eb7b9379b3875cf8ef74421db813516081979ead12ff48acb823fa88635906bbf6d0c4ee2366ee8f5f5c01cd58bba7c1708b003ddca9076441532b759775d66bed20fae60f28433a7d35fa6942434b53a5a0cbf1ba45a2b94f0dbabade294abc60101020a20fbaed967e6acf61b64554c26db606e5ed14ea40a0ad3e721b47b90933a6e35e2ae8cf5e6c9151383f9742696ca55ce5dfaccf7c7648cfe5f21618b6ce2d27dbb57d3588f5bbce4a82fc8ae3740031fa2b0f0105242993a61be3e4c5c18f2ab8a40b578105f77ceda889f67ac9ef8e8f4f745b876b66a4058e89f209f3c4eeb34df5e7fcc144acb80f6d37aae447303bb286551d23b8fc15cb1ce76068bebbdf740a27680da10db858735df748c61e76aafbb050760ed69cbdea4ab73c4b50a870b5008965112eff70c28a36cb8aa713fbff3d57a0dd621c0ff48cf796ffeeea98b6997076bc3e4639f7e2d26ad5c1a8108e85456c59e6f098292bb57203802b418968aab8b38a23974d95d390b1ef6eeb754f931d762ae01babdb66d805b596e6afaede687f2312ddc74a4a396c1889a4bf1eaffbd7ecc37b676d4a7886148217f725d470a4ecbeb520ce2f375ab77ff66dfb3370b41d7b9b95533976',
  },
  {
    _id: '5dd55ad6125d930cf59272b1',
    name: 'deltasoldier',
    active: true,
    profile_pic: '',
    email: 'deltasoldier@myemail.com',
    phone_number: '123456789',
    address: 'Unkown',
    zipcode: '2200',
    salt: 'b534e078aeb6dbcd8b680a29593eb981770596cb2b7fbc8ebaf0b720d449321c',
    hash:
      'bcde22e37ada8309931acd9820249bb1c1d7fdd9482d9391776eeab3c5ba035e7ebd896547bc4ec3f0362c3ef6054223c7c140257eadf3c9693abd581686eb7b9379b3875cf8ef74421db813516081979ead12ff48acb823fa88635906bbf6d0c4ee2366ee8f5f5c01cd58bba7c1708b003ddca9076441532b759775d66bed20fae60f28433a7d35fa6942434b53a5a0cbf1ba45a2b94f0dbabade294abc60101020a20fbaed967e6acf61b64554c26db606e5ed14ea40a0ad3e721b47b90933a6e35e2ae8cf5e6c9151383f9742696ca55ce5dfaccf7c7648cfe5f21618b6ce2d27dbb57d3588f5bbce4a82fc8ae3740031fa2b0f0105242993a61be3e4c5c18f2ab8a40b578105f77ceda889f67ac9ef8e8f4f745b876b66a4058e89f209f3c4eeb34df5e7fcc144acb80f6d37aae447303bb286551d23b8fc15cb1ce76068bebbdf740a27680da10db858735df748c61e76aafbb050760ed69cbdea4ab73c4b50a870b5008965112eff70c28a36cb8aa713fbff3d57a0dd621c0ff48cf796ffeeea98b6997076bc3e4639f7e2d26ad5c1a8108e85456c59e6f098292bb57203802b418968aab8b38a23974d95d390b1ef6eeb754f931d762ae01babdb66d805b596e6afaede687f2312ddc74a4a396c1889a4bf1eaffbd7ecc37b676d4a7886148217f725d470a4ecbeb520ce2f375ab77ff66dfb3370b41d7b9b95533976',
  },
];

const companies = [
  {
    _id: '5dd6d2d184cc8b3dec45ec84',
    name: 'WireBoat A/S',
    lat: '55.719402',
    lng: '12.663148',
    user_id: '58c039018060197ca0b52d4c',
    logo_image_url: '',
    cvr: '1234567',
    is_paid: true,
    is_visible: true,
    is_enabled: true,
  }
];

const proposals = [
  {
    date: '',
    time: '',
    description:
      'There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.',
    negotiable: true,
    status: 'pending',
    company_id: '5dd6d2d184cc8b3dec45ec84',
    job_id: '5dd70eaca84220a6080e6f81',
  },
  {
    date: '',
    time: '',
    description:
      'I never spend much time in school but I taught ladies plenty. It’s true I hire my body out for pay, hey hey. I’ve gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it’s only hay, hey hey. I might jump an open drawbridge, or Tarzan from a vine. ’Cause I’m the unknown stuntman that makes Eastwood look so fine.',
    negotiable: true,
    status: 'pending',
    company_id: '5dd6d2d184cc8b3dec45ec84',
    job_id: '5dd70eaaa84220a6080e6f80',
  },
  {
    date: '',
    time: '',
    description:
      'Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now. ',
    negotiable: true,
    status: 'pending',
    company_id: '5dd6d2d184cc8b3dec45ec84',
    job_id: '5dd70ea8a84220a6080e6f7f',
  },
  {
    date: '',
    time: '',
    description:
      'Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah… wishing for The Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold.',
    negotiable: true,
    status: 'accepted',
    company_id: '5dd6d2d184cc8b3dec45ec84',
    job_id: '5dd70ea5a84220a6080e6f7e',
  },
  {
    date: '',
    time: '',
    description:
      '80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.',
    negotiable: true,
    status: 'accepted',
    company_id: '5dd6d2d184cc8b3dec45ec84',
    job_id: '5dd70ea1a84220a6080e6f7d',
  },
];

const jobs = [
  {
    _id: '5dd70eaca84220a6080e6f81',
    is_emergency: true,
    title: 'Broken engine',
    description: 'Broken engine',
    allow_contact_by_app: true,
    can_user_bring_boat: true,
    allow_picking_from_spot: true,
    allow_contact_by_phone: true,
    allow_contact_by_email: true,
    lat: '55.719402',
    lng: '12.663148',
    location: 'Copenhagen',
    boat_type: 'Launch',
    price: 10000,
    posted: false,
    is_done: false,
    user_id: '5dd55ad6125d930cf59272b1',
    boat_id: '5dd55ad6125d930cf59272b1',
    service_id: null,
    awarded_company_id: '5dd6d2d184cc8b3dec45ec84',
  },
  {
    _id: '5dd70eaaa84220a6080e6f80',
    is_emergency: false,
    title: 'Broken engine',
    description: 'Broken engine',
    allow_contact_by_app: true,
    can_user_bring_boat: true,
    allow_picking_from_spot: true,
    allow_contact_by_phone: true,
    allow_contact_by_email: true,
    lat: '55.719402',
    lng: '12.663148',
    location: 'Frederiskberg',
    boat_type: 'Pontoon',
    price: 10000,
    posted: false,
    is_done: false,
    user_id: '5dd55ad6125d930cf59272b1',
    boat_id: '5dd55ad6125d930cf59272b1',
    service_id: null,
    awarded_company_id: '5dd6d2d184cc8b3dec45ec84',
  },
  {
    _id: '5dd70ea8a84220a6080e6f7f',
    is_emergency: false,
    title: 'Broken engine',
    description: 'Broken engine',
    allow_contact_by_app: true,
    can_user_bring_boat: true,
    allow_picking_from_spot: true,
    allow_contact_by_phone: true,
    allow_contact_by_email: true,
    lat: '55.719402',
    lng: '12.663148',
    location: 'Klampenborg',
    boat_type: 'Sailboat',
    price: 10000,
    posted: false,
    is_done: false,
    user_id: '5dd55ad6125d930cf59272b1',
    boat_id: '5dd55ad6125d930cf59272b1',
    service_id: null,
    awarded_company_id: '5dd6d2d184cc8b3dec45ec84',
  },
  {
    _id: '5dd70ea5a84220a6080e6f7e',
    is_emergency: true,
    title: 'Broken engine',
    description: 'Broken engine',
    allow_contact_by_app: true,
    can_user_bring_boat: true,
    allow_picking_from_spot: true,
    allow_contact_by_phone: true,
    allow_contact_by_email: true,
    lat: '55.719402',
    lng: '12.663148',
    location: 'Klampenborg',
    boat_type: 'Ferry',
    price: 10000,
    posted: false,
    is_done: false,
    user_id: '5dd55ad6125d930cf59272b1',
    boat_id: '5dd55ad6125d930cf59272b1',
    service_id: null,
    awarded_company_id: '5dd6d2d184cc8b3dec45ec84',
  },
  {
    _id: '5dd70ea1a84220a6080e6f7d',
    is_emergency: false,
    title: 'Broken engine',
    description: 'Broken engine',
    allow_contact_by_app: true,
    can_user_bring_boat: true,
    allow_picking_from_spot: true,
    allow_contact_by_phone: true,
    allow_contact_by_email: true,
    lat: '55.719402',
    lng: '12.663148',
    location: 'Frederiskberg',
    boat_type: 'Motorboat',
    price: 10000,
    posted: false,
    is_done: false,
    user_id: '5dd55ad6125d930cf59272b1',
    boat_id: '5dd55ad6125d930cf59272b1',
    service_id: null,
    awarded_company_id: '5dd6d2d184cc8b3dec45ec84',
  },
];

async function dropDatabase() {
  console.log('Removing Database collections');
  await User.deleteMany();
  await Company.deleteMany();
  await Job.deleteMany();
  await Proposals.deleteMany();
  console.log('Success!');
}

async function seedDatabase() {
  console.log('Seeding database..');
  try {
    await User.insertMany(users);
    await Company.insertMany(companies);
    await Job.insertMany(jobs);
    await Proposals.insertMany(proposals);
    console.log('Success!');
  } catch (error) {
    console.log('Error:' + error);
  }
}

async function seed() {
  await dropDatabase();
  await seedDatabase();
  process.exit(0);
}

seed();
