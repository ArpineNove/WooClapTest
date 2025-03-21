export const sendToSlack = async (message: string, webhookUrl: string) => {
  try {
    const response = await fetch(webhookUrl, {
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
