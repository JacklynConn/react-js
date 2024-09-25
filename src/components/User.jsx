
const names = ['John', 'Paul', 'George', 'Ringo'];

const userNames = names.map((n) => <h3>{n}</h3>);

const User = () => {
  return <h3>{userNames}</h3>;
};

export default User