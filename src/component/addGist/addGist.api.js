const IPFS = require('ipfs');

export async function addGistToIPFS(data) {
  const node = await IPFS.create();
  const dataAdded = await node.add({
    path: 'gistData.txt',
    content: JSON.stringify(data)
  });

  try {
    await node.stop();
  } catch (err) {
    console.log(err);
  }
  return dataAdded[0].hash;
}
