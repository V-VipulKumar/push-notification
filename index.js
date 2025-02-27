<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Push Notification Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Push Notification Example</h1>
  <button id="enable-notifications">Enable Notifications</button>
  
  <!-- Firebase SDK Scripts -->
  <script src="https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging.js"></script>
  
  <!-- Your Firebase Config File -->
  <script src="firebase-config.js"></script>

  <!-- Main JS File with type="module" -->
  <script type="module" src="index.js"></script>
</body>
</html>
