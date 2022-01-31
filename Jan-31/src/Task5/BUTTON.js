const BUTTON = ({ message }) => {
  return (
    <>
      <button
        onClick={() => {
          alert(message + "is Clicked");
        }}
      >
        {message}
      </button>
    </>
  );
};

export default BUTTON;
