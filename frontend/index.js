import { AuthClient } from "@dfinity/auth-client";
import { backend } from 'declarations/backend';

let authClient;

const init = async () => {
  authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    handleAuthenticated();
  }
};

const handleAuthenticated = async () => {
  document.getElementById('loginButton').style.display = 'none';
  document.getElementById('whoAmI').style.display = 'block';
};

document.addEventListener('DOMContentLoaded', async () => {
  await init();

  document.getElementById('loginButton').addEventListener('click', async () => {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: handleAuthenticated,
    });
  });

  document.getElementById('whoAmI').addEventListener('click', async () => {
    try {
      const whoAmI = await backend.getWhoAmI();
      const principalIdElement = document.getElementById('principalId');
      principalIdElement.textContent = whoAmI;
      principalIdElement.style.display = 'block';
    } catch (error) {
      console.error('Error fetching principal ID:', error);
    }
  });
});
