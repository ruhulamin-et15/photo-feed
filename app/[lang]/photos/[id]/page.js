import PhotoDetails from "@/components/PhotoDetails";

const SinglePhotoPage = async ({ params: { id, lang } }) => {
  return <PhotoDetails id={id} lang={lang} />;
};

export default SinglePhotoPage;
