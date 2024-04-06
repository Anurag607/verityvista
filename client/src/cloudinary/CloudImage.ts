import axios from "axios";

export const CloudImage = async (
  form_data: any,
) => {
  const cloudinary_url = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const config = {
    onUploadProgress: function (progressEvent: any) {
      let percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(percentCompleted);
    },
  };

  try {
    const { data } = await axios.post(`${cloudinary_url}`, form_data, config);
    console.log(data)

    const { public_url, secure_url } = data;
    console.log(public_url, secure_url)
    return secure_url;
  } catch (err) {
    console.log(err);
  }
};
