const ImageFile = ({ url }) => {
  return (
    <>
      <div>
        <img src={url} alt="Image" width={300} height={300} />
      </div>
    </>
  );
};

export default ImageFile;
