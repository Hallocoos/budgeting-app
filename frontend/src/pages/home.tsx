import React from 'react';

// interface HomeProps {
//   token: string;
//   username?: string;
//   email?: string;
// }

function Home(props: any) {

  return (
    <div>
      <h1>JWT: {props.token.token}</h1>
    </div>
  )
}

export default Home;