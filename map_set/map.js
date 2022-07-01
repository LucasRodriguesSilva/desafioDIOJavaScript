function getAdmins(map) {
  let admin = [];

  for([key, value] of map) {
    if(value === 'Admin') {
      admin.push(key);
    }
  }

  return admin;
}

const usuarios = new Map();
  usuarios.set('João', 'User');
  usuarios.set('Leonardo', 'User');
  usuarios.set('Lucas', 'Admin');
  usuarios.set('Bruno', 'Admin');

console.log(getAdmins(usuarios));