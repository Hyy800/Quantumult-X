/*
Moises-音乐人应用
*
[rewrite_local]
^https:\/\/api\.moises\.ai\/graphql url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/Moises.js

[mitm]
hostname = api.moises.ai
*/

var hyy = JSON.parse($response.body);

hyy.data.user.subscription = { 
  ...hyy.data.user.subscription,
  "isPremium": true,
  "details": {
    ...hyy.data.user.subscription.details,
    "providerGateway": "Apple Pay",
    "providerName": "Apple Subscription Service",
    "planCycle": "lifetime"
  },
  "isPro": true,
  "availableCredits": 999,
  "plan": "Pro",
  "subscriptionType": "individual",
  "__typename": "UserSubscription"
};

$done({ body: JSON.stringify(hyy) });
