print('Start #################################################################');

db = db.getSiblingDB('parse');

db.createUser({
  user: 'parse',
  pwd: '2025parse',
  roles: [
    {
      role: 'readWrite',
      db: 'parse'
    }
  ]
});

print('END #################################################################');