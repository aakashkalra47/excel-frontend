import axios from 'axios';

export const uploadFile = async (formData) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:5000/upload',
    data: formData
  });

  return response;
};
