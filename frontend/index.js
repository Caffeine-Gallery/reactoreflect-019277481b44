import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const name = await backend.getName();
    const age = await backend.getAge();
    const occupation = await backend.getOccupation();

    document.getElementById('name').textContent = `Name: ${name}`;
    document.getElementById('age').textContent = `Age: ${age}`;
    document.getElementById('occupation').textContent = `Occupation: ${occupation}`;

    document.getElementById('moreInfo').addEventListener('click', async () => {
      const fullInfo = await backend.getFullInfo();
      const fullInfoElement = document.getElementById('fullInfo');
      fullInfoElement.textContent = fullInfo;
      fullInfoElement.style.display = 'block';
      document.getElementById('moreInfo').style.display = 'none';
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
