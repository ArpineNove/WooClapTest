export const generateSlackMessage = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  sector: string;
  job: string;
  organization: string;
  establishment: string;
}): string => {
  return `New contact form submission:
  - First Name: ${formData.firstName}
  - Last Name: ${formData.lastName}
  - Email: ${formData.email}
  - Sector: ${formData.sector}
  - Job: ${formData.job}
  - Organization: ${formData.organization}
  - Establishment: ${formData.establishment}`;
};

export const sendToSlack = async (message: string, webhookUrl: string) => {
  if (!webhookUrl) throw new Error('Webhook URL is required');
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message,
      }),
    });

    return 'Your slack message was sent';
  } catch (error) {
    return error as Error;
  }
};

export async function sendCyphMessage(message: string) {
  const response = await fetch('/api/sendMessageToCyph', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();

  if (data.cyphLink) {
    return data.cyphLink;
  } else {
    return '';
  }
}
