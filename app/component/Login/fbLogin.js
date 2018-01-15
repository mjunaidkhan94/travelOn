// import { Container } from 'native-base'; 

// const FBSDK = require('react-native-fbsdk');
// const {
//   LoginButton,
//   AccessToken
// } = FBSDK;

// var Login = React.createClass({
//   render: function() {
//     return (
//       <Container>
//         <LoginButton
//           publishPermissions={["publish_actions"]}
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 alert("Login failed with error: " + result.error);
//               } else if (result.isCancelled) {
//                 alert("Login was cancelled");
//               } else {
//                 alert("Login was successful with permissions: " + result.grantedPermissions)
//               }
//             }
//           }
//           onLogoutFinished={() => alert("User logged out")}/>
//       </Container>
//     );
//   }
// });