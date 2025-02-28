const { MongoClient } = require('mongodb');

async function initDB() {
  const uri = 'mongodb://localhost:27018';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('parse');
    // Create user
    await db.command({
      createUser: 'parse',
      pwd: '2025parse',
      roles: [{ role: 'readWrite', db: 'parse' }],
    });
    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await client.close();
  }
}

initDB();
