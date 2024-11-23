const User = require("./Models/User")

const usersArray = [
  { username: 'ahmed', email: 'ahmed@gmail.com', age: 28, password: 'ahmed' },
  { username: 'walid', email: 'walid@gmail.com', age: 22, password: 'walid', role: 'admin' },
];

  
  const populate = () => {
  User.insertMany(usersArray)
    .then((result) => {
      console.log('Documents inserted successfully:', result);
    })
    .catch((error) => {
      console.error('Error inserting documents:', error);
    })
}

module.exports = populate