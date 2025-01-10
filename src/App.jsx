import './App.css'

const data = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Laura",
        "last": "Woods"
      },
      "location": {
        "street": {
          "number": 2479,
          "name": "Henry Street"
        },
        "city": "Blessington",
        "state": "Wexford",
        "country": "Ireland",
        "postcode": 78276,
        "coordinates": {
          "latitude": "2.0565",
          "longitude": "95.2422"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "laura.woods@example.com",
      "login": {
        "uuid": "9f07341f-c7e6-45b7-bab0-af6de5a4582d",
        "username": "angryostrich988",
        "password": "racers",
        "salt": "B5ywSDUM",
        "md5": "2eefb6307df2a5fb1f91c6b968dc905b",
        "sha1": "33cbf1e97a31e14c87fb18c481d1f6d958c76cbd",
        "sha256": "83e0c89668c8b6131df0c70fc4bb9abb8831e0ff97a0a29cdfa3949dd5afd491"
      },
      "dob": {
        "date": "1967-07-23T09:18:33.666Z",
        "age": 57
      },
      "registered": {
        "date": "2018-10-18T04:05:51.990Z",
        "age": 6
      },
      "phone": "031-623-5189",
      "cell": "081-807-8083",
      "id": {
        "name": "PPS",
        "value": "1101776T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
      },
      "nat": "IE"
    }
  ],
  "info": {
    "seed": "abc",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

const firsName = data.results[0].name.first
const lastName = data.results[0].name.last
const gender = data.results[0].gender
const phone = data.results[0].phone
const picture = data.results[0].picture.large
console.log(firsName, lastName, gender, phone, picture);



function App() {
  return (
    <div className="lg:w-[350px] md:w-[350px] w-[250px] rounded-2xl p-6 shadow-lg bg-[#18181B] md:p-8">
      <div className="flex flex-col items-center justify-center space-y-6">
        <img src={picture} alt="user-image" className='rounded-full' />
        <div className='flex gap-3'>
          <h6 className="text-center text= font-medium text-white">{firsName}</h6>
          <h6 className="text-center text= font-medium text-white">{lastName}</h6>
        </div>
        <div className='text-white font-medium text-base space-y-5'>
          <p>Gender: {gender}</p>
          <p>Phone: {phone}</p>
        </div>
      </div>
    </div>
  )
}

export default App
