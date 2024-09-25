
const names = ['John', 'Paul', 'George', 'Ringo', 'Navy'];

const User = () => {
  return (
    <div>
        {names.map((n) => <h3>{n}</h3>)}
    </div>
  );
};

export default User